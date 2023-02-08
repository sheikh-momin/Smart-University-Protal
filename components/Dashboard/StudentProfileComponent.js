import ProfileForm from "../ProfileForm";


const StudentProfileComponent = () => {
  return (
    <div>
      <div className="bg-zinc-300 mt-5">



        <div className="border-y border-slate-400 py-2">
          <h1 className="text-center text-blue-500 text-3xl font-bold italic font-serif">
            Student Profile
          </h1>
        </div>

        <div>
          <div className="flex justify-center  ">
            <div className="grid grid-cols-1 gap-4 my-20">
              <ProfileForm></ProfileForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileComponent;