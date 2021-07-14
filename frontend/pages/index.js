import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className="relative flex">

      {/* Sidebar */}
      
      <Sidebar />
      {/* main */}
      <div className="flex-1">
        

          {/* navbar */}
          {/* <header className="px-6 border-b border-gray-200">
      
            <div className="relative">
              <span className="absolute">
              <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              </span>
              <input placeholder="Search"/>
            </div>
            
            <div>

            </div>
          </header> */}

          <Navbar />
          

          {/* content */}
          <Main />
  
      </div>
      
    </div>
  )
}
