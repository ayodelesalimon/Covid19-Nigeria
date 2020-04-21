// Created by Ayodele Salimon

$.ajax({
  url: "https://api.thevirustracker.com/free-api?countryTotal=IN",
  dataType: "json",
  success: function (data) {
    $(document).ready(function () {
      $("#a").text(data.countrydata[0].total_cases);
      $("#b").text(data.countrydata[0].total_deaths);
      $("#c").text(data.countrydata[0].total_recovered);
    });
  },
});

$.ajax({
  url: "https://covid19project.org.ng/api/endpoints/states",
  dataType: "json",
  success: function (res) {
    $(document).ready(function () {
      $("#s").text(res.Covid19NG[0].name);
      $("#s1").text(res.Covid19NG[0].cases);
      $("#s2").text(res.Covid19NG[0].death);
      $("#s3").text(res.Covid19NG[0].recovered);
    });
  },
});
