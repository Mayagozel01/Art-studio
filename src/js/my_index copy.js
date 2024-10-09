function onEntry(e) {
	e.forEach(e => {
		e.target.classList.add('element-show')
	})
}
let options = { threshold: [0.5] },
	observer = new IntersectionObserver(onEntry, options),
	elements = document.querySelectorAll('.element-animation')
for (let e of elements) observer.observe(e)
let NumberEvent = 0,
	WheelTop = $(window).height(),
	wheel = !0,
	delay = 1500,
	arrows = !0,
	windowWidth = $(window).width()
$(window).on('resize', function (e) {
	windowWidth = $(window).width()
})

function init() {
	var e = new ymaps.Map('map', {
			center: [55.734851, 37.614455],
			zoom: 15,
			controls: ['zoomControl', 'typeSelector'],
		}),
		t = new ymaps.Placemark(
			[55.734851, 37.614455],
			{ hintContent: 'москва,ул. Большая Якиманка, 33/13с2 ' },
			{
				iconLayout: 'default#image',
				iconImageHref:
					'https://rgcompany.ru/images/tild3431-3737-4562-a163-643934666561__holder.svg',
				iconImageSize: [24, 24],
				iconImageOffset: [-16, -16],
			}
		)
	jQuery(function (t) {
		t(document).mouseup(function (a) {
			t('.maps').is(a.target) || 0 !== t('.maps').has(a.target).length
				? e.behaviors.enable('scrollZoom')
				: e.behaviors.disable('scrollZoom')
		})
	}),
		e.geoObjects.add(t)
}
sessionStorage.setItem('low', 0),
	windowWidth >= 780 &&
	ymaps.ready(init),
	$(document).ready(function () {
		$(document).mousemove(function (e) {
			document.querySelector('.architecture__after-decor-left')
			var t = $('.architecture__after-decor-left').offset(),
				a = $('.architecture__after-decor-right').offset(),
				o = t.left,
				i = t.top,
				r = a.left,
				s = a.top,
				n = e.pageX - o,
				d = e.pageY - i,
				l = e.pageX - r,
				c = e.pageY - s
			$('.architecture__after-decor-left').css({
				transform: `translate(${n / 100}rem , ${d / 100}rem)`,
			}),
				$('.architecture__after-decor-right').css({
					transform: `translate(${l / 100}rem , ${c / 100}rem)`,
				})
		})
	}),
	$(document).ready(function () {
		$(document).mousemove(function (e) {
			document.querySelector('.interior__after-decor')
			var t = $('.interior__after-decor').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o
			$('.interior__after-decor').css({
				transform: `translate(${i / 300}rem , ${r / 300}rem)`,
			})
		})
	}),
	$(document).ready(function () {
		$(document).mousemove(function (e) {
			document.querySelector('.landscape__after-decor')
			var t = $('.landscape__decor-bottom').offset(),
				a = $('.landscape__decor-top').offset(),
				o = $('.landscape__decor-right').offset(),
				i = $('.landscape__decor-left').offset(),
				r = t.left,
				s = t.top,
				n = a.left,
				d = a.top,
				l = o.left,
				c = o.top,
				m = i.left,
				_ = i.top,
				h = e.pageX - r,
				u = e.pageY - s,
				p = e.pageX - n,
				b = e.pageY - d,
				v = e.pageX - l,
				C = e.pageY - c,
				f = e.pageX - m,
				g = e.pageY - _
			$('.landscape__decor-bottom').css({
				transform: `translate(${h / 300}rem , ${u / 300}rem)`,
			}),
				$('.landscape__decor-top').css({
					transform: `translate(${p / 300}rem , ${b / 300}rem)`,
				}),
				$('.landscape__decor-right').css({
					transform: `translate(${v / 300}rem , ${C / 300}rem)`,
				}),
				$('.landscape__decor-left').css({
					transform: `translate(${f / 300}rem , ${g / 300}rem)`,
				})
		})
	}),
	$(document).ready(function () {
		$(document).mousemove(function (e) {
			document.querySelector('.landscape__after-decor')
			var t = $('.building__decor-bottom').offset(),
				a = $('.building__decor-top').offset(),
				o = t.left,
				i = t.top,
				r = a.left,
				s = a.top,
				n = e.pageX - o,
				d = e.pageY - i,
				l = e.pageX - r,
				c = e.pageY - s
			$('.building__decor-bottom').css({
				transform: `translate(${n / 300}rem , ${d / 300}rem)`,
			}),
				$('.building__decor-top').css({
					transform: `translate(${l / 300}rem , ${c / 300}rem)`,
				})
		})
	}),
	$(document).ready(function () {
		$('.bitOne').mousemove(function (e) {
			var t = $('.bitOne').offset(),
				a = $('.bitOne').children('.span__top').offset(),
				o = t.left,
				i = t.top,
				r = e.pageX - o,
				s = e.pageY - i,
				n = a.left,
				d = a.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitOne').children('.animate__block').css({ top: s, left: r }),
				$('.bitOne')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitOne').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitOne').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitOne')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitTwo').mousemove(function (e) {
			var t = $('.bitTwo').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitTwo').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitTwo').children('.animate__block').css({ top: r, left: i }),
				$('.bitTwo')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitTwo').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitTwo').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitTwo')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitThree').mousemove(function (e) {
			var t = $('.bitThree').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitThree').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitThree').children('.animate__block').css({ top: r, left: i }),
				$('.bitThree')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitThree').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitThree').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitThree')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitFour').mousemove(function (e) {
			var t = $('.bitFour').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitFour').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitFour').children('.animate__block').css({ top: r, left: i }),
				$('.bitFour')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitFour').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitFour').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitFour')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitFive').mousemove(function (e) {
			var t = $('.bitFive').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitFive').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitFive').children('.animate__block').css({ top: r, left: i }),
				$('.bitFive')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitFive').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitFive').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitFive')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitSix').mousemove(function (e) {
			var t = $('.bitSix').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitSix').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitSix').children('.animate__block').css({ top: r, left: i }),
				$('.bitSix')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitSix').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitSix').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitSix')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitSeven').mousemove(function (e) {
			var t = $('.bitSeven').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitSeven').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitSeven').children('.animate__block').css({ top: r, left: i }),
				$('.bitSeven')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitSeven').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitSeven').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitSeven')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	}),
	$(document).ready(function () {
		$('.bitEight').mousemove(function (e) {
			var t = $('.bitEight').offset(),
				a = t.left,
				o = t.top,
				i = e.pageX - a,
				r = e.pageY - o,
				s = $('.bitEight').children('.span__top').offset(),
				n = s.left,
				d = s.top,
				l = e.pageX - n,
				c = e.pageY - d
			$('.bitEight').children('.animate__block').css({ top: r, left: i }),
				$('.bitEight')
					.children('.span__top')
					.css({ clipPath: `circle(150rem at ${l}rem ${c}rem)` }),
				$('.bitEight').mouseover(function (e) {
					$(this).children('.animate__block').addClass('animate')
				}),
				$('.bitEight').mouseout(function (e) {
					$(this).children('.animate__block').removeClass('animate'),
						$('.bitEight')
							.children('.span__top')
							.css({ clipPath: 'circle(0rem at 0 0)' })
				})
		})
	})
let delayClick = !0
if (
	($('.accordion__interior .accordion__body-item').on('click', function (e) {
		delayClick &&
			($(this).addClass('active'),
			$('.accordion__interior .accordion__body-item')
				.not(this)
				.removeClass('active'),
			(delayClick = !1),
			setTimeout(() => {
				delayClick = !0
			}, 1500))
	}),
	$('.accordion__architecture .accordion__body-item').on('click', function (e) {
		delayClick &&
			($(this).addClass('active'),
			$('.accordion__architecture .accordion__body-item')
				.not(this)
				.removeClass('active'),
			(delayClick = !1),
			setTimeout(() => {
				delayClick = !0
			}, 1500))
	}),
	$('.accordion__landscape .accordion__body-item').on('click', function (e) {
		delayClick &&
			($(this).addClass('active'),
			$('.accordion__landscape .accordion__body-item')
				.not(this)
				.removeClass('active'),
			(delayClick = !1),
			setTimeout(() => {
				delayClick = !0
			}, 1500))
	}),
	$('.accordion__building .accordion__body-item').on('click', function (e) {
		delayClick &&
			($(this).addClass('active'),
			$('.accordion__building .accordion__body-item')
				.not(this)
				.removeClass('active'),
			(delayClick = !1),
			setTimeout(() => {
				delayClick = !0
			}, 1500))
	}),
	jQuery(function (e) {
		e(document).mouseup(function (t) {
			e('.architecture__after-body-right-button').is(t.target) ||
			0 !== e('.architecture__after-body-right-button').has(t.target).length
				? e('.accordion__exit').is(t.target) &&
				  0 === e('.accordion__exit').has(t.target).length
					? (setTimeout(() => {
							e('.accordion__architecture').removeClass('show')
					  }, 1500),
					  e('.accordion__body').removeClass('show'))
					: (setTimeout(() => {
							e('.accordion__body').addClass('show')
					  }, 1500),
					  e('.accordion__architecture').addClass('show'))
				: e('.accordion__body').is(t.target) ||
				  0 !== e('.accordion__body').has(t.target).length ||
				  (setTimeout(() => {
						e('.accordion__architecture').removeClass('show')
				  }, 1500),
				  e('.accordion__body').removeClass('show'))
		})
	}),
	jQuery(function (e) {
		e(document).mouseup(function (t) {
			e('.interior__after-body-button').is(t.target) ||
			0 !== e('.interior__after-body-button').has(t.target).length
				? e('.accordion__exit').is(t.target) &&
				  0 === e('.accordion__exit').has(t.target).length
					? (setTimeout(() => {
							e('.accordion__interior').removeClass('show')
					  }, 1500),
					  e('.accordion__body').removeClass('show'))
					: (setTimeout(() => {
							e('.accordion__body').addClass('show')
					  }, 1500),
					  e('.accordion__interior').addClass('show'))
				: e('.accordion__body').is(t.target) ||
				  0 !== e('.accordion__body').has(t.target).length ||
				  (setTimeout(() => {
						e('.accordion__interior').removeClass('show')
				  }, 1500),
				  e('.accordion__body').removeClass('show'))
		})
	}),
	jQuery(function (e) {
		e(document).mouseup(function (t) {
			e('.landscape__after-body-button').is(t.target) ||
			0 !== e('.landscape__after-body-button').has(t.target).length
				? e('.accordion__exit').is(t.target) &&
				  0 === e('.accordion__exit').has(t.target).length
					? (setTimeout(() => {
							e('.accordion__landscape').removeClass('show')
					  }, 1500),
					  e('.accordion__body').removeClass('show'))
					: (setTimeout(() => {
							e('.accordion__body').addClass('show')
					  }, 1500),
					  e('.accordion__landscape').addClass('show'))
				: e('.accordion__body').is(t.target) ||
				  0 !== e('.accordion__body').has(t.target).length ||
				  (setTimeout(() => {
						e('.accordion__landscape').removeClass('show')
				  }, 1500),
				  e('.accordion__body').removeClass('show'))
		})
	}),
	jQuery(function (e) {
		e(document).mouseup(function (t) {
			e('.building__after-body-button').is(t.target) ||
			0 !== e('.building__after-body-button').has(t.target).length
				? e('.accordion__exit').is(t.target) &&
				  0 === e('.accordion__exit').has(t.target).length
					? (setTimeout(() => {
							e('.accordion__building').removeClass('show')
					  }, 1500),
					  e('.accordion__body').removeClass('show'))
					: (setTimeout(() => {
							e('.accordion__body').addClass('show')
					  }, 1500),
					  e('.accordion__building').addClass('show'))
				: e('.accordion__body').is(t.target) ||
				  0 !== e('.accordion__body').has(t.target).length ||
				  (setTimeout(() => {
						e('.accordion__building').removeClass('show')
				  }, 1500),
				  e('.accordion__body').removeClass('show'))
		})
	}),
	windowWidth <= 780)
) {
	$('#id__project').on('mouseup', function (e) {
		$('.header').removeClass('active'),
			$('.header').hasClass('white') && $('.header').removeClass('black')
	}),
		$('#id__landscape').on('mouseup', function (e) {
			$('.header').removeClass('active'),
				$('.header').hasClass('white') && $('.header').removeClass('black')
		}),
		$('#id__interior').on('mouseup', function (e) {
			$('.header').removeClass('active'),
				$('.header').hasClass('white') && $('.header').removeClass('black')
		}),
		$('#id__building').on('mouseup', function (e) {
			$('.header').removeClass('active'),
				$('.header').hasClass('white') && $('.header').removeClass('black')
		})
	var controllerConditions = new ScrollMagic.Controller(),
		ConditionsTween = gsap
			.timeline()
			.fromTo(
				'.architecture__after-decor-left',
				{ top: '2086rem' },
				{ top: '1700rem', duration: 900 }
			),
		ConditionsScene = new ScrollMagic.Scene({
			triggerElement: '.architecture__after',
			duration: 900,
			triggerHook: 'onEnter',
		})
			.setTween(ConditionsTween)
			.addTo(controllerConditions)
	;(controllerConditions = new ScrollMagic.Controller()),
		(ConditionsTween = gsap
			.timeline()
			.fromTo(
				'.architecture__after-decor-right',
				{ top: '72rem' },
				{ top: '332rem', duration: 900 }
			)),
		(ConditionsScene = new ScrollMagic.Scene({
			triggerElement: '.architecture__after',
			duration: 900,
			triggerHook: 'onEnter',
		})
			.setTween(ConditionsTween)
			.addTo(controllerConditions)),
		(controllerConditions = new ScrollMagic.Controller()),
		(ConditionsTween = gsap
			.timeline()
			.fromTo(
				'.architecture__title',
				{ x: '-800rem' },
				{ x: 0, duration: 800 }
			)),
		(ConditionsScene = new ScrollMagic.Scene({
			triggerElement: '.architecture',
			duration: 800,
			triggerHook: 'onEnter',
		})
			.setTween(ConditionsTween)
			.addTo(controllerConditions)),
		(ConditionsTween = gsap
			.timeline()
			.fromTo('.interior__title', { x: '-800rem' }, { x: 0, duration: 800 })),
		(ConditionsScene = new ScrollMagic.Scene({
			triggerElement: '.interior',
			duration: 800,
			triggerHook: 'onEnter',
		})
			.setTween(ConditionsTween)
			.addTo(controllerConditions)),
		(ConditionsTween = gsap
			.timeline()
			.fromTo('.landscape__title', { x: '-1000rem' }, { x: 0, duration: 800 })),
		(ConditionsScene = new ScrollMagic.Scene({
			triggerElement: '.landscape',
			duration: 800,
			triggerHook: 'onEnter',
		})
			.setTween(ConditionsTween)
			.addTo(controllerConditions)),
		(ConditionsTween = gsap
			.timeline()
			.fromTo('.building__title', { x: '-1200rem' }, { x: 0, duration: 800 })),
		(ConditionsScene = new ScrollMagic.Scene({
			triggerElement: '.building',
			duration: 800,
			triggerHook: 'onEnter',
		})
			.setTween(ConditionsTween)
			.addTo(controllerConditions))
}
var splide
;(splide = new Splide('.splide', {
	type: 'loop',
	padding: '5rem',
	gap: '12rem',
	pagination: !1,
	arrows: !1,
})).mount(),
	(splide = new Splide('#splide__building', {
		type: 'loop',
		padding: '5rem',
		gap: '12rem',
		pagination: !1,
		arrows: !1,
	})).mount(),
	(splide = new Splide('#splide__landscape', {
		type: 'loop',
		padding: '5rem',
		gap: '12rem',
		pagination: !1,
		arrows: !1,
	})).mount(),
	(splide = new Splide('#splide__interior', {
		type: 'loop',
		padding: '5rem',
		gap: '12rem',
		pagination: !1,
		arrows: !1,
	})).mount()
