import React, { useState } from 'react'
import BtnApply from '../buttons/BtnApply'
import CategoryLabel from '../labels/CategoryLabel'
import FilterCategory from '../labels/FilterCategory'
import NewLabel from '../labels/NewLabel'
import VerifiedLabel from '../labels/VerifiedLabel'

const OfferCard = (props) => {
    const [hover, setHover] = useState(false)
    const style = {
        borderRadius: "15px 15px",
        background: props.background,
        transform: hover && "translate(0px,-3px)"
    }

    return (
        <div
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='py-[12px] pl-[20px] pr-[35px] grid grid-cols-[1fr_520px] 
             items-center hover:shadow-lg transition-all ease-out'>
            <div className='flex'>
                <img
                    className='rounded-full w-[60px] h-[60px]'
                    src="/png/icon1.png"
                    alt='icon companie'
                />
                <div className='ml-[31px]'>
                    <div
                        className='flex  items-start gap-[8px]'>
                        <h2>{props.title}</h2>
                        {props.verfied && <VerifiedLabel />}
                    </div>
                    <p
                        className='text-[16px] font-[200] pb-1 text-[#0F1115] leading-[22px]'>
                        {props.company}
                        {props.new && <NewLabel />}
                    </p>
                    <div
                        className='flex gap-[5px]'>
                        {
                            props.labels?.map((label) => (
                                <FilterCategory key={props.id + label} text={label} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div
                className='grid grid-cols-[1fr_53px_156px] gap-[18px] items-center'>
                <div className='flex gap-[12px]'>
                    {
                        props.category?.map((category) => (
                            <CategoryLabel key={props.id + category} category={category} />
                        ))
                    }
                </div>
                <span className='flex'>
                    <img src='/svg/attach.svg' alt='icon' />
                    {props.pastDays + "d"}
                </span>
                {
                    hover && <BtnApply />
                }
            </div>
        </div>
    )
}

export default OfferCard