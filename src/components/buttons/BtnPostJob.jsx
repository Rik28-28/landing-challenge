import React from 'react'

const BtnPostJob = () => {
    const style = {
        background: "FF4742",
        border: "2px solid #FF4742",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.07), 0px 1px 1.5px rgba(0, 0, 0, 0.05)"
    }
    return (
        <button
            style={style}
            className='bg-[#FF4742] font-[Nunito] rounded-[12px]
            text-[16px] font-[900] h-[44px] w-[156px] text-white
            hover:shadow-lg transition-all ease-out hover:translate-y-[-3px]'>
            Post a remote job
        </button>
    )
}

export default BtnPostJob