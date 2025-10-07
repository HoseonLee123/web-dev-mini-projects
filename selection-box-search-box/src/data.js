// This data is from https://www.worldometers.info/geography/countries-of-the-world/
const data = [
    {
        name: "Afghanistan",
        population2025: "43,844,111",
        region: "Asia",
    },
    {
        name: "Albania",
        population2025: "2,771,508",
        region: "Europe",
    },
    {
        name: "Algeria",
        population2025: "47,435,312",
        region: "Africa",
    },
    {
        name: "Andorra",
        population2025: "82,904",
        region: "Europe",
    },
    {
        name: "Angola",
        population2025: "39,040,039",
        region: "Africa",
    },
    {
        name: "Antigua and Barbuda",
        population2025: "94,209",
        region: "Latin America",
    },
    {
        name: "Argentina",
        population2025: "45,851,378",
        region: "Latin America",
    },
    {
        name: "Armenia",
        population2025: "2,952,365",
        region: "Asia",
    },
    {
        name: "Australia",
        population2025: "26,974,026",
        region: "Oceania",
    },
    {
        name: "Austria",
        population2025: "9,113,574",
        region: "Europe",
    },
    {
        name: "Azerbaijan",
        population2025: "10,397,713",
        region: "Asia",
    },
    {
        name: "Bahamas",
        population2025: "403,033",
        region: "Latin America",
    },
    {
        name: "Bahrain",
        population2025: "1,643,332",
        region: "Asia",
    },
    {
        name: "Bangladesh",
        population2025: "175,686,899",
        region: "Asia",
    },
    {
        name: "Barbados",
        population2025: "282,623",
        region: "Latin America",
    },
    {
        name: "Belarus",
        population2025: "8,997,603",
        region: "Europe",
    },
    {
        name: "Belgium",
        population2025: "11,758,603",
        region: "Europe",
    },
    {
        name: "Belize",
        population2025: "422,924",
        region: "Latin America",
    },
    {
        name: "Benin",
        population2025: "14,814,460",
        region: "Africa",
    },
    {
        name: "Bhutan",
        population2025: "796,682",
        region: "Asia",
    },
    {
        name: "Bolivia",
        population2025: "12,581,843",
        region: "Latin America",
    },
    {
        name: "Bosnia and Herzegovina",
        population2025: "3,140,095",
        region: "Europe",
    },
    {
        name: "Botswana",
        population2025: "2,562,122",
        region: "Africa",
    },
    {
        name: "Brazil",
        population2025: "212,812,405",
        region: "Latin America",
    },
    {
        name: "Brunei",
        population2025: "466,330",
        region: "Asia",
    },
    {
        name: "Bulgaria",
        population2025: "6,714,560",
        region: "Europe",
    },
    {
        name: "Burkina Faso",
        population2025: "24,074,580",
        region: "Africa",
    },
    {
        name: "Burundi",
        population2025: "14,390,003",
        region: "Africa",
    },
    {
        name: "Cabo Verde",
        population2025: "527,326",
        region: "Africa",
    },
    {
        name: "Cambodia",
        population2025: "17,847,982",
        region: "Asia",
    },
    {
        name: "Cameroon",
        population2025: "29,879,337",
        region: "Africa",
    },
    {
        name: "Canada",
        population2025: "40,126,723",
        region: "Northern America",
    },
    {
        name: "Central African Republic",
        population2025: "5,513,282",
        region: "Africa",
    },
    {
        name: "Chad",
        population2025: "21,003,705",
        region: "Africa",
    },
    {
        name: "Chile",
        population2025: "19,859,921",
        region: "Latin America",
    },
    {
        name: "China",
        population2025: "1,416,096,094",
        region: "Asia",
    },
    {
        name: "Colombia",
        population2025: "53,425,635",
        region: "Latin America",
    },
    {
        name: "Comoros",
        population2025: "882,847",
        region: "Africa",
    },
    {
        name: "Congo",
        population2025: "6,484,437",
        region: "Africa",
    },
    {
        name: "Costa Rica",
        population2025: "5,152,950",
        region: "Latin America",
    },
    {
        name: "Côte d'Ivoire",
        population2025: "32,711,547",
        region: "Africa",
    },
    {
        name: "Croatia",
        population2025: "3,848,160",
        region: "Europe",
    },
    {
        name: "Cuba",
        population2025: "10,937,203",
        region: "Latin America",
    },
    {
        name: "Cyprus",
        population2025: "1,370,754",
        region: "Asia",
    },
    {
        name: "Czech Republic (Czechia)",
        population2025: "10,609,239",
        region: "Europe",
    },
    {
        name: "Denmark",
        population2025: "6,002,507",
        region: "Europe",
    },
    {
        name: "Djibouti",
        population2025: "1,184,076",
        region: "Africa",
    },
    {
        name: "Dominica",
        population2025: "65,871",
        region: "Latin America",
    },
    {
        name: "Dominican Republic",
        population2025: "11,520,487",
        region: "Latin America",
    },
    {
        name: "DR Congo",
        population2025: "112,832,473",
        region: "Africa",
    },
    {
        name: "Ecuador",
        population2025: "18,289,896",
        region: "Latin America",
    },
    {
        name: "Egypt",
        population2025: "118,365,995",
        region: "Africa",
    },
    {
        name: "El Salvador",
        population2025: "6,365,503",
        region: "Latin America",
    },
    {
        name: "Equatorial Guinea",
        population2025: "1,938,431",
        region: "Africa",
    },
    {
        name: "Eritrea",
        population2025: "3,607,003",
        region: "Africa",
    },
    {
        name: "Estonia",
        population2025: "1,344,232",
        region: "Europe",
    },
    {
        name: "Eswatini",
        population2025: "1,256,174",
        region: "Africa",
    },
    {
        name: "Ethiopia",
        population2025: "135,472,051",
        region: "Africa",
    },
    {
        name: "Fiji",
        population2025: "933,154",
        region: "Oceania",
    },
    {
        name: "Finland",
        population2025: "5,623,329",
        region: "Europe",
    },
    {
        name: "France",
        population2025: "66,650,804",
        region: "Europe",
    },
    {
        name: "Gabon",
        population2025: "2,593,130",
        region: "Africa",
    },
    {
        name: "Gambia",
        population2025: "2,822,093",
        region: "Africa",
    },
    {
        name: "Georgia",
        population2025: "3,806,671",
        region: "Asia",
    },
    {
        name: "Germany",
        population2025: "84,075,075",
        region: "Europe",
    },
    {
        name: "Ghana",
        population2025: "35,064,272",
        region: "Africa",
    },
    {
        name: "Greece",
        population2025: "9,938,844",
        region: "Europe",
    },
    {
        name: "Grenada",
        population2025: "117,303",
        region: "Latin America",
    },
    {
        name: "Guatemala",
        population2025: "18,687,881",
        region: "Latin America",
    },
    {
        name: "Guinea",
        population2025: "15,099,727",
        region: "Africa",
    },
    {
        name: "Guinea-Bissau",
        population2025: "2,249,515",
        region: "Africa",
    },
    {
        name: "Guyana",
        population2025: "835,986",
        region: "Latin America",
    },
    {
        name: "Haiti",
        population2025: "11,906,095",
        region: "Latin America",
    },
    {
        name: "Holy See",
        population2025: "501",
        region: "Europe",
    },
    {
        name: "Honduras",
        population2025: "11,005,850",
        region: "Latin America",
    },
    {
        name: "Hungary",
        population2025: "9,632,287",
        region: "Europe",
    },
    {
        name: "Iceland",
        population2025: "398,266",
        region: "Europe",
    },
    {
        name: "India",
        population2025: "1,463,865,525",
        region: "Asia",
    },
    {
        name: "Indonesia",
        population2025: "285,721,236",
        region: "Asia",
    },
    {
        name: "Iran",
        population2025: "92,417,681",
        region: "Asia",
    },
    {
        name: "Iraq",
        population2025: "47,020,774",
        region: "Asia",
    },
    {
        name: "Ireland",
        population2025: "5,308,039",
        region: "Europe",
    },
    {
        name: "Israel",
        population2025: "9,517,181",
        region: "Asia",
    },
    {
        name: "Italy",
        population2025: "59,146,260",
        region: "Europe",
    },
    {
        name: "Jamaica",
        population2025: "2,837,077",
        region: "Latin America",
    },
    {
        name: "Japan",
        population2025: "123,103,479",
        region: "Asia",
    },
    {
        name: "Jordan",
        population2025: "11,520,684",
        region: "Asia",
    },
    {
        name: "Kazakhstan",
        population2025: "20,843,754",
        region: "Asia",
    },
    {
        name: "Kenya",
        population2025: "57,532,493",
        region: "Africa",
    },
    {
        name: "Kiribati",
        population2025: "136,488",
        region: "Oceania",
    },
    {
        name: "Kuwait",
        population2025: "5,026,078",
        region: "Asia",
    },
    {
        name: "Kyrgyzstan",
        population2025: "7,295,034",
        region: "Asia",
    },
    {
        name: "Laos",
        population2025: "7,873,046",
        region: "Asia",
    },
    {
        name: "Latvia",
        population2025: "1,853,559",
        region: "Europe",
    },
    {
        name: "Lebanon",
        population2025: "5,849,421",
        region: "Asia",
    },
    {
        name: "Lesotho",
        population2025: "2,363,325",
        region: "Africa",
    },
    {
        name: "Liberia",
        population2025: "5,731,206",
        region: "Africa",
    },
    {
        name: "Libya",
        population2025: "7,458,555",
        region: "Africa",
    },
    {
        name: "Liechtenstein",
        population2025: "40,128",
        region: "Europe",
    },
    {
        name: "Lithuania",
        population2025: "2,830,144",
        region: "Europe",
    },
    {
        name: "Luxembourg",
        population2025: "680,453",
        region: "Europe",
    },
    {
        name: "Madagascar",
        population2025: "32,740,678",
        region: "Africa",
    },
    {
        name: "Malawi",
        population2025: "22,216,120",
        region: "Africa",
    },
    {
        name: "Malaysia",
        population2025: "35,977,838",
        region: "Asia",
    },
    {
        name: "Maldives",
        population2025: "529,676",
        region: "Asia",
    },
    {
        name: "Mali",
        population2025: "25,198,821",
        region: "Africa",
    },
    {
        name: "Malta",
        population2025: "545,405",
        region: "Europe",
    },
    {
        name: "Marshall Islands",
        population2025: "36,282",
        region: "Oceania",
    },
    {
        name: "Mauritania",
        population2025: "5,315,065",
        region: "Africa",
    },
    {
        name: "Mauritius",
        population2025: "1,268,280",
        region: "Africa",
    },
    {
        name: "Mexico",
        population2025: "131,946,900",
        region: "Latin America",
    },
    {
        name: "Micronesia",
        population2025: "113,683",
        region: "Oceania",
    },
    {
        name: "Moldova",
        population2025: "2,996,106",
        region: "Europe",
    },
    {
        name: "Monaco",
        population2025: "38,341",
        region: "Europe",
    },
    {
        name: "Mongolia",
        population2025: "3,517,100",
        region: "Asia",
    },
    {
        name: "Montenegro",
        population2025: "632,729",
        region: "Europe",
    },
    {
        name: "Morocco",
        population2025: "38,430,770",
        region: "Africa",
    },
    {
        name: "Mozambique",
        population2025: "35,631,653",
        region: "Africa",
    },
    {
        name: "Myanmar",
        population2025: "54,850,648",
        region: "Asia",
    },
    {
        name: "Namibia",
        population2025: "3,092,816",
        region: "Africa",
    },
    {
        name: "Nauru",
        population2025: "12,025",
        region: "Oceania",
    },
    {
        name: "Nepal",
        population2025: "29,618,118",
        region: "Asia",
    },
    {
        name: "Netherlands",
        population2025: "18,346,819",
        region: "Europe",
    },
    {
        name: "New Zealand",
        population2025: "5,251,899",
        region: "Oceania",
    },
    {
        name: "Nicaragua",
        population2025: "7,007,502",
        region: "Latin America",
    },
    {
        name: "Niger",
        population2025: "27,917,831",
        region: "Africa",
    },
    {
        name: "Nigeria",
        population2025: "237,527,782",
        region: "Africa",
    },
    {
        name: "North Korea",
        population2025: "26,571,036",
        region: "Asia",
    },
    {
        name: "North Macedonia",
        population2025: "1,813,791",
        region: "Europe",
    },
    {
        name: "Norway",
        population2025: "5,623,071",
        region: "Europe",
    },
    {
        name: "Oman",
        population2025: "5,494,691",
        region: "Asia",
    },
    {
        name: "Pakistan",
        population2025: "255,219,554",
        region: "Asia",
    },
    {
        name: "Palau",
        population2025: "17,663",
        region: "Oceania",
    },
    {
        name: "Panama",
        population2025: "4,571,189",
        region: "Latin America",
    },
    {
        name: "Papua New Guinea",
        population2025: "10,762,817",
        region: "Oceania",
    },
    {
        name: "Paraguay",
        population2025: "7,013,078",
        region: "Latin America",
    },
    {
        name: "Peru",
        population2025: "34,576,665",
        region: "Latin America",
    },
    {
        name: "Philippines",
        population2025: "116,786,962",
        region: "Asia",
    },
    {
        name: "Poland",
        population2025: "38,140,910",
        region: "Europe",
    },
    {
        name: "Portugal",
        population2025: "10,411,834",
        region: "Europe",
    },
    {
        name: "Qatar",
        population2025: "3,115,889",
        region: "Asia",
    },
    {
        name: "Romania",
        population2025: "18,908,650",
        region: "Europe",
    },
    {
        name: "Russia",
        population2025: "143,997,393",
        region: "Europe",
    },
    {
        name: "Rwanda",
        population2025: "14,569,341",
        region: "Africa",
    },
    {
        name: "Saint Kitts & Nevis",
        population2025: "46,922",
        region: "Latin America",
    },
    {
        name: "Saint Lucia",
        population2025: "180,149",
        region: "Latin America",
    },
    {
        name: "Samoa",
        population2025: "219,306",
        region: "Oceania",
    },
    {
        name: "San Marino",
        population2025: "33,572",
        region: "Europe",
    },
    {
        name: "Sao Tome & Principe",
        population2025: "240,254",
        region: "Africa",
    },
    {
        name: "Saudi Arabia",
        population2025: "34,566,328",
        region: "Asia",
    },
    {
        name: "Senegal",
        population2025: "18,931,966",
        region: "Africa",
    },
    {
        name: "Serbia",
        population2025: "6,689,039",
        region: "Europe",
    },
    {
        name: "Seychelles",
        population2025: "132,779",
        region: "Africa",
    },
    {
        name: "Sierra Leone",
        population2025: "8,819,794",
        region: "Africa",
    },
    {
        name: "Singapore",
        population2025: "5,870,750",
        region: "Asia",
    },
    {
        name: "Slovakia",
        population2025: "5,474,881",
        region: "Europe",
    },
    {
        name: "Slovenia",
        population2025: "2,117,072",
        region: "Europe",
    },
    {
        name: "Solomon Islands",
        population2025: "838,645",
        region: "Oceania",
    },
    {
        name: "Somalia",
        population2025: "19,654,739",
        region: "Africa",
    },
    {
        name: "South Africa",
        population2025: "64,747,319",
        region: "Africa",
    },
    {
        name: "South Korea",
        population2025: "51,667,029",
        region: "Asia",
    },
    {
        name: "South Sudan",
        population2025: "12,188,788",
        region: "Africa",
    },
    {
        name: "Spain",
        population2025: "47,889,958",
        region: "Europe",
    },
    {
        name: "Sri Lanka",
        population2025: "23,229,470",
        region: "Asia",
    },
    {
        name: "State of Palestine",
        population2025: "5,589,623",
        region: "Asia",
    },
    {
        name: "St. Vincent & Grenadines",
        population2025: "99,924",
        region: "Latin America",
    },
    {
        name: "Sudan",
        population2025: "51,662,147",
        region: "Africa",
    },
    {
        name: "Suriname",
        population2025: "639,850",
        region: "Latin America",
    },
    {
        name: "Sweden",
        population2025: "10,656,633",
        region: "Europe",
    },
    {
        name: "Switzerland",
        population2025: "8,967,407",
        region: "Europe",
    },
    {
        name: "Syria",
        population2025: "25,620,427",
        region: "Asia",
    },
    {
        name: "Tajikistan",
        population2025: "10,786,734",
        region: "Asia",
    },
    {
        name: "Tanzania",
        population2025: "70,545,865",
        region: "Africa",
    },
    {
        name: "Thailand",
        population2025: "71,619,863",
        region: "Asia",
    },
    {
        name: "Timor-Leste",
        population2025: "1,418,517",
        region: "Asia",
    },
    {
        name: "Togo",
        population2025: "9,721,608",
        region: "Africa",
    },
    {
        name: "Tonga",
        population2025: "103,742",
        region: "Oceania",
    },
    {
        name: "Trinidad and Tobago",
        population2025: "1,511,155",
        region: "Latin America",
    },
    {
        name: "Tunisia",
        population2025: "12,348,573",
        region: "Africa",
    },
    {
        name: "Turkey",
        population2025: "87,685,426",
        region: "Asia",
    },
    {
        name: "Turkmenistan",
        population2025: "7,618,847",
        region: "Asia",
    },
    {
        name: "Tuvalu",
        population2025: "9,492",
        region: "Oceania",
    },
    {
        name: "Uganda",
        population2025: "51,384,894",
        region: "Africa",
    },
    {
        name: "Ukraine",
        population2025: "38,980,376",
        region: "Europe",
    },
    {
        name: "United Arab Emirates",
        population2025: "11,346,000",
        region: "Asia",
    },
    {
        name: "United Kingdom",
        population2025: "69,551,332",
        region: "Europe",
    },
    {
        name: "United States",
        population2025: "347,275,807",
        region: "Northern America",
    },
    {
        name: "Uruguay",
        population2025: "3,384,688",
        region: "Latin America",
    },
    {
        name: "Uzbekistan",
        population2025: "37,053,428",
        region: "Asia",
    },
    {
        name: "Vanuatu",
        population2025: "335,169",
        region: "Oceania",
    },
    {
        name: "Venezuela",
        population2025: "28,516,896",
        region: "Latin America",
    },
    {
        name: "Vietnam",
        population2025: "101,598,527",
        region: "Asia",
    },
    {
        name: "Yemen",
        population2025: "41,773,878",
        region: "Asia",
    },
    {
        name: "Zambia",
        population2025: "21,913,874",
        region: "Africa",
    },
    {
        name: "Zimbabwe",
        population2025: "16,950,795",
        region: "Africa",
    },
];

export const countryNames = data.map((country) => country.name);
