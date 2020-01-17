$(document).ready(function() {
    var phoneButtonMobile = $('.header-top__phone-toggle');
    var phoneInfo = $('.header-top__phone-wrapper');
    var menuButtonMobile = $('.header-top__mobile-menu-toggle');
    var mainMenuMobile = $('.header-top__mobile-menu-container');

    function closePhoneInfo() {
       phoneInfo.removeClass('header-top__phone-wrapper--open');
    }

    function closeMobileMenu() {
       mainMenuMobile.removeClass('header-top__mobile-menu--open');
    }

    phoneButtonMobile.click(function(e){
      e.preventDefault();
      closeMobileMenu();
      phoneInfo.toggleClass('header-top__phone-wrapper--open');
    });

    menuButtonMobile.click(function(e){
      e.preventDefault();
      closePhoneInfo();
      mainMenuMobile.toggleClass('header-top__mobile-menu-container--open');
    });
});
