"use client"
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import React, { useContext, useState } from "react";
import {RxDashboard} from "react-icons/rx"
import {FaBars} from "react-icons/fa"
import { ToggleContext } from "@/Providers/ToggleProvider";

const Layout = ({ children }) => {
    const [isShow,setShow] = useState(true);

  return (
    <div>
      <NavBar isShow={isShow}></NavBar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-scroll bg-[#F5F5F5] flex flex-col ">
          {/* Page content here */}
         
         <div className="bg-[#262626] md:hidden block flex items-center justify-between px-5 w-full py-2">
         <label
            htmlFor="my-drawer-2"
            className="btn  drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <button onClick={() => setShow(!isShow)} className="text-white text-xl"><FaBars></FaBars></button>
         </div>
         {children}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu drawer-Nav h-fit md:h-screen p-4 w-52  bg-[#262626] text-white space-y-4 divide-y ">
            {/* Sidebar content here */}
            <li className="text-white"><Link  href="/newitem"><button className="btn w-full bg-white">+  New Item</button></Link></li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Dashboard</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Application</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Elements</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Forms</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Plugins</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Elements</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Settings</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-white text-white">
              <details>
                <summary><RxDashboard></RxDashboard> Datagrid</summary>
                <ul className="p-2 text-white ">
                  <li>
                    <Link className="text-white" href="/">Commarce</Link>
                  </li>
                  <li>
                    <Link href="/">Analytics</Link>
                  </li>
                  <li>
                    <Link href="/">Crypto</Link>
                  </li>
                  <li>
                    <Link href="/">Helpdesk</Link>
                  </li>
                  <li>
                    <Link href="/">Monitoring</Link>
                  </li>
                  <li>
                    <Link href="/">Fitnes</Link>
                  </li>
                </ul>
              </details>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
