var XHR = (function() {
    var _marca_de_tiempo = function() {
        var tiempo = new Date();
        return tiempo.toLocaleDateString() + " " + tiempo.toLocaleTimeString();
    };
    
    var _log = function(mensaje) {
        console.log(_marca_de_tiempo() + " | " + mensaje);
    };
    
    var _error_fatal = function(solicitud, xhr, obj_parametros) {
        return function() {
            _log("ERROR FATAL" + " | " + solicitud + " " + obj_parametros.url);
        };        
    };
    
    var _detectar_cambios_de_estado = function(solicitud, xhr, obj_parametros) {
        return function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                _log("CASO DE EXITO" + " | " + solicitud + " " + obj_parametros.url);
                obj_parametros.en_caso_de_exito({
                    "estatus": xhr.status,
                    "mensaje": xhr.statusText,
                    "datos": xhr.responseText
                });
            }
            if (xhr.readyState === 4 && xhr.status !== 200 && xhr.status !== 0) {
                _log("CASO DE ERROR" + " | " + solicitud + " " + obj_parametros.url);
                obj_parametros.en_caso_de_error({
                    "estatus": xhr.status,
                    "mensaje": xhr.statusText,
                    "datos": ""
                });
            }
        };
    };
    
    var _get_csv = function(obj_parametros) {
        var solicitud = "GET";
        var xhr = new XMLHttpRequest();
        xhr.onerror = _error_fatal(solicitud, xhr, obj_parametros);
        xhr.onreadystatechange = _detectar_cambios_de_estado(solicitud, xhr, obj_parametros);
        xhr.open(solicitud, obj_parametros.url + "?r=" + Math.random(), true);
        xhr.send();
    };
    
    var _head_csv = function(obj_parametros) {
        var solicitud = "HEAD";
        var xhr = new XMLHttpRequest();
        xhr.onerror = _error_fatal(solicitud, xhr, obj_parametros);
        xhr.onreadystatechange = _detectar_cambios_de_estado(solicitud, xhr, obj_parametros);
        xhr.open(solicitud, obj_parametros.url + "?r=" + Math.random(), true);
        xhr.send();
    };
    
    var _delete_csv = function(obj_parametros) {
        var solicitud = "DELETE";
        var xhr = new XMLHttpRequest();
        xhr.onerror = _error_fatal(solicitud, xhr, obj_parametros);
        xhr.onreadystatechange = _detectar_cambios_de_estado(solicitud, xhr, obj_parametros);
        xhr.open(solicitud, obj_parametros.url + "?r=" + Math.random(), true);
        xhr.send();
    };
    
    var _post_csv = function(obj_parametros) {
        var solicitud = "POST";
        var xhr = new XMLHttpRequest();
        xhr.onerror = _error_fatal(solicitud, xhr, obj_parametros);
        xhr.onreadystatechange = _detectar_cambios_de_estado(solicitud, xhr, obj_parametros);
        xhr.open(solicitud, obj_parametros.url + "?r=" + Math.random(), true);
        xhr.send(obj_parametros.datos);
    };
    
    var _put_csv = function(obj_parametros) {
        var solicitud = "PUT";
        var xhr = new XMLHttpRequest();
        xhr.onerror = _error_fatal(solicitud, xhr, obj_parametros);
        xhr.onreadystatechange = _detectar_cambios_de_estado(solicitud, xhr, obj_parametros);
        xhr.open(solicitud, obj_parametros.url + "?r=" + Math.random(), true);
        xhr.send(obj_parametros.datos);
    };
    
    return {
        "get_csv": _get_csv,
        "head_csv": _head_csv,
        "delete_csv": _delete_csv,
        "post_csv": _post_csv,
        "put_csv": _put_csv
    };
})();