
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-20.300219, -70.110836],
    zoom: 17,
    zoomControl: true
});


				
var	nod52c = L.geoJson(nod52c, {	
              	    style: function(feature) {
        switch (feature.properties.id) {
            case 'a': return {color: "yellow"};
            case 'b':   return {color: "green"};
			case 'c':   return {color: "blue"};
			case 'd':   return {color: "orange"};
		    case 'e':   return {color: "brown"};
			case 'g':   return {color: "purple"};
        }
    }

    	
                  
              }).addTo(map);
			  
			  
			  




			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
