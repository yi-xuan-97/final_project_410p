var url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=677b08102882beabdba992496310ea0c';

var curr=0;
let getDataPromise = (url) => {

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

}

getDataPromise(url);

var ctx = document.getElementById("myChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Temporature', 'Feel Like', 'Lowest Temp', 'Highest Temp', '', 'orange', 'unknown'],
    datasets: [{
      label: 'Weather Infor',
      barPercentage: 0.5,
      barThickness: 4,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [95, 20, 30, 40, 50, 60, 70],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(199, 199, 199, 0.8)',
      ]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }]
    }
  }
});

