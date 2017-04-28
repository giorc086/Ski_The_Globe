(function() {
	$.ajax({
		method: 'GET',
		url: 'http://localhost:8080/api/resort/25'
	})
		.done(function(response) {
			console.log(response)
			$('#lifts').text(response.resortSnowreport.report.liftsReport.liftsOpen + '/' + response.resortTerrain.lifts.numLifts)
			$('#longestRun').text(response.resortTerrain.terrain.longestRun + ' miles')
			$('#seasonDates').text('Closing Date: ' + response.resortTerrain.facts.projectedClosingDate + 'Opening Date: ' + response.resortTerrain.facts.projectedOpeningDate)
			$('#surfaceTop').text(response.resortSnowreport.report.snowQuality.onSlope.upperDepth + 'inches')
			$('#surfaceBottom').text(response.resortSnowreport.report.snowQuality.onSlope.lowerDepth + 'inches')
		})
// header
	function sticky_relocate() {
		var window_top = $(window).scrollTop()
		var div_top = $('#sticky-anchor').offset().top
		if (window_top > div_top) {
			$('#sticky').addClass('stick')
			$('#sticky-anchor').height($('#sticky').outerHeight())
		} else {
			$('#sticky').removeClass('stick')
			$('#sticky-anchor').height(0)
		}
	}

	$(function() {
		$(window).scroll(sticky_relocate)
		sticky_relocate()
	})

	var dir = 1
	var MIN_TOP = 200
	var MAX_TOP = 350

	function autoscroll() {
		var window_top = $(window).scrollTop() + dir
		if (window_top >= MAX_TOP) {
				window_top = MAX_TOP
			dir = -1
		} else if (window_top <= MIN_TOP) {
				window_top = MIN_TOP
			dir = 1
		}
		$(window).scrollTop(window_top)
		window.setTimeout(autoscroll, 100)
	}
// End of header 

 // autocomplete input field
	var availableTags = [
		"Aspen",
		"Vail",
		"Keystone",
		"Breckenridge",
		"Beaver Creek",
		"Arapahoe Basin",
		"Copper Mountain",
		"Monarch Mountain",
		"Loveland",
		"Eldora",
		"Purgatory",
		"Crested Blue Mountain",
		"Howelsen Hill",
		"Powderhorn",
		"Ski Granby Ranch",
		"Cooper",
		"Steamboat",
		"Sunlight",
		"Telluride",
		"Winter Park",
		"Wolf Creek",
		"Silverton Mountain",
		"Echo Mountain"

	]
	$(".tags").autocomplete({
		source: availableTags
	})
 // end of autocomplete
})()