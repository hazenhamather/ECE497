/**
 * Created by hamathhj on 11/5/16.
 */
console.log("ajax about to execute");

$.getJSON('http://api.openweathermap.org/data/2.5/forecast/city?id=4265737&APPID=811797f073520b12e9b8f5ee137c9a0d',function(currentWeather) {
    console.log(currentWeather);
    var temp = currentWeather.list[0].main.temp * (9/5) - 459.67;
    $('.currentTemp').text(Math.round(temp));
    $('.weatherIcon').prepend('<img id="icon" src = "http://openweathermap.org/img/w/' + currentWeather.list[0].weather[0].icon + '.png"/>');
});

var counter = 0;
$.getJSON('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e',function(CNNnews) {
    console.log(CNNnews);
    for(i=0;i<3;i++) {
        if (i==0) {
            var span = $("<span></span>").text("Happening in your world:").css('color','white').css('font-size',15);
            $(".newsFeed").append(span,'</br>');
        }
        var span = $("<span></span>").text((counter+1) + ". " + CNNnews.articles[i].description).css('color','white').css('font-size',12);
        var brtag = $("</br></br>");
        $(".newsFeed").append(span,brtag);
        counter++;
        // console.log(news.articles[i].description);
    }
})

$.getJSON('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e', function(ESPNnews) {
    console.log(ESPNnews);
    for(i=0;i<3;i++) {
        if (i==0) {
            span = $("<span></span>").text("In sports:").css('color','white').css('font-size',15);
            $('.newsFeed').append(span,'</br>');
        }
        var span = $("<span></span>").text((counter+1) + ". " + ESPNnews.articles[i].description).css('color','white').css('font-size',12);
        var brtag = $("</br></br>");
        $(".newsFeed").append(span,brtag);
        counter++;
    }
})

$.getJSON('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e', function(Googlenews) {
    console.log(Googlenews);
    for(i=0;i<3;i++) {
        if (i==0) {
            span = $("<span></span>").text("Here's what Google knows:").css('color','white').css('font-size',15);
            $('.newsFeed').append(span,'</br>');
        }
        var span = $("<span></span>").text((counter+1) + ". " + Googlenews.articles[i].description).css('color','white').css('font-size',12);
        var brtag = $("</br></br>");
        $(".newsFeed").append(span,brtag);
        counter++;
    }
})

// $.getJSON('http://webknox.com/api/jokes/random?apiKey=behigchjbbxuosbuparastecmxvilvl', function(joke) {
//     console.log(joke);
//         // var span = $("<span></span>").text((counter+1) + ". " + ESPNnews.articles[i].description).css('color','white').css('font-size',12);
//         // var brtag = $("</br></br>");
//         // $(".jokeOfTheDay").append(span,brtag);
// })