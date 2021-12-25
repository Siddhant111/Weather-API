let weather={
    "apiKey":"463971b2670b42176485c0e21bf537bb",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city 
        +"&units=metric&appid="
        +this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));

    },

    displayWeather:function(data){
        const {name} = data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}= data.wind;
        document.querySelector(".city").innerText="Weather in " + name;
        document.querySelector(".temp").innerText= Math.round(parseInt(temp))+"° C";
        document.querySelector(".icon").src=" http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed - "+ speed+"km/hr";

        document.querySelector(".weather").classList.remove("loading");
        },
    
    search:function(){
         this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();
})

document.querySelector(".search-bar")
.addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Hayward");