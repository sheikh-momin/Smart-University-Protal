import Link from 'next/link';
import React from 'react';
import { FaSearchDollar } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import{FaFacebook} from 'react-icons/fa'

const TopNav = () => {
    return (
        <div>
            <div class="flex flex-row gap-3">
  <div className="basis-2/6 font-bold text-[#facc15]"><marquee >Addminission also opens in Holidays . Payment Through Bkash Form</marquee></div>
  <div className="basis-7/12 text-teal-800 font-bold">7 Th convocation Registration||Faculty And Department || Alumni || Career ||Hall || Job Placement</div>
  <div className=''>
        <div className='flex'>
        
        <Link href="/youtube" class="flex items-center text-base font-normal text-white rounded-lg dark:text-black hover:bg-blue dark:hover:bg-gray-700">
                                            <FaFacebook size='20px' className="text-slate-400 "></FaFacebook>
                                            
                                        </Link>
                                        
                                        <Link href="/youtube" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <FaYoutube size="22px" className="text-red-400 ml-2"></FaYoutube>
                                            
                                        </Link>
                                        <Link href="/linkedin" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-black hover:bg-black dark:hover:bg-gray-700">
                                            <FaLinkedin size="22px" className="text-blue-400 ml-2"></FaLinkedin>
                                            
                                        </Link>
        </div>

  </div>
</div>
        </div>
    );
};

export default TopNav;