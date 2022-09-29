const key = "79113d25c75f6889b50a0015075b4b16";
var ton = 0
var lati = 0
var long = 0
//geocoding API get lon/lat activate next function

function getInput() {
    var citySearch = document.querySelector(".input");
    var cityName = citySearch.value;
    var latlon = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=20&appid=" + key;
    fetch(latlon)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //set town choices

            for (i = 0; i <= data.length - 1; i++) {
                var townNum = (data[i].state);
                var li = document.createElement('li')
                here.appendChild(li)
                li.setAttribute("id", i)
                li.textContent = townNum
                li.setAttribute("onclick", "reply_click()")
            }

            // for(i = 0; i <= data.length - 1; i++){
            //   var townNum = (data[i].state);
            //   var option = document.createElement("button");
            //   option.id = i
            //   option.setAttribute ("onclick", "reply_click()")
            //   document.getElementById("town"+ i).append(option)
            //   option.textContent = townNum;
            // }   
        })
}



//sets the weather of location at current spot
function reply_click() {
    var ton = (event.srcElement.id)
    console.log(ton)
    var citySearch = document.querySelector(".input");
    var cityName = citySearch.value;
    var latlon = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=20&appid=" + key;
    fetch(latlon)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            lati = data[ton].lat
            long = data[ton].lon
            getWeather()
        }
        )
}





//para n arguments pass data top - bottom



// //gets todays weather
function getWeather() {
    var lat = lati;
    var lon = long;
    var oneCallRequest = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=hourly&appid=" + key;
    fetch(oneCallRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(oneCallRequest)
            var temp = document.getElementById("temp")
            temp.textContent = "Temp:  " + data.current.temp

            var wind = document.getElementById("wind")
            wind.textContent = "Wind:  " + data.current.wind

            var humid = document.getElementById("humidity")
            humid.textContent = "Temp:  " + data.current.humidity

            var UV = document.getElementById("UV")
            UV.textContent = "Temp:  " + data.current.uvi
            please()

        })
}



//gets tomarrows weather
function please() {
    var lat = lati;
    var lon = long;
    var nextDaysWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key;
    fetch(nextDaysWeather)
        .then(function (apple) {
            return apple.json();
        })
        .then(function (future) {
            console.log(future)
            //set the layout
            for (i = 0; i <= 5; i++) {
                console.log(future.list[1].main)

                //set the date
                var currentDate = new Date()
                var month = currentDate.getMonth()
                var day = currentDate.getDate()
                var nxday = [month, day + 1 + i]
                var datee = document.createElement("h2")
                datee.textContent = nxday
                day1.appendChild(datee)

                var try2 = document.createElement("ul")
                tomarrows.append(try2)
                try2.className = "day" + [i];


                //set up 
                var futureInfo = future.list[1].main;
                var tempe = document.createElement("li");
                tempe.textContent = "Temp:  " + futureInfo.temp;
                console.log(tempe)

                var winde = document.createElement("li");
                winde.textContent = "Wind:  " + futureInfo.wind;

                var humide = document.createElement("li");
                humide.textContent = "Temp:  " + futureInfo.humidity;

                var UVe = document.createElement("li");
                UVe.textContent = "Temp:  " + futureInfo.uvi;


                li.append.tempe
                li.append.winde
                li.append.humide
                li.append.UVe
            }
        })
};

