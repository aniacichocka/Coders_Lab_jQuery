$(function(){
  // console.log('Działa!');

  var tab = $('.tabs li');
  console.log(tab);

  var text = $('.tabs').siblings('div');
  console.log(text);

  text.hide();

  tab.on('click', function(){
    // console.log('Działa');

    text.eq($(this).index()).slideDown('500');

    text.eq($(this).index()).siblings('div').slideUp('500');

  });
});
