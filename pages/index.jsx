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
      <div className="w-screen flex flex-col items-center">
        {" "}
        {/* headbar */}
        <div className="h-16 bg-transparent backdrop-blur-sm fixed flex justify-between z-50 px-4 w-screen items-center sm:max-w-[60rem]">
          <div className="text-2xl">R.</div>
          <div className="border p-2 border-gray-200 rounded-lg">
            <a href="https://26d3b70a-4cc7-4adc-8905-57fd4b8ec126.filesusr.com/ugd/c33274_76c17928c911416a953808d925898585.pdf">
              C V
            </a>
          </div>
        </div>
        {/* body */}
        <div className="px-4 absolute h-screen z-50 flex items-center justify-center sm:w-4/5 max-w-[60rem] sm:gap-8 ">
          <div className="my-auto sm:w-2/4">
            <h1 className=" font-bold text-4xl text-gray-200">
              R I G E L A R Z E L
            </h1>
            <h1 className=" font-thin mt-2 text-gray-300 ">
              Studying Film & Animation at UMN. Passionate about Film,
              Animation, Video, Photography, & Editing.
            </h1>
            <div className="mt-4 items-center hidden sm:flex font-thin">
              <div className="flex items-center space-x-3 cursor-pointer">
                <button>
                  <a href="mailto:gelarzel@gmail.com">gelarzel@gmail.com</a>
                </button>
                <div className="flex items-center space-x-2 ">
                  <span>|</span>
                  <button>
                    <a href="https://www.instagram.com/rigel_arzel/?hl=id">
                      <BsInstagram />
                    </a>
                  </button>
                  <span>|</span>
                  <button>
                    <a href="https://api.whatsapp.com/send?phone=6281298819667">
                      081298819667
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* yg diatas */}
          <div className=" z-50 bg-transparent hidden sm:flex sm:flex-col snap-y overflow-y-auto h-52 w-fit scrollbar-hide relative">
            {/*  */}
            <div
              className="my-5 flex flex-col justify-end relative px-4 snap-center rounded-lg"
              onClick={() => {
                window
                  .open(
                    "https://www.youtube.com/watch?v=BUtiubP2q4c&feature=youtu.be&ab_channel=RigelArzel",
                    "_blank"
                  )
                  .focus();
              }}
            >
              <div className="absolute z-10 ml-4 mb-4 bottom-0">
                <h1 className="font-medium text-xl mb-2 ">
                  Doctor Strange ast
                </h1>
                <div className="flex items-center">
                  <BsPlay className="text-2xl" />
                  <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-1">
                    Play | After Effects
                  </h1>
                </div>
              </div>
              <img
                src="/mobile-aftereffect.jpg"
                alt="Doctor Strange Cast"
                className="brightness-75 h-40 w-full  rounded-lg object"
              />
            </div>

            {/*  */}
            <div
              className="my-5 flex flex-col justify-end relative px-4 snap-center"
              onClick={() => {
                window
                  .open(
                    "https://www.youtube.com/watch?v=luqjYlHx_iM&ab_channel=RigelArzel",
                    "_blank"
                  )
                  .focus();
              }}
            >
              <div className="absolute z-10 ml-4 mb-4 bottom-0">
                <h1 className="font-medium text-xl mb-2">
                  Cathouse Production_MV
                </h1>

                <div className="flex items-center">
                  <BsPlay className="text-2xl" />
                  <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-1">
                    Play | Showreel 2022
                  </h1>
                </div>
              </div>
              <img
                src="/mobile-showreel.jpg"
                alt="Explore and Beyond"
                className="brightness-75 h-40 w-full  rounded-lg object"
              />
            </div>
          </div>
        </div>
        <div className="relative sm:hidden">
          <img
            src="/mobile-background.jpg"
            alt="profile"
            className="h-screen w-screen object-cover opacity-40 object-top sm:opacity-30 sm:object-[0_20%] sm:blur-none"
          />
          <div className="h-1/2 absolute w-full z-40 bottom-0 bg-gradient-to-t from-black"></div>
        </div>
        <div className="relative hidden sm:flex">
          <img
            src="/desktop-profile.jpg"
            alt="profile"
            className="h-screen w-screen object-cover opacity-40 object-top sm:opacity-50 sm:object-[0_25%] sm:blur-none"
          />
          <div className="h-1/2 absolute w-full z-40 bottom-0 bg-gradient-to-t from-black"></div>
        </div>
        {/* yg dibawah */}
        <div className=" z-40 w-full px-4 sm:hidden bg-black mt-10">
          <div
            className="my-14 flex flex-col justify-end"
            onClick={() => {
              window
                .open(
                  "https://www.youtube.com/watch?v=luqjYlHx_iM&ab_channel=RigelArzel",
                  "_blank"
                )
                .focus();
            }}
          >
            <div className="absolute z-10 ml-4 mb-4">
              <h1 className="font-medium text-xl mb-2 ">Doctor Strange ast</h1>
              <div className="flex items-center">
                <BsPlay className="text-2xl" />
                <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-1">
                  Play | After Effects
                </h1>
              </div>
            </div>
            <img
              src="/mobile-aftereffect.jpg"
              alt="Doctor Strange Cast"
              className="brightness-75 h-40 w-full  rounded-lg object"
            />
          </div>
          <div
            className="my-14 flex flex-col justify-end"
            onClick={() => {
              window
                .open(
                  "https://www.youtube.com/watch?v=luqjYlHx_iM&ab_channel=RigelArzel",
                  "_blank"
                )
                .focus();
            }}
          >
            <div className="absolute z-10 ml-4 mb-4">
              <h1 className="font-medium text-xl mb-2 ">Explore and Beyond</h1>
              <div className="flex items-center">
                <BsPlay className="text-2xl" />
                <h1 className=" rounded-md  text-sm text-gray-200 w-fit h-fit px-1">
                  Play | Showreel 2022
                </h1>
              </div>
            </div>
            <img
              src="/mobile-showreel.jpg"
              alt="Explore and Beyond"
              className="brightness-75 h-40 w-full  rounded-lg object"
            />
          </div>
          <div className="h-[1px] bg-gray-500 z-20"></div>
        </div>
        {/* footer */}
        <div className=" my-14 flex items-center sm:hidden">
          <img
            src="/mobile-profile.jpg"
            alt="profile"
            className="rounded-full h-28 w-28 object-cover"
          />
          <div className="flex flex-col gap-5 ml-8 ">
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
        </div>
      </div>
    </>
  );
}
