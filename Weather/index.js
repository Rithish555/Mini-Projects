const apikey = "8b55bcc7bd10ca357666e832a54bb688";
const searchbar = document.getElementById("searchbar");
const searchbtn = document.getElementById("search");
const card = document.getElementById("card");

searchbtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const city = searchbar.value;
    if(city){
        const gotdata = await getdata(city);
        dispdata(gotdata);
    }
    else{
        displayerror("Invalid City!");
    }
});

async function getdata(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    card.textContent="";
    if(!response.ok){
        displayerror("Invalid City!");
    }
    return await response.json();
}

async function dispdata(gotdata) {
    let {name:name,main:{humidity:humidity,temp:temperature},wind:{speed:windspeed},weather:[{id:id,main:reports}]} = gotdata;
    bgchange(id);
    let emojipic = document.createElement("p");
    let cityname = document.createElement("p");
    let citytemp = document.createElement("p");
    let cityhumid = document.createElement("p");
    let citywind = document.createElement("p");
    let cityreport = document.createElement("p");
    const emoji =getemoji(id);
    emojipic.textContent= emoji;
    cityname.textContent=name;
    citytemp.textContent=`${(temperature-273.15).toFixed("0")}°C`;
    cityhumid.textContent=`Humidity ${humidity} %`;
    citywind.textContent=`Wind Speed ${windspeed} m/s`;
    cityreport.textContent=reports;
    emojipic.classList.add("text-[150px]","text-red-600");
    cityname.classList.add("text-5xl","text-red-600", "font-medium","mt-5");
    citytemp.classList.add("text-7xl","text-red-600","font-medium");
    cityhumid.classList.add("text-4xl","text-red-600","font-medium","mt-5");
    citywind.classList.add("text-4xl","text-red-600","font-medium","mt-5");
    cityreport.classList.add("text-4xl","text-red-600","font-medium","mt-5");
    card.append(emojipic);
    card.append(citytemp);
    card.append(cityname);
    card.append(cityhumid);
    card.append(citywind);
    card.append(cityreport);
    card.style.display="flex";


}

function getemoji(id){
    if(id>200 && id<600){
        return "🌧️";
    }
    else if(id>=600 && id<700){
        return "❄️";
        
    }
    else if(id>=700 && id<=800){
        return "🌤️";
    }
    else{
        return "☁️";
    }
}

function bgchange(id){
    if(id>200 && id<600){
        document.body.className = "bg-[url('/Images/rainy.png')] bg-cover";
    }
    else if(id>=600 && id<700){
        document.body.className = "bg-[url('/Images/snow.png')] bg-cover";
    }
    else if(id>=700 && id<=800){
        document.body.className = "bg-[url('/Images/clear.png')] bg-cover";
    }
    else{
        document.body.className = "bg-[url('/Images/cloudy.png')] bg-cover";
    }
}

function displayerror(msg){
    document.body.className = "bg-radial from-sky-400 to-black min-h-screen";
    card.style.display="flex";
    card.textContent="";
    const errormsgadd = document.createElement("p");
    errormsgadd.classList.add("text-red-600","text-7xl");
    errormsgadd.textContent = msg;
    card.append(errormsgadd);
}