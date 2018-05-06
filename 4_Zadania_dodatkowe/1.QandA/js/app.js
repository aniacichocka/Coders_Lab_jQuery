$(function(){
  // console.log('Działa!');

  var question = $('.QA h1');
  // console.log(question);

  var answer = $('.QA p');
  // console.log(answer);


  question.on('click', function(){
    // console.log('kliknięcie w h1');

    $(this).next().slideToggle('400');
    $(this).next().siblings('p').slideUp('400');

  });

});
