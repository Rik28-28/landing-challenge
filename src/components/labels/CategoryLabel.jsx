import React from 'react'

const CategoryLabel = ({ category }) => {
  const style = {
    border: "2px solid #0F1115",
    borderRadius: "12px",
  }
  return (
    <div
      style={style}>
      <span
        className='text-[#0F1115] p-[9px] leading-[12px] text-[12px] 
        font-extrabold font-[Nunito] h-[30px] !flex'>
        {category}
      </span>
    </div>
  )
}

export default CategoryLabel