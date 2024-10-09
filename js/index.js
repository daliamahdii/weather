 
 
 var finalResult =[];
 
 async function getWeather() {
   var response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1645dd94fdb4935a9c210109240210&q=${searchInput.value}&days=7`)

   finalResult= await response.json()

   
   
   displayDay1()
   displayDay2()
   displayDay3()
   date1()
   date2()
   date3()
}  






function displayDay1(){
    
    document.getElementById("name").innerHTML=`${finalResult.location.name}`
    document.getElementById("degree1").innerHTML=`${finalResult.current.temp_c}<sup>o<sup> C`
    document.getElementById("icon1").innerHTML=`<img src="https:${finalResult.current.condition.icon}">`
    document.getElementById("text1").innerHTML=`${finalResult.current.condition.text}`
    document.getElementById("text4").innerHTML=`${finalResult.current.precip_mm}%`
    document.getElementById("text5").innerHTML=`${finalResult.current.wind_kph}km/h`
document.getElementById("text6").innerHTML=`${finalResult.current.wind_dir}`
}
    

function displayDay2(){
    
    document.getElementById("icon2").innerHTML=`<img src="https:${finalResult.forecast.forecastday[1].day.condition.icon}">`
    document.getElementById("degree2").innerHTML=`${finalResult.forecast.forecastday[1].day.maxtemp_c}`
    document.getElementById("degree3").innerHTML=`${finalResult.forecast.forecastday[1].day.mintemp_c}`
    document.getElementById("text2").innerHTML=`${finalResult.forecast.forecastday[1].day.condition.text}`
    
}

function displayDay3(){
    
    document.getElementById("icon3").innerHTML=`<img src="https:${finalResult.forecast.forecastday[2].day.condition.icon}">`
    document.getElementById("degree4").innerHTML=`${finalResult.forecast.forecastday[2].day.maxtemp_c}`
    document.getElementById("degree5").innerHTML=`${finalResult.forecast.forecastday[2].day.mintemp_c}`
    document.getElementById("text3").innerHTML=`${finalResult.forecast.forecastday[2].day.condition.text}`
    
}

function date1(){
var date = new Date(finalResult.location.localtime)
document.getElementById("day").innerHTML= date.toLocaleDateString('en-US', {weekday: 'long'})
document.getElementById("month").innerHTML= date.toLocaleDateString('en-US', {month: 'long'})

}
function date2(){
    var date = new Date(finalResult.forecast.forecastday[1].date)
    document.getElementById("day2").innerHTML= date.toLocaleDateString('en-US', {weekday: 'long'})
}
function date3(){
    var date = new Date(finalResult.forecast.forecastday[2].date)
    document.getElementById("day3").innerHTML= date.toLocaleDateString('en-US', {weekday: 'long'})
}

var btnFind=document.getElementById("btnFind")
var searchInput=document.getElementById("searchInput")

var city = searchInput.value
searchInput.addEventListener("input",function(){
    if(searchInput.value.length > 2){

        getWeather()
    }

})
let liveLocation;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        liveLocation = position.coords.latitude + ',' + position.coords.longitude
    
        getWeather(liveLocation)
        })
}
