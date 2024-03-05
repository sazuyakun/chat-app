import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useLogin}  from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};


  return (
    <div className="flex flex-col items-center justify-center min-w-[75vw] md:min-w-[50vw] mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <h1 className="text-3xl font-semibold text-center text-white">
          <div className="text-orange-300 p-1 text-4xl">ChatApp</div>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 pt-9">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className=" w-full input input-bordered h-10"
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={'/signup'}
            className=" text-sm hover:underline hover:text-black mt-2 inline-block px-2"
          >
            {"Don't"} have an account?
          </Link>

          <div>
          <button className="btn btn-block btn-outline hover:bg-blue-700 hover:text-white mt-2 text-black"
            disabled={loading}
          >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "LOGIN"
          )}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
