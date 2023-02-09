// import Link from 'next/link';
import React from 'react';
import DashboardNavbar from '../dashboard/dashboardNav/DashboardNavbar';
// import book from './book.pdf'

const cse = () => {
    return (
        <div className='bg-zinc-300'>
            <div className='pt-5'>
                <div className="card lg:card-side bg-zinc-300">
                    <figure><img className='w-3/4 rounded-3xl' src="https://iubat.edu/wp-content/uploads/2019/07/Library-1.jpg" alt="Album" /></figure>
                </div>
            </div>
            {/* banner end */}


            <h2 className='text-4xl mt-5 text-center text-teal-700 font-serif'>Books for Department of Computer Science Engineering </h2>

            <div className='w-3/4  mt-10 ml-40'>
                {/* first row */}
                <div className='books'>
                    <div className="flex">
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Network Security  </h3>
                            <p className='text-black text-xl'>Course Code:CSE-101</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid flex-grow  bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md mt-0'>Book Name: Cloud Computing </h3>
                            <h2 className='text-black text-xl mt-0'>Course Code:CSE-102</h2>
                            {/* <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" ><button>Download CV</button></a> */}
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class="  text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                            {/* <Link to={book} download><button>download</button></Link> */}
                        </div>
                    </div>
                </div>
                {/* Second row */}
                <div className='books mt-10'>
                    <div className="flex">
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Data Structure</h3>
                            <p className='text-black text-xl'>Course Code: CSE-103</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class="  text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                        <div className=" divider divider-horizontal divide-green-600 "></div>
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Machine Learning </h3>
                            <p className='text-black text-xl'>Course Code: CSE-104</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class="  text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                    </div>
                </div>
                {/* third row */}
                <div className='books mt-10'>
                    <div className="flex">
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Data Mining </h3>
                            <p className='text-black text-xl'>Course Code:CSE-105</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Network Security</h3>
                            <p className='text-black text-xl'>Course Code: CSE-106</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                    </div>
                </div>
                {/* fourth row */}
                <div className='books mt-10'>
                    <div className="flex">
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Wireless And Mobile</h3>
                            <p className='text-black text-xl'>Course Code: CSE-107</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Operational Amplifier</h3>
                            <p className='text-black text-xl'>Course Code:CSE-108</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                    </div>
                </div>
                {/* fifth row */}
                <div className='books mt-10'>
                    <div className="flex">
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Principles of Electronics & Design Lab</h3>
                            <p className='text-black text-xl'>Course Code:CSE-109</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name: Digital Logic and Computer Design</h3>
                            <p className='text-black text-xl'>Course Code:CSE-110</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                    </div>
                </div>
                {/* sixth row */}
                <div className='books mt-10'>
                    <div className="flex">
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name:Electric Machinery Fundamental</h3>
                            <p className='text-black text-xl'>Course Code:CSE-101</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                            <h3 className='text-black text-md'>Book Name:Electric Machines & design  </h3>
                            <p className='text-black text-xl'>Course Code:CSE-101</p>
                            <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default cse;