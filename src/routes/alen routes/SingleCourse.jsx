import {Outlet, Link, useLocation, useParams} from "react-router-dom";

import {FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/24/outline/index.js";
import AlenSideBarLayout from "../../alen layouts/alen_sidebarlayout.jsx";
import { useEffect } from "react";

import { useState } from "react";

export default function SingleCourse() {
  const navigation = [
    {name: 'Basic info', href: 'basic-info', icon: InboxIcon, current: false},
    {name: 'Content management', href: 'content', icon: HomeIcon, current: false},
    {name: 'Pool management', href: 'pool-management', icon: UsersIcon, current: false},
    
  ]
  const {id} = useParams();

  function headerTitle() {
    const location = useLocation();
    console.log(location.pathname);
    switch (location.pathname) {
      case `/single-course/${id}/basic-info`:
        return navigation[0].current=true;
      case `/single-course/${id}/content`:
        return navigation[1].current=true;
      case `/single-course/${id}/pool-management`:
        return navigation[2].current=true;        
   
      
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



  
  useEffect(()=>{
    fetch('http://localhost:3001/courses/' + id)
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
       <AlenSideBarLayout navigation={navigation} headerTitle={headerTitle()}  content={<Outlet context={[course, setCourse]}/>}></AlenSideBarLayout>
      {/*<StackedLayout content={<Outlet />}></StackedLayout>*/}
      {/*<div >*/}
      {/*    <Outlet />*/}
      {/*</div>*/}
    </>
  );
}