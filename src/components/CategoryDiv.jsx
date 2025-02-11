import React from 'react'
import CategoryBox from './CategoryBox'
import data from '../content/data'

function CategoryDiv() {


  return (
    <div className='flex py-6 gap-8 lg:flex-row md:flex-row flex-col justify-between w-full mx-auto items-center'>
        {data.categories.map((data, index)=>(
            <CategoryBox key={index} heading={data.name} image={data.image} onClick={()=> console.log(data.slug)}/>

        ))}
        
    </div>
  )
}

export default CategoryDiv