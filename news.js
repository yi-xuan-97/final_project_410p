
/*news api*/
 var url = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6220e042b7ed43bd88243a6a6a10d470'
    var req = new Request(url);
    fetch(req)
    .then(function(response) {
        console.log('success',response);
        return response.json();
    })
    .then(data=> {
          console.log(data)
          let r = Math.ceil(Math.random()*6);  
          console.log(r) 

          for(let i=0; i < 4; ++i)
            createNewsElement(data, r+i, i);
            
    })
      .catch(error=> {
        console.log('fail\n', error);
    });


function createNewsElement(data, r, i) {
  console.log(i);
  var news_title = document.createElement("news-font");
  console.log(r);
  news_title.innerHTML = data.articles[r].title;
  document.getElementById("news-title" + i).appendChild(news_title);
  console.log(news_title);
  let news_picture = document.createElement("img");
  news_picture.src = data.articles[r].urlToImage;
  document.getElementById("news-picture" + i).appendChild(news_picture);
  console.log(news_picture);
  let news_url = document.createElement("a");
  news_url.href = data.articles[r].url;
  news_url.innerHTML = data.articles[r].url;
  document.getElementById("news-url" + i).appendChild(news_url);
  console.log(news_url);
}
    //https://newsapi.org/docs/get-started I use this API SUCCESS
  
   
