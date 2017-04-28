// enable the pointer events only on click;
 $('#map_canvas').addClass('scrolloff') // set the pointer events to none on doc ready
 $('#map_wrapper').on('click', function() {
 	$('#map_canvas').removeClass('scrolloff') // set the pointer events true on click
 })

 $("#map_canvas").mouseleave(function() {
 	$('#map_canvas').addClass('scrolloff') // set the pointer events to none when mouse leaves the map area
 })

//resets form input once one location is clicked 
var form = document.getElementById("myForm")
form.reset()

 //autocomplete input field
 $(function() {
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
 })
 //end of autocomplete

 // MAP CODE
 $(function() {
 	// Asynchronously Load the map API 
 	var script = document.createElement('script');
 	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDaidSgjFzj8MV98T7-PFBwvnDwS56c4e0&callback=initialize";
 	document.body.appendChild(script); //add map to body tag in html
 });

 function initialize() {
 	var map;
 	var bounds = new google.maps.LatLngBounds();
 	var mapOptions = {
 		mapTypeId: 'terrain'
 	};

 	// Display a map on the page
 	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
 	map.setTilt(45);

 	// Multiple Markers
 	var markers = [
 		['Aspen / Snowmass', 39.190921918, -106.821099395, "http://localhost:8080/aspen.html"],
 		['Vail', 39.6403, -106.3742],
 		['Keystone', 39.5792, -105.9347],
 		['Breckenridge', 39.4817, -106.0384],
 		['Beaver Creek', 39.6042, -106.5165, "http://localhost:8080/Beaver%20Creek.html"],
 		['Arapahoe Basin', 39.6423, -105.8717],
 		['Copper Mountain', 39.5014, -106.1516],
 		['Monarch Mountain', 38.5114, -106.3330],
 		['Loveland', 39.6800, -105.8979],
 		['Eldora', 39.9372, -105.5827],
 		['Purgatory', 37.6303, -107.8140, "http://localhost:8080/Purgatory.html"],
 		['Echo', 39.74137, -105.512217],
 		['Silverton',37.826, -107.6733],
 		['Wolf Creek', 37.474449, -106.793118],
 		['Winter Park', 39.86462264, -105.7785112],
 		['Telluride', 37.937494, -107.812285],
 		['Sunlight', 39.401048, -107.340781],
 		['Steamboat', 40.46051953, -106.7902279],
 		['Cooper', 39.253288, -106.291331],
 		['Granby', 40.04861, -105.908273],
 		['Powderhorn', 39.070036, -108.150964],
 		['Howelsen', 40.484174, -106.836425],
 		['Crested Butte', 38.89235721, -106.9586235],


 	];

 	// Display multiple markers on a map
 	var infoWindow = new google.maps.InfoWindow(),
 		marker, i;

 	// Loop through our array of markers & place each one on the map  
 	for (i = 0; i < markers.length; i++) {
 		// console.log(infoWindowContent);
 		//     
 		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
 		bounds.extend(position);
 		marker = new google.maps.Marker({
 			position: position,
 			map: map,
 			title: markers[i][0],
 			url: markers[i][3]
 		});
 		// Allow each marker to have an info window    
 		google.maps.event.addListener(marker, 'click', (function(marker, i) {

 			var infoWindowContent = '<a href="' + markers[i][3] + '">' + markers[i][0] + '</a>';

 			return function() {


 				infoWindow.setContent(infoWindowContent);
 				infoWindow.open(map, marker);
 				// window.location.href = this.url;
 			}
 		})(marker, i));

 		// Automatically center the map fitting all markers on the screen
 		map.fitBounds(bounds);
 	}

 	// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
 	var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
 		this.setZoom(7);
 		google.maps.event.removeListener(boundsListener);
 	});
 }
 //END OF MAP CODE
