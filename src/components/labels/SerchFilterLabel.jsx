import React from 'react'

const SerchFilterLabel = (props) => {
    const style = {
        color: "rgba(15, 17, 21, 0.5)",
        background: "rgba(255, 255, 255, 0.5)",
        mixBlendMode: "luminosity",
        border: "2px dashed rgba(221, 221, 221, 0.5)",
        borderRadius: "32px"
    }
    return (
        <div
            style={style}
            className='h-[40px] font-[Nunito] font-bold text-[16px]
            leading-[22px] px-[12px] flex items-center'>
            {props.text}
        </div>
    )
}

export default SerchFilterLabel