import { ethers } from "ethers"

export function modifiyGroup(data){

    return {
        id: data[0].toNumber(),//ethers.utils.formatEther(data[0]),
        groupName: data[1] ,
        groupBuyInAmount: data[2].toNumber(),
        groupCoordinator: data[3] ,
        groupBalance: data[4].toNumber(),
        groupActivationTime: data[5].toNumber() ,
    }

}


export function modifiyUser(data){

    return {
        userAddress: data[0],
        nextPaymentDate: data[1].toNumber(),
        nextPaymentAmount :data[2].toNumber(),
        lastPaymentAmount :data[3].toNumber(),
        completedDonationRounds : data[4],
    }

}