import { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheck from './GenderCheck'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const {loading, signup} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-[75vw] md:min-w-[50vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">
        <h1 className="text-3xl font-semibold text-center text-white">
          <div className="text-orange-300 p-1 text-4xl">ChatApp</div>
          Signup
        </h1>


        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 pt-9">
              <span className="text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Brad Pitt"
              className=" w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({
                ...inputs, fullName: e.target.value
              })} 
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
              value={inputs.username}
              onChange={(e) => setInputs({
                ...inputs, username: e.target.value
              })} 
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
              value={inputs.password}
              onChange={(e) => setInputs({
                ...inputs, password: e.target.value
              })} 
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
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({
                ...inputs, confirmPassword: e.target.value
              })} 
            />
          </div>
          <GenderCheck 
            onCheckboxChange = {handleCheckboxChange}
            selectedGender = {inputs.gender}
          />
          
          <Link
            to={'/login'}
            className=" text-sm hover:underline hover:text-black mt-7 inline-block "
          >
            Already have an account?
          </Link>
          <div>
          <button className="btn btn-block btn-outline hover:bg-slate-900 hover:text-white mt-2 text-black">SIGNUP</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup