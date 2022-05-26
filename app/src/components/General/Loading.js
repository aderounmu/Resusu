import React from "react";
import './styles.css'

const Loading = ({show , Message}) => {
    return (
        <div className={`${show ? '':'hidden '}loading top-0 w-full h-full flex flex-col bg-gray-400/20 justify-center items-center absolute`}>
            <div className="loading-cont">
                <div className="lds-dual-ring"></div>
            </div>  
            <div className="text-lg my-3">
                {Message}
            </div> 
        </div>

    )
}


export default Loading