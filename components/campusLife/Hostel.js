import React from 'react';

const Hostel = () => {
    return (

        <div>
             <h1 className='text-center text-teal-700 text-4xl font-bold italic font-serif mb-3'>Hostel Facilities</h1>
            
             <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?b=1&s=170667a&w=0&k=20&c=FoTpKvdouZaOZe1ZGn98vgE0S7LqcNFDpp6EwA6k_rQ=" className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl text-center font-bold text-teal-700  italic font-serif">Accomodation !!!</h1>
      <p className="py-6 text-left text-xl">The University has arrangement of a female hostel located nearby the campus. Similar hostel accommodation is available for male students also. Full fledged and comfortable hostel facilities will be available for all students in the University campus under construction in Ashulia.</p>
      
    </div>
  </div>
</div>
            
            <div className='grid grid-cols-3 gap-8 container mt-6 mx-auto'>
            <div>
                <h3 className='text-3xl text-teal-700  font-bold italic font-serif'>In-room Amenities</h3>
                <p className='text-xl mt-3'>#One Bed per Student shall be offered <br></br>
#Fully furnished rooms with beds & underbed drawers <br></br>
#Study tables & Chair <br></br>
#Tube lights & LED, Fan <br></br>
#Dustbin in each room <br></br>
#300 square feet spacious room</p>
            
            </div>
            <div><h3 className='text-3xl text-teal-700  font-bold italic font-serif'>Self Help Amenities</h3>
                <p className='text-xl mt-3'>#Laundry Service <br></br>
#Filter Water facility to be provided <br></br>
#Medical facility available with first aid/ provided to sick Residents <br></br>
#Tube lights & LED, Fan <br></br>
#Doctor on call number(s) to be shared with the students <br></br>
#Dining area</p>
            

            </div>
            <div>
            <h3 className='text-3xl text-teal-700  font-bold italic font-serif'>Cost-Effective Living Option</h3>
                <p className='text-xl mt-3'>#One Bed per Student shall be offered <br></br>
#Fully furnished rooms with beds & underbed drawers <br></br>
#Study tables & Chair <br></br>
#Tube lights & LED, Fan <br></br>
#Dustbin in each room <br></br>
#300 square feet spacious room</p>
            </div>
            
        </div>
        </div>      
        
    );
};

export default Hostel;