import axios from "axios";
import React, { useState } from "react";
import { AiOutlineAntCloud } from "react-icons/ai";

function GEtWeather() {
  let [input, setinput] = useState("");
  let [show, setshow] = useState(true);
  let [data, setdata] = useState(null);
  let [error, seterror] = useState(null);
  let [ispinding, setispinding] = useState(null);

  let onchangefunc = (e) => {
    setinput(e.target.value);
  };

  let mmmm = async () => {
    let ddd = await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?`, {
        params: {
          q: `${input}`,
          lang: "en",
          appid: "27c4f53ffb9dd85bf1dfb14cc7d53357",
          units: "metric",
        },
      })
      .then((res) => {
        setdata(res);
        setispinding(false);
        seterror("");
        console.log(res);
      })
      .catch((err) => {
        seterror(err.message);
        setispinding(false);
        setshow(true);
        setdata("");
      });
  };

  let urlimage = `https://api.openweathermap.org/img/w/`;
  let onKeyDownCapture = (e) => {
    if (e.key === "Enter" && input === "") {
      setshow(false);
      seterror(false);
    }
    if (e.key === "Enter" && input !== "") {
      setispinding(true);
      mmmm();
      // setshow(true)
      // setispinding(true)
      // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=en&appid=27c4f53ffb9dd85bf1dfb14cc7d53357&units=metric`)
      // .then((res)=>{
      //   if(!res.ok){
      //     throw Error('we cant find your search please cheack the name')
      //   }
      //   return res.json()
      // }).then((data)=>{
      //   setdata(data)
      //   console.log(data)
      //   seterror(false)
      //   setispinding(false)
      // }).catch((err)=>{
      //   seterror(err.message)
      //   setdata('')
      //   setispinding(false)
      // })
    }
  };

  return (
    <div>
      <input
        className="input-lg inp"
        type="text"
        placeholder="Find your city's weather"
        value={input}
        onChange={onchangefunc}
        onKeyDownCapture={onKeyDownCapture}
      />
      {error && <p className="erorr mt-2 p-2">{error}</p>}
      {ispinding && <h3>...Loading</h3>}
      {show ? (
        data && (
          <div className="get-weather mt-3 p-2">
            <h2>
              {data.data.name}, {data.data.sys.country}
            </h2>
            <img src={urlimage + data.data.weather[0].icon + ".png"} alt="" />
            <p>Temp : {`${Math.floor(data.data.main.temp)}°C`} </p>
            <p>Weather : {data.data.weather[0].main} </p>
            <p>
              Temp Range :
              {`${Math.floor(data.data.main.temp_max)}°C / ${Math.floor(
                data.data.main.temp_min
              )}°C`}
            </p>
          </div>
        )
      ) : (
        <p className="erorr mt-2 p-2">
          input cannot be empty
          <br />
          please type city name
        </p>
      )}
    </div>
  );
}

export default GEtWeather;
