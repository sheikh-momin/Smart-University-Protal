import { useState } from "react";


const DateInput = () => {


  const [date, setDate] = useState(); 
  
  return (
    <div>
      <label className="label">
        <span className="label-text">Select Date</span>
      </label>
      <input type="date" className="input  input-bordered w-full max-w-xs px-12" onChange={e => setDate(e.target.value)} />

    </div>
  );
};

export default DateInput;