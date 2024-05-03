import React from "react"
import { campus } from "../../components/assets/data/dummydata"

export const CampusLife = () => {
  return (
    <>
    <section className="campus bg-[#F3F4F8] py-16" sytle={{paddingBottom: "20px"}}>
      <div className="w-4/5 m-auto">
        <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
          <h1 className="text-3xl font-semibold text-black">
            <span className="border-b-2 border-black pb-2">Campus Life</span>
            </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {campus.map((campus,index) => (
            <div key={index} className="relative">
              <img src={campus.photo} alt="" className="campus-photo"/>
              <p className="absolute bottom-0 left-0 right-0 bg-white text-center text-black py-2">
                {campus.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://www.google.com/maps/place/%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%A7%E0%B8%B5/@18.7449789,98.9637713,17z/data=!3m1!4b1!4m6!3m5!1s0x30da30f84a530e23:0x7af2781c6fec0467!8m2!3d18.7449738!4d98.9663462!16s%2Fg%2F11cn8t2ky6?hl=en-US&entry=ttu" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View on Google Maps
          </a>
        </div>
      </div>
    </section>

    </>
  )
}

