<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# jQuery - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.


#### 1. Ajax

Łączenie się z serwerem, pobranie danych i wypisanie ich w konsoli:

```
$.ajax({
  url: "XXXX",
  method: "GET",
  dataType: "json"
})
  .done(function(response) {
    console.log(response);
  });
```
Gdzie XXXX to adres serwera.
