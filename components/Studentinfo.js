import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';

const Studentinfo = () => {
    return (
        <div>
            <div className="bg-white md:p-8 p-2 rounded-xl">
                <div className="flex gap-36 items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
                        alt=""
                        className="w-20 h-20"
                    />
                    <div>
                        <p className="text-xl ">New Students</p>
                        <h2 className="md:text-xl text-green-600 text-right">758</h2>
                    </div>
                </div>
                <div className="flex items-center">
                    <BsArrowUpRight className="text-2xl text-green-600 mt-4 mr-2"></BsArrowUpRight>
                    <h2 className="text-xl mt-4 text-left">
                        10% Higher Than Last Month
                    </h2>
                </div>
            </div>
           
        </div >
    );
};

export default Studentinfo;