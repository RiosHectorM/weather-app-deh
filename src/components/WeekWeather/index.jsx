import React from "react";
import styles from "./WeekWeather.module.css";

function WeekWeather() {
  return (
    <div className="flex h-screen flex-col">
      <h3>Week Weather</h3>
      <div className="flex justify-around rounded-b-3xl bg-black bg-opacity-50 py-2">
        <div className="m-2 flex flex-1 flex-col py-5 text-center">
          <img
            src="https://www.viajarafrancia.com/wp-content/uploads/2014/10/clima-1.jpg"
            alt="weather"
            className="m-auto h-36 w-48 rounded-full"
          />
          <div className="text-white">
            <p className="text-2xl">TODAY</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex-1 rounded-lg py-5 text-center">
          <img
            src="https://www.diariohispaniola.com/fotos/1/100412_newicondhsoleado_thumb_620.jpg"
            alt="weather"
            className="m-auto h-36 w-48 rounded-full"
          />
          <div className="text-white">
            <p>TODAY+1</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex-1 rounded-lg py-5 text-center">
          <img
            src="https://perfiles.co/wp-content/uploads/2022/12/1f6ebaff8b0b208b04f6566de3526069.jpg"
            alt="weather"
            className="m-auto h-36 w-48 rounded-full"
          />
          <div className="text-white">
            <p>TODAY+2</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
        <div className="m-2 flex-1 rounded-lg py-5 text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwvl3Xw0aCxEKoZuSz_rOlAtFuircsf3N6A&usqp=CAU"
            alt="weather"
            className="m-auto h-36 w-48 rounded-full"
          />
          <div className="text-white">
            <p>TODAY+3</p>
            <p className="m-0 flex-nowrap p-0">T° MAX | T° MIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekWeather;
