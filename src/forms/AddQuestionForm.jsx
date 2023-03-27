import { useState } from "react";
import QuestionOptionsTable from "../alen components/Tables/QuestionOptionsTable";
import QuestionOptionsTableAdd from "../alen components/Tables/QuestionOptionsTableAdd";


export default function AddQuestionForm(props) {

     
  
      return (
        <form className="space-y-8 divide-y divide-gray-200" >  
          <div className="space-y-8 divide-y divide-gray-200 ">
            
              <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Add a new question</h3>
              </div>


          {/* <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
             <div className="sm:col-span-6">
               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                 Course cover photo
               </label>
               <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                 <div className="space-y-1 text-center">
                   <svg
                     className="mx-auto h-12 w-12 text-gray-400"
                     stroke="currentColor"
                     fill="none"
                     viewBox="0 0 48 48"
                     aria-hidden="true"
                   >
                     <path
                       d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                       strokeWidth={2}
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                   </svg>
                   <div className="flex text-sm text-gray-600">
                     <label
                       htmlFor="file-upload"
                       className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                     >
                       <span>Upload a file</span>
                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                     </label>
                     <p className="pl-1">or drag and drop</p>
                   </div>
                   <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                 </div>
               </div>
             </div>
         </div> */}
  
    
            <div className="">

              <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="questionTitle" className="block text-sm font-medium leading-6 text-gray-900">
                    Question title
                  </label>
                  <div className="mt-2">
                    <input
                      id="questionTitle"
                      name="questionTitle"
                      type="text"
                      autoComplete="questionTitle"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-3">
                <label htmlFor="lesson" className="block text-sm font-medium leading-6 text-gray-900">
                  Lesson
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lesson"
                    id="lesson"
                    autoComplete="lesson"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
    
                
    
                <div className="sm:col-span-3">
                  <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-gray-900">
                    Difficulty
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="difficulty"
                      id="difficulty"
                      autoComplete="difficulty"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
             
    
          
              </div>
            </div>
          </div>
  
  
         
                <div className="flex flex-col sm:col-span-6 ">

                 
                  <div className="flex flex-col justify-center">
                  <label htmlFor="addAnswer" className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                    Add answer
                  </label>
                  <div className="flex  mt-2">
                    <input
                      id="addAnswer"
                      name="addAnswer"
                      type="text"
                      autoComplete="addAnswer"
                      className="block w-11/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button  className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> 
                        Add
                    </button>
                  </div>
                  
                  <QuestionOptionsTableAdd/>

                  </div>
                </div>
             
  
               
    
          <div className=" flex pt-5 justify-center">
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={()=>{props.setOpen(false)}}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )
    }
    