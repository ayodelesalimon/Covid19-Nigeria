$.ajax({
  url: "https://api.thevirustracker.com/free-api?countryTotal=NG",
  dataType: "json",
  success: function (data) {
    $(document).ready(function () {
      $("#totalCases").text(data.countrydata[0].total_cases);
      $("#totalDeaths").text(data.countrydata[0].total_deaths);
      $("#totalRecovered").text(data.countrydata[0].total_recovered);
$("#newCases").text(data.countrydata[0].total_new_cases_today);
$("#newDeaths").text(data.countrydata[0].total_new_deaths_today);


    });
  },
});

/*

total_new_cases_today":87, "total_new_deaths_today":3,

var settings = {
  async: true,
  crossDomain: true,
  url: "https://nigeria-covid-19.p.rapidapi.com/api/states",
  method: "GET",
  headers: {
    "x-rapidapi-host": "nigeria-covid-19.p.rapidapi.com",
    "x-rapidapi-key": "5ce2f575d5msh75c383fe93bd857p1ba446jsn12438cb3bced",
  },
};
$.ajax(settings).done(function (response) {
  console.log(response);
});
*/

var selectElem = document.getElementById("select");
$.ajax({
  url: "https://covid19project.org.ng/api/endpoints/states",
  dataType: "json",
  success: function (res) {
    selectElem.addEventListener("change", function () {
      var i = selectElem.selectedIndex - 1;
      //$("#s").text(res.Covid19NG[i].name);
      $("#stateCases").text(res.Covid19NG[i].cases);
      $("#stateDeaths").text(res.Covid19NG[i].death);
      $("#stateRecovered").text(res.Covid19NG[i].recovered);
    });
  },
});
