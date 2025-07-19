import { FaVideo, FaRegFileAlt, FaAngleRight, FaFileExcel, FaCloudDownloadAlt } from 'react-icons/fa'


const Apply = () => {
  return (
    <div className='mt-30 w-5/12 mx-auto'>
      <h1 className='text-xl mb-6 font-semibold'>Resources on how to apply for Scholarships</h1>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-4'>
          <div className='text-gray-500 font-medium flex items-center gap-2'>
            <FaVideo size={18}/>
            <p>Videos</p>
          </div>
          <div className='text-gray-500 font-medium flex items-center gap-2'>
            <FaRegFileAlt size={18} />
            <p>Template</p>
          </div>
        </div>
        <h2 className='text-xl font-medium '>Templates</h2>
        <div className=' '>
          <div className='flex justify-between items-center px-4 py-4 border-2 border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500'>
            <div className='flex items-center gap-4'>
              <FaRegFileAlt size={24} />
              <h2 className='text-lg font-medium'>Course Selection</h2>
            </div>
              <FaAngleRight size={24} />
          </div>
          <div className='hidden'>
            <div className='border-2 border-blue-100 w-[48%] py-4 px-6 my-8 rounded-xl flex flex-col gap-4 hover:bg-blue-50'>
              <div className='flex items-center gap-6'>
                <FaFileExcel className='w-1/3 h-1/3 text-green-800' />
                <div className='flex flex-col gap-4'>
                  <h2 className='text-xl font-medium '>ECTS Conversion Sheet</h2>
                  <p className='text-sm text-gray-500'>This file helps you convert your local credits to ECTS. ECTS is the grading system that is used in most of Europe.</p>
                </div>
              </div>
              <button className='bg-blue-500 text-white py-2 w-full rounded flex justify-center items-center gap-2'>Download <FaCloudDownloadAlt color='' size={20} /> </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply