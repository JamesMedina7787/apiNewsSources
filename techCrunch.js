var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API
let key;
function which(newssource){
  let source = newssource;
 $.getJSON(`https://newsapi.org/v1/articles?source=` + source + `&apiKey=` + apiKey,
  function(data) {
    console.log(data);

for(let i = 0; i < data.articles.length; i++){
   console.log(data.articles.length);
    let author;
    let content;
    let date;
    let title;
    let pic;
     author = data["articles"][i]["author"];
     content = data["articles"][i]["description"];
     date = data["articles"][i]["publishedAt"];
     title = data["articles"][i]["title"];
     pic = data["articles"][i]["urlToImage"];
    $(".all-news-articles").append(
        author + "<br>" +
        title + "<br>" +
        content + "<br>" +
        date + "<br>" +
        "<img src="+ pic + ">" + "<br>" + "<hr>"
        )
      }

  })

}

which("fortune");


$("#news").click(function(){
  $(".all-news-articles").html("");
  key = "cnn";
  which(key);
})

$("#entertainment").click(function(){
    $(".all-news-articles").html("");
  key = "mtv-news";
  which(key);
})

$("#sports").click(function(){
    $(".all-news-articles").html("");
  key = "espn";
  which(key);
})

$("#economy").click(function(){
    $(".all-news-articles").html("");
  key = "bloomberg";
  which(key);
})

  //newsapi.org
