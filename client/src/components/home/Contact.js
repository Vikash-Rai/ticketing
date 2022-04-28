import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { registerTicket, uploadFile } from '../../services/api';

const initialValues={
    summary:'',
    description:'',
    issuetype:''
}



const Contact = () => {
    const[ticket,setTicket]=useState(initialValues);
    const [file, setFile] = useState("");

    useEffect(() => {
        const getImage = async () => {
          if (file) {

            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);
            console.log(data)
           
            await uploadFile(data);
           
            // post.picture = image.data;
            // setImage(image.data);
          }
        };
        getImage();
      }, [file]);


    const handleChange=(e)=>{
        setTicket({...ticket,[e.target.name]:e.target.value})
    }
    const registerTic=async()=>{
        const newdata = await registerTicket(ticket);
        console.log(newdata)
    }

    return (
        <>
           
            <div className='bg-gradient-to-r from-purple-200 via-violet-300 to-violet-400 block items-center justify-center p-4 md:flex'>
                <div className='mt-16 bg-cover bg-purple-700 flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row '>

                    <div className='backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2'>
                        <h1 className='font-bold text-3xl'>NameHere</h1>
                        <p className='italic text-lg'>For Websites Services</p>

                    </div>
                    {/**form */}
                    <div className='bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2'>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-medium text-purple-700 text-xl'>Welcome D</h1>
                            <p>Sign Up D!</p>
                        </div>
                        {/**Inputs */}
                        <form className='flex flex-col items-center space-y-4'>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='relative'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Summary
                                    </label>
                                    <input name="summary" onChange={(e)=>handleChange(e)} className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="username..." type="text" />
                                </div>
                                <div className='relative lg:px-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Description
                                    </label>
                                    <input  name="description" onChange={(e)=>handleChange(e)} className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="username..." type="text" />
                                </div>
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        IssueType
                                    </label>
                                    <input  name="issuetype" onChange={(e)=>handleChange(e)} className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="username..." type="text" />
                                </div>
                                <div className='relative mt-2'>
                                    <label className="block text-violet-700 text-sm  mb-2" for="username">
                                        Upload
                                    </label>
                                    <input  name="photo" onChange={(e) => setFile(e.target.files[0])} className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-400' placeholder="username..." type="file" />
                                </div>
                                
                                
                                <div className='relative px-2 mt-2'>
                                    
                                <Link to = "/contact"> <button onClick={()=>registerTic()} className='mt-7 bg-violet-700 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-violet-500' type="submit">
                                  Submit Issue
                </button></Link>
                                </div>

                            </div>

                        </form>
                        {/**Links */}
                        <div className='flex flex-col items-center'>
                            <p className='italic'> Already Having Account</p>
                            <Link to = "/docLogin"> <a className='ml-1 text-green-400 hover:underline'>Login Now</a></Link>

                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='italic'> Forgot Password!</p>
                            <a className='ml-1 text-green-400 hover:underline'>Reset Password Here!</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact