import React from "react"
import { campus } from "../../components/assets/data/dummydata"

export const CampusLife = () => {
  return (
    <>
    <section className="campus bg-[#F3F4F8]  py-16" sytle={{paddingBottom: "20px"}}>
      <div className="w-4/5 m-auto">
        <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
          <h1 className="text-3xl font-semibold text-black">
            <span className="border-b-2 border-black pb-2">Campus Life</span>
            </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {campus.map((campus,index) => (
            <div key={index} className="relative">
              <img src={campus.photo} alt="" className="w-full h-auto"/>
              <p className="absolute bottom-0 left-0 right-0 bg-white text-center py-2">
                {campus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

