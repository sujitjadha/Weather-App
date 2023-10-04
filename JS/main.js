let search_btn = document.getElementById('btn')

function getData() {
    let input_city = document.getElementById('input_city').value
     if(input_city===''){ //for empty string
         alert('Please enter city')
     }else{
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + input_city + "&appid=9a619f6c1a65c7848cebca88bebd5cfe&units=metric"
        fetch(url).then((response) => {       
            return response.json();
        }).then((data) => {
            document.getElementById("city").innerHTML = "Weather in " +input_city; //city name
            document.getElementById("temp").innerHTML = data.main.temp+"&#8451;"; //city temp
            document.getElementById("icon").src = "http://openweathermap.org/img/wn/" +data.weather[0].icon+ ".png" // weather icon
            document.getElementById("description").innerHTML = data.weather[0].description; // weather description
            document.getElementById("humidity").innerHTML = "Humidity: "+data.main.humidity; //weather humidity
            document.getElementById("wind").innerHTML ="Wind Speed: " +data.wind.speed //weather speed
        })
        //for invalid city
        .catch((error)=>{
            alert('City not found')
        })
     }   
}

search_btn.addEventListener("click", getData)

