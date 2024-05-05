import React from "react";
import { tcenter } from "../../components/assets/data/dummydata";
import { jrv } from "../../components/assets/data/dummydata";

export const AboutJRV = () => {
  return (
    <div className="w-full bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
        <img
          className="w-full my-2"
          src="https://www.janrawee.ac.th/wp-content/uploads/2023/10/jrv-1.png"
          alt="/"
          style={{ marginBottom: "50px"}}
        /><br/>
        <div className="flex flex-col justify-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            consectetur adipiscing elit pellentesque. Facilisis leo vel
            fringilla est ullamcorper eget nulla facilisi. At augue eget arcu
            dictum varius duis at consectetur lorem. Pretium nibh ipsum
            consequat nisl vel pretium lectus. Neque viverra justo nec ultrices
            dui sapien eget.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto flex justify-center items-center">
        <img
          className="w-[400px]"
          src={jrv[0].imgpath}
          alt="jrb logo"
        />

        <div>
          <h1 className="text-[#FF9630] md:text-4xl sm:text-3xl text-2xl font-bold py-4">
            Description of the Chanrawee Vocational College Emblem
          </h1>
          <br/>
          <p>
            Shield (El Cid Shield) Protection shield is a symbol of protection.
            Dignity Inside the shield is divided into 4 parts, each part having
            a meaning associated with it as follows:{" "}
          </p>
          <br/>
          
          <div>
              <p><b>Part 1: Picture of a book</b></p>
              <p>means studying and acquiring knowledge. Knowledge that brings wisdom to life</p>
          </div>
          <br/>
          <div>
              <p><b>Part 2: The lantern image</b></p>
              <p>means a symbol of service. and dedication to others light from a lantern Lead the way to your destination with morality and wisdom.</p>
          </div>
          <br/>
          <div>
              <p><b>Part 3 Caduceus</b></p>
              <p>is the winged staff of Hermes (IHermes: god of communication and speech) with two snakes wrapped around it. It is a symbol that means neutrality, diplomacy, negotiation, and peace, showing desirable characteristics for the medical profession.</p>
          </div>
          <br/>
          <div>
              <p><b>Part 4: The image of hands in worship</b></p>
              <p>means service with the heart (Service Mind), gentleness, softness that is unique to the Thai nation, the earth and the moon, two planets that have been interdependent for millions of years. Demonstrate dependability and generosity. The existence of human beings who cannot live alone requires that all things around us support each other.</p>
          </div>
          <br/>
          <div>
              <p><b>The words INTELLIGENCE, SERVICE MIND, PROFESSIONAL</b></p>
              <p>are the motto of Chandrawee Vocational School. The graduates will be intellectuals with the identity of the Chanrawee people.</p>
          </div>
       
          
        </div>
      </div>

      <div className="w-full py-16 text-black px-3">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="lg:col-span-2 my-4 flex flex-col items-center">
            <h1 className="text-[#FF9630] font-bold text-3xl">Vision</h1>
            <br />
            <p>
              <b>
                Aiming to be a vocational college in health business with
                standards that are accepted internationally{" "}
              </b>
            </p>
            <br />
          </div>
        </div>
      </div>

      <div
        className="w-full py-16 text-black px-3"
        style={{ backgroundColor: "#FF9630" }}
      >
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <p className="text-black font-bold text-2xl">Mission</p>
            <br />
            <p>
              <b>Mission 1 : </b> Produce graduates in health sciences and
              healthcare business to have competencies. Personality appropriate
              to the professional field.{" "}
            </p>
            <br />
            <p>
              <b>Mission 2 : </b> Develop knowledge curricula in health sciences
              and hospital business. To meet the needs of enterprises and the
              labor market in the future​.{" "}
            </p>
            <br />
            <p>
              <b>Mission 3 :</b> Develop human resources Resources within the
              educational institution Quality management system Keep up to date
              with changes in education in the future.{" "}
            </p>
            <br />
            <p>
              <b>Mission 4 :</b> Provide basic knowledge in health sciences and
              health business to professional work, community, society​{" "}
            </p>
            <br />
            <p>
              <b>Mission 5 :</b> Create a network for education and employment
              for graduates both domestically and abroad.​{" "}
            </p>
            <br />
            <p>
              <b>Mission 6 :</b> Create cooperation with higher education
              institutions to increase skills and connect students to further
              education.{" "}
            </p>
            <br />
            <p>
              <b>Mission 7 :</b> Promote learners' ability to communicate in a
              third language to support careers in health sciences. and health
              business to AEC​{" "}
            </p>
            <br />
            <p>
              <b>Mission 8 :</b> an organization that certifies professional
              standards. Health service profession​{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-16 text-black px-3">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="lg:col-span-2 my-4 flex flex-col items-center">
            <h1 className="text-[#FF9630] font-bold text-3xl">Personnels</h1>
            <br />
            <img
              className="w-full mx-auto my-4"
              src="https://www.janrawee.ac.th/wp-content/uploads/2023/06/0606.png"
              alt="personnel image"
            />
          </div>
        </div>
      </div>

      <div
        className="lg:col-span-2 my-4 flex flex-col items-center"
        style={{ marginTop: "5%" }}
      >
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Contact Us
        </h1>
        <p>
          <b>
            To inquire more information about the GED Test Center at Ranong
            Community College, please contact us:{" "}
          </b>
        </p>
        <br />
        <p>Phone: +66(0)828804008 </p>
        <br />
        <p>Email: ged@doodle.tech </p>
      </div>
    </div>
  );
};
