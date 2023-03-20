import React, { useState } from 'react'

import { InboxIcon, HomeIcon, UsersIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Outlet, useParams } from 'react-router-dom';


import AlenFilterlayout from '../../alen layouts/alen_filterlayout';
import AddCourseForm from '../../forms/AddCourseForm';


export default function BasicInfoPage() {
    const navigation = [
        {name: 'Basic information', href: '/single-course/basic-info', icon: InboxIcon, current: true},
        {name: 'Content', href: 'content', icon: HomeIcon, current: false},
        {name: 'Pool management', href: 'pool-management', icon: UsersIcon, current: false},
        {name: 'All courses', href: 'courses', icon: FolderIcon, current: false}
      ]
    
      function headerTitle() {
        const location = useLocation();
        console.log(location.pathname);
        switch (location.pathname) {
          case '/single-course/basic-info':
            return <span>All Components</span>;
          case '/single-course/content':
            return <span>Buttons</span>;
          case '/single-course/pool-management':
            return <span>Forms</span>;
          case '/single-course/courses':
            return <span>Data Display</span>;
          default:
          // code block
        }
      }
      const [open,setOpen] = useState(false);
      const [title,setTitle] = useState(false);
      const saveButton = "Save"
      
  return (
    <div>
        <AddCourseForm/>
    </div>
  )
}
