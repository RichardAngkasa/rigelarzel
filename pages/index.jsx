/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { BsPlay } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rigel</title>
      </Head>
      {/* headbar */}
      <div className="h-16 bg-transparent backdrop-blur-sm fixed flex justify-between z-50 px-4 w-screen items-center">
        <div className="text-2xl">R.</div>
        <div className="border p-2 border-gray-200 rounded-lg">
          <a href="https://26d3b70a-4cc7-4adc-8905-57fd4b8ec126.filesusr.com/ugd/c33274_76c17928c911416a953808d925898585.pdf">
            C V
          </a>
        </div>
      </div>
      {/* body */}{" "}
      <div className="px-4 absolute z-10 h-screen flex items-center justify-center">
        <div className="my-auto">
          <h1 className=" font-bold text-4xl text-gray-200">
            R I G E L A R Z E L
          </h1>
          <h1 className=" font-thin mt-2 text-gray-300">
            Studying Film & Animation at UMN. Passionate about Film, Animation,
            Video, Photography, & Editing.
          </h1>
        </div>
      </div>
      <div>
        <div className="relative">
          <img
            src="/mobile-background.jpg"
            alt="profile"
            className="h-screen object-cover brightness-50"
          />
          <div className="h-1/2 absolute w-full z-40 bottom-0 bg-gradient-to-t from-black"></div>
        </div>
      </div>
      <div className="h-fit w-full z-50 bg-black px-4 mt-10">
        <div className="my-14 flex flex-col justify-end">
          <div className="absolute z-10 ml-4 mb-4">
            <h1 className="font-medium text-xl mb-2 ">Doctor Strange Cast</h1>
            <div className="flex items-center">
              <BsPlay className="text-2xl" />
              <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-2">
                Play | After Effects
              </h1>
            </div>
          </div>
          <img
            src="/mobile-aftereffect.jpg"
            alt="Doctor Strange Cast"
            className="brightness-50 h-40 w-full  rounded-lg object"
          />
        </div>
        <div className="my-14 flex flex-col justify-end">
          <div className="absolute z-10 ml-4 mb-4">
            <h1 className="font-medium text-xl mb-2">Cathouse Production_MV</h1>
            <div className="flex items-center">
              <BsPlay className="text-2xl" />
              <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-2">
                Play | 2D Animation
              </h1>
            </div>
          </div>
          <img
            src="/mobile-2d-animations.jpg"
            alt="Cathouse Production_MV"
            className="brightness-50 h-40 w-full  rounded-lg object"
          />
        </div>
        <div className="my-14 flex flex-col justify-end">
          <div className="absolute z-10 ml-4 mb-4">
            <h1 className="font-medium text-xl mb-2 ">Explore and Beyond</h1>
            <div className="flex items-center">
              <BsPlay className="text-2xl" />
              <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-2">
                Play | Showreel 2022
              </h1>
            </div>
          </div>
          <img
            src="/mobile-showreel.jpg"
            alt="Explore and Beyond"
            className="brightness-50 h-40 w-full  rounded-lg object"
          />
        </div>
        <div className="h-[1px] bg-gray-500"></div>
        {/* footer */}
        <div className="my-8 flex items-center">
          <img
            src="/mobile-profile.jpg"
            alt="profile"
            className="rounded-full h-28 w-28 object-cover"
          />
          <div className="flex flex-col gap-5 ml-4  ">
            <a href="mailto:gelarzel@gmail.com">gelarzel@gmail.com</a>
            <div className="flex items-center space-x-2 ">
              <a href="https://www.instagram.com/rigel_arzel/?hl=id">
                <BsInstagram />
              </a>
              <span>|</span>
              <a href="https://api.whatsapp.com/send?phone=6281298819667">
                081298819667
              </a>
            </div>
          </div>
          {/* <div>hai</div> */}
        </div>
      </div>
    </>
  );
}
