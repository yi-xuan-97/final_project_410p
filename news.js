
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
          var news_title = document.createElement("news-font");
          news_title.innerHTML = data.articles[r].title;
          document.getElementById("news-title").appendChild(news_title);
          console.log(news_title)
          let news_picture = document.createElement("img")
          news_picture.src = data.articles[r].urlToImage;
          document.getElementById("news-picture").appendChild(news_picture);
          console.log(news_picture)
          let news_url = document.createElement("a");
          news_url.href = data.articles[r].url;
          news_url.innerHTML = data.articles[r].url;
          document.getElementById("news-url").appendChild(news_url);
          console.log(news_url)

          var news_title2 = document.createElement("news-font");
          news_title2.innerHTML = data.articles[r+1].title;
          document.getElementById("news-title2").appendChild(news_title2);
          let news_picture2 = document.createElement("img")
          news_picture2.src = data.articles[r+1].urlToImage;
          document.getElementById("news-picture2").appendChild(news_picture2);
          let news_url2 = document.createElement("a");
          news_url2.href = data.articles[r+1].url;
          news_url2.innerHTML = data.articles[r+1].url;
          document.getElementById("news-url2").appendChild(news_url2);

          var news_title3 = document.createElement("news-font");
          news_title3.innerHTML = data.articles[r+2].title;
          document.getElementById("news-title3").appendChild(news_title3);
          let news_picture3 = document.createElement("img")
          news_picture3.src = data.articles[r+2].urlToImage;
          document.getElementById("news-picture3").appendChild(news_picture3);
          let news_url3 = document.createElement("a");
          news_url3.href = data.articles[r+2].url;
          news_url3.innerHTML = data.articles[r+2].url;
          document.getElementById("news-url3").appendChild(news_url3);

          var news_title4 = document.createElement("news-font");
          news_title4.innerHTML = data.articles[r+3].title;
          document.getElementById("news-title4").appendChild(news_title4);
          let news_picture4 = document.createElement("img")
          news_picture4.src = data.articles[r+3].urlToImage;
          document.getElementById("news-picture4").appendChild(news_picture4);
          let news_url4 = document.createElement("a");
          news_url4.href = data.articles[r+3].url;
          news_url4.innerHTML = data.articles[r+3].url;
          document.getElementById("news-url4").appendChild(news_url4);
    })
      .catch(error=> {
        console.log('fail\n', error);
    });

    //https://newsapi.org/docs/get-started I use this API SUCCESS
  
   