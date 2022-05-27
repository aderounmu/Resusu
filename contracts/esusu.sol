// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract Esusu {


    // VARIABLES

    // track the groupcount and userCount
    uint public groupCount = 0;
    uint public userCount = 0;

    // create a list of groups and users
    Group[]public groupList;
    EsusuUser[] public userList;

    // create the admin (owner)
    // address payable userAdmin;
    struct AdminOwner {
        address payable adminAddress;
        uint adminBalance;
        uint adminNextPaymentAmount;
    }

    // create a user
    struct EsusuUser {
        address payable userAddress;
        uint userBalance;
    }

    // create a groupMember
    struct GroupMember {
        address payable userAddress;
        uint nextPaymentDate;
        uint nextPaymentAmount;
        uint lastPaymentAmount;
        uint[] completedDonationRounds;
    }

    // create a group
    struct Group {
        uint id;
        string groupName;
        uint groupBuyInAmount;
        address payable groupCoordinator;
        uint groupBalance;
        uint groupActivationTime;
    }

    // create a donation
    struct GroupDonation {
        Group group;
        uint donationRound;
        uint donationStartTime;
        uint donationEndTime;
        uint latePaymentStartTime;
        uint latePaymentEndTime;
    }



    // CONSTRUCTOR WITH MAPPING OF ADDRESS TO ADMIN

    // mapping between groupId and donation rounds
    mapping (uint => GroupDonation[]) groupDonations;

    // create a mapping between groups and groupmembers (name)
    mapping (string => GroupMember[]) groupinfo;

    // create a mapping between groups and groupmembers (id)
    mapping (uint => GroupMember[]) groupinfo_i;

    // mapping between group id and list of groupmembers
    mapping (uint => GroupMember[]) groupMemberDict;

    // mapping between group index and group
    mapping (uint => Group) groupDict;

    // mapping between address and groupmembers
    mapping (address => Group[]) userGroups;

    // mapping between user profile and user address
    mapping (address => EsusuUser) userProfile;


    // EVENTS
    event createGroupEvent(address _groupCoordinator, Group _group, uint cbalance);
    event newGroupMemberEvent(address _groupMember, Group _group, uint cbalance);
    event groupActivationEvent(Group _group, uint _groupActivationTime, uint cbalance);
    event payGroupMemberEvent(Group _group, GroupMember _groupMember, uint _paymentAmount, uint _paymentTime, uint cbalance);
    event userWithdrawalEvent(EsusuUser _user, uint _withdrawalAmount, uint _withdrawalTime, uint cbalance);
    event createUserProfileEvent(address _userAddress, EsusuUser _userProfile, uint _userCreationTime, uint cbalance);




    // FUNCTIONS

    function getUserProfile() public view returns(EsusuUser memory) {
        require(userProfile[msg.sender].userAddress == msg.sender, "Create an EsusuUser account to view profile");
        
        EsusuUser storage userprofile = userProfile[msg.sender];
        return userprofile;
    }

    function getUserGroups() public view returns(Group[] memory) {
        require(userProfile[msg.sender].userAddress == msg.sender, "Create an EsusuUser account to access this functionality");

        Group[] storage usergroups = userGroups[msg.sender];
        return usergroups;
    }

    function createUserProfile() public {

        require(userProfile[msg.sender].userAddress != msg.sender, "You are already a user");

        EsusuUser memory userprofile = EsusuUser(payable(msg.sender), 0);
        userList.push(userprofile);
        userCount += 1;
        userProfile[msg.sender] = userprofile;


        // subscribe to events
        emit createUserProfileEvent(msg.sender, userprofile, block.timestamp, address(this).balance);
    }

    function createGroup(string memory groupName, uint groupBuyInAmount) payable public {

        // validator (how do i get buyinamount == msg.value
        require(groupBuyInAmount >= 5, "error" );
        require(msg.value >= 5 ether, "or");
        require(userProfile[msg.sender].userAddress == msg.sender, "Create an EsusuUser account to create a group");
        

        if(!payable(msg.sender).send(groupBuyInAmount)) {
            revert("Unable to transfer buyIn funds");
        }

        // increase group count
        groupCount += 1;

        // create a groupMember object
        uint[] memory groupMemberDonations;
        GroupMember memory groupMember = GroupMember(payable(msg.sender), 0, 0, 0, groupMemberDonations);

        // create the group object
        Group storage group = groupDict[groupCount];
        groupMemberDict[groupCount].push(groupMember);
        
        
        group.id = groupCount;
        group.groupName = groupName;
        group.groupBuyInAmount = groupBuyInAmount;
        group.groupCoordinator = payable(msg.sender);
        group.groupBalance = groupBuyInAmount;
        group.groupActivationTime = 0;

        // add to the list of groups
        groupList.push(group);

        // add the group to the user's groups
        userGroups[msg.sender].push(group);

        // add groupmember to group
        groupinfo[group.groupName].push(groupMember);
        groupinfo_i[groupCount].push(groupMember);

        // subscribe to the events
        emit createGroupEvent(group.groupCoordinator, group, address(this).balance);
        emit newGroupMemberEvent(msg.sender, group, address(this).balance);
    }

    function getGroupbyId(uint groupId)  public view returns(Group memory, GroupMember[] memory, GroupDonation[] memory) {

        require(userProfile[msg.sender].userAddress == msg.sender, "You have to be an EsusuUser to get this information");

        // returns the group info and members in the group
        Group storage group = groupDict[groupId];
        GroupMember[] storage groupMembers = groupinfo_i[groupId];
        GroupDonation[] storage groupdonations = groupDonations[groupId];
        return (group, groupMembers, groupdonations);

    }

    function joinGroup(uint groupId) payable public {

        require(userProfile[msg.sender].userAddress == msg.sender, "Create an EsusuUser account to join a group");

        // get the group 
        Group storage group = groupDict[groupId];

        // validation
        require(msg.value >= 5 ether);

        // get the number of members in the group
        GroupMember[] storage groupMembers = groupinfo_i[groupId];
        if (groupMembers.length >= 6) {
            revert("Sorry bitch, this group is maxed out");
        }

        for (uint i=0; i<groupMembers.length; i++) {
            if (groupMembers[i].userAddress == msg.sender) {
                revert("User already belongs to this group");
            }
        }

        if(!payable(msg.sender).send(group.groupBuyInAmount)) {
            revert("Unable to transfer buyIn funds");
        }


        // create a groupMember profile
        uint[] memory groupMemberDonations;
        GroupMember memory groupMember = GroupMember(payable(msg.sender), 0, 0, 0, groupMemberDonations);

        // add the group to the user's groups
        userGroups[msg.sender].push(group);

        // add groupmember to group
        groupinfo[group.groupName].push(groupMember);
        groupinfo_i[groupCount].push(groupMember);

        // increase the balance in the group
        group.groupBalance += group.groupBuyInAmount;

        // subscribe to events
        emit newGroupMemberEvent(msg.sender, group, address(this).balance);

    }

    // function to activate group and store member payout amounts and dates
    function activateGroup(uint groupId) public {
        
        // validate
        // require(msg.sender == groupDict[groupId].groupCoordinator, "not coordinator");
        // require(groupinfo_i[groupId].length == 6, "group not complete");
        // require(groupDict[groupId].groupActivationTime == 0, "group is already actives");

        // get the group and groupmembers
        Group storage group = groupDict[groupId];
        GroupMember[] storage groupMembers = groupinfo_i[groupId];

        // validate
        if (msg.sender != group.groupCoordinator) {
            revert("You are not the coordinator of this group");
        }

        if (groupMembers.length != 6) {
            revert("The group is incomplete");
        }

        if (group.groupActivationTime != 0) {
            revert("This group is already active");
        }

        // set group activation time
        group.groupActivationTime = block.timestamp;
        emit groupActivationEvent(group, group.groupActivationTime, address(this).balance);

        // set the current donation round
        uint donationRound = 2;
        // set a pointer for donation rounds algorithm
        uint donationRoundsTimer = group.groupActivationTime;

        // set the group donation rounds
        for (uint j=1; j<groupMembers.length; j++) {
            // create a GroupDonation
            uint donationRoundStartTime = donationRoundsTimer;
            uint donationRoundEndTime = donationRoundStartTime + 150;
            uint lateDonationStartTime = donationRoundEndTime;
            uint lateDonationEndTime = lateDonationStartTime + 75;
            GroupDonation memory groupdonation = GroupDonation(group, donationRound, donationRoundStartTime, donationRoundEndTime, lateDonationStartTime, lateDonationEndTime);

            // add to the mapping for groups and groupdonations
            groupDonations[groupId].push(groupdonation);

            // update the donationRoundsTimer
            donationRoundsTimer += 300;

            // increase the donations round
            donationRound += 1;
        }


        // set next payout and payout amounts for groupmembers
        for (uint i=0; i<groupMembers.length; i++) {
            
            GroupMember storage groupMember = groupMembers[i];
            groupMember.nextPaymentDate = group.groupActivationTime + 300;
        //     // TODO: ADMIN SHARE
            groupMember.nextPaymentAmount = ((group.groupBuyInAmount * 6) - group.groupBuyInAmount) / 2;
            groupMember.lastPaymentAmount = groupMember.nextPaymentAmount;
            group.groupActivationTime = groupMember.nextPaymentDate;
        }

    }

    // function to pay groupmember if it is the user's turn
    function payGroupMember(uint groupId) public {

        // require(userProfile[msg.sender] == msg.sender, "Create an EsusuUser account to access this function");


        // get the group and groupmembers
        Group storage group = groupDict[groupId];
        GroupMember[] storage groupMembers = groupinfo_i[groupId];

        // validate
        if (msg.sender != group.groupCoordinator) {
            revert("You are not the coordinator of this group");
        }
        if (groupMembers.length != 6) {
            revert("The group is incomplete");
        }

        // look for the person to be paid
        for (uint i=0; i<groupMembers.length; i++) {
            GroupMember storage groupMember = groupMembers[i];
            EsusuUser storage userprofile = userProfile[groupMember.userAddress];
            uint paymentAmount = groupMember.nextPaymentAmount;
            if (block.timestamp >= groupMember.nextPaymentDate) {
                if (paymentAmount > 0) {
                    userprofile.userBalance += paymentAmount;
                    // subscribe to events
                    emit payGroupMemberEvent(group, groupMember, paymentAmount, block.timestamp, address(this).balance);
                    groupMember.nextPaymentAmount = 0;
                    group.groupBalance -= groupMember.nextPaymentAmount;
                }
            }
        }
    }

    function userWithdrawal() public payable {

        require(userProfile[msg.sender].userAddress == msg.sender, "Create an EsusuUser account to access this function");

        // get the user profile
        EsusuUser storage userprofile = userProfile[msg.sender];

        // check that the user has funds 
        if (userprofile.userBalance > 0) {
            uint withdrawalAmount = userprofile.userBalance * (1 ether);
            if (payable(msg.sender).send(withdrawalAmount)) {
                userprofile.userBalance = 0;

                // subscribe to events
                emit userWithdrawalEvent(userprofile, userprofile.userBalance, block.timestamp, address(this).balance);
            } else {
                revert("Unable to pay");
            }
        }
    }


    function userDonation(uint groupId, uint donationRound) public payable {

        // get the group and groupmembers and groupdonations
        Group storage group = groupDict[groupId];
        GroupMember[] storage groupMembers = groupinfo_i[groupId];
        GroupDonation[] storage groupdonations = groupDonations[groupId];
        // require(msg.value >= 5 ether, "or");
        // require(msg.value == group.groupBuyInAmount * (1 ether), "group payment should be group buy in amount");
        if (groupMembers.length != 6) {
            revert("The group is incomplete");
        }

        uint donationAmount = group.groupBuyInAmount * (1 ether);

        if (msg.value < donationAmount) {
            revert("group payment should be group buy in amount");
        }

        // ensure the donator is a member of the group and has not paid for that round
        bool isGroupMember = false;
        for (uint i=0; i<groupMembers.length; i++) {
            if (groupMembers[i].userAddress == msg.sender) {
                GroupMember storage groupmember = groupMembers[i];
                for (uint k=0; k<groupmember.completedDonationRounds.length; k++) {
                    if (groupmember.completedDonationRounds[k] == donationRound) {
                        revert("You have already donated for this round");
                    }
                }
                isGroupMember = true;
            }
        }

        
        // get the donation round requested for
        GroupDonation memory selectedDonationRound;
        bool isFound_selectedDonationRound = false;
        if (isGroupMember == true) {
            // get the group donation round that was requested
            for (uint j=0; j<groupdonations.length; j++) {
                if (groupdonations[j].donationRound == donationRound) {
                    selectedDonationRound = groupdonations[j];
                    isFound_selectedDonationRound = true;
                }
            }
        } else {
            revert("You are not a member of this group");
        }

        // check that the round is still valid
        if (isFound_selectedDonationRound == true) {
            if (block.timestamp >= selectedDonationRound.donationStartTime && block.timestamp <= selectedDonationRound.donationEndTime) {

                // pay the donation
                if(!payable(msg.sender).send(group.groupBuyInAmount)) {
                    revert("Unable to transfer donation funds");
                }

                // increase the group balance
                group.groupBalance += group.groupBuyInAmount;

                // add the donation round to users completed list
                for (uint m=0; m<groupMembers.length; m++) {
                    if (groupMembers[m].userAddress == msg.sender) {
                        GroupMember storage groupmember = groupMembers[m];
                        groupmember.completedDonationRounds.push(donationRound);
                    }
                }
            
            } else if (block.timestamp < selectedDonationRound.donationStartTime) {
                revert("This group round is not active yet");
            } else {
                revert("This group round is expired");
            }
        } else {
            revert("no group round of that choice");
        }
    }

    function lateDonation(uint groupId, uint donationRound) public payable {
        // check that the round is in late payment
        // pay
        // reduce their groupbalance (userbalance) by 1/2 of what they pay
        // TODO: MAKE HALF PAYMENTS

        // get the group and groupmembers and groupdonations
        Group storage group = groupDict[groupId];
        GroupMember[] storage groupMembers = groupinfo_i[groupId];
        GroupDonation[] storage groupdonations = groupDonations[groupId];

        if (groupMembers.length != 6) {
            revert("The group is incomplete");
        }

        uint donationAmount = group.groupBuyInAmount * (1 ether);

        if (msg.value < donationAmount) {
            revert("group payment should be group buy in amount");
        }

        // ensure the donator is a member of the group and has not paid for that round
        bool isGroupMember = false;
        for (uint i=0; i<groupMembers.length; i++) {
            if (groupMembers[i].userAddress == msg.sender) {
                GroupMember storage groupmember = groupMembers[i];
                for (uint k=0; k<groupmember.completedDonationRounds.length; k++) {
                    if (groupmember.completedDonationRounds[k] == donationRound) {
                        revert("You have already donated for this round");
                    }
                }
                isGroupMember = true;
            }
        }

        // get the donation round requested for
        GroupDonation memory selectedDonationRound;
        bool isFound_selectedDonationRound = false;
        if (isGroupMember == true) {
            // get the group donation round that was requested
            for (uint j=0; j<groupdonations.length; j++) {
                if (groupdonations[j].donationRound == donationRound) {
                    selectedDonationRound = groupdonations[j];
                    isFound_selectedDonationRound = true;
                }
            }
        } else {
            revert("You are not a member of this group");
        }

        // check that the round is still valid for late payment
        if (isFound_selectedDonationRound == true) {
            if (block.timestamp >= selectedDonationRound.latePaymentStartTime && block.timestamp <= selectedDonationRound.latePaymentEndTime) {

                // pay the donation
                if(!payable(msg.sender).send(group.groupBuyInAmount)) {
                    revert("Unable to transfer donation funds");
                }

                // increase the group balance
                group.groupBalance += group.groupBuyInAmount;

                // add the donation round to users completed list
                for (uint m=0; m<groupMembers.length; m++) {
                    if (groupMembers[m].userAddress == msg.sender) {
                        GroupMember storage groupmember = groupMembers[m];
                        groupmember.completedDonationRounds.push(donationRound);
                        groupmember.lastPaymentAmount -= group.groupBuyInAmount / 2;
                    }
                }
            
            } else if (block.timestamp < selectedDonationRound.donationStartTime) {
                revert("This group round is not active yet");
            } else {
                revert("This group round is expired");
            }
        } else {
            revert("no group round of that choice");
        }

    }
}





