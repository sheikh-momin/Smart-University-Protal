import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const index = () => {
  const { createUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");

  // const location = useLocation();
  // const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    console.log("data", data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        console.log(user);
      })

      .catch((error) => console.log(error));
  };

  return (
   <>
   <Navbar></Navbar>
    <section className="p-5" >
      <div className="flex justify-center">
        <div className="card shadow p-12 py-12 bg-base-200  w-96">
          <h2 className="text-primary text-2xl mb-5">Sign Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <input
              {...register("name", { required: true })}
              placeholder="Enter Name"
              className="input input-bordered input-primary w-full  mb-5"
            />

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

          <p>
            Already have an account ?{" "}
            <Link className="text-primary" href="/signin">
              please Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
   </>
  );
};

export default index;
