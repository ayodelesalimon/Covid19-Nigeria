$.ajax({
  url: "https://api.thevirustracker.com/free-api?countryTotal=NG",
  dataType: "json",
  success: function (data) {
    $(document).ready(function () {
      $("#a").text(data.countrydata[0].total_cases);
      $("#b").text(data.countrydata[0].total_deaths);
      $("#c").text(data.countrydata[0].total_recovered);
    });
  },
});

/*
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
      $("#s1").text(res.Covid19NG[i].cases);
      $("#s2").text(res.Covid19NG[i].death);
      $("#s3").text(res.Covid19NG[i].recovered);
    });
  },
});
