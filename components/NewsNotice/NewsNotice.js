import React from "react";
import NewsSlide from "./News/News";
import Notice from "./Notice/Notice";
const NewsNotice = () => {
  return (
    <section className="bg-slate-100 p-8 py-24">
      <h2 className="text-center text-black font-serif font-bold text-3xl  mb-6">
        News & Notice
      </h2>

      <div className="grid lg:grid-cols-2">
        <div className="lg:mr-40 sm:mb-8">
          <NewsSlide></NewsSlide>
        </div>

        <div className=" ">
          <Notice></Notice>
        </div>
      </div>
    </section>
  );
};

export default NewsNotice;
