import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import DiscoverFilter from '../components/DiscoverFilter'
import FavouritesFilter from '../components/FavouritesFilter'
import Welcome from '../components/Welcome'
import NavScholarship from '../components/NavScholarship'
import Favorites from '../components/Favorites'
import Discover from '../components/Discover'


const Scholarship = () => {

  const [searchParams] = useSearchParams()

  const validTabs = ["favourites", "discover"]

  const tab = searchParams.get('tab')

  return (
    <>
      { tab && !validTabs.includes(tab) 
        ? (<div className='text-center text-red-600 font-semibold mt-10 '>Invalid URL specified</div>) 
        : (
          <>
            <div className="shadow-[0_0_3px_2px_rgba(191,219,254,1)] m-4 rounded py-10 flex justify-center">
        <Welcome />
      </div>

      <div className='w-5/9 py-10 mx-auto'>
        <NavScholarship tab={tab} />

        <section className='mt-15 flex gap-3'>
          <div className='w-1/3'>
            { tab === "favourites" ? <FavouritesFilter /> : <DiscoverFilter />   }
          </div>

          {/* Cards */}
          <div className='flex-1'>
            { tab === "favourites" 
              ? <Favorites /> 
              : <Discover />  }
          </div>
        </section>
      </div>
          </>
        )
      }
      

    </>
  )
}

export default Scholarship