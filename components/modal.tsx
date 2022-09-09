import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ItemTemp from './ItemTemp';
interface ModalType{
    project:any,
    onClose: Function
}
const Modal=({project, onClose}:ModalType)=>{
    const router = useRouter()
    if(project==undefined)
    return<></>
    return(
          
            <div style={{zIndex:9999}} className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen  '>
                <div className='relative w-full h-full'>
                    <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-gray-800 opacity-70 '></div>
                    <div style={{overflowY:"scroll"}}  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full  justify-center items-center flex " >
                        <div className="relative p-4 mb-3 w-full max-w-2xl h-full  ">
                            <div className="relative bg-white mb-2 rounded-lg bg-white-700">
                                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-green-500">
                                        {project.title}
                                    </h3>
                                    <button  onClick={()=>{onClose()} }  type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div>
                                    <img src={project.url} alt="" />
                                </div>
                                <div className='text-green-500 font-semibold px-6  pt-6'>
                                    {project.tag}
                                </div>
                                <div className="p-6 space-y-6">
                                    
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button onClick={()=>{onClose()} } type="button" className="text-white bg-green-500 hover:bg-green-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Close</button>
                                    
                                    {project?.projectlink&&<button onClick={()=>{
                                        router.push(project.projectlink)
                                    }} type="button" className="text-green-500 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none  rounded-lg border border-green-200 text-sm font-medium px-5 py-2.5 hover:text-green-600 focus:z-10 ">Web</button>}

                                    {project?.projectlink1&&<button onClick={()=>{
                                        router.push(project.projectlink1)
                                    }} type="button" className="text-green-500 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none  rounded-lg border border-green-200 text-sm font-medium px-5 py-2.5 hover:text-green-600 focus:z-10 ">Android</button>}
                                    {project?.projectlink2&&<button  onClick={()=>{
                                        router.push(project.projectlink2)
                                    }} type="button" className="text-green-500 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none  rounded-lg border border-green-200 text-sm font-medium px-5 py-2.5 hover:text-green-600 focus:z-10 ">IOS</button>}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            
        
    )
}
export default Modal;