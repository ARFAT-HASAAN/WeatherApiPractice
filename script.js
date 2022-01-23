const Weather = async () => {
  const API_KEY = "7601561fc473aa2453666fa4f479ab96";
  const countryName = document.getElementById("CountryName").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  sendData(data);

  document.getElementById("CountryName").value = "";
};

const setInfo = (id, text) => {
  document.getElementById(id).innerText = text;

  //   const img = document.getElementById("img");

  //http://openweathermap.org/img/wn/10d@2x.png
};

const sendData = (data) => {
  const img = document.getElementById("img");
  img.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png `
  );

  setInfo("city", data.name);
  setInfo("temp", data.main.temp);
  setInfo("weather", data.weather[0].main);
};
