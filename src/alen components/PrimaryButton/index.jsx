import React from 'react'
export default function PrimaryButton(props) {
    
  return (
    <button
        onClick={()=>props.setOpen(true)}
        type="button"
        className="  ml-3  inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
        {props.buttonName}
    </button>
  )
}
