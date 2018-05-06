function zadanie01(){
  var div = $('<div>', {class: 'panel'});

  $('section.people').after(div);

  div.on('click', function(){
    console.log('działa');

    var p = $('<p>').text('new paragraph');
    div.append(p);

    // p.on('click',function(){
    //   console.log('paragraph clicked');
    // })
  })

  div.on('click', 'p', function(){
    console.log('paragraph clicked');
  })
}

// zadanie 1 - do samodzielnego wykonania - I sposób
// function zadanie01s(){
//
// // na istniejących elementach listy
//
//   var button = $('<button>', {class: 'remove'}).text('Usuń');
//   $('.people .main li').append(button);
//
//   var edit  = $('<button>', {class: 'edit'}).text('Edytuj');
//   $('.people .main li').append(edit);
//
//   var input = $('<input>', {type: 'text', value: ''});
//
//
//   $('.people .remove').on('click', function(){
//     $(this).parent().remove();
//   })
//
//   $('.people .edit').on('click', function(){
//
//     if($(this).text() == "Edytuj"){
//       $(this).text('Zatwierdź');
//       $(this).after(input);
//     } else {
//       var value = $(this).next().val();
//       $(this).prev().prev().text(value);
//       $(this).text('Edytuj');
//       $(this).next().remove();
//
//     }
//   })
//
//
// // na nowych elemenatch listy
//
//   $('.people input').last().on('click', function(){
//
//     var addUser = $('.people input').first().val();
//     var addAge = $('.people input').eq(1).val();
//
//     var newLi = $('<li>');
//     var newSpan = $('<span>');
//     newSpan.text(addUser);
//     newLi.append(newSpan);
//     newLi.data('age', addAge);
//     $('.people .main').append(newLi);
//
//
//     var button1 = $('<button>', {class: 'remove'}).text('Usuń');
//     var button2 = $('<button>', {class: 'edit'}).text('Edytuj');
//
//     var input1 = $('<input>', {type: 'text', value: ''});
//
//     button1.on('click', function(){
//       $(this).parent().remove();
//     })
//
//     button2.on('click', function(){
//       if($(this).text() == "Edytuj"){
//         $(this).text('Zatwierdź');
//         $(this).after(input1);
//       } else {
//         var value1 = $(this).next().val();
//         $(this).prev().prev().text(value1);
//         $(this).text('Edytuj');
//         $(this).next().remove();
//       }
//     })
//
//     newLi.append(button1);
//     newLi.append(button2);
//
//   })
// }


// zadanie 1 - do samodzielnego wykonania - II sposób
function zadanie01s(){

  var button = $('<button>', {class: 'remove'}).text('Usuń');
  $('.people .main li').append(button);
  var edit  = $('<button>', {class: 'edit'}).text('Edytuj');
  $('.people .main li').append(edit);
  var input = $('<input>', {type: 'text', value: ''});
  var main = $('.people .main');

  main.on('click', 'button.remove', function(){
      $(this).parent().remove();
  })

  main.on('click', 'button.edit', function(){
    if($(this).text() == "Edytuj"){
          $(this).text('Zatwierdź');
          $(this).after(input);
        } else {
          var value = $(this).next().val();
          $(this).prev().prev().text(value);
          $(this).text('Edytuj');
          $(this).next().remove();
        }
  })


  $('.people input').last().on('click', function(){

    var button = $('<button>', {class: 'remove'}).text('Usuń');
    var edit  = $('<button>', {class: 'edit'}).text('Edytuj');
    var input = $('<input>', {type: 'text', value: ''});
    var addUser = $('.people input').first().val();
    var addAge = $('.people input').eq(1).val();

     var newLi = $('<li>');
     var newSpan = $('<span>');
     newSpan.text(addUser);
     newLi.append(newSpan);
     newLi.data('age', addAge);
     $('.people .main').append(newLi);
     newLi.append(button);
     newLi.append(edit);

   })
}


$(function(){
  console.log('ready');
  zadanie01();
  zadanie01s();
})
