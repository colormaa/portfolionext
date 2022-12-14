import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Card from '../components/card'
import Item from '../components/Item'
import ItemTemp from '../components/ItemTemp'
import Modal from '../components/modal'
import Navbar from '../components/navbar'
interface ProType{
  url:string,
  tag:string,
  title:string,
  id:string,
  description:string
}
const projects=[
  {
    url:"https://drive.google.com/uc?id=1FNM1cJyRD_W5SvfTh6GkO2yD-KALZP0b&export=download",
    tag:"REACT NODEJS",
    title:"English Mongolian reader with dictionary",
    id:"1",
    description: "English Mongolian  reader web when user click on word it gets mongolian translation  from server.",
    projectlink:"https://readerf.vercel.app",
  },
  {
    url:"https://play-lh.googleusercontent.com/XRWNQkY4_UfXUQfAyKRaFNR6qaxt6E4rCX_BhPM-_zJFUjZeRwEzRHtP7wTX8XzUmQ=w5120-h2880-rw",
    tag:"REACT NATIVE, REDUX, JS",
    title:"Able Works",
    id:"1",
    description: "This is the mobile version of the Able system's Business app, and if you're an Able user, you can log in and use the app on your own. This 'Able Works' application allows you to monitor your work from your mobile phone, plan and execute your work without delay, wherever you go. Since then, when the work or home internet is down, it is possible to connect to the system with the phone's '3G' and get the job done.",
    projectlink1:"https://play.google.com/store/apps/details?id=able.works",
    projectlink2:"https://apps.apple.com/us/app/able-works/id1195754496"
  },
  {
    url:"https://play-lh.googleusercontent.com/SO3RBLxF9tc0j-4lB_4NIaS1urFbTJGJBcZ5VRSsU5jjVqtEOV5KLl4kh5QEFLWTVQ=w5120-h2880-rw",
    tag:"REACT NATIVE, REDUX, JS",
    title:"Able Norms",
    id:"1",
    description: "Normative applications enable the execution and monitoring of daily and frequent activities according to normative instructions.",
    projectlink1:"https://play.google.com/store/apps/details?id=com.ableNorms",
    projectlink2:"https://apps.apple.com/us/app/ablenormative/id1528457446"
  },
  // {
  //   url:"https://tailwindui.com/img/maccaw-profile.jpeg",
  //   tag:"HTML",
  //   title:"html design",
  //   id:"1",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum ab, earum quidem ducimus amet odit nostrum minima, nemo dicta itaque fugiat minus rerum esse eius voluptate reiciendis quae sequi."
  // },
  // {
  //   url:"https://tailwindui.com/img/maccaw-profile.jpeg",
  //   tag:"HTML",
  //   title:"html design",
  //   id:"1",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum ab, earum quidem ducimus amet odit nostrum minima, nemo dicta itaque fugiat minus rerum esse eius voluptate reiciendis quae sequi."
  // },
  // {
  //   url:"https://tailwindui.com/img/maccaw-profile.jpeg",
  //   tag:"HTML",
  //   title:"html design",
  //   id:"1",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum ab, earum quidem ducimus amet odit nostrum minima, nemo dicta itaque fugiat minus rerum esse eius voluptate reiciendis quae sequi."
  // },
]
const blogs=[
  {
    createdDate:"2 SEP", 
    category:"Ruby on Rails",
    title:"One to one relationship in ruby on rails",
    substring:"",
    minutes:"1", 
    comments:"0",
    imageurl:"https://miro.medium.com/max/1400/1*dv29NiSoAJeGkbHJeEkNPQ.jpeg",
    blogurl:"https://medium.com/@crustalmaa/one-to-one-relationship-in-ruby-on-rails-322adf81ca5e"
  },
  {
    createdDate:"10 SEP",
    category: "Next Prisma GraphQL",
    title:"Creating nextjs tailwind graphql typescript project part1",
    substring:"",
    minutes:"10",
    comments:"0",
    imageurl:"https://miro.medium.com/max/1400/1*5HPdR0d3i0PfZarQpwzm3w.png",
    blogurl:"https://medium.com/@crustalmaa/creating-nextjs-tailwind-graphql-typescript-project-part1-27bfc01b6c3e"
  }
  
]

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [project, setProject]=useState<ProType>();
  const [showProject, setShowProject]=useState(false);
  const handleSubmit=(e:any)=>{
      e.preventDefault();
      const data = {
        email, 
        message,
        name
      };
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          //setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }
      });

  }
  const aboutme =  "React Native, React, Nodejs developer in Mongolia. "
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative">
       {showProject==true&&<Modal project={project} onClose={()=>{
        setShowProject(false);
        
        }}/>}
      <Head>
        <title>Bolormaa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-screen flex-col">
        <Navbar/>
        <a id="home"></a>
        <div className=' px-0 md:px-20 h-[100%] bg-white-200 pt-[4rem]  overflow-scroll'>
          <div className="drop-shadow-2xl bg-white rounded-lg min-h-[500px] sm:min-h-[60vw] max-h-[500px] relative overflow-hidden">
            <div className='absolute -z-10 t-0  w-full  '>
              <div className='bg-green-400 h-[200px] sm:h-[30vw]  w-full relative flex flex-column justify-end'>
              
                  <Image
                    src={"/image/sp_main_bg.png"}
                    alt={""}
                    className="-z-100"
                    layout="fill"
                    objectFit="contain"
                  />
                <div className="mt-[2vw]  w-[100%] md:w-[100%] h-[100%]   absolute r-10 flex flex-col md:flex-col justify-center items-center">
                  <div className='transform    transition duration-400 hover:-translate-y-3   ease-out relative  bg-white w-[10vw] rounded-full overflow-hidden h-[10vw] p-1 drop-shadow-none  hover:drop-shadow-2xl '>
                    <img width={"350px"} className="rounded-full " height="350px" src='https://drive.google.com/u/0/uc?id=1mQ7_pqEbLQ9L_k6O1cmElAIfS18ZzC2E&export=download'/>
                  </div>
                  <div className='flex flex-col'>
                  <div className='flex flex-row text-2xl md:text-4xl lg:text-6xl text-white'>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>B</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>o</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>l</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>o</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>r</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>m</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>a</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>a</div>

                    <div className='w-[20px]'></div>

                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>E</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>n</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>k</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>h</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>b</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>a</div>
                    <div className='transform transition duration-300 hover:scale-130 hover:text-green-800 hover:drop-shadow-xl hover:px-1 hover:-translate-y-2 ease-in-out'>t</div>
                    
                    </div>
                  <h6 className='text-white text-center'>Web mobile developer</h6>
                  <h6 className='text-white text-center'>https://github.com/colormaa</h6>
                  </div>
                </div>
              </div> 
              <div className='bg-white-400 w-full h-[50%] md:h-[30%] max-h-[300px]'>
                <div className=' flex flex-col md:flex-row mt-3 md:mt-10 py-5 sm:py-10'>
                  <div className=' w-[80%] md:w-[50%] ml-11 mr-5'>
                    <div className='text-2xl'>About <span className='text-green-500'>Me</span></div>
                    <div className='flex flex-row flex-wrap text-gray-400 text-sm mt-4'>
                      {aboutme.split(" ").map((mm, mid)=>{
                        return(
                          <>
                            {mid!==0&& <div>&nbsp;</div>}
                            <div className='link link-underline link-underline-black transform transition hover:text-green-500 '>{mm}</div>

                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div className='w-[90%] md:w-[50%] md:mt-0 mt-10 ml-11 md:ml-5 mr-5 md:mr-10'>
                    <div className='flex flex-row h-[30px] '>
                      <div className='text-sm w-[100px] transition transform hover:text-gray-400 '>Country</div>
                      <div className='text-sm w-[100px] text-gray-400 text-gray-400 transition transform hover:text-green-400'>Mongolia</div>
                    </div>
                    <div className='flex flex-row h-[30px]'>
                      <div className='text-sm w-[100px]  transition transform hover:text-gray-400'>City</div>
                      <div className='text-sm w-[100px] text-gray-400 text-gray-400 transition transform hover:text-green-400'>Ulaanbaatar</div>
                    </div>
                    <div className='flex flex-row h-[30px]'>
                      <div className='text-sm w-[100px]  transition transform hover:text-gray-400'>Email</div>
                      <div className='text-sm w-[100px] text-gray-400 text-gray-400 transition transform hover:text-green-400'>crustalmaa@gmail.com</div>
                    </div>
                    <div className='flex flex-row h-[30px]'>
                      <div className='text-sm w-[100px]  transition transform hover:text-gray-400'>Freelance</div>
                      <div className='text-sm w-[200px] text-gray-400 text-gray-400 transition transform hover:text-green-400'>Available</div>
                    </div>
                    <div className='flex flex-row h-[30px]'>
                      <div className='text-sm w-[100px]  transition transform hover:text-gray-400'>Hobby</div>
                      <div className='text-sm w-[200px] text-gray-400 transition transform hover:text-green-400'>Watch good movie, Shopping</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
           
            
          </div>
          {/* projects */}
          <div className=' px-10 md:px-0 mt-[10rem] mb-[5rem]'>
                <a id="project"><div className='text-3xl mb-[4rem] text-green-400 text-center'>Projects</div></a>
                <div className='grid grid-cols-8  justify-between gap-4  w-full '>
                  {projects.map((pro:ProType, pid)=>{
                    return(
                      <div key={pid} className='col-span-4  md:col-span-2'>
                        <ItemTemp   id={pro.id} title={pro.title} tag={pro.tag} url1={pro.url} 
                        onClick={()=>{
                          setShowProject(true);
                          setProject(pro);
                        }}/>
                      </div>
                    )
                  })}
                  
                  
                </div>
                

          </div>
          {/* blogs */}
          <div className='px-10 md:px-0 mt-[10rem]  mb-[5rem]'>
            <a id="blog"><div className='text-3xl mb-[4rem] text-green-400 text-center'>Blog</div></a>
            <div className='grid grid-cols-6 gap-4'>
              {blogs.map((bb, bid)=>{
                return(
                  <div  key={bid} className=" col-span-6 sm:col-span-3 md:col-span-2 ">
                    <Card title={bb.title} imageurl={bb?.imageurl} blogurl={bb.blogurl} substring={bb.substring} createdDate={bb.createdDate} minutes={bb.minutes}  category={bb.category} comments={bb.comments}/>
                  </div>
                  
                )
              })}
            </div>

          </div>
          {/* contact */}
          <div className='px-10 md:px-0 mt-[10rem] mb-[5rem]'>
         <a id="contact"> <div className='text-3xl mb-[4rem] text-green-400 text-center'>Contact Me</div></a>
          <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg">
              
                <div className="w-full px-3 mb-3">
                 
                  <input value={name} onChange={(e)=>{
                    setName(e.target.value)
                  }} required className="appearance-none block w-full bg-white-100 text-gray-700 border border-gray-200 rounded-0 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
                  
                </div>
                

              
              <div className="w-full px-3 mb-3">
                 
                  <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                  }} required className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter email"/>
                </div>
                <div className="w-full px-3">
                  
                  <textarea value={message} onChange={(e)=>{
                    setMessage(e.target.value)
                  }} required className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 h-[200px] rounded-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="grid-text-area" placeholder="Your message"></textarea>
                </div>
                <div className='px-3 flex flex-row  justify-end mt-3'>
                      <button  className='transform transition hover:bg-green-300 bg-green-500 text-white px-6 py-2' type="submit">Send</button>
                </div>
              
           </form>

          </div>


        </div>

      </main>
      

      
     
    </div>
  )
}

export default Home;