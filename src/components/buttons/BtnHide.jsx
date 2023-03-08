import React from 'react'

const BtnHide = () => {
    const style = {
        border: "2px solid #FF4742",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.07), 0px 1px 1.5px rgba(0, 0, 0, 0.05)"
    }
    return (
        <button
            style={style}
            className='text-[#FF4742] font-[Nunito] rounded-[12px]
            text-[16px] font-[900] h-[44px] w-[88px] bg-white
            hover:shadow-lg transition-all ease-out hover:text-white
            hover:!bg-[#FF4742]'>
            Hide this
        </button>
    )
}

export default BtnHide