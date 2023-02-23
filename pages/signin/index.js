import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import login from "../../public/Login.json";
import circle from "../../public/circle.json";
import success from "../../public/success.json";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

const index = () => {
  const { logIn, loginWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleSignIn = (data) => {
    
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast(`Successfulluy SignIn`, {
          icon: (
            <div className="w-10 ">
            <Lottie
              animationData={circle}
              loop={true}
             
            />
            </div>
          ),
        });
        console.log(user);
        
      })

      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("🚀 ~ file: Login.js ~ line  ~ .then ~ user", user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  return (
    <>
      <Navbar></Navbar>
      
      <section className="p-5">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="inset-y-0 right-0">
              <div className="w-11/12 grid justify-center ">
                <Lottie animationData={login} loop={true} />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="flex justify-center">
                <div className="card shadow p-12 py-8 bg-base-200 ">
                  <h2 className="text-primary text-2xl mb-5">Sing In</h2>

                  <form onSubmit={handleSubmit(handleSignIn)}>
                    <input
                      {...register("email", { required: true })}
                      placeholder="Enter Email"
                      className="input input-bordered input-primary w-full  mb-5"
                    />
                    <input
                      {...register("password", { required: true })}
                      placeholder="Enter Password"
                      type="password"
                      className="input input-bordered input-primary w-full  mb-5"
                    />

                    <input
                      className="btn btn-primary w-full mb-5"
                      type="submit"
                    />
                  </form>
                  <div className="divider">OR</div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full btn btn-outline"
                  >
                    Contuine With Google
                  </button>
                  <p className="mt-5">
                    Did not have an account ?{" "}
                    <Link className="text-primary" href="./signup">
                      please Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default index; 
