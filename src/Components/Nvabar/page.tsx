/** @format */

"use client";
import Link from "next/link";
import useShowHideToggle from "../Custom-Hooks/ShowHideToggle";
import logo  from '@/app/Assest/Add a heading.png'
const page = () => {
  const [show, changeToggler] = useShowHideToggle();
  return (
    <>
      <nav className='bg-black text-center py-2 rounded drop-shadow-xl  text-slate-400 flex justify-between'>
        {/* <img src={logo} alt="logo"  /> */}
        <ul className='hidden  lg:grid md:grid grid-cols-3 gap-3  '>
          <li>
            <Link className='hover:underline' href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='hover:underline' href='/About'>
              About
            </Link>
          </li>
          <li>
            <Link className='hover:underline' href='/Contacts'>
              Contacts
            </Link>
          </li>
        </ul>
        <Link
          className='hidden lg:grid md:grid hover:underline mr-2 '
          href='/Login'>
          Login
        </Link>

        {/* humburger button */}
        <div className='grid sm:hidden ' onClick={changeToggler}>
          <div className='w-7 h-1 bg-white m-1'></div>
          <div className='w-7 h-1 bg-white m-1'></div>
          <div className='w-7 h-1 bg-white m-1'></div>
        </div>

        {/* mobile nav */}
      </nav>
      {show && (
        <ul className='sm:hidden bg-black text-white py-4'>
          <li className='mt-2 ml-4'>
            <Link className='hover:underline' href='/'>
              Home
            </Link>
          </li>
          <li className='mt-2 ml-4'>
            <Link className='hover:underline' href='/About'>
              About
            </Link>
          </li>
          <li className='mt-2 ml-4'>
            <Link className='hover:underline' href='/Contacts'>
              Contacts
            </Link>
          </li>
          <li className='mt-2 ml-4'>
            <Link className=' hover:underline mr-2 ' href='/Login'>
              Login
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default page;
