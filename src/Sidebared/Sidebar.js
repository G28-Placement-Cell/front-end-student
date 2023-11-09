import React from 'react';
// import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as TfiIcons from "react-icons/tfi";
import * as HiIcons from "react-icons/hi"

// import * as RxIcons from "react-icons/rx"
import * as TbIcons from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/student/authslice';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/student/studentApislice';



// const dispatch = useDispatch();
// const [logoutapicall] = useLogoutMutation();

// const navigate = useNavigate();
// const logoutHandler = async () => {
//   try {
//     await logoutapicall().unwrap();
//     dispatch(logout());
//     navigate('/');
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
export const SidebarData = [

  {
    title: 'Profile',
    path: '/profile',
    icon: <BiIcons.BiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Update Resume',
    path: '/updateresume',
    icon: <BiIcons.BiUpload />,
    cName: 'nav-text'
  },
  {
    title: 'Company Announcements',
    path: '/companyannouncements',
    icon: <TfiIcons.TfiAnnouncement />,
    cName: 'nav-text'
  },
  {
    title: 'Admin Announcements',
    path: '/adminannouncements',
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
  }
];