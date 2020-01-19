$(document).ready(function() {
    var phoneButtonMobile = $('.header-top__phone-toggle');
    var phoneInfo = $('.header-top__phone-wrapper');
    var menuButtonMobile = $('.header-top__mobile-menu-toggle');
    var mainMenuMobile = $('.header-top__mobile-menu-container');
    var footerMenuColumn = $('.footer__column-list');
    var footerMenuToggle = $('.footer__column-heading');

    //приведение колонок навигации в футере на мобильных в интерактивное состояние при включенном js
    function hideFooterMenu() {
      footerMenuColumn.removeClass('footer__column-list--open');
      footerMenuToggle.removeClass('footer__column-heading--no-js');
      footerMenuToggle.removeClass('footer__column-heading--open');
    }

    function closePhoneInfo() {
       phoneInfo.removeClass('header-top__phone-wrapper--open');
    }

    function closeMobileMenu() {
       mainMenuMobile.removeClass('header-top__mobile-menu-container--open');
    }

    hideFooterMenu();

    //сворачивание колонок навигации в футере на мобильных
    footerMenuToggle.each(function() {
      $(this).click(function(e){
        e.preventDefault();
        $(this).toggleClass('footer__column-heading--open');
        $(this).next(footerMenuColumn).toggleClass('footer__column-list--open');
      });
    });

    //открытие контактов в хедере на мобильных
    phoneButtonMobile.click(function(e) {
      e.preventDefault();
      closeMobileMenu();
      phoneInfo.toggleClass('header-top__phone-wrapper--open');
    });

    //открытие меню на мобильных
    menuButtonMobile.click(function(e) {
      e.preventDefault();
      closePhoneInfo();
      mainMenuMobile.toggleClass('header-top__mobile-menu-container--open');
    });
});
