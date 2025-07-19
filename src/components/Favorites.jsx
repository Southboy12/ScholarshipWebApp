import { FiSearch } from 'react-icons/fi'
import ScholarshipDetails from './ScholarshipDetails'

const Favorites = () => {
  return (
    <>

      {/* Search */}
      <div className='relative border border-gray-300 rounded-lg mb-6'>
        <FiSearch style={{ position: 'absolute', top: '25px', left: '10px', width: '25px', height: '25px', color: 'gray'}} />        
        <input 
          className=' w-full py-6 px-12 outline-none'
          type="search" 
          name=""
          placeholder='Search by name...'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {/* Card */}
        <ScholarshipDetails />
        <ScholarshipDetails />
        <ScholarshipDetails />
        <ScholarshipDetails />
        <ScholarshipDetails />
        <ScholarshipDetails />
      </div>

    </>
  )
}

export default Favorites