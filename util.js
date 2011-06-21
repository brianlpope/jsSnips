// create the root namespace object
window.bp = window.bp || {};

// create the util namespace object since this has objects which are used
// for base functionality
bp.util = bp.util || {};

// usage: bp.util.namespace.create(<namespace>);
// example: bp.util.namespace.create('Bravo.Tango.Charlie');
// revealing module pattern
if(typeof bp.util.namespace === 'undefined') {
	bp.util.namespace = (function() {
		// private function used to build namespace objects
		// fullNs parameter expects a string that is period-delimited. e.g., 'One.Two.Three'
		var buildFromString = function (fullNs) {
			// I find separate vars easier to read than comma-delimited variables with one var
			var segments = fullNs.split('.');
			var segCount = segments.length;  // such a small loop that this is not really needed
			var nsObj = window; // the root object is global and belongs to window
			
			// loop through each segment and add it as a child of the previous segment
			for(var segLen=0; segLen < segCount; segLen++) {
				var seg = segments[segLen];
				nsObj[seg] = nsObj[seg] || {};
				nsObj = nsObj[seg];
			}
		};
		// private method for creating one or more namespace objects based on the ns argument
		// ns parameter expects a string that is period-delimited. e.g., 'One.Two.Three'
		var createNS = function (ns) {
			// validate the input before proceeding
			if(typeof ns === 'string') {
				buildFromString(ns);
			}
		};
		
		return {
			create: createNS
		};
	})();

}