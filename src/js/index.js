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
const Low = () => {
		NumberEvent <= 0 ? (NumberEvent = 0) : NumberEvent--,
			sessionStorage.setItem('low', NumberEvent),
			0 == NumberEvent &&
				($('.order').removeClass('active'),
				$('.header').removeClass('black'),
				$('.header').removeClass('white')),
			1 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.architecture__title').removeClass('active'),
				$('.architecture__title').removeClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.architecture').removeClass('active'),
				$('.architecture').animate({ height: '0' }, 1e3),
				$('.architecture__after').removeClass('active'),
				$('.architecture__title').removeClass('bottom')),
			2 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.architecture').removeClass('after'),
				$('.architecture__title').removeClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').removeClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.architecture__after-decor-left').removeClass('active'),
				$('.architecture__after').removeClass('show'),
				$('.architecture').animate(
					{ width: '100%', height: '100vh', bottom: '0rem', left: '0rem' },
					1e3
				),
				$('.architecture__after-decor-left').animate({ opacity: 0 }, 1e3),
				$('.architecture__after-decor-right').animate({ opacity: 0 }, 1e3)),
			3 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.project').removeClass('active')),
			4 == NumberEvent &&
				($('.project__body').removeClass('firstScroll'),
				$('.project__itemOne').removeClass('soft'),
				$('.project__itemOne').addClass('main'),
				$('.project__itemOne').next('.project__body-item').removeClass('main')),
			5 == NumberEvent &&
				($('.project__body').removeClass('SecondScroll'),
				$('.project__itemTwo').removeClass('soft'),
				$('.project__itemTwo').addClass('main'),
				$('.project__itemTwo').next('.project__body-item').removeClass('main')),
			6 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.interior').removeClass('active'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').removeClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.interior').animate({ height: '0' }, 1e3),
				$('.interior__title').removeClass('active'),
				$('.interior__title').removeClass('bottom'),
				$('.interior__after').removeClass('active')),
			7 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.interior').removeClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').removeClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.interior').animate(
					{ width: '100%', height: '100vh', bottom: '0rem', left: '0rem' },
					1e3
				),
				$('.interior__after-decor').animate({ opacity: 0 }, 1e3),
				$('.interior__title').removeClass('after'),
				$('.interior__after-decor').removeClass('active'),
				$('.interior__after').removeClass('show')),
			8 == NumberEvent && $('.interior__section').removeClass('active'),
			9 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.project__interior').removeClass('active')),
			10 == NumberEvent &&
				($('.project__interior-body').removeClass('firstScroll'),
				$('.project__interior-itemOne').removeClass('softSlide'),
				$('.project__interior-itemOne').addClass('mainSlide'),
				$('.project__interior-itemOne')
					.next('.project__interior-body-item')
					.removeClass('mainSlide')),
			11 == NumberEvent &&
				($('.project__interior-body').removeClass('SecondScroll'),
				$('.project__interior-itemTwo').removeClass('softSlide'),
				$('.project__interior-itemTwo').addClass('mainSlide'),
				$('.project__interior-itemTwo')
					.next('.project__interior-body-item')
					.removeClass('mainSlide')),
			12 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').removeClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.landscape').animate({ height: '0rem' }, 1e3),
				$('.landscape__title').removeClass('active'),
				$('.landscape__title').removeClass('bottom'),
				$('.landscape__after').removeClass('active')),
			13 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.landscape').removeClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').removeClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.landscape').animate(
					{
						width: '100%',
						height: '100vh',
						bottom: '0',
						left: '0',
						borderRadius: 0,
					},
					1e3
				),
				$('.landscape__after-decor').animate({ opacity: 0 }, 1e3),
				$('.landscape__title').removeClass('after'),
				$('.landscape__after-decor').removeClass('active'),
				$('.landscape__after').removeClass('show')),
			14 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.project__landscape').removeClass('active')),
			15 == NumberEvent &&
				($('.project__landscape-body').removeClass('firstScroll'),
				$('.project__landscape-itemOne').removeClass('softSlide'),
				$('.project__landscape-itemOne').addClass('mainSlide'),
				$('.project__landscape-itemOne')
					.next('.project__landscape-body-item')
					.removeClass('mainSlide')),
			16 == NumberEvent &&
				($('.project__landscape-body').removeClass('SecondScroll'),
				$('.project__landscape-itemTwo').removeClass('softSlide'),
				$('.project__landscape-itemTwo').addClass('mainSlide'),
				$('.project__landscape-itemTwo')
					.next('.project__landscape-body-item')
					.removeClass('mainSlide')),
			17 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.building').removeClass('active'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').removeClass('hidden'),
				$('.building').animate({ height: '0' }, 1e3),
				$('.building__title').removeClass('active'),
				$('.building__title').removeClass('bottom'),
				$('.building__after').removeClass('active')),
			18 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.building').removeClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').removeClass('hidden'),
				$('.building').animate(
					{ width: '100%', height: '100vh', bottom: '0', left: '0' },
					1e3
				),
				$('.building__after-decor').animate({ opacity: 0 }, 1e3),
				$('.building__title').removeClass('after'),
				$('.building__after-decor').removeClass('active'),
				$('.building__after').removeClass('show')),
			19 == NumberEvent && $('.building__section').removeClass('active'),
			20 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.project__building').removeClass('active')),
			21 == NumberEvent &&
				($('.project__building-body').removeClass('firstScroll'),
				$('.project__building-itemOne').removeClass('softSlide'),
				$('.project__building-itemOne').addClass('mainSlide'),
				$('.project__building-itemOne')
					.next('.project__building-body-item')
					.removeClass('mainSlide')),
			22 == NumberEvent &&
				($('.project__building-body').removeClass('SecondScroll'),
				$('.project__building-itemTwo').removeClass('softSlide'),
				$('.project__building-itemTwo').addClass('mainSlide'),
				$('.project__building-itemTwo')
					.next('.project__building-body-item')
					.removeClass('mainSlide')),
			23 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.sections').animate({ height: '0' }, 1e3),
				$('.sections').removeClass('active'),
				(delay = 2e3)),
			NumberEvent >= 24 &&
				NumberEvent <= 43 &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				(WheelTop += 200),
				console.log(WheelTop),
				$('.sections__body').animate({ top: `${WheelTop}rem` }, 100)),
			44 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.bit').removeClass('active'),
				$('.bit').animate({ height: '0' }, 1e3),
				(delay = 0)),
			45 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.form').removeClass('active'),
				$('.form').animate({ height: '0' }, 1e3),
				(delay = 2e3)),
			46 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.footer').removeClass('active'),
				$('.footer').animate({ height: '0' }, 1e3))
	},
	Top = () => {
		NumberEvent++,
			sessionStorage.setItem('low', NumberEvent),
			1 == NumberEvent &&
				($('.main').removeClass('active'),
				$('.order').addClass('active'),
				$('.header').removeClass('black'),
				$('.header').addClass('white')),
			2 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.architecture__title').removeClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.architecture').animate({ height: '100vh' }, 1e3),
				setTimeout(() => {
					$('.architecture__after').addClass('active')
				}, 1500),
				setTimeout(() => {
					$('.architecture__title').addClass('active')
				}, 100),
				setTimeout(() => {
					$('.architecture__title').addClass('bottom')
				}, 800)),
			3 == NumberEvent &&
				($('.header').removeClass('white'),
				$('.header').addClass('black'),
				$('.architecture').addClass('after'),
				$('.architecture__title').removeClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.architecture').animate(
					{
						width: '27.86%',
						height: '69.25%',
						bottom: '15.75%',
						left: '36.09%',
					},
					1e3
				),
				$('.architecture__after-decor-left').animate({ opacity: 1 }, 1e3),
				$('.architecture__after-decor-right').animate({ opacity: 1 }, 1e3),
				$('.architecture__title').addClass('after'),
				$('.architecture__after-decor-left').addClass('active'),
				$('.architecture__after').addClass('show')),
			NumberEvent >= 4 &&
				NumberEvent < 7 &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.project').addClass('active'),
				5 == NumberEvent &&
					($('.project__body').addClass('firstScroll'),
					$('.project__itemOne').addClass('soft'),
					$('.project__itemOne').next('.project__body-item').addClass('main')),
				6 == NumberEvent &&
					($('.project__body').addClass('SecondScroll'),
					$('.project__itemTwo').addClass('soft'),
					$('.project__itemTwo').next('.project__body-item').addClass('main'))),
			7 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.interior').addClass('active'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').removeClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.interior').animate({ height: '100vh' }, 1e3),
				setTimeout(() => {
					$('.interior__title').addClass('active')
				}, 100),
				setTimeout(() => {
					$('.interior__title').addClass('bottom')
				}, 800),
				setTimeout(() => {
					$('.interior__after').addClass('active')
				}, 1500)),
			8 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.interior').addClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').removeClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.interior').animate(
					{
						width: '42.71%',
						height: '70.67%',
						bottom: '11.75%',
						left: '43.59%',
					},
					1e3
				),
				$('.interior__after-decor').animate({ opacity: 1 }, 1e3),
				$('.interior__title').addClass('after'),
				$('.interior__after-decor').addClass('active'),
				$('.interior__after').addClass('show')),
			9 == NumberEvent && $('.interior__section').addClass('active'),
			NumberEvent >= 10 &&
				NumberEvent < 13 &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.project__interior').addClass('active'),
				11 == NumberEvent &&
					($('.project__interior-body').addClass('firstScroll'),
					$('.project__interior-itemOne').addClass('softSlide'),
					$('.project__interior-itemOne')
						.next('.project__interior-body-item')
						.addClass('mainSlide')),
				12 == NumberEvent &&
					($('.project__interior-body').addClass('SecondScroll'),
					$('.project__interior-itemTwo').addClass('softSlide'),
					$('.project__interior-itemTwo')
						.next('.project__interior-body-item')
						.addClass('mainSlide'))),
			13 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').removeClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.landscape').animate({ height: '100vh' }, 1e3),
				setTimeout(() => {
					$('.landscape__title').addClass('active')
				}, 100),
				setTimeout(() => {
					$('.landscape__title').addClass('bottom')
				}, 800),
				setTimeout(() => {
					$('.landscape__after').addClass('active')
				}, 1500)),
			14 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.landscape').addClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').removeClass('hidden'),
				$('.building__title').addClass('hidden'),
				$('.landscape').animate(
					{
						width: '27.81%',
						height: '76.17%',
						bottom: '11.25%',
						left: '51.04%',
						borderRadius: '50%',
					},
					1e3
				),
				$('.landscape__after-decor').animate({ opacity: 1 }, 1e3),
				$('.landscape__title').addClass('after'),
				$('.landscape__after-decor').addClass('active'),
				$('.landscape__after').addClass('show')),
			NumberEvent >= 15 &&
				NumberEvent < 18 &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.project__landscape').addClass('active'),
				16 == NumberEvent &&
					($('.project__landscape-body').addClass('firstScroll'),
					$('.project__landscape-itemOne').addClass('softSlide'),
					$('.project__landscape-itemOne')
						.next('.project__landscape-body-item')
						.addClass('mainSlide')),
				17 == NumberEvent &&
					($('.project__landscape-body').addClass('SecondScroll'),
					$('.project__landscape-itemTwo').addClass('softSlide'),
					$('.project__landscape-itemTwo')
						.next('.project__landscape-body-item')
						.addClass('mainSlide'))),
			18 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.building').addClass('active'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').removeClass('hidden'),
				$('.building').animate({ height: '100vh' }, 1e3),
				setTimeout(() => {
					$('.building__title').addClass('active')
				}, 100),
				setTimeout(() => {
					$('.building__title').addClass('bottom')
				}, 700),
				setTimeout(() => {
					$('.building__after').addClass('active')
				}, 1500)),
			19 == NumberEvent &&
				($('.header').addClass('black'),
				$('.header').removeClass('white'),
				$('.building').addClass('after'),
				$('.architecture__title').addClass('hidden'),
				$('.interior__title').addClass('hidden'),
				$('.landscape__title').addClass('hidden'),
				$('.building__title').removeClass('hidden'),
				$('.building').animate(
					{
						width: '27.66%',
						height: '68.25%',
						bottom: '19.17%',
						left: '6.35%',
					},
					1e3
				),
				$('.building__after-decor').animate({ opacity: 1 }, 1e3),
				$('.building__title').addClass('after'),
				$('.building__after-decor').addClass('active'),
				$('.building__after').addClass('show')),
			20 == NumberEvent && $('.building__section').addClass('active'),
			NumberEvent >= 21 &&
				NumberEvent < 24 &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.project__building').addClass('active'),
				22 == NumberEvent &&
					($('.project__building-body').addClass('firstScroll'),
					$('.project__building-itemOne').addClass('softSlide'),
					$('.project__building-itemOne')
						.next('.project__building-body-item')
						.addClass('mainSlide')),
				23 == NumberEvent &&
					($('.project__building-body').addClass('SecondScroll'),
					$('.project__building-itemTwo').addClass('softSlide'),
					$('.project__building-itemTwo')
						.next('.project__building-body-item')
						.addClass('mainSlide')),
				(delay = 2e3)),
			24 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.sections').animate({ height: '100vh' }, 1e3),
				$('.sections').addClass('active'),
				(delay = 0)),
			NumberEvent >= 25 &&
				NumberEvent <= 44 &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				(WheelTop -= 200),
				console.log(WheelTop),
				$('.sections__body').animate({ top: `${WheelTop}rem` }, 100),
				44 == NumberEvent && (delay = 2e3)),
			45 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.bit').addClass('active'),
				$('.bit').animate({ height: '100vh' }, 1e3)),
			46 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.form').addClass('active'),
				$('.form').animate({ height: '100vh' }, 1e3)),
			47 == NumberEvent &&
				($('.header').removeClass('black'),
				$('.header').addClass('white'),
				$('.footer').addClass('active'),
				$('.footer').animate({ height: '100vh' }, 1e3))
	}
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
$(document).bind('keydown mousewheel', e => {
	const t = { 38: 'up', 40: 'down' },
		a = e.originalEvent.deltaY
	wheel &&
		arrows &&
		((wheel = !1),
		setTimeout(() => {
			wheel = windowWidth >= 780
		}, delay),
		(arrows = !1),
		setTimeout(() => {
			arrows = windowWidth >= 780
		}, delay),
		(a > 0 || 'down' == t[e.keyCode]) && Top(),
		(a < 0 || 'up' == t[e.keyCode]) && Low())
}),
sessionStorage.setItem('low', 0),
	windowWidth >= 780 &&
		($('#id__project').on('mouseup', function (e) {
			if (
				(setTimeout(() => {
					$('.header').removeClass('active'),
						$('.header').hasClass('white') && $('.header').removeClass('black')
				}, 1500),
				sessionStorage.getItem('low') > 3)
			) {
				let e = sessionStorage.getItem('low') - 3
				for (let t = 0; t < e; t++) Low()
			} else {
				let e = 3 - sessionStorage.getItem('low')
				for (let t = 0; t < e; t++) Top()
			}
		}),
		$('#id__landscape').on('mouseup', function (e) {
			if (
				(setTimeout(() => {
					$('.header').removeClass('active'),
						$('.header').hasClass('white') && $('.header').removeClass('black')
				}, 2500),
				sessionStorage.getItem('low') > 14)
			) {
				let e = sessionStorage.getItem('low') - 14
				for (let t = 0; t < e; t++) Low()
			} else {
				let e = 14 - sessionStorage.getItem('low')
				for (let t = 0; t < e; t++) Top()
			}
		}),
		$('#id__interior').on('mouseup', function (e) {
			if (
				(setTimeout(() => {
					$('.header').removeClass('active'),
						$('.header').hasClass('white') && $('.header').removeClass('black')
				}, 1500),
				sessionStorage.getItem('low') > 8)
			) {
				let e = sessionStorage.getItem('low') - 8
				for (let t = 0; t < e; t++) Low()
			} else {
				let e = 8 - sessionStorage.getItem('low')
				for (let t = 0; t < e; t++) Top()
			}
		}),
		$('#id__building').on('mouseup', function (e) {
			if (
				(setTimeout(() => {
					$('.header').removeClass('active'),
						$('.header').hasClass('white') && $('.header').removeClass('black')
				}, 1500),
				sessionStorage.getItem('low') > 19)
			) {
				let e = sessionStorage.getItem('low') - 19
				for (let t = 0; t < e; t++) Low()
			} else {
				let e = 19 - sessionStorage.getItem('low')
				for (let t = 0; t < e; t++) Top()
			}
		})),
	jQuery(function (e) {
		e(document).mouseup(function (t) {
			e('.header__burger').is(t.target) ||
			0 !== e('.header__burger').has(t.target).length
				? e('.header__burger').is(t.target) || e('.header').hasClass('active')
					? (e('.header').removeClass('active'),
					  (e('.header').hasClass('white') || e('.main').hasClass('active')) &&
							e('.header').removeClass('black'))
					: (e('.header').addClass('active'), e('.header').addClass('black'))
				: e('.header').is(t.target) || 0 !== e('.header').has(t.target).length
				? e('.header__burger').is(t.target) &&
				  e('.header').hasClass('active') &&
				  (e('.header').removeClass('active'),
				  e('.header').hasClass('white') && e('.header').removeClass('black'))
				: (e('.header').removeClass('active'),
				  e('.header').hasClass('white') && e('.header').removeClass('black'))
		})
	}),
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
