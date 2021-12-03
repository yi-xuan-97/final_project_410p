//Crating analysis graph from data fetching from API
var urlBar = 'https://api.openweathermap.org/data/2.5/weather?q=Portland&appid=677b08102882beabdba992496310ea0c';
var urlLine = 'https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.68&appid=677b08102882beabdba992496310ea0c';

//Getting analysis graph of temporature changes within same day
let getDataPromiseBar = (urlBar) => {
  fetch(urlBar)
    .then(response => {
      console.log('request successful', response);
      return response.json();
    })
    .then(data => {
      var barData = [data.main.temp, data.main.feels_like, data.main.temp_min, data.main.temp_max, 295.1, 300.1];
      var barBackgroundColor = ['rgba(54, 162, 235, 0.8)',
                                'rgba(255, 206, 86, 0.8)',
                                'rgba(255, 99, 132, 0.8)',
                                'rgba(75, 192, 192, 0.8)',
                                'rgba(153, 102, 255, 0.8)',
                                'rgba(255, 159, 64, 0.8)',]
      var barLabels = ['Temporature', 'Feel Like', 'Lowest Temp', 'Highest Temp', 'Mcomfort', 'mconfort'];
      var charName = 'Weather Info';

      const ctxBar = document.getElementById("myChart");
      createBarChart(ctxBar, charType, charName, barLabels, barData, barBackgroundColor);
    })
    .catch(error => {
      console.log('request failed', error);
    })
}

getDataPromiseBar(urlBar);

//Getting analysis graph of the week of temporature 
let getDataPromiseLine = (urlLine) => {
  fetch(urlLine)
    .then(response => {
      console.log('request successful', response);
      return response.json();
    })
    .then(data => {
      const temp = [];
      for (let i = 0; i < 8; ++i)
        temp[i] = data['daily'][i]['temp']['day'];
      var lineData = [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6],temp[7]];
      var lineBorderColor = ['rgb(0, 128, 128)']
      var lineLabels = ['Today','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
      var charName = 'Future seven days forcast';

      var ctxLine = document.getElementById("myChart1");
      createLineChart(ctxLine, charName, lineLabels, lineData, lineBorderColor);
    })
    .catch(error => {
      console.log('request failed', error);
    })

}

getDataPromiseLine(urlLine);

function createBarChart(ctx, charName, barLabels, barData, barBackgroundColor) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: barLabels,
      datasets: [{
        label: charName,
        data: barData,
        backgroundColor: barBackgroundColor
      }]
    },
    options: {
      scales: {
        xAxes: [{
          gridLines: { offsetGridLines: true }
        }],
        yAxes: [{ beginAtZero: false }]
      }
    }
  });
}

function createLineChart(ctx, charName, lineLabels, lineData, lineBorderColor) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: lineLabels,
      datasets: [{
        label: charName,
        data: lineData,
        borderColor: lineBorderColor,
        pointStyle:'star',
      }]
    },
    options: {
      scales: {
        yAxes: [{ beginAtZero: false }]
      }
    }
  });
}
