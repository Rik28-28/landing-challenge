import React from 'react'

const BtnSignMeUp = () => {
    const style = {
        border: "2px solid #5BC6C6"
    }
    return (
        <button
            style={style}
            className='bg-[#5BC6C6] font-[Nunito] rounded-[12px]
            text-[16px] font-[900] h-[44px] w-[156px] text-white'>
            Sign me up
        </button>
    )
}

export default BtnSignMeUp