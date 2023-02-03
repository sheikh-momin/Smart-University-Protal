import Link from 'next/link';
import React from 'react';
import Dashboardnav from '../../pages/dashboard/dashboardNav/Dashboardnav';
import DashboardNavbar from '../../pages/dashboard/dashboardNav/DashboardNavbar';

const Library = () => {
    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className='flex bg-zinc-300'>
                {/* <DashboardNavbar */}

                <Dashboardnav></Dashboardnav>

                <div className='mt-10 ml-16'>
                    <h2 className='text-2xl font-bold text-teal-700 text-center'>Faculty of Engineering</h2>
                    <div class="grid grid-cols-2 gap-5 ml-10 mt-10">
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1STXf6Qq_xHfGeevFcO8lZ7-iKuoE7y8BGA&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/eee" className='text-black font-bold text-xl'>Electrical & Electronic Engineering</Link>
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://uploads.sarvgyan.com/2014/06/cse-image.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/cse" className='text-black font-bold text-xl' >Computer Science & Engineering</Link>
                            
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTICMjRouj9CbjY1Po7-2ZTy_18dOsyOXWv2Itp2lNo5ei18NpoNPwnvTaUbOgNweosaI&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                           <Link href="/library/civil" className='text-black font-bold text-xl'>Civil Engineering</Link>
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://slideplayer.com/8952450/27/images/slide_1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/ae" className='text-black font-bold text-xl'>Architecture Engineering</Link>
                            </div>
                        </div>
                      
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://1.bp.blogspot.com/-LqEjNQjoQOI/YUSc8VXEMUI/AAAAAAAAMZs/_v-NkUQb8XcNNuPQgNPCl8abaYTFDyIggCLcBGAsYHQ/s661/textile-engineering.JPG" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/te" className='text-black font-bold text-xl'>Textile Engineering</Link>
                            </div>
                        </div>
                       
                      
                        
                    </div>













                    <div>
                        <h2 className='mt-10 text-2xl font-bold text-teal-700 text-center'>Faculty of Business Administration</h2>
                        <div class="grid grid-cols-2 gap-5 ml-10 mt-10">

                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbf6m8fl-aYcw4FVdKcYhGeoITelbs1aCOuZTRqIAYf1A_ZmtJUpFFFLMvblPkhT4Ydg&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/ba" className='text-black font-bold text-xl'>Business Administration</Link>
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkMyhcCSt6es2WEO1hcRBrCl4WyE8noFXyc6HhxibTzqv5z67onrwywIB_3DEbPscJE8&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/bs" className='text-black font-bold text-xl' >Business Studies</Link>
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full h-48' src="https://bohatala.com/wp-content/uploads/2018/02/tu.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/th" className='text-black font-bold text-xl'>Tourism & Hospitalism</Link>
                            </div>
                        </div>

                        </div>

                    </div>


                    <div>
                        <h2 className='mt-10 text-2xl font-bold text-teal-700 text-center'>Faculty of Allied Health Sciences</h2>
                        <div class="grid grid-cols-2 gap-5 ml-10 mt-10">


                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IxMGqbDGRqtERTf65QNTdXjoHtXji2IGRI1-UJgQ0_DUSM4dQYGLRSvifkvP3vOumg&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/pharmacy" className='text-black font-bold text-xl'>Pharmacy </Link>
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2gT4kkLorS_GZC8kAxiDkedT2_E2Jzi0kB8yWQhl8-rWxc2QVgmtboGtu530VL3unVE&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/nfe" className='text-black font-bold text-xl' >Nutrition and Food Engineering</Link>
                            </div>
                        </div>
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl">
                            <figure><img className='w-full h-48' src="https://i.ytimg.com/vi/oy1CAMObRzc/maxresdefault.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/publich" className='text-black font-bold text-xl'>Public Health</Link>
                            </div>
                        </div>

                        </div>
                    </div>

                    <div>
                        <h2 className='mt-10 text-2xl font-bold text-teal-600 text-center'>Faculty of Law</h2>
                        
                        <div className="card card-compact w-96 h-60 bg-base-100 shadow-xl mt-5">
                            <figure><img className='w-full h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeOW3MkF5IHvq129AI7d97KaOg9jQpGz5ZA&usqp=CAU" alt="Shoes" /></figure>
                            <div className="card-body">
                            <Link href="/library/law" className='text-black font-bold text-xl'>Law</Link>
                            </div>
                        </div>
                    </div>





                </div>














            </div>
        </div>
    );
};

export default Library;