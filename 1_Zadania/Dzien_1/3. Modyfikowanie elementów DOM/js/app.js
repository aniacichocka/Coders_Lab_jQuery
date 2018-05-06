// zadanie z wykładowcą

function zadanie01(){
  var newDiv = $('<div>', {class:'panel'});
  $('section.people').after(newDiv);
  newDiv.text('New div');
}


// zadania do samodzielego wykonania

function zadanie01s(){
  var button = $('.people input').eq(2);

  button.on('click', function(){

    var addUser = $('.people input').first().val();
    // console.log(addUser);
    var addAge = $('.people input').eq(1).val();

    var newLi = $('<li>');
    newLi.text(addUser);
    newLi.data('age', addAge);

    $('.people .main').append(newLi);

    var age = newLi.data('age');

    if(age < 15){
      newLi.css('color', 'green');
    }else if (age > 16 && age < 40){
      newLi.css('color', 'blue');
    }else if(age > 41){
      newLi.css('color', 'brown');
    }
  })
}

function zadanie02s(){
  var where = $('.where-i-am');
  where.after($('<span>').text('1.Jestem tutaj after'));
  where.before($('<span>').text('2.Jestem tutaj before'));
  where.prepend($('<span>').text('3.Jestem tutaj prepend'));
  where.append($('<span>').text('4.Jestem tutaj append'));
}

// zamiana bloków w listach
//
// function zadanie03s(){
//   var block = $('.block');
//   block.on('click', function(){
//
//     if ($(this).parent().hasClass('left')){
//       $('.right').append($(this));
//     }else {
//       $('.left').append($(this));
//     }
//   })
// }

function zadanie03s(){
  var block = $('.block');
  var right = $('.right');

  block.on('click', function(){
    $(this).remove();
    right.append($(this));
  })
}


$(function(){
  console.log('ready');
  zadanie01();
  zadanie01s();
  zadanie02s();
  zadanie03s();
})
