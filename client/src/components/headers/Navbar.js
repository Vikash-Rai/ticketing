import React, {useState} from 'react'
import Closemenu from './Closemenu';
import MenuIcon from './MenuIcon';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu]=useState(false);
  const showSideMenu=()=>{
    (menu)?setMenu(false):setMenu(true)}
  return (
    <div className="fixed w-full h-14 :bg-yellow-200 bg-white text-gray-200 flex flex-row justify-between items-center">
       
       <button onClick={()=>showSideMenu()} className="lg:hidden menu-button px-2">
        {(menu)?<Closemenu className="w-8 hover:cursor-pointer hover:opacity-80 transition-all"/>:<MenuIcon className="w-8 hover:cursor-pointer hover:opacity-80  transition-all"/>}
        </button>

    <div className="brand-logo text-2xl text-purple-700 font-bold px-7 ">Webname</div>
      
          
      <ul className="hidden menu-list lg:flex text-purple-700 lg:flex-row flex-row text-xs font-bold pr-7 ">
       <Link to = "/"> <li className="menu-list-item px-2  text-lg"><a href=''>Home</a></li></Link> 
       <Link to = "/about">  <li className="menu-list-item px-2 text-lg "><a href=''>About</a></li></Link>
       <Link to = "/blog"> <li className="menu-list-item px-2 text-lg"><a href=''>Blogs</a></li></Link>
       <Link to = "/contact"> <li className="menu-list-item px-2 text-lg"><a href=''>Contact</a></li></Link>    
      </ul>
     <div className='flex mr-5'>
     <div>
      <Link to = "/docSignup"><button className="rounded-l-full bg-purple-700 hover:bg-purple-500 text-white font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent">
       D
      </button></Link>
      </div>
      <div>
      <Link to = "/patSignup"><button class="rounded-r-full bg-purple-700 hover:bg-purple-500 text-white font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent">
       P
      </button></Link>
      </div>

     </div>
     
      {
        (menu)?sideMenu():''
      }
  
  
  </div>
  
  
)

}
function sideMenu(){
  return(
      <div className='lg:hidden fixed h-auto w-screen top-14 text-purple-700 bg-black'>
        <ul  className=" menu-list flex flex-col text-lg font-bold">
         <li className="menu-list-item py-2  hover:bg-white hover:text-blue-400 text-center"><a>Home</a></li>
         <li className="menu-list-item py-2  hover:bg-white hover:text-blue-400 text-center"><a>About</a></li>
         <li className="menu-list-item py-2  hover:bg-white hover:text-blue-400 text-center"><a>Blog</a></li>
         <li className="menu-list-item py-2  hover:bg-white hover:text-blue-400 text-center"><a>Contact</a></li>
      </ul> 
      
        
        </div>
  )
}

export default Navbar