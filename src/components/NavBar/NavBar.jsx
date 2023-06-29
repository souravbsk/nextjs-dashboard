"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { BiHomeAlt, BiMenuAltRight } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { FiLogOut, FiSettings } from "react-icons/fi";
import AuthContext from "@/contexts/AuthContext";
import Image from "next/image";
const NavBar = ({isShow}) => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch(err => {
      
    })
  }
  console.log(isShow);
  return (
    <div className={`bg-[#171717] px-8 py-4 md:static absolute right-0 z-40 flex-col md:flex-row flex items-center duration-300 justify-between text-white ${isShow ? "-top-96": "top-16"}`}>
      <ul className={`flex flex-col md:flex-row items-center gap-6 `}>
        <li>
          <Link className="flex items-center gap-2" href="/">
            <BiHomeAlt></BiHomeAlt> Home
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/">
            <AiOutlineBars></AiOutlineBars> Contents
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/">
            <BiMenuAltRight></BiMenuAltRight> Categories
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/">
            <FiSettings></FiSettings> Settings
          </Link>
        </li>
      </ul>
      <div>
        {
          user ? <div className="dropdown dropdown-end">
          <p className="flex p-1  rounded-full font-semibold items-center gap-1 bg-white text-black">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <Image
                src={user?.photoURL}
                className="object-cover rounded-full"
                width={40}
                height={40}
                alt="profileIMG"
              ></Image>
            </label>
            <span>{user?.displayName}</span>
          </p>
          <ul
            tabIndex={0}
            className="mt-3 left-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box "
          >
            <li>
              <button onClick={handleLogOut} className="text-black font-bold">
                <FiLogOut></FiLogOut> Logout
              </button>
            </li>
          </ul>
        </div>
        : 
        <><Link href="/login">Login</Link></>
        }
      </div>
    </div>
  );
};

export default NavBar;
