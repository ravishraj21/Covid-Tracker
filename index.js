// For World COVID Details

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "7e8f102469msh9f81ccf22836c18p1b8991jsn1815ef40212f",
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
    }
})

    .then(response => {
        // console.log(response);
        return response.json()
    }).then(data => {
        console.log(data);

        console.log(data.world_total);

        let updateTime = "Updated on " + data.statistic_taken_at;
        document.getElementById('updateTime').innerHTML = updateTime;

        let worldTotalResults = `<li>Total Cases: ${data.world_total.total_cases}`;

        worldTotalResults += `<li>Total Deaths: ${data.world_total.total_deaths}`;

        worldTotalResults += `<li>Total Recovered: ${data.world_total.total_recovered}`;

        worldTotalResults += `<li>Today new Cases: ${data.world_total.new_cases}`;

        worldTotalResults += `<li>Today new Deaths: ${data.world_total.new_deaths}`;

        document.getElementById('world-results').innerHTML = worldTotalResults;


        document.getElementById("country-input").addEventListener("click", function () {

            let inputCountry = document.getElementById('input_country').value;

            var flag = 0;

            for (var i = 0; i < data.countries_stat.length; i++) {
                if (inputCountry.toUpperCase() === data.countries_stat[i].country_name.toUpperCase()) {

                    console.log(data.countries_stat[i].cases);
                    let searchedCountryResults = `<li>Total Cases in ${inputCountry.toUpperCase()} : ${data.countries_stat[i].cases}</li>`;

                    console.log(data.countries_stat[i].deaths);
                    searchedCountryResults += `<li>Total Deaths in ${inputCountry.toUpperCase()} : ${data.countries_stat[i].deaths}</li>`;

                    console.log(data.countries_stat[i].total_recovered);
                    searchedCountryResults += `<li>Total Recovered in ${inputCountry.toUpperCase()} : ${data.countries_stat[i].cases}</li>`;


                    document.getElementById('searched-country').innerHTML = searchedCountryResults;

                    flag = 1;

                }
            }

            if (flag === 0) {
                alert("Country name is Invalid")
            }

            // console.log(inputCountry);

        });



    })


// Location Tracker

const successCallback = (position) => {
    // console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    const urlLocation = "http://api.positionstack.com/v1/reverse?access_key=f2843e67c9711e243ba9ddc7c9165ef3&query=" + latitude + "," + longitude;

    // console.log(urlLocation);

    fetch(urlLocation).then(response => {
        return response.json()
    }).then(data => {
        console.log(data);

        document.getElementById("regionData").addEventListener("click", ()=>{
            locationSearch(data);
        });

        // locationSearch(data);

    })

}
const errorCallback = (error) => {
    console.log(error);
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback)



function locationSearch(data) {
    let stringDistrict = "District: " + data.data[0].locality
    document.getElementById('district').innerHTML = stringDistrict;

    let stringState = "State: " + data.data[0].region
    document.getElementById('state').innerHTML = stringState;

    let stringCountry = "Country: " + data.data[0].country
    document.getElementById('country').innerHTML = stringCountry;

    if (data.data[0].country.toUpperCase() === "INDIA") {
        console.log(data.data[0].country.toUpperCase());

        fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7e8f102469msh9f81ccf22836c18p1b8991jsn1815ef40212f",
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
            }
        })
            .then(response => {
                // console.log(response);
                return response.json()
            }).then(data => {
                console.log(data.state_wise);   

                // for (const key of Object.keys(data.state_wise)) {
                //     if (key.toUpperCase() === stringState.toUpperCase()) {
                //         console.log(key.toUpperCase());
                //     }

                // }


                let state = data.state_wise;

                // for(let i in state){
                //     console.log(i);
                //     console.log(state[i]);
                // }

                console.log(data.state_wise.Maharashtra.active);


            })

    }
}

// fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "7e8f102469msh9f81ccf22836c18p1b8991jsn1815ef40212f",
// 		"x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
// 	}
// })
// .then(response => {
//     // console.log(response);
//     return response.json()
// }).then(data => {
//     console.log(data);
// })
