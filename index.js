const countries_url = "https://restcountries.com/v3.1/all";

fetch(countries_url)
    .then(response => response.json())
    .then(data => init(data))
    .catch(error => console.error(error))

function init(data) {
    let countries = data;
    let flagContainer = document.getElementById("flag-container");
    let search = document.getElementById("search");

    countries.map(country => {
        flagContainer.innerHTML += `<div class="col-md-2 card">
            <img class="card-img" src="${country.flags.svg}" alt="Card image cap" id="country-flag" width="160px" height="160px">
              <h5 class="card-title" id="country-name">${country.name.common}</h5>
          </div>`
    })
    search.addEventListener('keyup', () => {
        flagContainer.innerHTML = "";
        console.log(search.value);
        let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.value));
        console.log(filteredCountries)
        filteredCountries.map(country => {
            flagContainer.innerHTML += `<div class="col-md-2 card">
                <img class="card-img" src="${country.flags.svg}" alt="Card image cap" id="country-flag" width="160px" height="160px">
                  <h5 class="card-title" id="country-name">${country.name.common}</h5>
              </div>`
        })
    }

    )
}