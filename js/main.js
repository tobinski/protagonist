jQuery(document).ready(function($){
	var bubbles = [{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'},
					{'url':'http://protagonist.ch','image':'https://diegouelouter.files.wordpress.com/2011/03/definition-protagonist_7_the-protagonist1.jpg'}];


	var bodyHeight, winWidth, winHight, contHeight, contwidth, edge;
	// Dimensionen berechnen
	calcDimension();
	/**
	 * Berechnet die Dimension der Website
	 * @return void
	 */
	function calcDimension () {
		bodyHeight = $('body').height();
		winHight = $(window).height();
		winWidth = $(window).width();
		contHeight = $('#container').height();
		contwidth = $('#container').width();
		edge = winWidth - contwidth;
	}

	$(window).bind('resize', function () {
		calcDimension();
	});

	var t = bodyHeight/bubbles.length;
	var x=0;
	// Bubbles zeichnen
	$.each(bubbles, function(){
		// Speed
		var speed = Math.round(Math.random() * 20)/10;
		// Grösse der Container
		var dimension = Math.max(Math.floor(Math.random() * 199) + 1, 80);
		// position left
		var leftTmp = Math.floor(Math.random() * (edge));
		var left = (leftTmp + dimension) > edge / 2 ? (leftTmp + dimension - edge/2)  + edge/2 + contwidth: leftTmp;
		left = left + dimension > winWidth ? left - dimension: left;
		// position top
		var top = Math.round(x*(t/speed))*-1;
		// Drop erstellen
		var $item = $('<div>', {
					'id': '#parallax'+x,
					'class':'paralex',
					'width':dimension,
					'height':dimension
					})
			.css({
					'position':'fixed',
					'top':top,
					'left':left,
					'background-image':'url('+	this.image+')',
					'background-size':'contain'
					})
			.scrollingParallax({
			    staticSpeed: speed,
			    loopIt : false,
			    staticScrollLimit:false,
			    reverseDirection:true
		});
		// Element hinzufügen
		$('body').append($item)
		x++;
	});
});
