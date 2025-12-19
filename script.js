// const apikey = "349f6528c0d90689935834964d44e569";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });

const apikey = "349f6528c0d90689935834964d44e569"; // API key को एक constant में रखा — OpenWeatherMap से data पाने के लिए जरूरी है
const searchBox = document.querySelector(".search input"); // HTML में .search के अंदर वाले input एलेमेंट को चुना और उसे searchBox नाम दिया
const searchBtn = document.querySelector(".search button"); // .search के अंदर वाले button एलेमेंट को चुना और उसे searchBtn नाम दिया

async function checkWeather(city) { // एक async function बनाई जिसका नाम checkWeather है — यह शहर का नाम (city) लेगा और मौसम का data लाएगा
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`; // API का पूरा URL बनाया — template literal में शहर, apikey और units जोड़े गये

    const response = await fetch(url); // fetch से API को request भेजी और await करके response का इंतज़ार किया (यह line promise resolve होने तक रुकेगी)
    const data = await response.json(); // response को JSON में बदल लिया — अब data में API से मिला पूरा JSON object होगा
    console.log(data); // developer console में पूरा data दिखाया — debugging के लिए helpful है

    document.querySelector(".city").innerHTML = data.name; // HTML में .city क्लास वाले element की innerHTML में API से मिला शहर का नाम (data.name) डाला
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; // .temp में तापमान दिखाया — data.main.temp को Math.round से round किया और "°C" जोड़ा
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // .humidity में API से मिली humidity value (data.main.humidity) के साथ "%" जोड़ा और दिखाया
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; // .wind में हवा की speed (data.wind.speed) के साथ " km/h" जोड़कर दिखाया
}

searchBtn.addEventListener("click", () => { // search button पर click होने पर एक event listener लगाया गया
    checkWeather(searchBox.value); // click होते ही checkWeather function को बुलाया गया और input में typed शहर (searchBox.value) पास किया गया
});
