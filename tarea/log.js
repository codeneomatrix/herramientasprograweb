var Log = (function() {
	var _marca_de_tiempo = function() {
        var tiempo = new Date();
        return tiempo.toLocaleDateString() + " " + tiempo.toLocaleTimeString();
    };
    
    var _print = function(mensaje) {
        console.log(_marca_de_tiempo() + " | " + mensaje);
    };

    return {
		"print":_print
    };
})();