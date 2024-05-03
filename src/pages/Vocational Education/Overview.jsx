import React from "react"
import { overview,courses,testcenter } from "../../components/assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export const Overview = () => {
  return (
    <>
    <section className="overview bg-[#F3F4F8] py-16" sytle={{paddingBottom: "20px"}}>
      <div className="w-4/5 m-auto">
        <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
          <h1 className="text-3xl font-semibold text-black">
            <span className="border-b-2 border-black pb-2">Overview</span>
            </h1>
        </div>
        {/* Image Section */}
        <div className="image-section w-4/5 m-auto">
            <img src={overview[0].cover} alt="Overview" className="w-full" />
          </div>

          {/* College Highlights Section */}
          <section className="college-highlights py-16">
            <div className="w-4/5 m-auto">
              <h2 className="text-2xl font-semibold text-black mb-8">
              <span className="border-b-2 border-black pb-2">College Highlights</span>
              </h2>
              <div className="infographic-section">
                {/* Infographic goes here */}
                <div className="infographic">
                  {/* Your infographic content */}
                  <img className="w-[300px] mx-auto my-4" src={overview[1].cover} alt="/"/>
                </div>
                <div className="description">
                  <h3 className="text-lg font-semibold text-black mb-4">Medical Care Business Program</h3>
                  <p className="text-black text-base">This Program is a 3 Year Vocational Cretificate - Medical Care Business Program </p>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="programs py-16">
            <div className="w-4/5 m-auto">
              <div className="heading mb-16">
                <h1 className="text-3xl font-semibold text-black">
                <span className="border-b-2 border-black pb-2">Programs</span>
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
                {courses.map((item)=>(
                  <div className="box rounded-lg shadow-shadow1 bg-white">
                    <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
                     <img src={item.cover} alt="" className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"/>
                    </div>
                    <div className="text p-3">
                        <h3 className="text-black my-4 font-medium h-10">
                          {item.title}
                        </h3>
                        <div className="user flex items-center">
                          <span className="text-[14px] ml-2 text-justify">
                            {" "}
                            text-section
                         </span>
                       </div>
                       </div>
                       <div to="/" className="flex items-center justify-between border-t border-gray-200 p-3">
                        <NavLink className="text-[14px] ml-2 flex items-center">
                          Explore More <HiOutlineArrowNarrowRight/>
                        </NavLink>
                      </div>
                  </div>
                ))}
                {testcenter.map((item) => (
                  <div className="box rounded-lg shadow-shadow1 bg-white">
                    <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
                      <img src={item.cover} alt="" className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"/>
                    </div>
                    <div className="text p-3">
                      <h3 className="text-black my-4 font-medium h-10">
                        {item.title}
                      </h3>
                      <div className="user flex items-center">
                        <span className="text-[14px] ml-2 text-justify">
                           {" "}
                           text-section
                        </span>
                      </div>
                    </div>
                    <div to="/" className="flex items-center justify-between border-t border-gray-200 p-3">
                      <NavLink className="ext-[14px] ml-2 flex items-center">
                        Explore More <HiOutlineArrowNarrowRight/>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

