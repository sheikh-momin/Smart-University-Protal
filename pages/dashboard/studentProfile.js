import React from "react";
import Navbar from "../../components/Navbar";
import ProfileForm from "../../components/ProfileForm";

const StudentProfile = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-teal-700 text-3xl font-bold italic font-serif">
          Student Profile
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 my-20">
          <ProfileForm></ProfileForm>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
