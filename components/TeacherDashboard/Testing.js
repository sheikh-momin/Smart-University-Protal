import React from 'react';

const Testing = () => {
    return (
        <div>
           <form >
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" value="tanvir" disabled
                            // {...register("name" ,{
                            //     required: "Name is Required",
                            // })} 
                            className="input input-bordered w-full max-w-xs" />
                       
    </div>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" value='tanvir' disabled
                            // {...register("email")} 
                            className="input input-bordered w-full max-w-xs" />
                        
    </div>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Address</span></label>
                        <input type="text"  
                            // {...register("address")}
                            className="input input-bordered w-full max-w-xs" />
                        
                    </div>
    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">university</span></label>
                        <input  type="text" 
                            // {...register("university")} 
                            className="input input-bordered w-full max-w-xs" />
                       
                    </div>
    
    <input className='btn btn-accent w-full my-3' value="Update" type="submit" />
    </form>    
        </div>
    );
};

export default Testing;