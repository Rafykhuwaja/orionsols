import React from 'react'

function Blog() {    
    const Blogs = [{
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem perferendis illo asperiores consequatur quos nemo modi quod commodi quo voluptas ipsa temporibus unde in, cupiditate sequi excepturi quis? Minus.',
        name:'blog name',
        imageUrl: '/images/blog1.jpg'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem perferendis illo asperiores consequatur quos nemo modi quod commodi quo voluptas ipsa temporibus unde in, cupiditate sequi excepturi quis? Minus.',
        name:'blog name',
        imageUrl: '/images/blog2.jpg'
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem perferendis illo asperiores consequatur quos nemo modi quod commodi quo voluptas ipsa temporibus unde in, cupiditate sequi excepturi quis? Minus.',
        name:'blog name',
        imageUrl: '/images/blog3.avif'
    }]

    
  return (
    <div className="px-4 md:px-10 lg:px-20 py-20 bg-gray-800">
      <div className='text-center'>
        <p className='text-[#ff9c00] font-bold'>Blog</p>
        <h1 className='text-2xl md:text-4xl font-extrabold my-3 text-white'>Read Our Latest Blog</h1>
        <p className='text-[#ff9c00]'>that reduce result , becouse thats what matter</p>
      </div>
      <div className='flex flex-wrap justify-center mt-9 gap-10'>
        {Blogs.map((item,index)=>( 
            <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 box hover:scale-110 transition duration-200'>
                <img className='h-56 w-full rounded-lg mb-3 object-cover' src={`${item.imageUrl}`} alt="" />
                <h1 className='text-[#ff9c00] font-bold mb-2'>{item.name}</h1>
                <p className='text-gray-300'>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Blog