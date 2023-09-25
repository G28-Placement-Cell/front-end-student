import React from 'react';
// import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi"
// import * as RxIcons from "react-icons/rx"
import * as TbIcons from 'react-icons/tb'

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <BiIcons.BiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/announcements',
    icon: <TfiIcons.TfiAnnouncement />,
    cName: 'nav-text'
  },
  {
    title: 'Companies',
    path: '/companies',
    icon: <HiIcons.HiOfficeBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'Performance',
    path: '/performance',
    icon: <BiIcons.BiLineChart />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Update Resume',
  //   path: '/updateresume',
  //   icon: <RxIcons.RxUpdate />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Change Password',
    path: '/changepassword',
    icon: <TbIcons.TbArrowsExchange />,
    cName: 'nav-text'
  },
  {
    title: 'Log out',
    path: '/logout',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  }
];