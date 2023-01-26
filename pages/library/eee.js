import React from 'react';
import useDownloader from 'react-use-downloader';
import DashboardNavbar from '../dashboard/dashboardNav/DashboardNavbar';
// import pdfbooks from '../../Assets/book.pdf'


const eee = () => {

    //     const { size, elapsed, percentage, download,
    //         cancel, error, isInProgress } =
    //     useDownloader();

    //   const fileUrl = "../../Assets/book.pdf";
    //   const filename = "book.pdf";


    return (
        <div className='bg-teal-700'>
            <DashboardNavbar></DashboardNavbar>

            {/* <div className="App">
                <h3>GeeksforGeeks - File Downloader</h3>
                <p>Download is in {isInProgress ?
                    "in progress" : "stopped"}</p>

                <button onClick={() => download(fileUrl, filename)}>
                    Click to download the file
                </button>
                <button onClick={() => cancel()}>
                    Cancel the download
                </button>
                <p>Download size in bytes {size}</p>

                <label for="file">Downloading progress:</label>
                <progress id="file" value={percentage} max="100" />
                <p>Elapsed time in seconds {elapsed}</p>
                {error && <p>possible error {JSON.stringify(error)}</p>}
            </div> */}


            {/* banner start */}
            <div className=''>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://iubat.edu/wp-content/uploads/2019/07/Library-1.jpg" alt="Album" /></figure>
                </div>
            </div>
            {/* banner end */}


            <h2 className='text-4xl mt-5 text-center text-white'>Books for Department of Electrical Engineering </h2>

         <div className='w-3/4  mt-10 ml-40'>
               {/* first row */}
               <div className='books'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Fundamental Electric Analysis</h3>
                        <p className='text-black text-xl'>Course Code:EEE-101</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Alternating Current Circuits</h3>
                        <p className='text-black text-xl'>Course Code:EEE-102</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                        {/* <a href={book} target="_blank" download="book">Download PDF</a> */}

                    </div>
                </div>
            </div>
            {/* Second row */}
            <div className='books mt-10'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Introduce of Circuit</h3>
                        <p className='text-black text-xl'>Course Code: EEE-103</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Electric of Circuits </h3>
                        <p className='text-black text-xl'>Course Code: EEE-104</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                </div>
            </div>
            {/* third row */}
            <div className='books mt-10'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Microelectronic Circuits </h3>
                        <p className='text-black text-xl'>Course Code:EEE-105</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Electrical Technology</h3>
                        <p className='text-black text-xl'>Course Code: EEE-106</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                </div>
            </div>
            {/* fourth row */}
            <div className='books mt-10'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Electronic Devices & Circuit Theory</h3>
                        <p className='text-black text-xl'>Course Code: EEE-107</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Operational Amplifier Circuits </h3>
                        <p className='text-black text-xl'>Course Code:EEE-108</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                </div>
            </div>
            {/* fifth row */}
            <div className='books mt-10'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Principles of Electronics & Design Lab</h3>
                        <p className='text-black text-xl'>Course Code:EEE-109</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name: Digital Logic and Computer Design</h3>
                        <p className='text-black text-xl'>Course Code:EEE-110</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                </div>
            </div>
            {/* sixth row */}
            <div className='books mt-10'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name:Electric Machinery Fundamental</h3>
                        <p className='text-black text-xl'>Course Code:EEE-101</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name:Electric Machines & design  </h3>
                        <p className='text-black text-xl'>Course Code:EEE-101</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                </div>
            </div>
            {/* seventh row */}
            <div className='books mt-10'>
                <div className="flex">
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name:Modern Power System Analysis</h3>
                        <p className='text-black text-xl'>Course Code:EEE-101</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-32 flex-grow card bg-white rounded-box place-items-center">
                        <h3 className='text-black text-md'>Book Name:Principles of Power System</h3>
                        <p className='text-black text-xl'>Course Code:EEE-101</p>
                        <a href="https://drive.google.com/file/d/11a6Byhdzx1WauwH8Sou2hhjzcdfh_B43/view?usp=share_link" target="_blank" rel="noopener noreferrer" download><button class=" text-md btn btn-outline rounded font-bold text-black ml-4 hover:bg-black">Download PDF</button></a>
                    </div>
                </div>
            </div>
         </div>








        </div>
    );
};

export default eee;