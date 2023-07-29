const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c1d3eb52bmsh5099254d767003ap13464ajsn9b181b31f5c6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let fin_temp=0;
const getWeather = (city) => {
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response => response.json())
.then((response) => 
    {
        console.log(response)

        cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temperature2 .innerHTML=response.temp

        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity

        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        
        wind_speed.innerHTML=response.wind_speed
        wind_info2.innerHTML=response.wind_speed

        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        
        console.log(response.temp)
            if(response.temp > 15)
            {
                document.querySelector('#bdy').style.backgroundImage = 'url("/sun.webp")';
                document.querySelector('#bdy').style.backgroundSize = 'cover';
            }
            if(response.cloud_pct >80 )
            {
                document.querySelector('#bdy').style.backgroundImage = 'url("/rain.gif")';
                document.querySelector('#bdy').style.backgroundSize = 'cover';
            }  
            if(response.temp <15 && response.temp > 0 )
            {
                document.querySelector('#bdy').style.backgroundImage = 'url("/gorgeous-clouds-background-with-blue-sky-design_1017-25501.avif")';
                document.querySelector('#bdy').style.backgroundSize = 'cover';
            }  
            if(response.temp <0 )
            {
                document.querySelector('#bdy').style.backgroundImage = 'url("/snow.gif")';
                document.querySelector('#bdy').style.backgroundSize = 'cover';
            }  
            const currentTime = new Date();
            const currentHour = currentTime.getHours();

            console.log(currentHour);
            if (currentHour > 19) {
                document.body.classList.add('time-lt-19');
              }

    })
.catch(err => console.error(err));

}
submit.addEventListener("click",(e)=>
{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Jammu")

