import React from 'react'

const BtnApply = () => {
    const style = {
        border: "2px solid #F26969"
    }
    return (
        <button
            style={style}
            className='bg-[#F26969] font-[Nunito] rounded-[12px] hover:shadow-lg
            text-[16px] font-[900] h-[44px] w-[156px] text-white
            transition-all ease-out'>
            Apply
        </button>
    )
}

export default BtnApply