import React from 'react'
import BtnApply from '../buttons/BtnApply'
import BtnSignMeUp from '../buttons/BtnSignMeUp'

const SignMeUpCard = () => {
    const style = {
        borderRadius: "15px 15px",
        background: "#343477"
    }
    return (
        <div
            style={style}
            className='py-[12px] pl-[20px] pr-[35px] h-[88px] grid grid-cols-[1fr_156px] 
            items-center w-full'>
            <div className='flex'>
                <img
                    className='rounded-full w-[60px] h-[60px]'
                    src="/png/icon1.png"
                    alt='icon companie'
                />
                <div className='ml-[31px] pt-[5px]'>
                    <h2 className='text-white'>Nomad Health by SafetyWing</h2>
                    <p
                        className='text-[16px] font-[200] text-white leading-[22px]'>
                        Global health insurance for remote workers and nomads
                    </p>
                </div>
            </div>
            <div
                className='justify-self-end'>
                <BtnSignMeUp />
            </div>
        </div>
    )
}

export default SignMeUpCard