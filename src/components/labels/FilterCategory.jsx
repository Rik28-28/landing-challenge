import React from 'react'

const FilterCategory = ({ text }) => {
    const style = {
        border: "1px solid #DDDDDD",
        display: "inline-block"
    }

    return (
        <div
            style={style}
            className='bg-white px-[8px] py-[2.5px]  flex rounded-[32px]'>
            <p className='text-[10px] leading-[14px] font-[400] #393939'>
                {text}
            </p>
        </div>
    )
}

export default FilterCategory