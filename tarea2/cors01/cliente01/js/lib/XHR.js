var XHR = (function() {
    "use strict";
    return {
        "CSV": undefined
    }
})();

XHR.CSV = (function() {
    "use strict";
    var _error_fatal = function(xhr, solicitud, url, gestor_de_resultados) {
        return function() {
            Log.print("☠ " + solicitud + " " + url);
            gestor_de_resultados.guardar_irresoluble({
                        "estatus": 0,
                        "mensaje": "Fatal",
                        "datos": "",
                        "url": url
            });
        };
    };
    
    var _detectar_cambios_de_estado = function(xhr, solicitud, url, gestor_de_resultados) {
        return function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status <= 299) {
                    Log.print("✔ " + solicitud + " " + url);
                    gestor_de_resultados.guardar_exito({
                        "estatus": xhr.status,
                        "mensaje": xhr.statusText,
                        "datos": xhr.responseText,
                        "url": url
                    });
                }
                if ((xhr.status >= 100 && xhr.status <= 199) || (xhr.status >= 300 && xhr.status <= 599)) {
                    Log.print("✘ " + solicitud + " " + url);
                    gestor_de_resultados.guardar_error({
                        "estatus": xhr.status,
                        "mensaje": xhr.statusText,
                        "datos": "",
                        "url": url
                    });
                }
            }
        };
    };
    
    var _get = function(obj_parametros) {
        var _gestor_de_resultados = (function(obj_parametros) {
            var _resultados = {
                "exitos": [],
                "errores": [],
                "irresolubles": []
            };
            var _guardar_exito = function(resultado) {
                _resultados.exitos.push(resultado);
                _continuar();
            };
            var _guardar_error = function(resultado) {
                _resultados.errores.push(resultado);
                _continuar();
            };
            var _guardar_irresoluble = function(resultado) {
                _resultados.irresolubles.push(resultado);
                _continuar();
            };
            var _continuar = function() {
                Log.print("▫▫▫▫▫ ¿Continuamos?... ");
                var _cantidad_de_resultados = _resultados.exitos.length + _resultados.errores.length + _resultados.irresolubles.length;
                if (obj_parametros.urls.length === _cantidad_de_resultados) {
                    Log.print("▫▫▫▫▫ Continuamos... ");
                    obj_parametros.despues(_resultados);
                }
            };
            return {
                "guardar_exito": _guardar_exito,
                "guardar_error": _guardar_error,
                "guardar_irresoluble": _guardar_irresoluble
            };
        })(obj_parametros);
        var _solicitud = "GET";
        
        for (var i = 0; i < obj_parametros.urls.length; i++) {
            var _xhr = new XMLHttpRequest();
            _xhr.onerror =                           _error_fatal(_xhr, _solicitud, obj_parametros.urls[i], _gestor_de_resultados);
            _xhr.onreadystatechange = _detectar_cambios_de_estado(_xhr, _solicitud, obj_parametros.urls[i], _gestor_de_resultados);
            _xhr.open(_solicitud, obj_parametros.urls[i] + "?r=" + Math.random(), true);
            _xhr.send();
        }
    };
    
    return {
        "get": _get
    };
})();