
function zadanie1(){
  $('.border').css('border', '1px solid blue');
}

function zadanie2(){
  var menu = $('#menu');
  var menuChildren = menu.children();

  menuChildren.last().text('Jestem ostatnim dzieckiem');
}

function zadanie3(){
  var menuElements = $('#menu li');

  // menuElements.first().css('color', 'pink');
  // menuElements.eq(1).css('color', 'red');
  // menuElements.last().css('color', 'blue');


  var col1 = menuElements.first().data('color');
  var col2 = menuElements.eq(1).data('color');
  var col3 = menuElements.last().data('color');

  menuElements.first().css('color', col1);
  menuElements.eq(1).css('color', col2);
  menuElements.last().css('color', col3);
}

function zadanie4(){
  var form = $('.login');
  var btn = $('.login button');
  var input = btn.next();
  // console.log(input);

  btn.on('click', function(){

    if (input.attr('type') === "password") {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  })
}



$(function(){
  // console.log('ready');
  zadanie1();
  zadanie2();
  zadanie3();
  zadanie4();
});
