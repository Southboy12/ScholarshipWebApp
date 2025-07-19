import { NavLink } from "react-router-dom"
import { FaGraduationCap, FaVideo, FaUsers, FaDollarSign, FaCreditCard, FaRegClipboard, FaUser } from 'react-icons/fa'

const Nav = () => {

    const activeStyles = {
        backgroundColor: "rgba(55, 65, 81, 1)",
        color: "white",
        padding: "10px ",
        borderRadius: "10px",
        
    }

  return (
    <div className="bg-black h-screen">
        <div className="text-gray-400">
            <div className="text-white text-lg font-bold p-5">scholars.africa</div>
            <div className="mt-33 pl-1 pr-2">
                <ul className="flex flex-col gap-6">
                    <li>
                        <NavLink to="/dashboard?page=scholarship&tab=favourites" end style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaGraduationCap className="w-full" /></button>
                            <p className="">Scholarships</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/apply" style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaVideo className="w-full" /></button>
                            <p className="">How to apply</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/support" style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaUsers className="w-full" /></button>
                            <p className="">Support groups</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/earning" style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaDollarSign className="w-full" /></button>
                            <p className="">Your earnings</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/card" style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaCreditCard className="w-full" /></button>
                            <p className="">Dollar card</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/tracker" style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaRegClipboard className="w-full" /></button>
                            <p className="">Tracker</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" style={({isActive}) => isActive ? activeStyles : null} className="flex items-center gap-2">
                            <button className="w-4 h-4 ml-3"><FaUser className="w-full" /></button>
                            <p className="">Your profile</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav