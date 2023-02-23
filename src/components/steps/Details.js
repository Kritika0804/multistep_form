import React, { useState } from 'react'
import axios from 'axios';

function Details() {


  const url="http://localhost:3000/";
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });


  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    console.log(name)
    
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    e.preventDefault();
    axios.post(url,{
      firstname:userDetails.firstname,
      firstname:userDetails.lastname,
      firstname:userDetails.email,
      
    })
    .then(res=>{
      console.log(res.userDetails)
    })
  };

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({
  //     userDetails,
  //     addressDetails,
  //     workDetails,
  //   });
  // };


  return (
    <div>
     <form>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">User Details</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Jane"
              value={userDetails.firstName}
              onChange={handleUserDetailsChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={userDetails.lastName}
              onChange={handleUserDetailsChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
              </label>
              <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder="jane.doe@example.com"
              value={userDetails.email}
              onChange={handleUserDetailsChange}
            />
            
          </div>
          </div>
          </div>

          <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Company Details</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              Company Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Jane"
              value={userDetails.firstName}
              onChange={handleUserDetailsChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Agent Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={userDetails.lastName}
              onChange={handleUserDetailsChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
              </label>
              <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder="jane.doe@example.com"
              value={userDetails.email}
              onChange={handleUserDetailsChange}
            />
            
          </div>
          </div>
          </div>

          
          </form>
    </div>
  )
}

export default Details
