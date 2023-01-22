import React from 'react';


const Dashboard = () => {
    return (
        <div>
            <section className="mt-12">
                <div className="grid grid-cols-3 gap-4 w-9/12 mx-auto text-white">
                    <div className="bg-amber-200 p-8 rounded-xl">
                         <h4 className="text-2xl">Total Payable</h4> 
                    <h2 className="text-5xl">$14000</h2>
                </div>
                    <div className="bg-fuchsia-300 p-8 rounded-xl">
                         <h4 className="text-2xl">Total Paid</h4> 
                    <h2 className="text-5xl">$7000</h2>
                </div>
                    <div className="bg-blue-300 p-8 rounded-xl">
                         <h4 className="text-2xl">Total Due</h4> 
                    <h2 className="text-5xl">$7000</h2>
                </div>
                </div>
    
            </section>
        </div>
    );
};

export default Dashboard;