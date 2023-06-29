"use client"
import Image from "next/image";
import Link from "next/link";
import loginImg from "@/assets/login/login.png";

import React, { useContext, useState } from "react";
import AuthContext from "@/contexts/AuthContext";
export const metadata = {
    title: "NeXt Dashboard - Register",
  };
const RegisterPage = () => {
    const {createUser,signIn,profileUpdate} = useContext(AuthContext);
    const [error,setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault()
        setError('')
        const form = e.target;
        const name  = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgurl = form.imgurl.value;
        console.log(name,email,password,imgurl);
        createUser(email,password)
        .then(result => {
            const user = result.user;
            profileUpdate(result.user,name,imgurl)
            .then(() => {

                //todo sweet alert apply
                console.log(user);
                form.reset();
            })
            .catch((err) => {
                console.log(err.message);
            })
        })
        .catch(err => {
            setError(err.message)
        })


    }

   
  return (
    <div className=" max-w-full md:w-8/12 py-20 mx-auto min-h-screen ">
        <div className=" flex items-stretch overflow-hidden bg-white border rounded-xl shadow-xl flex-col lg:flex-row">
          <Image
            width={450}
            height={564}
            className="flex-1"
            placeholder="blur"
            src={loginImg}
            alt="loginIMg"
          ></Image>
          <div className="card p-5 md:p-10 flex-1">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Register now!</h1>
              <p className="pb-6">Donec tortor quam at duis tortor.</p>
            </div>
            <form  onSubmit={handleRegister} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                required

                  placeholder="Placeholder content"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Img Url</span>
                </label>
                <input
                  type="text"
                  name="imgurl"
                required
                  placeholder="Placeholder content"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-red-600 text-center">{error}</p>
            <div className="divider">OR</div>
            <Link
              className="btn mt-auto border-2 bg-transparent border-black"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
 
    </div>
  );
};

export default RegisterPage;
