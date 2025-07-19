import notificationBell from "/images/bell-icon.svg"
import bottomArrow from "/images/triangle-bottom-arrow-icon.svg"

const Header = () => {
  return (
    <>
        <div className="shadow shadow-blue-200 py-6 mb-6">
            <div className='flex justify-end items-center gap-3 pr-5'>
                <div className='relative w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center'>
                    <img className="w-4 h-4" src={notificationBell} alt="" />
                    <div className='absolute w-3 h-3 rounded-full top-0 right-1 bg-red-500'></div>
                </div>
                <div className='bg-gray-200 w-24 h-12 pl-2 rounded-l-full flex items-center'>
                    <div className='w-10 h-10 bg-red-800 rounded-full flex justify-center items-center'>
                        <h1 className='font-bold text-white'>SC</h1>
                    </div>
                    <div className="w-10 flex justify-center items-center">
                        <img className="w-3 h-3" src={bottomArrow} alt="" />
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Header