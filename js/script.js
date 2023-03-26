fetch('https://ipapi.co/json/')
.then(response => response.json())
.then(data => {
  const ip = data.ip;
  const city = data.city;
  const region = data.region;
  const country = data.country_name;
  const loc = data.latitude + ',' + data.longitude;
  const locationElement = document.getElementById('location');
  locationElement.innerHTML = `Your IP: ${ip}<br>Location: ${city}, ${region}, ${country}<br>Lat Long: ${loc}`;
  // здесь можно использовать полученные значения в вашем коде
})
.catch(error => console.error(error));