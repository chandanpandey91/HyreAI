"use client"
import React, { useState } from 'react'

  

function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false)
  return (
   
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 
        hover:shadow-md cursor-pointer transition-all' onClick={()=>setOpenDialog(true)}>
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>

    </div>
  )
}

export default AddNewInterview