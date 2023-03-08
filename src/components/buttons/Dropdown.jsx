import React from 'react'
import ArrowBottom from '../../svg/ArrowBottom'
import '../../styles/stylesAux.css'
const Dropdown = ({ icon, title, options }) => {

    const styleBtn = {
        border: "1px solid rgba(0, 0, 0, 0.12)"
    }

    const styleUl = {
        border: "1px solid rgba(0, 0, 0, 0.25)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"
    }
    return (
        <div>
            <div className="dropdown">
                <button
                    className="btn w-[150px] h-[40px] btn-secondary grid grid-flow-col items-center 
                     dropdown-toggle text-black rounded-full active:outline-none 
                     focus:outline-none  !z-50 relative
                      hover:bg-white"
                    style={styleBtn}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <span className='justify-self-start'>
                        {`${icon} ${title}`}
                    </span>
                    <span className='justify-self-end'>
                        <ArrowBottom />
                    </span>
                </button>
                <ul
                    style={styleUl}
                    className="dropdown-menu bg-[#F5F5F5] w-[341px] p-[8px]"
                    aria-labelledby="dropdownMenuButton1">
                    {options.map((item, index) => (
                        <li key={item + index}>
                            <a className="dropdown-item" href="#">{item}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Dropdown