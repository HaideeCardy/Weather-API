// Search Bar //

let search = (e) => {
  const keyAPI = `b0929492df7fe554988cfbc8cb3a2505`;
  const loc = document.getElementById('locInput').value;
  const stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;

  // Fetching the Data //
  
  const getData = () => {
    fetch(stringPassIn).      //pulling in API//
      .then((res) => res.json())      //convert to json//
      .then((data) => {
        console.log(data);     // data to be displayed //
        const description = data.weather[0].description.toUpperCase();
        const temperature = Math.trunc(data.main.temp) - 273;
        const feelsLike = Math.trunc(data.main.feels_like) - 273;
        const humidity = data.main.humidity;
        document.getElementById(
          'results'
        ).innerHTML = `<p>${description} <br>Temperature <b>${temperature} °C</b> <br>But Feels Like <b>${feelsLike} °C</b>  <br>Humidity <b>${humidity}% </b></p>`;
      })    // Create and display the results in HTML //
      .catch((err) => console.log(err));    // 1 catch to log Error //
  };
  getData();
  e.preventDefault();
};

document.getElementById('myBTN').addEventListener('click', search);   // event listener to link button //

