import React from "react";
import TeacherForm from "./TeacherForm";
import Testing from "./Testing";

const TeacherProfile = () => {
  return (
    <div className="container mx-auto w-1/2">
      <div className="border-y border-slate-400 py-2">
        <h1 className="text-center text-blue-600 text-3xl font-bold italic font-serif">
          Tacher's Profile
        </h1>
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 gap-4 my-20">
          <TeacherForm></TeacherForm>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
