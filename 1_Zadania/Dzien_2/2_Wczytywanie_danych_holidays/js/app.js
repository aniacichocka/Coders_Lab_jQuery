$(function() {

    // variables for DOM
    var ul = $("#holiday-dates");

    //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    // 'https://holidayapi.com/v1/holidays?key=4f505409-61fb-4b48-a5ca-d0526900f0de&country=US&year=2016';

    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=4f505409-61fb-4b48-a5ca-d0526900f0de&country=US&year=2016';

    function insertHolidays(days) {
      for (var key in days) {
        for (var i = 0; i < days[key].length; i++) {
          var li = $('<li>', {class: "holiday"});
          var h3 = $('<h3>').text(days[key][i].name);
          var span = $('<span>').text(days[key][i].date);
          h3.append(span);
          li.append(h3);
          ul.append(li);
        }
      };
    }


    function loadHolidays() {
          $.ajax({
              url: holidayUrl
          }).done(function(response){
          insertHolidays(response.holidays);
         }).fail(function(error) {
             console.log(error);
         })
    }

    loadHolidays();

});
