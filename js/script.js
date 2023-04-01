/*------------------------------------
Scroll Button
------------------------------------*/
$(function(){
  var pagetop = $('#js-pagetop');
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() < 500 || $(this).scrollTop() > 6000){
      pagetop.fadeOut();
    } else {
      pagetop.fadeIn();
    }
  });
  pagetop.click(function(){
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
/*------------------------------------
hamburger
------------------------------------*/
const ham = $('#js-hamburger');
const nav = $('#js-nav');
const nav_item = $('.nav-items-item');

ham.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
});
nav_item.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
});
if ($('.hamburger-menu').is(':visible')) {
  // アニメーションを実行するコード
}
