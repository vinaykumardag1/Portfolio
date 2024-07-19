import React from 'react'
import svg1 from './skills_icon/Vector.svg'
import svg2 from './skills_icon/CSS3.svg'
import svg3 from './skills_icon/javascript.svg'
import svg4 from './skills_icon/bootstrap.svg'
import svg5 from './skills_icon/React.svg'
import svg6 from './skills_icon/tailwind.svg'
import cap_icon from './skills_icon/cap_icon.svg'
import work_experice from './skills_icon/work_xperience.svg'
import acheivement_icon from './skills_icon/achivement-icon.svg'
import download_icon from './skills_icon/download-icon.svg'
import resume from './skills_icon/resume.pdf'
const Skills = () => {
  const skills_icons=[
    {
      id:1,icon:svg1,per:'90%'
    },
    {
      id:2,icon:svg2,per:'85%'
    },
    {
      id:3,icon:svg3,per:'80%'
    },
    {
      id:4,icon:svg4,per:'90%'
    },
    {
      id:5,icon:svg5,per:'80%'
    },
    {
      id:6,icon:svg6,per:'70%'
    },
  ]
  return (
    <>
      
    <div>
      <h4 className='text-3xl text-center'>MY SKILLS</h4> 
      <p className='text-sm text-center'>Showcasing my Skills and ongoing initiatives, highlighting <br/> innovation and dedication."</p>       
    </div>
    <div className=' md:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
      {skills_icons.map((item)=>(
        <div key={item.id} className='py-4 px-2 border border-light-500'>
          <img src={item.icon} alt="" className='py-2 fill-white'/>
          <p className='text-center'>{item.per}</p>
        </div>
      ))}
    </div>
    <div >
    <p className='text-3xl font-bold text-center pb-20'>RESUME</p>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
      <div className='grid grid-row-2 gap-10'>
      <div className='flex justify-center'>
        <div className='bg-zinc-900 rounded-3xl py-6 px-12 duration-1000 hover:scale-110'>
          <p className='flex text-3xl font-bold justify-center py-5'><img src={cap_icon} alt="icon" /> MY EDUCATION</p>
          <ul className='list-disc'>
            <li className='text-3xl py-2'>Graduation</li>
            <li className='list-none text-sm'>Bachelor of Computer Application -V.S University</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center '>
          <div className='bg-zinc-900 rounded-3xl py-6 px-12 duration-1000 hover:scale-110'>
           <p className='flex text-3xl font-bold justify-center py-5'><img src={work_experice} alt="icon" />MY EXPERIENCE</p>
           <ul className='list-disc'>
            <li className='text-2xl py-2'>Internship-W3 Technologies</li>
            <li className='list-none text-sm'>Led the development of responsive websites,<br/> guaranteeing  seamless user experiences across<br/> various devices.</li>
          </ul>
         </div>
        </div>
      </div>
      
     

      <div className='w-full md:w-2/3 bg-teal-950 rounded-3xl py-6 px-12 duration-1000 hover:scale-105'>
        <p className='flex text-3xl font-bold justify-center gap-3 py-5'><img src={acheivement_icon} alt="" />ACHIEVMENTS</p>
        <div>
          <ul className='list-disc'>
            <li className='text-2xl'>Scaler Masters</li>
            <li className='list-none text-sm py-3'>Getting a certificate for building a E-Commerce website using React Master Class  </li>
            <li className='text-2xl'>Devifesta</li>
            <li className='list-none text-sm py-3'>Getting a certificate for Participated in Hackathon at SkillBridge.</li>
            <li className='text-2xl'>Award</li>
            <li className='list-none text-sm py-3'>Getting an Award for Best Team Player</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='flex justify-end p-10'>
    <a href={resume} download>
      <button className='flex gap-2 border border-white rounded-lg p-3'><img src={download_icon} alt="" />DOWNLOAD RESUME</button>
    </a>
    </div>
    </div>
    </>
  )
}

export default Skills
