
$(function() {

    var repertuarList = $('ul.repertuar');
    var repertuarUrl = 'http://localhost:3000/movies';
    var btn = $('#addMovie');


    // pobieram bazę danych
    function loadRepertuar() {
        $.ajax({
            url: repertuarUrl,
            dataType: 'json'
        }).done(function(response) {
            // console.log(response);
            // funkcja - jak te dane będą wykorzystane
            insertContent(response);
        }).fail(function(error) {
            console.log(error);
        })
    }
    loadRepertuar();


    // to co jest robione z danymi
    function insertContent(movies) {
        for (var i = 0; i < movies.length; i++) {
            // przekazanie funkcji tworzącej elementy listy na stronie
            createMovie(movies[i]);
        }
    }


    // tworzenie elementów listy ( z bazy i nowych) i przycisków wraz z funkcjonalnościami
    function createMovie(movie) {
        var li = $('<li>', {class: 'movie', id: movie.id });
        var h3 = $('<h3>').text(movie.title);
        var p = $('<p>').text(movie.description);
        var remove = $('<button>', {class: 'delete'}).text('Usuń');
        removeMovie(remove);
        var edit = $('<button>', {class: 'edit'}).text('Zmodyfikuj');
        updateMovie(edit);

        li.append(h3);
        li.append(p);
        li.append(remove);
        li.append(edit);
        repertuarList.append(li);

        function removeMovie(remove) {
            remove.on('click', function() {

                var removedBtn = $(this);
                var liId = removedBtn.parent().attr('id');

                $.ajax({
                    url: repertuarUrl + '/' + liId,
                    method: 'DELETE',
                    dataType: 'json',
                }).done(function(response) {
                    removedBtn.parent().remove();
                }).fail(function(error) {
                    console.log(error);
                })
            })
        }


        function updateMovie(edit) {
            edit.on('click', function() {

                var editBtn = $(this);
                var liId = editBtn.parent().attr('id');

                if ($(this).text() == 'Zmodyfikuj') {
                    $(this).parent().find('h3').attr('contenteditable', '');
                    $(this).parent().find('p').attr('contenteditable', '');
                    $(this).text('Zatwierdź');

                } else {
                    var newTitle = $(this).parent().find('h3').text();
                    var newDescription = $(this).parent().find('p').text();

                    $(this).text('Zmodyfikuj');
                    $(this).removeClass('edit');
                    $(this).addClass('done');
                    $(this).parent().find('h3').attr('contenteditable', null);
                    $(this).parent().find('p').attr('contenteditable', null);

                    var changeMovie = {
                        title: newTitle,
                        description: newDescription
                    }

                    $.ajax({
                        url: repertuarUrl + '/' + liId,
                        method: 'PUT',
                        dataType: 'json',
                        data: changeMovie
                    }).done(function(response) {
                        // console.log(response);
                    }).fail(function(error) {
                        console.log(error);
                    })
                }
            })
        }
    }


    //zaciągniecie danych do nowych elementów listy i dodanie ich do bazy a potem na stronę
    function addMovie() {

        btn.on('click', function(e) {
            e.preventDefault();
            var mtitle = $('.get_title').val();
            var mdescription = $('.get_description').val();

            var newMovie = {
                title: mtitle,
                description: mdescription
            };

            $.ajax({
                url: repertuarUrl,
                method: 'POST',
                dataType: 'json',
                data: newMovie
            }).done(function(response) {
                createMovie(response);
            }).fail(function(error) {
                console.log(error);
            })
        })
    }
    addMovie();


})
