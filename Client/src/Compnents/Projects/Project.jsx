import React from 'react'
import HTML from './HTML'
import ReactProjects from './ReactProjects'


const Project = () => {
  return (
    <>
    
        
        <div className='text-center py-8'>
        <h2 className='text-3xl py-4'>My Recent Works</h2>
        <p>Showcasing my latest projects and ongoing initiatives, highlighting <br/> innovation and dedication."</p>
      </div>
      <div className='flex justify-center gap-3 py-10'>
       
        <button className='focus:bg-indigo-500 active:bg-indigo-500 rounded-2xl md:px-10 py-2 '>
          All
        </button>
        
       
    
        <button className='focus:bg-indigo-500 active:bg-indigo-500  rounded-2xl md:px-10 py-2'>
          
          React,js
          
        </button>
         
        <button className='focus:bg-indigo-500 active:bg-indigo-500 rounded-2xl md:px-10 py-2 '>
         
          Html/Css
          
        </button>
       
      
      </div>
     
      <ReactProjects/>
     
   
       <HTML/>
      
       
      
    
    
    
    
    
    </>
  )
}

export default Project
