import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import DashboardNavbar from "./dashboardNav/DashboardNavbar";

const payment = () => {
  const { user } = useContext(AuthContext);
  const [payment, setPayment] = useState([]);
  const [semester, setSemester] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSemester = (e) => {
    setSemester(e.target.value);
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/payment/${semester}`)
        .then((res) => res.json())
        .then((data) => {
          setPayment(data);
        });
      setLoading(false);
    }
  }, [user, semester]);
  console.log(user?.email);

  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <div className="bg-[#e4e4e7] pb-80">
        <DashboardNavbar></DashboardNavbar>
        <div className="bg-slate-200 drop-shadow-lg py-3 mt-3">
          <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">
            Payment History
          </h1>
        </div>

        <div className="md:mx-40 flex justify-center mt-5">
          <label className="label mr-1">
            <span className="label-text">Select Semester</span>
          </label>
          <select
            onChange={handleSemester}
            name="semester"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select
            </option>
            <option>Spring-2022</option>
            <option>Autumn-2022</option>
            {/* <option>Summer-2022</option> */}
          </select>
        </div>

        <div className="overflow-x-auto mt-20 md:mx-40">
          <table className="table w-full">
            <thead className="">
              <tr>
                <th className="bg-cyan-500">Description</th>
                <th className="bg-cyan-500">Debit</th>
                <th className="bg-cyan-500">Balance</th>
              </tr>
            </thead>
            <tbody>
              {user?.email === payment?.email ? (
                payment?.fee?.map((p, i) => (
                  <tr key={i}>
                    <th>{p.Fee}</th>
                    <th>{p.debit}</th>
                    <th>{p.balance}</th>
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default payment;
