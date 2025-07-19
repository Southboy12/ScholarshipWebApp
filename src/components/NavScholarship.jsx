import { Link } from "react-router-dom"


const NavScholarship = ({ tab }) => {

  return (
    <>
      <nav className='bg-gray-200 w-4/12 p-1 rounded-lg mx-auto flex'>
        <Link 
          to="/dashboard?page=scholarship&tab=favourites"
          className={`py-3 flex flex-1 justify-center ${tab === "favourites" ? "bg-white rounded-lg text-blue-500" : null}`}
        >
          <h2 className='font-medium'>My Favourites</h2>
        </Link>
        <Link 
          to="/dashboard?page=scholarship&tab=discover"
          className={`py-3 flex flex-1 justify-center ${tab === "discover" ? "bg-white rounded-lg text-blue-500" : null}`}
        >
          <h2 className='font-medium'>Discover More</h2>
        </Link>
      </nav>
    </>
  )
}

export default NavScholarship