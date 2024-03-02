import React from 'react'
import GenderCheck from './GenderCheck'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[75vw] md:min-w-[50vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">
        <h1 className="text-3xl font-semibold text-center text-white">
          <div className="text-orange-300 p-1 text-4xl">ChatApp</div>
          Signup
        </h1>
        <form>
          <div>
            <label className="label p-2 pt-9">
              <span className="text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Brad Pitt"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="bradpitt"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <GenderCheck />
          
          <a
            href="#"
            className=" text-sm hover:underline hover:text-black mt-7 inline-block "
          >
            Already have an account?
          </a>
          <div>
          <button className="btn btn-block btn-outline hover:bg-slate-900 hover:text-white mt-2 text-black">SIGNUP</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup