import React from 'react'
import BtnCustom from './buttons/BtnCustom'

const Navbar = () => {
  return (
    <header
      className='w-full absolute z-50'>
      <nav
        className='flex  justify-end gap-[10px] px-[2%] py-[29px]'>
        <BtnCustom text={"Health insurance"} background={"#5BC6C6"} color={"#FFFFFF"} />
        <BtnCustom text={"Log in"} background={"#FFFFFF"} color={"#000000"} />
        <BtnCustom text={"Health insurance"} background={"#FF4742"} color={"#FFFFFF"} />
      </nav>
    </header>
  )
}

export default Navbar