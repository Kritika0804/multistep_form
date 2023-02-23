import React, { useState } from 'react'
import  '../images/profile.webp'

import Right from './Right'
import Leftmenu from './Leftmenu'
import '../components/steps/Account'
import '../components/steps/Details'
import '../components/steps/Final'
import '../components/steps/Payment'




function Mainpage() {

 

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900">
        <Leftmenu />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Multi-step form */}
            <Right />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
