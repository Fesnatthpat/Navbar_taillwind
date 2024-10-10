// import React from 'react'

import { useState } from "react"
import imgUser from "../../assets/user.png"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const hdlToggle = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }


    return (
        <header className="bg-black text-white">
            <nav className="flex justify-between items-center px-12 h-16 lg:gap-6 " >
                <a href="" className="text-2xl border-2 font-bold px-2 py-1" >LOGO</a>

                <div className={`absolute left-0 ${isOpen ? "top-16" : "-top-full"} 
                bg-black w-full flex flex-col items-center gap-6 py-2 font-bold 
                text-lg lg:static lg:flex-row lg:justify-between`} >
                    <ul className="flex flex-col items-center gap-6 lg:flex-row">
                        <li className="hover:text-green-500 hover:scale-110 hover:-translate-y-1 duration-200 cursor-pointer">Home</li>
                        <li className="hover:text-green-500 hover:scale-110 hover:-translate-y-1 duration-200 cursor-pointer">About</li>
                        <li className="hover:text-green-500 hover:scale-110 hover:-translate-y-1 duration-200 cursor-pointer">Contract</li>
                    </ul>

                    <div className="flex flex-col items-center gap-6 
                        lg:flex-row" >

                        {/* Anthen */}
                        <div className="relative group">
                            <button className="flex justify-between items-center gap-3 
                            hover:text-green-500 hover:scale-110 hover:-translate-y-1 hover:duration-200 p-2 ">
                                <img src={imgUser} className="w-8 h-8" />
                                Profile
                                <i className="fa-solid fa-angle-down" ></i>
                            </button >
                            <ul className="absolute bg-black rounded-lg w-full hidden group-hover:block">
                                <li className="hover:text-green-500 py-2 px-3 cursor-pointer">Username</li>
                                <li className="hover:text-green-500 py-2 px-3 cursor-pointer">Setting</li>
                                <li className="hover:text-green-500 py-2 px-3 cursor-pointer">LogOut</li>
                            </ul>
                        </div>

                        {/* No Authen */}
                        <button className="hover:text-green-500 hover:scale-110 hover:-translate-y-1 duration-200" >Register</button>
                        <button className="border-2 px-2 py-1 rounded-lg hover:text-green-500 hover:scale-110 hover:-translate-y-1 duration-200" >Login</button>
                    </div>

                </div>

                <div className="lg:hidden" >
                    <i className="fa-solid fa-bars" onClick={hdlToggle}></i>
                </div>

            </nav>
        </header>
    )
}

export default Navbar