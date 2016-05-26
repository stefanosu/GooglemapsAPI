/// Var map sets the variable
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
          // The var contentString stores info about what the infoWindow will present
	var contentString = '<div id = "content"> ' + '<div id="siteNotice"> ' +
	'</div>' + 
	'<h1 id="bodyContent">' +
            '<p><b>Asmara</b>,The four made them unite" in Tigrinya,is the capital city and <b>largest settlement in Eritrea. </b>, Home to a population of around 649,000 inhabitants ' +
            'it sits at an elevation of 2,325 metres (7,628 ft).  '+
            'The city is located at the tip of an escarpment that is both the northwestern edge of the '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            ' Eritrean highlands and the Great Rift Valley in neighbouring Ethiopia.'+
            'Asmara is situated in Eritreas central Maekel Region.  Asmara is '+
            'known for its well-preserved colonial Italian modernist architecture. '+
           
             ' </p>'+
            '<p>Attribution: Asmara, <a href="https://en.wikipedia.org/wiki/Asmara</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

            	// The infoWindow goes here and displays the var contentString in which the info will be displayed
 		var infowindow = new google.maps.InfoWindow({
 			content: contentString
 		});

 		// The marker is positioned on these coordinates which is Asmara
 		var marker = new google.maps.Marker({
 			position: {lat: 15.3229, lng: 38.9251},
 			map: map,
 			title: 'Asmara'

 		});
 		// When the user clicks the marker and infoWindow opens
 		marker.addListener('click', function() {
 			infowindow.open(map, marker);
 		});
 	}




