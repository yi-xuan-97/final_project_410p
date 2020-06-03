var url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=677b08102882beabdba992496310ea0c';

fetch(url)
  .then(response => {
    console.log('request successful', response);
   return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('request failed', error);
  })
