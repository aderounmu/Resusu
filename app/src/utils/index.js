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