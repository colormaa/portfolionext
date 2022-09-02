import Image from 'next/image';
import React from 'react';
import {FiMoreHorizontal} from 'react-icons/fi'
const ItemTemp=({ id="", title="Porject 1", tag="CSS, HTML", url1="", onClick=()=>{}})=>{
    return(
        <div className='relative h-[100%] w-[100%] overflow-hidden group rounded-0 ' >
            <img src={url1} className="w-[100%] h-[150px] object-cover"  alt="" />
            
            {/* <div className='topTriangle bg-red-200 absolute w-full h-full  top-0 transform translate duration-400'>
            </div>
            <div className='bottomTriangle bg-red-200 absolute w-full h-full  top-0 transform translate duration-400'>
            </div> */}
            <div onClick={()=>{onClick()}} className='overview absolute transition transform  duration-300 ease-in-out opacity-0  top-0 group-hover:opacity-100   left-0 h-full w-full  flex flex-col justify-between p-3 z-100 '>
                    <div className='absolute w-[100%] h-[100%] top-0 right-0 left-0 bottom-0 opacity-80 bg-green-500 -z-[100] '></div>
                    <h4 className='leading-3 text-white'>{title}</h4>
                    <div className='flex flex-row justify-between'>
                        <h4 className='leading-3 text-white'>{tag}</h4>
                        {/* <h5 ><FiMoreHorizontal/></h5> */}

                        <div className='leading-3 text-white'><FiMoreHorizontal size={20} color='white'/></div>
                    </div>
            </div>
        
        </div>
    );
}
export default ItemTemp;