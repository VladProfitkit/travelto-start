$(document).ready(function() {
    var phoneButtonMobile = $('.header-top__phone-toggle');
    var phoneInfo = $('.header-top__phone-wrapper');
    var menuButtonMobile = $('.header-top__mobile-menu-toggle');
    var mainMenuMobile = $('.header-top__mobile-menu-container');
    var footerMenuColumn = $('.footer__column-list');
    var footerMenuToggle = $('.footer__column-heading');
    var languageToggle = $('.currency-switch__current');
    var languageList = $('.currency-switch__list');
    var bookingFormInputWrapper = $('.booking-form__input-wrapper');
    var bookingFormInput = $('.booking-form__input');
    // var bookingFormHotel = $('#inputHotel');
    var bookingFormOverlay = $('.booking-form__modal-overlay');

    // TODO: Запрет ввода и скролла за оверлеем модалок

    //открытие модалки по клику на любой из инпутов в форме бронирования
    bookingFormInputWrapper.each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        $(this).children('.booking-form__modal-overlay').addClass('booking-form__modal-overlay--open');
        if ($(this).children('.booking-form__input').hasClass('booking-form__input--hotel')) {
          $(this).addClass('booking-form__input-wrapper--open');
          $(this).children('.booking-form__input').addClass('booking-form__input--open');
        };
        e.stopPropagation();
      });
    });

    //закрытие модалки по клику на оверлей модалки формы бронирования
    bookingFormOverlay.each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        $(this).removeClass('booking-form__modal-overlay--open');
        $(this).parent(bookingFormInputWrapper).removeClass('booking-form__input-wrapper--open');
        $(this).siblings('.booking-form__input').removeClass('booking-form__input--open');
        e.stopPropagation();
      });
    });

    //приведение колонок навигации в футере на мобильных в интерактивное состояние при включенном js
    function closeFooterMenu() {
      footerMenuColumn.removeClass('footer__column-list--open');
      footerMenuToggle.removeClass('footer__column-heading--no-js');
      footerMenuToggle.removeClass('footer__column-heading--open');
    };

    function closePhoneInfo() {
       phoneInfo.removeClass('header-top__phone-wrapper--open');
    };

    function closeMobileMenu() {
       mainMenuMobile.removeClass('header-top__mobile-menu-container--open');
    };

    function closeLanguageToggle() {
      languageList.removeClass('currency-switch__list--open');
    };

    closeMobileMenu();
    closeFooterMenu();

    //сворачивание колонок навигации в футере на мобильных
    footerMenuToggle.each(function() {
      $(this).click(function(e){
        e.preventDefault();
        $(this).toggleClass('footer__column-heading--open');
        $(this).next(footerMenuColumn).toggleClass('footer__column-list--open');
        e.stopPropagation();
      });
    });

    //открытие контактов в хедере на мобильных
    phoneButtonMobile.click(function(e) {
      e.preventDefault();
      closeMobileMenu();
      phoneInfo.toggleClass('header-top__phone-wrapper--open');
      e.stopPropagation();
    });

    //открытие меню на мобильных
    menuButtonMobile.click(function(e) {
      e.preventDefault();
      closePhoneInfo();
      mainMenuMobile.toggleClass('header-top__mobile-menu-container--open');
      e.stopPropagation();
    });

    //открытие выбора языка в шапке
    languageToggle.click(function(e) {
      e.preventDefault();
      languageList.toggleClass('currency-switch__list--open');
      e.stopPropagation();
    });

    //закрытие выпадающих меню при клике за пределами
    $(document).click(function () {
      closePhoneInfo();
      closeMobileMenu();
      closeLanguageToggle();
    });
});
