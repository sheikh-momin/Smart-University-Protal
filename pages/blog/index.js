import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { MessengerChat } from "react-messenger-chat-plugin";

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3.. */}
      <div class="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {/* first */}
        <div className="lg:ml-10 md:ml-0">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-96 h-60"
                src="https://i.ytimg.com/vi/pzoD0JgTBFA/maxresdefault.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                DU GENESIS wins 2022, the first ever on-site Capture The
                Flag(CTF) contest in Bd
              </h2>
              <p>
                The World Bank to commemorate its 50-year-long partnership with
                Bd launched a competition titled 'Ideabuzz Championship' for
                university students where groups of students must come up with
                innovative solutions.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="lg:ml-4 md:ml-0">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-96 h-60"
                src="https://convocation.du.ac.bd/convocation_image/conv52-header.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                6th Convocation 2022 of Dreamers University
              </h2>
              <p className="">
                Prime Minister of Nepal and Chancellor of Tribhuvan University
                Mr. KP Sharma Oli will preside over the Convocation function
                while DU Vice-Chancellor Prof. Dr. Md. Akhtaruzzaman will be
                present there as the chief guest. The convocation function will
                also be addressed by TU Vice-Chancellor Prof. Dr. Dharma K.
                Baskota.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* third */}
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-96 h-60"
                src="https://eng.campuslive24.com/uploads/shares/2019/6/Brac-2019-06-27-17-25-39.PNG"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Dreamers University Mars Rover - European Rover Challenge{" "}
              </h2>
              <p>
                Team ​Avijatrik​ advances to the European Rover Challenge (ERC)
                2022 Onsite final round, qualifying in the preliminary round as
                one of the top 11 out of selected 16 teams. The final round of
                ERC On-site edition 2022 will take place from September 9 to
                September 11, 2022.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* fourth */}
        <div className="mt-5 md:mt-0 lg:ml-10 md:ml-0">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://thefinancialexpress.com.bd/uploads/1633541447.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Urban Health Innovation Challenge 2021{" "}
              </h2>
              <p>
                Shahriar Kabir from BTM '17 and his team became the champion of
                Urban Health Innovation Challenge 2021 co-organized by the BRAC
                James P Grant School of Public Health of BRAC University and
                World Vision. Despite the Covid-19 pandemic, a total of 42
                innovative ideas were submitted through the participants
              </p>
              <div className="card-actions justify-end mt-3">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* fifth */}
        <div className="lg:ml-5 md:ml-0">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://roverchallenge.eu/wp-content/uploads/2020/09/ERC2020_Lukasz_Widziszowski__LCS7610.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                European Rover Challenge Competition 2021
              </h2>
              <p>
                IUT Mars Rover participated in the Remote version of the
                European Rover Challenge (ERC) competition. In the qualification
                round, they secured the 3rd position out of 38 teams in the
                Remote edition and they secured the 10th position worldwide in
                the final round, which is the best result by any Bangladeshi
                team in this competition?
              </p>
              <div className="card-actions justify-end mt-3">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MessengerChat pageId="1552348765040416" appId="955564245411512" /> */}
      <MessengerChat
        pageId="1552348765040416"
        appId="955564245411512"
        language="en-au"
        themeColor={"#000000"}
        bottomSpacing={100}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide");
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted");
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad");
        }}
      />
      ,<Footer></Footer>
    </div>
  );
};

export default Blog;
