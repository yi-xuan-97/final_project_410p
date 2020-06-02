
/*news api*/
var proxyurl = "https://cors-anywhere.herokuapp.com/"; //ADD CORS
var url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=6220e042b7ed43bd88243a6a6a10d470';
var req = new Request(url);
fetch(proxyurl+req)
    .then(response=> {
        console.log('success',response);
      //  return response.json(); //fail!!!!!
    })
    .then(res=>console.log(res))
    .then(data=> {
        let i = Math.ceil(Math.random()*10);  
        console.log(i) 
        console.log(data)
        let news_title = document.createElement("news-font");
        let news_picture = document.createElement("news-font")
        let news_url = document.createElement("news-font");
        //console.log(news-title, news-picture, news-url)
        news_title.innerHTML = data.articles[1].title;
        news_picture.innerHTML = data.articles[1].urlToImage;
        news_url.innerHTML = data.articles[1].url;
        document.getElementById("content").appendChild(news_title);
        document.getElementById("content").appendChild(temp);
        document.getElementById("content").appendChild(temp);
    })
      .catch(error=> {
        console.log('fail\n', error);
    });

    //https://newsapi.org/docs/get-started I use this API , but not success
    /*
    var url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=6220e042b7ed43bd88243a6a6a10d470';
    var req = new Request(url);
    fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
    */