<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Modyfikowanie elementów

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.
Jeśli  polecenie w zadaniach brzmi: "Stwórz nową funkcję, w której wykonasz te czynności" to znaczy, że
należy stworzyć funkcję. Nawet jeśli treści zadań są mało skomplikowane
ucz się używać funkcji.

## Zadanie rozwiązywane z wykładowcą

### Dodawanie (~ 5min - 7min)

Stwórz element ```div``` o **klasie** ```panel``` i wstaw go za sekcją ```people```. Dodaj mu za pomocą jQuery dowolny tekst.

-----------------------------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania


### Zadanie 1 (~ 15min - 20min)

Znajdź w pliku **index.html** element o **klasie** ```people```. Stwórz odpowiednią funkcję, wewnątrz której ustaw event ```click``` na przycisku ```dodaj```.
Po kliknięciu wykonaj następujące czynności:

1. Pobierz do zmiennej wartość wpisaną do pola o **id** ```addUser```.
2. Pobierz do zmiennej wartość wpisaną do pola o **id** ```age```.
3. Wstaw nowy element na koniec listy, ustaw jej wiek jako atrybut ```data```.
4. Po każdym wstawieniu elementu wywołaj osobną funkcję, która będzie ustawiała dany kolor dla elementu **li** w następujący sposób:
  * zielony dla osób w wieku do 15 lat,
  * niebieski dla osób mających od 16 do 40 lat,
  * brązowy dla osób mających 41 lat i więcej.

### Zadanie 2 (~ 7min - 10min)
Znajdź w pliku **index.html** element o **klasie** ```where-i-am```, następnie stwórz odpowiednią funkcję, wewnątrz której stwórz elementy **span** i dodaj je w odpowiednie miejsca według obrazka poniżej.
W miejsce trzech kropek wstaw nazwę funkcji, której używasz,   np. ```Jestem tutaj append```.

![Where I am](images/where-i-am.png)

### Zadanie 3 (~ 7min - 10min)

Zapoznaj się z plikiem **index.html**. Znajdź w nim elementy o **klasie** ```block```, zapisz je do zmiennej.

Napisz funkcję, która po kliknięciu w element o **klasie** ```block```, usunie ten element z kolumny o **klasie** ```left``` i przeniesie go do kolumny o **klasie** ```right```.
