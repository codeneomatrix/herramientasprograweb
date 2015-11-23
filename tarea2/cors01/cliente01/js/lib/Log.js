var Log = (function() {
    "use strict";
    
    var _marca_de_tiempo = function() {
        var tiempo = new Date();
        var momento = tiempo.getHours() + ":" + tiempo.getMinutes() + ":" + tiempo.getSeconds() + ":" + tiempo.getMilliseconds();
        return tiempo.toLocaleDateString() + " " + momento;
    };
    
    var _print = function(mensaje) {
        console.log("► " + _marca_de_tiempo());
        console.log(mensaje);
    };
    
    return {
        "print": _print
    };
})();