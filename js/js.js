$(function () {
  /*бургер меню*/
  $('.toggle-icon').click(function () {
    $('#nav-container').toggleClass('pushed')
    $('.nav').toggleClass('active')
    $('body').toggleClass('no-scroll')
  })

  let header = $('#header')
  let screen = $('.screen')
  let screenH = screen.innerHeight()
  let scroll = $(window).scrollTop()
  check(scroll, screenH)

  $(window).on('scroll resize', function () {
    scroll = $(this).scrollTop()
    screenH = screen.innerHeight()
    check(scroll, screenH)
  })

  function check(scroll, screenH) {
    if (scroll > screenH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  $('most__close').click(function () {
    $(this).addClass('opac')
  })

  /*------------------- */

  /*--------- */

  $('[data-scroll]').on('click', function (e) {
    e.preventDefault()
    let elementId = $(this).data('scroll')
    $('body').removeClass('no-scroll')
    $('.nav').removeClass('active')

    let offsetelement = $(elementId).offset().top
    $('html,body').animate(
      {
        scrollTop: offsetelement - 85,
      },
      700
    )
  })
  /*------------ */

  const modal = $('[data-modal]')
  modal.on('click', function (event) {
    event.preventDefault()
    let mod = $(this).data('modal')

    $('.modal').addClass('show')
    $('body').addClass('no-scroll')
  })

  const close = $('[data-close]')
  close.on('click', function (event) {
    event.preventDefault()
    let parent = $(this).parents('.modal')

    parent.removeClass('show')
    $('body').removeClass('no-scroll')
  })

  $('.modal').on('click', function (event) {
    event.preventDefault()

    $(this).removeClass('show')
    $('body').removeClass('no-scroll')
  })

  $('.modal__inner').on('click', function (event) {
    event.stopPropagation()
  })

  /*slick js */

  let slider = $('#slider')
  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  })

  let sliderTes = $('#sliderTes')
  sliderTes.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    // appendArrows: $('.slider__arrows'),
    infinite: false,
  })
  /*--------------- */
  fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then((response) => response.json()) // преобразуем ответ в json
    .then((data) => {
      console.log(data) // выводим в консоль результат выполнения response.json()
      document.querySelector('.dol').innerHTML =
        'USD 1 Доллар США: ' + data[4].Cur_OfficialRate + ' &#36;'

      var today = new Date()
      var date = today.getDate()
      var Month = today.getMonth() + 1
      var year = today.getFullYear()

      var el = document.querySelector('.kurs__data')
      el.innerHTML = 'Дата на сегодня : ' + date + '.' + Month + '.' + year

      document.querySelector('.rus').innerHTML =
        'RUB 100 Российских рублей: ' + data[16].Cur_OfficialRate + '&#8381;'
      document.querySelector('.eur').innerHTML =
        'EUR 1 Евро: ' + data[5].Cur_OfficialRate + '&euro;'
    })
    .catch((error) => console.error(error))
  /* footer*/
  let today = new Date().getFullYear()
  let year = document.getElementById('year')
  year.textContent = today
})
