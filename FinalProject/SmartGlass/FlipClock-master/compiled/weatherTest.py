import urllib, json

response = urllib.urlopen('http://api.openweathermap.org/data/2.5/forecast/city?id=4265737&APPID=811797f073520b12e9b8f5ee137c9a0d')
stuff = response.read();
print stuff


# baseurl = "https://query.yahooapis.com/v1/public/yql?"
# yql_query = "select wind from weather.forecast where woeid=12778384"
# yql_url = baseurl + urllib.urlencode({'q':yql_query}) + "&format=json"
# result = urllib2.urlopen(yql_url).read()
# data = json.loads(result)
# print data['query']['results']