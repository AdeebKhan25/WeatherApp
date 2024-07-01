import React, { useState, useEffect } from "react";

function Top({ City, imgSrc }) {
  const srcUrl = "/" + imgSrc + ".jpg";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getFormattedDate = () => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    if (m < 10) {
      m = "0" + m;
    }
    let wd = days[date.getDay()];
    let d = date.getDate();
    let mo = months[date.getMonth()];
    let year = date.getFullYear().toString().substring(2, 4);

    return `${h}:${m} - ${wd}, ${d} ${mo}, '${year}`;
  };

  const [val, setVal] = useState(getFormattedDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVal(getFormattedDate());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white">
      <div className="p-4">
        <img
          className="w-2/5 h-2/5 mx-auto rounded-lg"
          src={srcUrl}
          alt="Weather Image"
        />
      </div>
      <p className="text-center font-medium text-2xl pt-2">{City}</p>
      <p className="text-center text-sm pt-1">{val}</p>
    </div>
  );
}

export default Top;
