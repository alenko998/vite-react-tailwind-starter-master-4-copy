
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
export default function CourseCard(props) {

  const [remain,setRemain] = useState('+');



 
return (
   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2"> 
       
    {props.courses.map((course) => (
      <div key={course.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <NavLink to={"/single-course/" + course.id +'/basic-info'}>
            <div className="backdrop-opacity-10 ">
              <img className="w-full h-60 " src={course.imageUrl} alt="Sunset in the mountains"/>  
              <div className="absolute  top-0 left-0 w-full h-full opacity-0 flex justify-center items-center z-10 bg-black bg-opacity-60 hover:opacity-100">
                <p className="relative top-0 left-0 w-full h-full flex justify-center items-center  text-white text-2xl font-semibold ">Go to course</p>
              </div>
            </div>
          </NavLink>
          <div className=" px-6 py-4 h-40">
              <div className="font-bold text-xl mb-2 h-14 line-clamp-3">{course.title}</div>
                <p className="text-gray-600 text-base line-clamp-4 font-bold mt-1">
                {course.description}
                </p>
              </div>
         
              <div className="flex mt-5 px-6 pt-4 pb-2">
                {/* {course.tags.map((tag)=>{
                  
                  <div key={tag.name}>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag.name}</span>
                  </div>
                  
                })} */}

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-5 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>

                {course.tags.map((tag)=>{
                 
                  if(course.tags.length==0){
                    setRemain(null)
                  }
                  return <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                })}

                
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{remain}</span> */}
               
                
              </div>

              <div className="flex px-6 py-4 justify-start">
                <p className="flex text-gray-700 text-base font-extralight">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
                {course.courseLevel}
                </p>
                
                <p className=" flex text-gray-700 text-base ml-5 font-extralight">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clipRule="evenodd" />
                </svg>
                {course.subtitles}
                </p>

                <p className=" flex text-gray-700 text-base ml-5 font-extralight">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
                {course.departments}
                </p>
              </div>
              
             <div>

              <div className="-mt-px flex divide-x divide-gray-200 justify-center">
                <div className="flex w-0 flex-1">
                  <button className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-300" onClick={()=>{props.setOpen(true); props.setIdForDelete(course.id); props.setCourse({
                    id: course.id,
                    title: course.title,
                    description: course.description,
                    departments: course.departments,
                    courseLevel: course.courseLevel,
                    subtitles: course.subtitles,
                    imageUrl: course.imageUrl

                  })}}>Edit</button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                <button className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-300"  onClick={()=>{props.setOpenModal(true); props.setIdForDelete(course.id)}}>Delete</button> 
                </div>
              </div>
            </div>
          </div>
         
        ))}   
    
  </div>

    
    )
  }
 
