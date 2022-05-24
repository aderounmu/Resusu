import React from 'react'
import { SwitchVerticalIcon, OfficeBuildingIcon, CreditCardIcon, CashIcon } from '@heroicons/react/solid'; 

const ProfileContent = () => {
    return (
        <div className='px-10'>
            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-col bg-[#82B1FF] rounded-lg shadow-lg w-4/6 m-6 text-center'>
                    <h4 className='font-semibold mb-2'>Wallet Balance</h4>
                    <h2 className='text-lg font-bold'>ETH 1.98756</h2>

                    <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-[#4285F6] duration-500 focus:outline-none focus:shadow-outline'>
                        Add Money
                    </button>
                    <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-[#4285F6] duration-500 focus:outline-none focus:shadow-outline'>
                        Hide Balance
                    </button>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-xl text-center p-6'>
                    Wallet Top-Up
                </h1>

                <div className='flex flex-wrap justify-center'>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <CreditCardIcon className="h-20 m-6" />
                        <h2 href="#" className="bg-[#4285F6] text-black p-6 text-center font-semibold hover:bg-[#82B1FF] transition-all duration-500">Debit Card</h2>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <CashIcon className="h-20 m-6" />
                        <h2 href="#" className="bg-[#4285F6] text-black p-6 text-center font-semibold hover:bg-[#82B1FF] transition-all duration-500">Pay Cash</h2>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <OfficeBuildingIcon className="h-20 m-6" />
                        <h2 href="#" className="bg-[#4285F6] text-black p-6 text-center font-semibold hover:bg-[#82B1FF] transition-all duration-500">Bank Deposit</h2>
                    </div>
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
                        <SwitchVerticalIcon className="h-20 m-6" />
                        <h2 href="#" className="bg-[#4285F6] text-black p-6 text-center font-semibold hover:bg-[#82B1FF] transition-all duration-500">USSD</h2>
                    </div>
                </div>
            </div>

            <div>
                <h2>
                
                </h2>
            </div>

        </div>
    );
}

export default ProfileContent

// #bd922d