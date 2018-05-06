// zadanie z wykładowcą

function zadanie01(){
  $('section').addClass('backgroundElement');
}

function zadanie02(){
  $('section.links nav').addClass('hover-effect');
};


// zadania do samodzielnego wykonania

function zadanie01s(){
  $('section.main li').addClass('borderClass');
}

function zadanie02s(){
  $('section.main li').addClass('colorText');
  $('section.main li').addClass('backgroundElement');
}

function zadanie03s() {
  // $('a').css('color', 'red');
  // $('.menu' a).css('color' 'red');
  $('.menu li').addClass('redLinks');
  $('.menu li').first().addClass('big-font');
}

function zadanie04s(){
  $('h1').addClass('creepyHeader');
  $('h1').parent().css('border', '1px solid blue');
  $('h1').next().addClass('crazy');
}

function zadanie05i06s(){
  var mlink1 = $('.menu li').first().addClass('menuLinks');
  console.log(mlink1);
  var mlink2 = $('.menu li').eq(2).addClass('menuLinks');
  console.log(mlink2);
  var mlink3 = $('.menu li').last().addClass('menuLinks');
  console.log(mlink3);
  $('.menu li').eq(2).hide();
}

function zadanie07s(){
  var inp = $('form input').val();
  var inp1 = $('form input').eq(1).val();
  console.log(inp);
  console.log(inp1);
}

function zadanie08s() {
  var codeLink = $('#codersLink').attr('href');
  console.log(codeLink);

  $('.container a').attr('href', 'www.wp.pl');
}

function zadanie09s(){
  var link1 = $('.links a').eq(0).data('hover');
  console.log(link1);

  var link2 = $('.links a').eq(1).data('hover');
  console.log(link2);

  var link3 = $('.links a').eq(2).data('hover');
  console.log(link3);

  var link4 = $('.links a').last().data('hover');
  console.log(link4);

  // $('.links a').first().data('hover', link3);
  // $('.links a').eq(1).data('hover', link1);
  // $('.links a').eq(2).data('hover', link2);

  $('.links a').first().attr('data-hover', link3);
  $('.links a').eq(1).attr('data-hover', link1 );
  $('.links a').eq(2).attr('data-hover', link2);
}


$(function(){
  console.log("Ready");
  zadanie01();
  zadanie02();

  zadanie01s();
  zadanie02s();
  zadanie03s();
  zadanie04s();
  zadanie05i06s();
  zadanie07s();
  zadanie08s();
  zadanie09s();
});
