import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";

const index = () => {
  const { logIn, loginWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleSignIn = (data) => {
    console.log("data", data);
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("Successfully Sing In ");
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
      <div className="flex justify-center">
        <div className="card shadow p-12 py-12 bg-base-200 w-96">
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
              className="input input-bordered input-primary w-full  mb-5"
            />

            <input className="btn btn-primary w-full mb-5" type="submit" />
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


     
    </section>
   </>
  );
};

export default index;
