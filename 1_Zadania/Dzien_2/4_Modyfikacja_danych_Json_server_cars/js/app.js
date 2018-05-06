$(function() {

    var carsList = $('.cars_list');
    var carsUrl = 'http://localhost:3000/cars'
    var addCarBtn = $('#addCar');
    // console.log(addCarBtn);


    function loadCars(){
        $.ajax({
            url: carsUrl
        }).done(function(response) {
            // console.log(response);
            insertCars(response);
        }).fail(function(error) {
            console.log(error);
        })
    }
    loadCars();


    function insertCars(cars) {
        for (var i = 0; i < cars.length; i++) {
            createCar(cars[i]);
        }
    }


    function createCar(car) {
        var li = $('<li>', {class: 'car', id: car.id});
        var h3 = $('<h3>').text(car.name);
        var span = $('<span>').text(car.brand);

        var removeBtn = $('<button>', {class: 'delete'}).text('Usuń');
        removeCar(removeBtn);
        var editBtn = $('<button>', {class: 'edit'}).text('Zmodyfikuj');
        updateCar(editBtn);

        li.append(h3);
        li.append(span);
        li.append(removeBtn);
        li.append(editBtn);
        carsList.append(li);

    }


    function removeCar(removeBtn){
        removeBtn.on('click', function(){
            var thisButton = $(this);
            var idLi = $(this).parent().attr('id');

            $.ajax({
                url: carsUrl + '/' + idLi,
                method: 'DELETE'
            }).done(function(response){
                thisButton.parent().remove();
            }).fail(function(error){
                console.log(error);
            })
        })
    }


    function updateCar(editBtn){
        editBtn.on('click', function(){
            var thisButton = $(this);
            var idLi = $(this).parent().attr('id');

            var changeName = $(this).parent().find('h3').text();
            var changeBrand = $(this).parent().find('span').text();

            if (thisButton.text() === "Zmodyfikuj"){
            thisButton.parent().find('h3').attr('contenteditable', '');
            thisButton.parent().find('span').attr('contenteditable', '');
            thisButton.text('Zatwierdź');
            thisButton.addClass('edit');
            thisButton.removeClass('done');
            }else{
                thisButton.parent().find('h3').attr('contenteditable', null);
                thisButton.parent().find('span').attr('contenteditable', null);
                thisButton.addClass('done');
                thisButton.text('Zmodyfikuj');
                thisButton.toggleClass('edit');
            }

            var changeCar = {
                name: changeName,
                brand: changeBrand
            }

            $.ajax({
                url: carsUrl + '/' + idLi,
                method: 'PUT',
                dataType: 'json',
                data: changeCar
            }).done(function(response){
                console.log(response);;
            }).fail(function(error){
                console.log(error);
            })

        })
    }

    function addCar(){
        addCarBtn.on('click', function(e){
            e.preventDefault();
            var newName = $('.get_name').val();
            var newBrand = $('.get_brand').val();

            var newCar = {
                name: newName,
                brand: newBrand
            }

            $.ajax({
                url: carsUrl,
                method: 'POST',
                dataType: 'json',
                data: newCar
            }).done(function(response){
                createCar(response);
            }).fail(function(error){
                console.log(error);
            })
        })
    }
    addCar();
})
