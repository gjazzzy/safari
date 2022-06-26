$(document).ready(function () {
  // $('slider').slider('unslick'); // Выключение слайдера
  $('.slider').slick({
    arrows: true, //Вкл стрелок
    dots: false, // Вкл точек
    adaptiveHeight: true, // Адаптивные точки
    slidesToShow: 1, // Показ  кол-вл слайдов
    slidesToScroll: 1, // Скролл слайдов
    speed: 1000, // Скорость перелистываться анимации
    easing: 'easer', //Анимация перелистыванья
    infinite: true, // Бесконечность слайдера
    autoplay: true, // Авто-переключение
    autoplaySpeed: 1000, // Перелистыванье авто
    initialSlide: 0, // слайд начало
    pauseOnFocus: false, // Пауза при клике на слайд
    pauseOnDotsHover: true, // Пауза при наведении на Dots
    pauseOnHover: true, // Пауза при наведении на слайд
    draggable: true, // Нельзя на ПК! свайпить
    swipe: true, // Нельзя на тачскринах свайпить
    touchThreshold: 7, // Момент перелистыванья
    touchMove: true, // Ручное перелистыванье выкл
    waitForAnimate: true, // Быстрая перекрутка
    centerMode: false, // Центральный слайд
    variableWidth: false, // Авто-Адаптивный слайдер 
    rows: 1, // Колонк
    vertical: false, // Вертикальный слайдер (без использовать с d:block)
    verticalSwiping: false, // Правильная перелистка (вертикаль)

  
  appendArrows:$('.button-nav'),// Расположение стрелок в отдельном меню 
  
  responsive:[ // брекПоинт и его настройка
    {
      breakpoint: 700,
      settings: {
        // centerMode: true, // Центральный слайд
        // variableWidth: true, // Авто-Адаптивный слайдер 

      },
    // }, {
    //    breakpoint: 900,
    //   settings: {
    //     slidesToShow: 2
    //   }
    }
    ],
  // mobileFirst: true,// miv-width !
  });

});

$('.header__burger').on('click',function () { 
  $('.header__menu-list').toggleClass('header__menu-list--active');
  
});

$('.header__burger-close').on('click',function () { 
  $('.header__menu-list').toggleClass('header__menu-list--active');
  
});