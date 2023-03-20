import {Outlet, Link, useLocation, useParams} from "react-router-dom";

import {FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/24/outline/index.js";
import AlenSideBarLayout from "../../alen layouts/alen_sidebarlayout.jsx";
import { useEffect } from "react";

import { useState } from "react";

export default function SingleCourse() {
  const navigation = [
    {name: 'Basic info', href: 'basic-info', icon: InboxIcon, current: false},
    {name: 'Content', href: 'content', icon: HomeIcon, current: false},
    {name: 'Pool management', href: 'pool-management', icon: UsersIcon, current: false},
    {name: 'All courses', href: '/courses', icon: FolderIcon, current: false}
  ]

  function headerTitle() {
    const location = useLocation();
    console.log(location.pathname);
    switch (location.pathname) {
      case '/components/all':
        return <span>All Components</span>;
      case '/components/buttons':
        return <span>Buttons</span>;
      case '/components/forms':
        return <span>Forms</span>;
      case '/components/data-display':
        return <span>Data Display</span>;
      default:
      // code block
    }
  }

  const [course,setCourse] = useState({
    id: null,
    title: " ",
    description: "",
    tags: "",
    email: "",
    departments: "",
    meta: "",
    imageUrl: ""
  })

  const {id} = useParams();

  
  useEffect(()=>{
    fetch('http://localhost:3000/courses/' + id)
      .then(res =>{
        return res.json()
      })
      .then((data)=>{
        setCourse(data);
        console.log(data);
      })
  },[])
  return (
    <>
       <AlenSideBarLayout navigation={navigation} headerTitle={headerTitle()}  content={<Outlet/>}></AlenSideBarLayout>
      {/*<StackedLayout content={<Outlet />}></StackedLayout>*/}
      {/*<div >*/}
      {/*    <Outlet />*/}
      {/*</div>*/}
    </>
  );
}