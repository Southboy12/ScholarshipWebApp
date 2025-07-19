import { Link } from 'react-router-dom'
import { FiLink } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const ScholarshipDetails = () => {
  return (
    <>
      <div className='border border-gray-300 pl-8 pr-4 pt-8 pb-4 rounded-lg shadow-2xl hover:border-blue-300 hover:border-2'>
          <div className='flex items-center gap-2 mb-4 font-medium w-10/12'>
            <h1 className='text-blue-500 font-bold'>CH</h1>
            <p className='text-sm'>Chevening Scholarship</p>
          </div>

          <div className='text-sm pr-2 mb-4'>
            <ul className='flex flex-col gap-2'>
              <li>
                <p className='font-light'><span className='font-medium'>Value: </span>Fully-funded (flights, accomodation, and course fees are all included)</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Application starts: </span>Nov 7, 2005</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Application ends: </span>Nov 7, 2005</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Study level: </span>Master's degree</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Area of specialization: </span>All Discipline</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Host Country: </span>United Kingdom</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Eligible Countries: </span>All nationalities</p>
              </li>
              <li>
                <p className='font-light'><span className='font-medium'>Requirements: </span>Work experience, research experience</p>
              </li>
            </ul>
          </div>
          <Link className='text-blue-500 text-xs flex items-center gap-1'>
            <FiLink />
            <p>Application link</p>
          </Link>   
          <div className='flex justify-end items-center gap-2'>
            <FaWhatsapp className='cursor-pointer text-green-600 w-8 h-8' />
            <button className='bg-red-700 text-white text-xs px-4 py-2 rounded cursor-pointer'>Unfollow</button>
          </div>         
        </div>
    </>
  )
}

export default ScholarshipDetails