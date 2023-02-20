import React from 'react';

const Transport = () => {
    return (
        <div className=' mt-16'>
             <h1 className='text-center mb-6 text-teal-700 text-4xl font-bold italic font-serif'>Transport Facilities</h1>
             <div className="divider"></div>
           <div className='grid md:grid-cols-2 gap-6'>
            
           <div>
           <p className='text-xl font-semibold'>Introduction:</p>
           <p>Transportation is a major issue to both students and parents. Most of the university students are matured enough to travel their campuses by themselves. In these cases, students use public transport from different places. DIU is always concerned about their students and for this purpose now, We have around 50 + buses which are exclusively used for our students/faculty/admin personnel and staff. A parents Car and an ambulance is also available for the students and their parents. Total transportation system is managed from our Ashulia campus. All the transports are moving for the students on different routes and campuses from Ashulia Campus. Students just need to present their ID card for getting this facility. According to the distance they pay a small amount for the transport facility. Every month DIU authorizes to pay some subsidy considering the benefits of the Students/Faculty and Admin people. It is time consuming and also saves money. Particulerly this service is very helpful for our female students. They can easily avoid the unavoidable circumstances or any types of unpleasant situations.</p>
            </div>
            <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/intercity-passenger-bus-driving-highway-road-evening_127089-23879.jpg?w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-psd/bus-mockup-left-rear-view_256172-209.jpg?w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/business-couple-wearing-mask-bus-while-traveling-public-transportation-new-normal_53876-101957.jpg?w=740&t=st=1673801261~exp=1673801861~hmac=e2bdef6ab40c0de024e997ec22c890e066a0f55f18a4fb0802f73aa1796cd876" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/intercity-passenger-bus-driving-highway-road-evening_127089-23879.jpg?w=826" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
           </div>
           </div>
           <div className='mt-12'>
           <p>
           <span className='text-teal-700 text-2xl font-bold italic font-serif'>Facilities Inside The Buses:</span> <br></br>
CCTV Camera <br></br>
Fire Extinguishers <br></br>
First Aid Box <br></br>
Air conditionar <br></br>
Excellent seats and safety belt <br></br>
            </p> 
            <p>
            <span className='text-teal-700 text-2xl font-bold italic font-serif'>Benefits Of Using University Buses/Transport</span> <br></br>
Always on time <br></br>
Safe and time consuming <br></br>
Better Environment <br></br>
Reduce traffic <br></br>
Reduce pollution <br></br>
It can teach time management <br></br>
Money saver
            </p> 
            
           </div>
           
        </div>
    );
};

export default Transport;