import React from 'react'
import { GrFavorite } from "react-icons/gr";

function Body() {
    return (
        <div className="mb-12">
        <div className="grid grid-rows-6 grid-flow-col gap-4">
          <div
            className="row-span-3 col-span-2 h-36 rounded-xl bg-cover relative overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            }}
          >
            <div className="absolute w-full h-36 bg-blue-400 bg-opacity-20"></div>
            <div className="absolute w-full text-center top-14">
              <h1 className="text-3xl font-medium">GET UPTO 50% OFF</h1>
            </div>
          </div>
          <div
            className="row-span-3 col-span-2 rounded-xl bg-cover relative overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            }}
          >
            <div className="absolute w-full h-36 bg-green-400 bg-opacity-20"></div>
            <div className="absolute m-4 right-0 bottom-0">
              <h1 className="text-sm font-medium text-white">
                GET UPTO 50% OFF
              </h1>
            </div>
          </div>
          <div
            className="row-span-6 col-span-1 rounded-xl bg-cover relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1589805807273-a491fdb442ee')",
            }}
          >
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 rounded-full bg-white flex place-items-center justify-center">
                <GrFavorite size="16" />
              </div>
            </div>
          </div>
          <div
            className="row-span-6 col-span-1 rounded-xl bg-cover relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553788891-ef87cd3de5f6')",
            }}
          >
            {" "}
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 rounded-full bg-white flex place-items-center justify-center">
                <GrFavorite size="16" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="grid grid-rows-6 grid-flow-col gap-4">
          <div
            className="row-span-6 col-span-1 rounded-xl bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1595149547205-da083e2cc965')",
            }}
          ></div>
          <div
            className="row-span-6 col-span-1 rounded-xl bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1596574202467-915fa42375c8')",
            }}
          ></div>
          <div
            className="row-span-3 col-span-2 h-36 rounded-xl bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1439158771502-46975f6e44e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            }}
          ></div>
          <div
            className="row-span-3 col-span-2 rounded-xl bg-contain"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            }}
          ></div>
        </div>
      </div>
    )
}

export default Body
