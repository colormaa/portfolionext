import { useRouter } from 'next/router';
import React from 'react';

const Card=({
    title,
    substring,
    createdDate,
    category, 
    comments, 
    minutes,
    blogurl,
    imageurl
})=>{
    console.log("image url ", imageurl)
    const router = useRouter()
    const cdate = createdDate.split(" ")
    return(
        <div onClick={()=>{
            router.push(blogurl)
        }} className='overflow-hidden w-full h-full bg-white-500 mb-2 group'>
            <div className='relative w-full'>
                <div className=' group-hover:opacity-60 transition transform duration-300 '>
                    <img className=''  src={imageurl?imageurl:"https://themeforest.img.customer.envatousercontent.com/files/359731723/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ac0b6d86c2429889ff88859a5df103e1"} alt="" />
                </div> 
                <div className='absolute bottom-0  text-white text-sm px-2 py-1 left-0 z-100 bg-green-500' >
                    {category} 
                </div>
                <div className='absolute top-0 right-0 text-white rounded-full bg-green-500 w-[35px] h-[35px] flex  flex-col justify-center item-center mr-2 mt-2'>
                    <div className='text-xs leading-3 text-center '>{cdate[0]}</div>
                    <div className='text-xs leading-3 text-center '>{cdate[1]}</div>
                </div>
                
            </div>
            <div className="text-xl text-black-500 leading-5 mt-2 mx-2 group-hover:text-green-400 transition transform duration-300">{`${title.substring(0, 50)} ${title.length>50?"...":""}`}</div>
            <div className="text-sm text-green-400 leading-5 mt-2 mx-2 group-hover:text-gray-400 transition transform duration-300">{`${substring.substring(0,40)} ${substring.length>30?"...":""}`}</div>

            <div className='flex flex-row mt-3 mx-2 '>
                <div className="text-xs text-gray-300 mr-2">{`${minutes} min`}</div>
                <div className="text-xs text-gray-300">{`${comments} comments`}</div>
            </div>
        </div>
    )
}
export default Card;