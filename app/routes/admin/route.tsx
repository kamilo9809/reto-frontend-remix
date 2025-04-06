import { SideBar } from './SideBar';
import { Outlet } from '@remix-run/react';

export default function inicioLayout(){
  return (
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}