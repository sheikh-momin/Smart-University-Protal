import React, { useEffect, useState } from 'react';
import Notice from './Notice';

const NoticeAndRoutie = () => {

    const [allNotices, setAllNotices] = useState([]);
   
    useEffect(() => {
       
            fetch('http://localhost:5000/notice')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAllNotices(data);
                   
                })
        
            }, [])





    return (
        <div>

            {/* <div className="bg-slate-200 drop-shadow-lg py-3 mt-5 w-2/3 ml-48">
                <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">
                    Important Notice 
                </h1>
            </div> */}


            <div className='w-full'>
                    {
                        allNotices.map(n => <Notice
                            key={n._id}
                            allNotices={n}
                        ></Notice>)
                    }
                </div>


        

        </div>
    );
};

export default NoticeAndRoutie;