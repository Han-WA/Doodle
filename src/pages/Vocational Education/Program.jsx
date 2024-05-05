import React from "react";
import { tcenter } from "../../components/assets/data/dummydata";

export const Program = () => {
  return (
    <>
      <section className="partners" sytle={{ paddingBottom: "20px" }}>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <img
            className="w-[full] my-2"
            src="https://www.janrawee.ac.th/wp-content/uploads/2023/02/10-%E0%B8%81%E0%B8%9E66-%E0%B8%95%E0%B8%B1%E0%B8%94.png"
            alt="/"
            style={{ marginBottom: "50px" }}
          />
          <br />

          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
            <div className="lg:col-span-2 my-4 flex flex-col items-center">
              <h1 className="text-[#FF9630] font-bold text-3xl">Programs</h1>
              <br />
              <div className="flex space-x-4">
                <img
                  className="w-[250px] h-[400px] my-4"
                  src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/3-1-683x1024-1.png"
                />
                <img
                  className="w-[250px] h-[400px] my-4"
                  src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/4-683x1024-1.png"
                />
                <img
                  className="w-[250px] h-[400px] my-4"
                  src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/5-683x1024-1.png"
                />
                <img
                  className="w-[250px] h-[400px] my-4"
                  src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/6-683x1024-1.png"
                />
              </div>
              <div className="lg:col-span-2 my-4">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  Program Description
                </h1>
                <p>
                  <b>Program 1: </b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Eu
                  scelerisque felis imperdiet proin fermentum. Fringilla ut
                  morbi tincidunt augue interdum velit euismod in.{" "}
                </p>
                <br />
                <p>
                  <b>Program 2: </b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Eu
                  scelerisque felis imperdiet proin fermentum. Fringilla ut
                  morbi tincidunt augue interdum velit euismod in.{" "}
                </p>
                <br />
                <p>
                  <b>Program 3: </b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Eu
                  scelerisque felis imperdiet proin fermentum. Fringilla ut
                  morbi tincidunt augue interdum velit euismod in.{" "}
                </p>
                <br />
                <p>
                  <b>Program 4: </b> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Eu
                  scelerisque felis imperdiet proin fermentum. Fringilla ut
                  morbi tincidunt augue interdum velit euismod in.{" "}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-2 my-4 flex flex-col items-center"
          style={{ marginTop: "1%" }}
        >
          <div className="flex space-evenly">
            <img
              className="w-[400px]"
              src={tcenter[1].cover}
              alt="/"
              style={{ marginRight: "30px" }}
            />

            <div className="w-[800px]">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Lab
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vestibulum sed arcu non odio euismod laci{" "}
              </p>
              <br />
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Operation Hours
              </h1>
              <p>Monday-Friday: 9:00 – 17:00 </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="lg:col-span-2 my-4 flex flex-col items-center">
            <h1 className="text-[#FF9630] font-bold text-3xl">
              Job Oppotunities
            </h1>
            <br />
            <div className="flex space-x-10">
              <img
                className="w-[250px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/11/400540288_300962086112027_8341294494902272249_n-1.jpg"
              />
              <img
                className="w-[250px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/11/400620572_300962202778682_1650228104486700475_n.jpg"
              />
              <img
                className="w-[250px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/11/400569094_300962169445352_6745439140503682135_n.jpg"
              />
              <img
                className="w-[250px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/11/400443914_300962186112017_8401111149684198639_n.jpg"
              />
            </div>
            <div className="lg:col-span-2 my-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempor nec feugiat nisl pretium fusce. Eu scelerisque felis
                imperdiet proin fermentum. Fringilla ut morbi tincidunt augue
                interdum velit euismod in.{" "}
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="lg:col-span-2 my-4 flex flex-col items-center">
            <h1 className="text-[#FF9630] font-bold text-3xl">Activities</h1>
            <br />
            <div className="flex space-x-4">
              <img
                className="w-[250px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/LINE_ALBUM_23166_%E0%B9%92%E0%B9%93%E0%B9%90%E0%B9%91%E0%B9%92%E0%B9%93_1-768x512.jpg"
              />
              <img
                className="w-[250px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/LINE_ALBUM_23166_%E0%B9%92%E0%B9%93%E0%B9%90%E0%B9%91%E0%B9%92%E0%B9%93_3-768x512.jpg"
              />
              <img
                className="w-[250px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/LINE_ALBUM_23166_%E0%B9%92%E0%B9%93%E0%B9%90%E0%B9%91%E0%B9%92%E0%B9%93_0-768x576.jpg"
              />
            </div>
            <div className="flex space-x-4">
              <img
                className="w-[200px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/320227314_537574508083352_5747690581856336107_n-768x576.jpg"
              />
              <img
                className="w-[200px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/323064989_1642998006131403_1429078425984159003_n-768x576.jpg"
              />
              <img
                className="w-[200px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/IMG_0543-768x431.jpg"
              />
              <img
                className="w-[200px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/IMG_0662-768x431.jpg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
          <div className="lg:col-span-2 my-4 flex flex-col items-center">
            <h1 className="text-[#FF9630] font-bold text-3xl">Alumni</h1>
            <br />
            <div className="flex space-x-4">
              <img
                className="w-[250px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/02/S__37363738-768x576.jpg"
              />
              <img
                className="w-[250px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/02/S__37363737-768x568.jpg"
              />
              <img
                className="w-[250px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/IMG_2610-768x576.jpg"
              />
            </div>
            <div className="flex space-x-4">
              <img
                className="w-[200px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/S__6406177-768x562.jpg"
              />
              <img
                className="w-[200px] my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/02/S__37363735-768x570.jpg"
              />

              <img
                className="w-[200px]  my-4"
                src="https://www.janrawee.ac.th/wp-content/uploads/2023/01/S__6406178-768x513.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
