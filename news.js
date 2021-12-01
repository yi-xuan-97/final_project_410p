
/*news api*/
 var url = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6220e042b7ed43bd88243a6a6a10d470'
    var req = new Request(url);
    fetch(req)
    .then(function(response) {
        console.log('success',response);
        return response.json();
    })
    .then(data=> {
          let randomNumber = Math.ceil(Math.random()*6);  
          for(let i=0; i < 4; ++i)
            createNewsElement(data, randomNumber+i, i);      
    })
      .catch(error=> {
        console.log('fail\n', error);
    });


function createNewsElement(data, randomNumber, i) {
  var news_title = document.createElement("news-font");
  news_title.innerHTML = data.articles[randomNumber].title;
  document.getElementById("news-title" + i).appendChild(news_title);

  let news_picture = document.createElement("img");
  news_picture.src = data.articles[randomNumber].urlToImage;
  document.getElementById("news-picture" + i).appendChild(news_picture);
  
  let news_url = document.createElement("a");
  news_url.href = data.articles[randomNumber].url;
  news_url.innerHTML = data.articles[randomNumber].url;
  document.getElementById("news-url" + i).appendChild(news_url);
}
    //https://newsapi.org/docs/get-started I use this API SUCCESS
  
   
