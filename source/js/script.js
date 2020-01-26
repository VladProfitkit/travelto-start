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
    var main = $('.main');
    var hotelsCheckbox = $('.interactive-input__toggle-label');
    var bookingPeopleSetting = $('.interactive-input__setting');
    var profileButton = $('.header-top__profile-img--logged-out');
    var modalAuthorize = $('.modal--authorize');
    var modalRegister = $('.modal--register');

    // TODO: Запрет ввода и скролла за оверлеем модалок

    //открытие модалки по клику на любой из инпутов в форме бронирования
    bookingFormInputWrapper.each(function() {
      $(this).click(function(e) {
        // e.preventDefault();
        $(this).children('.booking-form__modal-overlay').addClass('booking-form__modal-overlay--open');
        $(this).children('.interactive-input').addClass('interactive-input--open');
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
        // e.preventDefault();
        $(this).removeClass('booking-form__modal-overlay--open');
        $(this).parent(bookingFormInputWrapper).removeClass('booking-form__input-wrapper--open');
        $(this).siblings('.booking-form__input').removeClass('booking-form__input--open');
        $(this).siblings('.interactive-input').removeClass('interactive-input--open');
        e.stopPropagation();
      });
    });

    //переключение выделения выбранной опции у чекбокса во вкладке "отели" в форме бронирования ("все"-"акции")
    hotelsCheckbox.click(function() {
      hotelsCheckbox.siblings('.interactive-input__toggle-option').toggleClass('interactive-input__toggle-option--selected');
    });


    //счеткики людей/номеров в соответствующем окне формы бронирования
    bookingPeopleSetting.each(function() {
      var countDisplay = $(this).find('.interactive-input__setting-count');
      var count = 0;

      $(this).find('.interactive-input__setting-button--increase').click(function(e) {
        if (count >= 0 && count < 15) {
          count++;
          countDisplay.text(count);
        };
        e.preventDefault();
      });
      $(this).find('.interactive-input__setting-button--decrease').click(function(e) {
        if (count > 1 && count <= 15) {
          count--;
          countDisplay.text(count);
        } else if (count == 1) {
          count--;
          countDisplay.text('0+');
        };
        e.preventDefault();
      });
    });

    //приведение навигации в интерактивное состояние при включенном js
    function closeFooterMenu() {
      footerMenuColumn.removeClass('footer__column-list--open');
      footerMenuToggle.removeClass('footer__column-heading--no-js');
      footerMenuToggle.removeClass('footer__column-heading--open');
    };

    // function closeModal() {
    //   modalAuthorize.removeClass('modal--open');
    //   modalRegister.removeClass('modal--open');
    // }

    function closePhoneInfo() {
      phoneInfo.removeClass('header-top__phone-wrapper--open');
    };

    function mainHasJs() {
      main.removeClass('main--no-js');
    };

    function closeMobileMenu() {
       mainMenuMobile.removeClass('header-top__mobile-menu-container--open');
    };

    function closeLanguageToggle() {
      languageList.removeClass('currency-switch__list--open');
    };

    mainHasJs();
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

    //открытие формы авторизации по нажатию на кнопку в хедере
    profileButton.click(function(e) {
      e.preventDefault();
      closePhoneInfo();
      closeMobileMenu();
      modalAuthorize.addClass('modal--open');
    });

    //закрытие модалок авторизации/регистрации по клику на крестик
    $('.modal').each(function() {
      $(this).find('.modal__close-btn').click(function(e) {
        e.preventDefault();
        $(this).parents('.modal').removeClass('modal--open');
      });
    });

    //закрытие модалок авторизации/регистрации по клику на оверлей
    $(window).click(function(e) {
        if ($(e.target).is('.modal')) {
            $('.modal').removeClass('modal--open');
        };
    });

    //переключение между авторизацией и регистрацией
    modalAuthorize.find('.modal__alter-button--sign-up').click(function(e) {
      e.preventDefault();
      modalAuthorize.removeClass('modal--open');
      modalRegister.addClass('modal--open');
    });

    modalRegister.find('.modal__alter-button--sign-in').click(function(e) {
      e.preventDefault();
      modalRegister.removeClass('modal--open');
      modalAuthorize.addClass('modal--open');
    });

    //закрытие выпадающих меню при клике за пределами
    $(window).click(function () {
      closePhoneInfo();
      closeMobileMenu();
      closeLanguageToggle();
    });
});
