import { ethers } from "ethers"

export function modifiyGroup(data){

    return {
        groupName: data[0] ,
        groupBuyInAmount: ethers.utils.formatEther(data[1]),
        groupCoordinator: data[2] ,
        groupBalance: ethers.utils.formatEther(data[3]),
        groupActivationTime: ethers.utils.formatEther(data[4]) ,
    }

}


export function modifiyUser(data){

    return {
        userAddress: data[0],
        nextPaymentDate: ethers.utils.formatEther(data[1]),
        nextPaymentAmount :ethers.utils.formatEther(data[2]),
        lastPaymentAmount :ethers.utils.formatEther(data[3]),
        completedDonationRounds : data[4],
    }

}