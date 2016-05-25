// Var map sets the variable
var map;
// The initMap function starts up the googleMaps 
function initMap(){
		//Starts up the Google maps and places inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map'),{
		//The center and zoom are two required options for every map. 
		//The center sets the positiing of the map and the lat & lng which deomnstrates the location
		center: {lat: 15.3229, lng: 38.9251},
		// The zoom property sets the initial resolution at which to display the map.
		zoom: 8
	});
}