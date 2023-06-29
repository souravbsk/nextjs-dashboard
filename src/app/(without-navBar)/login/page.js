"use client"
import Image from "next/image";
import React, { useContext, useState } from "react";
import loginImg from "@/assets/login/login.png";
import Link from "next/link";
import AuthContext from "@/contexts/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
export const metadata = {
  title: "NeXt Dashboard - Login",
};
const LoginPage = () => {
  const {createUser,signIn,profileUpdate} = useContext(AuthContext);
  const [error,setError] = useState("");
  const search = useSearchParams();

  const from = search.get("redirectUrl") || "/";
  const {replace,refresh} = useRouter()

  const handleLoginUser =(e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      const user = result.user;

      form.reset();
      refresh();
      replace(from);

      console.log(user);
    })
    .catch(err => {
      setError(err.message)
    })

  }


  return (
    <div className=" max-w-full md:w-8/12 py-20 mx-auto min-h-screen ">

    <div className=" flex items-stretch overflow-hidden bg-white border rounded-xl shadow-xl flex-col lg:flex-row">
          <Image width={450} height={564} className="flex-1"  placeholder="blur" src={loginImg} alt="loginIMg"></Image>
        <div className="card p-5 md:p-10 flex-1">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Login now!</h1>
              <p className="pb-6">Donec tortor quam at duis tortor.</p>
            </div>
            <form onSubmit={handleLoginUser}>
              <div className="form-control">
                <label className="label">
                  
                  <span className="label-text">E-Mail</span>
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Placeholder content"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Placeholder content"
                  className="input input-bordered"
                />
                <label className="label justify-end">
                  <a href="#" className="label-text-alt text-lg font-medium link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-red-600 text-center">{error}</p>

            <div className="divider">OR</div>
            <Link className="btn mt-auto border-2 bg-transparent border-black" href="/register">Register</Link>
          </div>
      </div>

    </div>
  );
};

export default LoginPage;
