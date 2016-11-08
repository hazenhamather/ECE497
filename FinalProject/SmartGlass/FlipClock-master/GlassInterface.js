/**
 * Created by hamathhj on 11/5/16.
 */
console.log("ajax about to execute");

// $.getJSON('http://api.openweathermap.org/data/2.5/forecast/city?id=4265737&APPID=811797f073520b12e9b8f5ee137c9a0d',function(json) {
//     console.log(json);
//     var temp = json.list[18].main.temp * (9/5) - 459.67;
//     $('.currentTemp').text(Math.round(temp));
// });

$.getJSON('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e',function(news) {
    console.log(news);
    for(i=0;i<news.articles.length;i++) {
        var span = $("<span></span>").text((i+1) + ". " + news.articles[i].description).css('color','white');
        var brtag = $("</br></br>");
        $(".newsFeed").append(span,brtag);
        // console.log(news.articles[i].description);
    }
})