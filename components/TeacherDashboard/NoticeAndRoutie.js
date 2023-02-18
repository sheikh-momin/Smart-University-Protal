import React, { useEffect, useState } from "react";
import Notice from "./Notice";

const NoticeAndRoutie = () => {
  const [allNotices, setAllNotices] = useState([]);

  useEffect(() => {
    fetch("https://smart-university-protal-server-coral.vercel.app/notice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllNotices(data);
      });
  }, []);

  return (
    
      <div className="">
        {allNotices.map((n) => (
          <Notice key={n._id} allNotices={n}></Notice>
        ))}
      </div>
    
  );
};

export default NoticeAndRoutie;
