import React from 'react'
import movie_app from './project_images/movie_app.jpeg'
import netflix_clone from './project_images/Netflix_clone.jpeg'
import music_player from './project_images/music_player.jpeg'
const ReactProjects = () => {
  const ReactProject=[
    {
      id:1,
      image:movie_app,
      title:'Movie App',
      about:'Developed a Movie App using Reactjs and Tailwindcss, providing a platform to browse and filter movies. Implemented  filters to allow users to search for movies by name.',
      link:'https://movie-app-eight-swart.vercel.app/',
    },{
      id:2,
      image:netflix_clone,
      title:'Netflix Clone',
      about:'Developed the BSMR Traveling website using technologies such as HTML , CSS, and Bootstrap ',
      link:'https://netflix-clone-lime-eight-20.vercel.app/'
    },
    {
      id:3,
      image:music_player,
      title:'Music Player',
      about:"Crafted with React and styled with Tailwind CSS, my latest project is a sleek Music Player featuring a collection of favorite tunes. Users can effortlessly play, pause, and skip tracks both forward and backward, all with intuitive controls. With a minimalist design and seamless functionality.",
      link:'https://music-player-topaz-tau.vercel.app/'
    }
  ]
  return (
    <>
    <div className='p-5 grid grid-cols-1 gap-10 md:grid-cols-2'>
      {ReactProject.map((data)=>(
        <div key={data.id} className='flex justify-center'>
          <a href={data.link} className='w-full border-8 p-2 rounded-2xl border-blue-700 duration-1000 hover:-translate-y-10 md:w-2/3' >
            <img src={data.image} alt={data.title} className='w-full h-auto'/>
            <div className='bg-blue-700'>
              <h3>{data.title}</h3>
              <span className='text-sm'>{data.about}</span>
            </div> 
          </a>
        </div>

      ))}
    </div>
    </>
  )
}

export default ReactProjects
