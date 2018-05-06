<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Eventy zaawansowane

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.

## Zadanie rozwiązywane z wykładowcą

### Ukrywanie  (~ 5min)
Stwórz element ```div``` o **klasie** ```panel``` i wstaw go za sekcją ```people```. Ustaw mu event click. Po kliknięciu w ten przycisk ma się wypisywać w konsoli tekst - sprawdź czy działa. Chodzi tutaj o to, by przekonać się, że dodawanie eventu na nowo powstałym elemencie jest możliwe, o ile został wcześniej dodany do DOM - czyli w momencie kiedy próbujemy mu przypisać event - on istnieje w DOM.

Następnie, dopisz kod do funkcji tego eventu, który stworzy nowy element paragraf ```p``` i doda do ```diva```.
Spróbuj ustawić event click na nowo powstałym elemencie ```p```, ale poza ciałem funkcji eventu click dla diva.

```JavaScript
div.on("click", function() {
   //tutaj tworzymy nowy element p i dodajemy do DOM
})

//tutaj ustaw event na elemencie p
```
W drugiej części zadania dodajesz event do elementu, którego jeszcze nie ma w DOM.

-----------------------------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 20min - 25min)
Znajdź w pliku **index.html** element o **klasie** ```people```, stwórz odpowiednią funkcję, wykonaj w niej następujące czynności:
* dodaj przycisk ```Usuń``` do każdego elementu **li** (także do nowo powstałych elementów),
* napisz funkcję, która po kliknięciu w przycisk ```Usuń``` &ndash; usunie element z listy,
* dodaj przycisk ```Edytuj``` do każdego elementu **li** (także do nowo powstałych elementów),
* napisz funkcję, która po kliknięciu w przycisk ```Edytuj``` &ndash; umożliwi edycję elementu.
W trakcie edycji zmień nazwę na przycisku z ```Edytuj``` na ```Zatwierdź```. Po klinięciu w ```Zatwierdź```
Zakończ edycję.
