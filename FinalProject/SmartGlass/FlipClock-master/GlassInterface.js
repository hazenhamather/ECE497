/**
 * Created by hamathhj on 11/5/16.
 */
console.log("ajax about to execute");

$.getJSON('http://api.openweathermap.org/data/2.5/forecast/city?id=4265737&APPID=811797f073520b12e9b8f5ee137c9a0d',function(currentWeather) {
    console.log(currentWeather);
    var temp = currentWeather.list[0].main.temp * (9/5) - 459.67;
    $('.city').text(currentWeather.city.name).css('color','white').css('font-size',18);
    $('.currentTemp').text(Math.round(temp)).css('font-size',18).css('color','white');
    $('.weatherIcon').prepend('<img id="icon" src = "http://openweathermap.org/img/w/' + currentWeather.list[0].weather[0].icon + '.png"/>');
    $('.currentConditions').text(currentWeather.list[0].weather[0].description).css('font-size',18).css('color','white');
    $('.windDirection').text(Math.round(currentWeather.list[0].wind.deg)).css('font-size',18).css('color','white');
    $('.windSpeed').text(Math.round(currentWeather.list[0].wind.speed)).css('font-size',18).css('color','white');
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
    for (i = 0; i < 3; i++) {
        if (i == 0) {
            span = $("<span></span>").text("Sports section:").css('color', 'white').css('font-size', 15);
            $('.newsFeed').append(span, '</br>');
        }
        var span = $("<span></span>").text((counter + 1) + ". " + ESPNnews.articles[i].description).css('color', 'white').css('font-size', 12);
        var brtag = $("</br></br>");
        $(".newsFeed").append(span, brtag);
        counter++;
    }
})

$.getJSON('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=a41b3043a7df4311a62b21a4c756d67e', function(Googlenews) {
    console.log(Googlenews);
    for (i = 0; i < 3; i++) {
        if (i == 0) {
            span = $("<span></span>").text("Here's what Google knows:").css('color', 'white').css('font-size', 15);
            $('.newsFeed').append(span, '</br>');
        }
        var span = $("<span></span>").text((counter + 1) + ". " + Googlenews.articles[i].description).css('color', 'white').css('font-size', 12);
        var brtag = $("</br></br>");
        $(".newsFeed").append(span, brtag);
        counter++;
    }
        var span1 = $("<span></span>").text("Here is a famous quote").css('color','white').css('font-size',12);
    var span2 = $("<span></span>").text("-Unknown").css('color','white').css('font-size',12);
    var brtag = $("</br>");
    $(".bottomDiv").append(span1,brtag,span2);

})

// $.getJSON('http://quotes.rest/qod.json', function(Famousquotes) {
//     console.log(Famousquotes);
//
//     var span1 = $("<span></span>").text(Famousquotes.contents.quotes[0].quote);
//     var span2 = $("<span></span>").text("-" + Famousquotes.contents.quotes[0].author);
//     var brtag = $("</br>");
// var span1 = $("<span></span>").text("Here is a famous quote").css('color','white').css('font-size',12);
// var span2 = $("<span></span>").text("-Unknown").css('color','white').css('font-size',12);
// var brtag = $("</br>");
// $(".quoteOfTheDayDiv").append(span1,span2);
// console.log("Quote of the day should have been placed");
// })