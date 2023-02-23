import React from 'react'
import {FiMail} from 'react-icons/fi'
import {AiOutlinePhone} from 'react-icons/ai'
import {SlLocationPin} from 'react-icons/sl'
import {CgProfile} from 'react-icons/cg'
import '../images/profile.webp'

function Leftmenu() {
  return (
    // <div>
    //   <h2 className='logo'>BeInsurrance</h2>
    //         <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw1dKDHLJjl2N1TK6YH6AFkN&ust=1677068319672000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLjW5L3Mpv0CFQAAAAAdAAAAABAn'  className='profile-img'/>
    //         <h1>Jacob Jones</h1>
    //         <div className='details'>
    //             <div className='user-detail'>
    //                 <i><FiMail/></i>
    //                 jacobjones@gmail.com
    //             </div>
    //             <div className='user-detail'>
    //                 <i><AiOutlinePhone/></i>
    //                 9876543321
    //             </div>
    //             <div className='user-detail'>
    //                 <i><SlLocationPin/></i>
    //                 D.Y Patil college of Enginnering
    //             </div>
    //             <div className='user-detail'>
    //                 <i><CgProfile/></i>
    //                 Insurrance id 85789
    //             </div>
    //         </div>
    // </div>
    <div className="bg-gray-800 text-gray-100 flex flex-col justify-between h-full py-4 px-6">
      {/* Logo */}
      {/* <div className="flex items-center mb-6">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-8 h-8 mr-2 fill-current text-green-500"
        />
        <h1 className="font-bold text-2xl">My App</h1>
      </div> */}

      {/* Profile Photo */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="../images/profile.webp"
          // alt="Profile Photo"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div>
          <p className="font-medium">John Doe</p>
          <p className="text-sm">johndoe@example.com</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <p className="font-medium mb-2">Contact Info</p>
        <p className="text-sm">+1 (123) 456-7890</p>
        <p className="text-sm">johndoe@example.com</p>
        <p className="text-sm">123 Main St, Anytown USA</p>
      </div>

      {/* Footer */}
      <p className="text-xs">&copy; My App {new Date().getFullYear()}</p>
    </div>
  )
}

export default Leftmenu
