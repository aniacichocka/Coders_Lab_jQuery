// zadanie z wykładowcą

function zadanie01(){
  $('dt').on('mouseenter', function(){
    console.log('Mouse over:' , $(this).text());
  });
}

function zadanie02(){
  $('.hero-buttons button').on('click', function(){
    var feature = $(this).data('feature');
    console.log(feature);
  });
}



// zadania do samodzielnego wykonania

function zadanie01s(){
  $('.superhero-description').find('dd').hide();

  $('.superhero-description dt').on('click', function(){
    $(this).next('dd').toggle();
  })
}

function zadanie02s(){
  $('.shopping button').on('click', function(){

    if ($(this).hasClass('added')){
      $(this).removeClass('added');
      $(this).prev().css('border', '');
      $(this).text('Dadaj');

    } else{
      $(this).addClass('added');
      $(this).prev().css('border', '1px solid green');
      $(this).text('Dodano');
    }
  })
}


$(function(){
  console.log('ready');
  zadanie01();
  zadanie02();
  zadanie01s();
  zadanie02s();
})
