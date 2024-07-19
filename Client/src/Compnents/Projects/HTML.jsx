import React from 'react'
import Bsmr_image from './project_images/BSMR.jpeg'
import kdssg_image from './project_images/kdssg.jpeg'
import onmifood_image from './project_images/omnifoods.png'
const HTML = () => {
  const project_data=[
    {
      id:1,
      image:Bsmr_image,
      title:'BSMR TRAVELS',
      about:'Developed the BSMR Traveling website using technologies such as HTML , CSS, and Bootstrap ',
      link:'https://bsmr.vercel.app/'
    },
    {
      id:2,
      image:kdssg_image,
      title:'KDSSG',
      about:'Developed website of KDSG Center for Excellence online training platform, employing a responsive development approach  to accommodate diverse user device',
      link:'https://kdssg.vercel.app/'
    },
    {
      id:3,
      image:onmifood_image,
      title:'OMNIFOODS',
      about:'Omnifood is a food delivery site .It is a static website.HTML5 is used to structure the site and CSS and Bootstrap is used to provide the beautiful styling . HTML , Css were used to build this site',
      link:'https://omnifoods-sooty.vercel.app/'
    }
  ]
  return (
    <>
      <div  className='p-5 grid grid-cols-1 md:grid-cols-2 gap-10'>
       {project_data.map((item)=>(
        <div key={item.id} className='flex justify-center' >
          <a href={item.link} target='_blank' className='w-full border-8 p-2 rounded-2xl border-blue-700 duration-1000 hover:-translate-y-10 md:w-2/3'>
          <img src={item.image} alt={item.title}  />
          <div className='bg-blue-600'>
            <h3 className='text-2xl py-2'>{item.title}</h3>
            <p className='text-sm'>{item.about}</p>
          </div>
         </a>
        </div>
       ))}
      </div>
    </>
  )
}

export default HTML
