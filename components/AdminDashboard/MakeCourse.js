import React from 'react';

const MakeCourse = () => {
    return (
        <div>
            <form >

<div className="w-1/2 mx-auto">
  <div className="form-control ">
    <label className="label">
      <span className="label-text text-2xl font-semibold">Subject Name</span>
    </label>
    <input type="text"  name="year" placeholder="Subject Name" className="input input-bordered" required />
    
  </div>
  <div className="form-control ">
    <label className="label">
      <span className="label-text text-2xl font-semibold">Subject Code</span>
    </label>
    <input type="text"  name="year" placeholder="Subject Code" className="input input-bordered" required />
    
  </div>
  <input type="submit" className="btn btn-primary mt-5 w-full" />
  </div>
  
</form>
        </div>
    );
};

export default MakeCourse;