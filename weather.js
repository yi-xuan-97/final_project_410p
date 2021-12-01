//Crating analysis graph from data fetching from API
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=677b08102882beabdba992496310ea0c';
var url1 = 'https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.68&appid=677b08102882beabdba992496310ea0c';

//Getting analysis graph of temporature changes within same day
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

//Getting analysis graph of the week of temporature 
let getDataPromise1 = (url1) => {

  fetch(url1)
    .then(response => {
      console.log('request successful', response);
      return response.json();
    })
    .then(data => {
      console.log(data);

      const temp = [];
      var i;
      for (i = 0; i < 8; ++i) {
        temp[i] = data['daily'][i]['temp']['day'];
        console.log(temp[i]);
      }

      var ctx1 = document.getElementById("myChart1");
      var myLineChart = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['Today','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
          datasets: [{
            label: 'Future seven days forcast',
            data: [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6],temp[7]],
            borderColor: 'rgb(0, 128, 128)',
            pointStyle:'star',
          }]

        },
        options: {
          scales: {
            yAxes: [{
              beginAtZero: false
            }]
          }
        }
      });
    })
    .catch(error => {
      console.log('request failed', error);
    })

}

getDataPromise1(url1);



