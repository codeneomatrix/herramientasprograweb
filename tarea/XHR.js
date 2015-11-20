var XHR = (function() {

    var resultados =(function(){
        var resultados=[];  
        function _acumular(dato){
            resultados.push(dato);
        }
        function _imprimirdatos(){
            //console.log(resultados);
            return resultados;
        }
        function _siguiente(f){
            //resultados.push(dato);
            f(resultados);
        }
        return {
            "acumular": _acumular,
            "imprimirdatos":_imprimirdatos,
            "siguiente":_siguiente
        }
})();
    
    var _error_fatal = function(solicitud, xhr, obj_parametros) {
        return function() {
            Log.print("ERROR FATAL" + " | " + solicitud + " " + obj_parametros.url);
        };        
    };
    
    var _detectar_cambios_de_estado = function(xhr, obj_parametros) {
        return function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //Log.print("CASO DE EXITO" + " | " + solicitud + " " + obj_parametros.url);
                resultados.acumular({
                    "estatus": xhr.status,
                    "mensaje": xhr.statusText,
                    "datos": xhr.responseText
                });
                if (resultados.imprimirdatos().length === obj_parametros.urls.length){
                    //Log.print(resultados.imprimirdatos());
                    resultados.siguiente(obj_parametros.en_caso_de_exito);
                }
            }
            if (xhr.readyState === 4 && xhr.status !== 200 && xhr.status !== 0) {
                //Log.print("CASO DE ERROR" + " | " + solicitud + " " + obj_parametros.url);
                resultados.acumular({
                    "estatus": xhr.status,
                    "mensaje": xhr.statusText,
                    "datos": ""
                });
                if (resultados.imprimirdatos().length === obj_parametros.urls.length){
                    //Log.print(resultados.imprimirdatos());
                    resultados.siguiente(obj_parametros.en_caso_de_error);
                }
            }
        };
    };

   
    
    var _get_csv = function(obj_parametros) {
        var solicitud = "GET";
        urls= obj_parametros.urls;
        for(var i = 0; i<urls.length; i++){
            var xhr = new XMLHttpRequest();
            xhr.onerror = _error_fatal(solicitud, xhr, obj_parametros);
            xhr.onreadystatechange = _detectar_cambios_de_estado(xhr, obj_parametros);
            //Log.print("mira: >>>>>>>>><"+resultados.imprimirdatos());
            xhr.open(solicitud, urls[i] + "?r=" + Math.random(), true);
            xhr.send(); 
        }
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
        "put_csv": _put_csv,
        "resultados":resultados
    };
})();