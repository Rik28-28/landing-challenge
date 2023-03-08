import React from 'react'

const BtnCustom = ({ text, background, color }) => {

    const style = {
        background,
        color,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.07)",
        borderColor: background
    }

    return (
        <button
            style={style}
            className='p-[10px] rounded-[12px] border-solid border-[2px] font-bold
            hover:opacity-80'>
            {text}
        </button>
    )
}

export default BtnCustom