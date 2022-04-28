import React from 'react'

const Home = () => {
  return (
  <>
  <div className='py-5'>
  <div className="grid grid-cols-4 m-16">
      <div>
      <input class="border-x-white rounded-l-full border-l-purple-700 border-2 border-y-violet-700 appearance-none block w-full bg-purple-100 text-violet-700 rounded py-5 px-4 leading-tight focus:outline-violet-700 focus:bg-white focus:border-violet-700 " id="grid-city" type="text" placeholder="Enter City"/>
      </div>
      <div>
      <input class="border-x-white border-y-purple-700 border-2  appearance-none block w-full bg-purple-100 text-violet-700  rounded py-5 px-4 leading-tight focus:outline-violet-700 focus:bg-white focus:border-violet-700" id="grid-city" type="text" placeholder="Enter State"/>
      </div>
      <div>
      <input class="border-x-white border-y-purple-700 border-2  appearance-none block w-full bg-purple-100 text-violet-700  rounded py-5 px-4 leading-tight focus:outline-violet-700 focus:bg-white focus:border-violet-700" id="grid-city" type="text" placeholder="Enter Country"/>
      </div>
      <div>
      <input class="border-x-white rounded-r-full border-r-purple-700 border-2 border-y-violet-700 appearance-none block w-full bg-purple-100 text-violet-700 rounded py-5 px-4 leading-tight focus:outline-violet-700 focus:bg-white focus:border-violet-700" id="grid-city" type="text" placeholder="Enter Zip Code"/>
      </div>

    </div>
  </div>
  </>

  )
}

export default Home