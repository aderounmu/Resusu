import { ethers } from "ethers";
import Esusu from '../contracts/Esusu.json'

//ethers

export async function getSignerContract(provider, networkID) {
    try{
        const { abi } = Esusu;
        // console.log(networkID);
        // let netid = networkID.toString()
        const address = Esusu.networks[1377].address;
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address,abi,signer);

        return contract;
    }catch(err){
        throw err
    }

}


export async function getProviderContract(provider, networkID) {
    try{
        const { abi } = Esusu;
        // console.log(networkID);
        // let netid = networkID.toString()
        const address = Esusu.networks[1377].address;
        // const signer = provider.getSigner();
        const contract = new ethers.Contract(address,abi,provider);

        return contract;
    }catch(err){
        throw err
    }

}

//function



export async function createUserProfile(provider,networkID){

    try{
        //gettting contract 
        const contract = await getSignerContract(provider, networkID);
        //creatuser 
        let tx = await contract.createUserProfile(); 
        await tx.wait();

    }catch(err){
        throw err
    }

    return 'user added successfully'
}


export async function getUserProfile(provider,networkID){

    //gettting contract 

    const contract = await getSignerContract(provider, networkID);
    
    let user = await contract.getUserProfile();

    return user;

}


export async function createGroup(provider, networkID, groupName, groupBuyInAmount){

    const contract = await getSignerContract(provider,networkID);

    try{

        let tx = await contract.createGroup(groupName,groupBuyInAmount,{
            value: ethers.utils.parseEther(groupBuyInAmount)
        })
        await tx.wait()

    }catch(err){
        throw err
    }

    return 'group added successfully'

}



export async function getGroupbyId(provider, networkID, id){
    const contract = await getSignerContract(provider,networkID);

    let group = await contract.getGroupbyId(id);

    return group;
}


export async function joinGroup(provider, networkID, id){
    
    const contract = await getSignerContract(provider,networkID);

    try{

        let tx = await contract.joinGroup(id,{
            value: ethers.utils.parseEther('5')
        });
        await tx.wait();

    }catch(err){
        throw err
    }

    return 'user joined group successful'
}


export async function activateGroup(provider, networkID, id){
    
    const contract = await getSignerContract(provider,networkID);

    try{

        let tx = await contract.activateGroup(id);
        await tx.wait();

    }catch(err){
        throw err
    }

    return 'group successful activated';
}


export async function payGroupMember(provider, networkID, id){

    const contract = await getSignerContract(provider,networkID);

    try{

        let tx = await contract.payGroupMember(id);
        await tx.wait();

    }catch(err){
        throw err
    }

    return 'group payout successful';

}


export async function userWithdrawal(provider, networkID){
    const contract = await getSignerContract(provider,networkID);

    try{

        let tx = await contract.userWithdrawal();
        await tx.wait();

    }catch(err){
        throw err
    }

    return 'User successfully paid';

}


export async function userDonation(provider, networkID,id,round){
    const contract = await getSignerContract(provider,networkID);

    try{

        let tx = await contract.userDonation(id,round);
        await tx.wait();

    }catch(err){
        throw err
    }
    return 'Pay out successful';
}