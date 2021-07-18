const Navbar = () => {
    return ( 
        <div className="">
          <div className="flex justify-between mx-12 my-4">
                <div className="flex justify-between space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Search.."></input>
                </div>
                <div className="space-x-4">
                  <a className="text-gray-500 hover:text-blue-500" href="#">Notifications</a>
                  <a className="text-gray-500 hover:text-blue-500" href="#">Profile</a>
                </div>
          </div>
        </div>
     );
}
 
export default Navbar;