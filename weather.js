var url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=677b08102882beabdba992496310ea0c';

var curr = 0;
let getDataPromise = (url) => {

  fetch(url)
    .then(response => {
      console.log('request successful', response);
      return response.json();
    })
    .then(data => {
      var t1 = data.main.temp;
      var t2 = data.main.feels_like;
      var t3 = data.main.temp_min;
      var t4 = data.main.temp_max;

      var ctx = document.getElementById("myChart");
      var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Temporature', 'Feel Like', 'Lowest Temp', 'Highest Temp', 'Mcomfort', 'mconfort'],
          datasets: [{
            label: 'Weather Infor',
            barPercentage: 0.5,
            barThickness: 4,
            maxBarThickness: 8,
            minBarLength: 4,
            data: [t1, t2, t3, t4, 295.1, 300.1],
            backgroundColor: [
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
            ]
          }]
        },
        options: {
          scales: {
            xAxes: [{
              gridLines: {
                offsetGridLines: true
              }
            }],
            yAxes: [{
              beginAtZero: false
            }]
          }
        }
      });
      console.log(data);
    })
    .catch(error => {
      console.log('request failed', error);
    })

}

getDataPromise(url);



