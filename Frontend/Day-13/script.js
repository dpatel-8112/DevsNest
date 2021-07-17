const place = document.getElementById("place");
const temp = document.getElementById("temp");
const feelslike = document.getElementById("feelslike");
const humidity = document.getElementById("humidity");
const status = document.getElementById("status");

function submitPlace(e) {
  e.preventDefault();
  const placeInput = document.getElementById("placeInput");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      placeInput.value +
      "&appid=ac5b4d29fe3ee03476d1ed5132a58d7a" +
      "&units=metric"
  )
    .then((res) => res.json())
    .then((data) => {
      place.innerHTML = data.name;
      temp.innerHTML = data.main.temp;
      feelslike.innerHTML = data.main.feels_like;
      humidity.innerHTML = data.main.humidity;
      status.innerHTML = data.weather[0].main;
    })
    .catch((err) => {
      alert("Please Check Your Input");
      window.location.reload();
    });
}
