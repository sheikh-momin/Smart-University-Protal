import React from 'react';
import Testing from './Testing';

const TeacherProfile = () => {
    return (
        <div className='container mx-auto w-1/2'>
            
            
            <form  className='grid grid-cols-1 gap-4 mt-6'>
            
            <p>Name</p><input name='name' type="text" disabled placeholder="Your Name" value="tanvir" className="input input-bordered w-full " />
            <p>Email</p><input name='email' type="email" disabled placeholder="Email Address" value="tanvir" className="input input-bordered w-full " />
            <p>Address</p><input name='phone' type="text" disabled placeholder="Address" value="tanvir" className="input input-bordered w-full " />
            <p>University</p><input name='phone' type="text"disabled placeholder="University" value="tanvir" className="input input-bordered w-full " />
                        <br />
                        {/* <input className='w-full  btn btn-accent' type="submit" value="submit" /> */}
                        <label htmlFor="my-modal-3" className="btn bg-teal-700">Edit Profile</label>
                    </form>
        </div>
    );
};

export default TeacherProfile;