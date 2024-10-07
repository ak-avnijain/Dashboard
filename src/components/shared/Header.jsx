import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
    return (
        <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
            <div className="relative w-full max-w-md">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none h-10 w-full sm:w-[20rem] md:w-[24rem] pl-11 border border-gray-300 rounded-sm px-4"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <HiOutlineChatAlt className="hidden sm:block" fontSize={24} />
                <HiOutlineBell className="hidden sm:block" fontSize={24} />
            </div>
        </div>
    )
}
