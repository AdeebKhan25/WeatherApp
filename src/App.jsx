import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Top from "./Top";
import Bottom from "./Bottom";
import Footer from "./Footer";

function App() {
  const [Data, setData] = useState({});
  const [city, setCity] = useState("London");
  const unit = "metric";
  const apikey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apikey +
    "&units=" +
    unit;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [url]);

  let temperature = "";
  let wth = "";
  let des = "";
  let prs = "";
  let hum = "";
  let tempValue = "";

  if ("main" in Data) {
    temperature = Data.main.temp;
    wth = Data.weather[0].main;
    des = Data.weather[0].description;
    prs = Data.main.pressure;
    hum = Data.main.humidity;
    tempValue = Data.weather[0].icon;
  } else {
    temperature = "Unavailable";
    wth = "Unavailable";
    des = "Unavailable";
    prs = "Unavailable";
    hum = "Unavailable";
  }

  return (
    <div className="flex flex-col min-h-screen w-full sm:w-2/3 md:w-3/5 md:max-w-[600px] mx-auto bg-zinc-950 font-QuickSand">
      <div className="flex-grow">
        <Header />
        <SearchBar sCity={setCity} />
        <Top City={city} imgSrc={tempValue} />
        <Bottom
          temp={temperature}
          weather={wth}
          description={des}
          pressure={prs}
          humidity={hum}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
