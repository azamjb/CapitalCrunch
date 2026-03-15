let countries = {
    "Afghanistan": "Kabul",
    "Albania": "Tirana",
    "Algeria": "Algiers",
    "Andorra": "Andorra la Vella",
    "Angola": "Luanda",
    "Antigua and Barbuda": "Saint John's",
    "Argentina": "Buenos Aires",
    "Armenia": "Yerevan",
    "Australia": "Canberra",
    "Austria": "Vienna",
    "Azerbaijan": "Baku",
    "Bahamas": "Nassau",
    "Bahrain": "Manama",
    "Bangladesh": "Dhaka",
    "Barbados": "Bridgetown",
    "Belarus": "Minsk",
    "Belgium": "Brussels",
    "Belize": "Belmopan",
    "Benin": "Porto Novo",
    "Bhutan": "Thimphu",
    "Bolivia": "Sucre",
    "Bosnia and Herzegovina": "Sarajevo",
    "Botswana": "Gaborone",
    "Brazil": "Brasilia",
    "Brunei": "Bandar Seri Begawan",
    "Bulgaria": "Sofia",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Cabo Verde": "Praia",
    "Cambodia": "Phnom Penh",
    "Cameroon": "Yaounde",
    "Canada": "Ottawa",
    "Central African Republic": "Bangui",
    "Chad": "N'Djamena",
    "Chile": "Santiago",
    "China": "Beijing",
    "Colombia": "Bogotá",
    "Comoros": "Moroni",
    "Congo, Republic of the": "Brazzaville",
    "Congo, Democratic Republic of the": "Kinshasa",
    "Costa Rica": "San Jose",
    "Cote d'Ivoire": "Yamoussoukro",
    "Croatia": "Zagreb",
    "Cuba": "Havana",
    "Cyprus": "Nicosia",
    "Czech Republic": "Prague",
    "Denmark": "Copenhagen",
    "Djibouti": "Djibouti",
    "Dominica": "Roseau",
    "Dominican Republic": "Santo Domingo",
    "Timor-Leste": "Dili",
    "Ecuador": "Quito",
    "Egypt": "Cairo",
    "El Salvador": "San Salvador",
    "Equatorial Guinea": "Malabo",
    "Eritrea": "Asmara",
    "Estonia": "Tallinn",
    "Eswatini": "Mbabane",
    "Ethiopia": "Addis Ababa",
    "Fiji": "Suva",
    "Finland": "Helsinki",
    "France": "Paris",
    "Gabon": "Libreville",
    "Gambia": "Banjul",
    "Georgia": "Tbilisi",
    "Germany": "Berlin",
    "Ghana": "Accra",
    "Greece": "Athens",
    "Grenada": "Saint George's",
    "Guatemala": "Guatemala City",
    "Guinea": "Conakry",
    "Guinea-Bissau": "Bissau",
    "Guyana": "Georgetown",
    "Haiti": "Port-au-Prince",
    "Honduras": "Tegucigalpa",
    "Hungary": "Budapest",
    "Iceland": "Reykjavik",
    "India": "New Delhi",
    "Indonesia": "Nusantara",
    "Iran": "Tehran",
    "Iraq": "Baghdad",
    "Ireland": "Dublin",
    "Israel": "Jerusalem",
    "Italy": "Rome",
    "Jamaica": "Kingston",
    "Japan": "Tokyo",
    "Jordan": "Amman",
    "Kazakhstan": "Astana",
    "Kenya": "Nairobi",
    "Kiribati": "Tarawa Atoll",
    "Korea, North": "Pyongyang",
    "Korea, South": "Seoul",
    "Kosovo": "Pristina",
    "Kuwait": "Kuwait City",
    "Kyrgyzstan": "Bishkek",
    "Laos": "Vientiane",
    "Latvia": "Riga",
    "Lebanon": "Beirut",
    "Lesotho": "Maseru",
    "Liberia": "Monrovia",
    "Libya": "Tripoli",
    "Liechtenstein": "Vaduz",
    "Lithuania": "Vilnius",
    "Luxembourg": "Luxembourg City",
    "Madagascar": "Antananarivo",
    "Malawi": "Lilongwe",
    "Malaysia": "Kuala Lumpur",
    "Maldives": "Male",
    "Mali": "Bamako",
    "Malta": "Valletta",
    "Marshall Islands": "Majuro",
    "Mauritania": "Nouakchott",
    "Mauritius": "Port Louis",
    "Mexico": "Mexico City",
    "Micronesia": "Palikir",
    "Moldova": "Chisinau",
    "Monaco": "Monaco",
    "Mongolia": "Ulaanbaatar",
    "Montenegro": "Podgorica",
    "Morocco": "Rabat",
    "Mozambique": "Maputo",
    "Myanmar (Burma)": "Naypyidaw",
    "Namibia": "Windhoek",
    "Nauru": "Yaren",
    "Nepal": "Kathmandu",
    "Netherlands": "Amsterdam",
    "New Zealand": "Wellington",
    "Nicaragua": "Managua",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "North Macedonia": "Skopje",
    "Norway": "Oslo",
    "Oman": "Muscat",
    "Pakistan": "Islamabad",
    "Palau": "Ngerulmud",
    "Panama": "Panama City",
    "Papua New Guinea": "Port Moresby",
    "Paraguay": "Asunción",
    "Peru": "Lima",
    "Philippines": "Manila",
    "Poland": "Warsaw",
    "Portugal": "Lisbon",
    "Qatar": "Doha",
    "Romania": "Bucharest",
    "Russia": "Moscow",
    "Rwanda": "Kigali",
    "Saint Kitts and Nevis": "Basseterre",
    "Saint Lucia": "Castries",
    "Saint Vincent and the Grenadines": "Kingstown",
    "Samoa": "Apia",
    "San Marino": "San Marino",
    "Sao Tome": "São Tomé",
    "Saudi Arabia": "Riyadh",
    "Senegal": "Dakar",
    "Serbia": "Belgrade",
    "Seychelles": "Victoria",
    "Sierra Leone": "Freetown",
    "Singapore": "Singapore",
    "Slovakia": "Bratislava",
    "Slovenia": "Ljubljana",
    "Solomon Islands": "Honiara",
    "Somalia": "Mogadishu",
    "South Africa": "Cape Town",
    "South Sudan": "Juba",
    "Spain": "Madrid",
    "Sri Lanka": "Colombo",
    "Sudan": "Khartoum",
    "Suriname": "Paramaribo",
    "Sweden": "Stockholm",
    "Switzerland": "Bern",
    "Syria": "Damascus",
    "Taiwan": "Taipei",
    "Tajikistan": "Dushanbe",
    "Tanzania": "Dodoma",
    "Thailand": "Bangkok",
    "Togo": "Lomé",
    "Tonga": "Nuku'alofa",
    "Trinidad and Tobago": "Port of Spain",
    "Tunisia": "Tunis",
    "Turkey": "Ankara",
    "Turkmenistan": "Ashgabat",
    "Tuvalu": "Funafuti",
    "Uganda": "Kampala",
    "Ukraine": "Kyiv",
    "United Arab Emirates": "Abu Dhabi",
    "United Kingdom": "London",
    "United States": "Washington, D.C.",
    "Uruguay": "Montevideo",
    "Uzbekistan": "Tashkent",
    "Vanuatu": "Port Vila",
    "Vatican City": "Vatican City",
    "Venezuela": "Caracas",
    "Vietnam": "Hanoi",
    "Yemen": "Sana'a",
    "Zambia": "Lusaka",
    "Zimbabwe": "Harare"
  };
  
const countryRegion = {
  "Afghanistan": "Asia", "Albania": "Europe", "Algeria": "Africa",
  "Andorra": "Europe", "Angola": "Africa", "Antigua and Barbuda": "Americas",
  "Argentina": "Americas", "Armenia": "Asia", "Australia": "Oceania",
  "Austria": "Europe", "Azerbaijan": "Asia", "Bahamas": "Americas",
  "Bahrain": "Asia", "Bangladesh": "Asia", "Barbados": "Americas",
  "Belarus": "Europe", "Belgium": "Europe", "Belize": "Americas",
  "Benin": "Africa", "Bhutan": "Asia", "Bolivia": "Americas",
  "Bosnia and Herzegovina": "Europe", "Botswana": "Africa", "Brazil": "Americas",
  "Brunei": "Asia", "Bulgaria": "Europe", "Burkina Faso": "Africa",
  "Burundi": "Africa", "Cabo Verde": "Africa", "Cambodia": "Asia",
  "Cameroon": "Africa", "Canada": "Americas", "Central African Republic": "Africa",
  "Chad": "Africa", "Chile": "Americas", "China": "Asia",
  "Colombia": "Americas", "Comoros": "Africa", "Congo, Republic of the": "Africa",
  "Congo, Democratic Republic of the": "Africa", "Costa Rica": "Americas",
  "Cote d'Ivoire": "Africa", "Croatia": "Europe", "Cuba": "Americas",
  "Cyprus": "Europe", "Czech Republic": "Europe", "Denmark": "Europe",
  "Djibouti": "Africa", "Dominica": "Americas", "Dominican Republic": "Americas",
  "Timor-Leste": "Asia", "Ecuador": "Americas", "Egypt": "Africa",
  "El Salvador": "Americas", "Equatorial Guinea": "Africa", "Eritrea": "Africa",
  "Estonia": "Europe", "Eswatini": "Africa", "Ethiopia": "Africa",
  "Fiji": "Oceania", "Finland": "Europe", "France": "Europe",
  "Gabon": "Africa", "Gambia": "Africa", "Georgia": "Asia",
  "Germany": "Europe", "Ghana": "Africa", "Greece": "Europe",
  "Grenada": "Americas", "Guatemala": "Americas", "Guinea": "Africa",
  "Guinea-Bissau": "Africa", "Guyana": "Americas", "Haiti": "Americas",
  "Honduras": "Americas", "Hungary": "Europe", "Iceland": "Europe",
  "India": "Asia", "Indonesia": "Asia", "Iran": "Asia",
  "Iraq": "Asia", "Ireland": "Europe", "Israel": "Asia",
  "Italy": "Europe", "Jamaica": "Americas", "Japan": "Asia",
  "Jordan": "Asia", "Kazakhstan": "Asia", "Kenya": "Africa",
  "Kiribati": "Oceania", "Korea, North": "Asia", "Korea, South": "Asia",
  "Kosovo": "Europe", "Kuwait": "Asia", "Kyrgyzstan": "Asia",
  "Laos": "Asia", "Latvia": "Europe", "Lebanon": "Asia",
  "Lesotho": "Africa", "Liberia": "Africa", "Libya": "Africa",
  "Liechtenstein": "Europe", "Lithuania": "Europe", "Luxembourg": "Europe",
  "Madagascar": "Africa", "Malawi": "Africa", "Malaysia": "Asia",
  "Maldives": "Asia", "Mali": "Africa", "Malta": "Europe",
  "Marshall Islands": "Oceania", "Mauritania": "Africa", "Mauritius": "Africa",
  "Mexico": "Americas", "Micronesia": "Oceania", "Moldova": "Europe",
  "Monaco": "Europe", "Mongolia": "Asia", "Montenegro": "Europe",
  "Morocco": "Africa", "Mozambique": "Africa", "Myanmar (Burma)": "Asia",
  "Namibia": "Africa", "Nauru": "Oceania", "Nepal": "Asia",
  "Netherlands": "Europe", "New Zealand": "Oceania", "Nicaragua": "Americas",
  "Niger": "Africa", "Nigeria": "Africa", "North Macedonia": "Europe",
  "Norway": "Europe", "Oman": "Asia", "Pakistan": "Asia",
  "Palau": "Oceania", "Panama": "Americas", "Papua New Guinea": "Oceania",
  "Paraguay": "Americas", "Peru": "Americas", "Philippines": "Asia",
  "Poland": "Europe", "Portugal": "Europe", "Qatar": "Asia",
  "Romania": "Europe", "Russia": "Europe", "Rwanda": "Africa",
  "Saint Kitts and Nevis": "Americas", "Saint Lucia": "Americas",
  "Saint Vincent and the Grenadines": "Americas", "Samoa": "Oceania",
  "San Marino": "Europe", "Sao Tome": "Africa", "Saudi Arabia": "Asia",
  "Senegal": "Africa", "Serbia": "Europe", "Seychelles": "Africa",
  "Sierra Leone": "Africa", "Singapore": "Asia", "Slovakia": "Europe",
  "Slovenia": "Europe", "Solomon Islands": "Oceania", "Somalia": "Africa",
  "South Africa": "Africa", "South Sudan": "Africa", "Spain": "Europe",
  "Sri Lanka": "Asia", "Sudan": "Africa", "Suriname": "Americas",
  "Sweden": "Europe", "Switzerland": "Europe", "Syria": "Asia",
  "Taiwan": "Asia", "Tajikistan": "Asia", "Tanzania": "Africa",
  "Thailand": "Asia", "Togo": "Africa", "Tonga": "Oceania",
  "Trinidad and Tobago": "Americas", "Tunisia": "Africa", "Turkey": "Asia",
  "Turkmenistan": "Asia", "Tuvalu": "Oceania", "Uganda": "Africa",
  "Ukraine": "Europe", "United Arab Emirates": "Asia", "United Kingdom": "Europe",
  "United States": "Americas", "Uruguay": "Americas", "Uzbekistan": "Asia",
  "Vanuatu": "Oceania", "Vatican City": "Europe", "Venezuela": "Americas",
  "Vietnam": "Asia", "Yemen": "Asia", "Zambia": "Africa", "Zimbabwe": "Africa"
};

const allRegions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
let countryList = Object.keys(countries);
let optionElems = Array.from(document.querySelectorAll('input[name="capital"]'));
let optionTextElems = Array.from(document.querySelectorAll('#options span'));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function nextQuestion(filteredList) {
  let country = filteredList[Math.floor(Math.random() * filteredList.length)];
  document.getElementById('country').innerText = country;
  let correctCapital = countries[country];

  let wrongCountries = shuffleArray(filteredList.filter(c => c !== country)).slice(0, 3);
  let options = shuffleArray([...wrongCountries.map(c => countries[c]), correctCapital]);

  optionElems.forEach((elem, i) => {
    elem.value = options[i];
    elem.disabled = false;
    elem.closest('label').className = '';
    optionTextElems[i].innerText = options[i];
  });

  document.getElementById('result').innerText = '';
  document.getElementById('result').className = '';
}

function updateStreakDisplay(streak) {
  let el = document.getElementById('streakDisplay');
  if (streak >= 2) {
    el.innerText = streak + ' in a row';
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

chrome.storage.sync.get(['selectedRegions', 'streak'], function(result) {
  const selectedRegions = result.selectedRegions || allRegions;
  let streak = result.streak || 0;

  let filteredList = countryList.filter(c => selectedRegions.includes(countryRegion[c]));
  if (filteredList.length < 4) filteredList = countryList;

  updateStreakDisplay(streak);
  nextQuestion(filteredList);

  optionElems.forEach(function(elem) {
    elem.addEventListener('click', function() {
      let selectedCapital = elem.value;
      let correctCapital = countries[document.getElementById('country').innerText];

      optionElems.forEach(el => {
        el.disabled = true;
        if (el.value === correctCapital) {
          el.closest('label').classList.add('correct-answer');
        } else if (el.value === selectedCapital) {
          el.closest('label').classList.add('wrong-answer');
        }
      });

      let resultElem = document.getElementById('result');
      if (selectedCapital === correctCapital) {
        streak++;
        resultElem.innerText = streak > 1 ? 'Correct! ' + streak + ' in a row' : 'Correct!';
        resultElem.className = 'correct';
      } else {
        streak = 0;
        resultElem.innerText = 'Wrong! The answer is ' + correctCapital;
        resultElem.className = 'incorrect';
      }

      chrome.storage.sync.set({ streak });
      updateStreakDisplay(streak);

      setTimeout(function() {
        document.body.classList.add('fade-out');
        setTimeout(window.close, 400);
      }, 1800);
    });
  });
});