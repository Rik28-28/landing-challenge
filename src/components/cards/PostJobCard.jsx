import React from 'react'
import BtnHide from '../buttons/BtnHide'
import BtnPostJob from '../buttons/BtnPostJob'

const PostJobCard = () => {
    const style = {
        borderRadius: "15px 15px",
        background: "#fff"
    }
    return (
        <div
            style={style}
            className='py-[12px] h-[88px] flex gap-[23px]
             items-center w-[1114px] pl-[90px] z-20'>
            <p
                className='text-[16px] font-[800] text-[#0F1115] leading-[22px]'>
                👉 Hiring remotely? Reach 2,000,000+ remote workers on the 🏆 #1 Remote Job Board
            </p>
            <BtnPostJob />
            <BtnHide />
        </div>
    )
}

export default PostJobCard