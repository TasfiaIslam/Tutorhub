const Ttile = ({title}) => {
    return ( 
        <div className="py-4 flex justify-between border-b border-gray-300">
            <div className="text-gray-500 font-semibold text-xl">
                {title}
            </div>
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-blue-400 rounded h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
        </div>
     );
}
 
export default Ttile;