var Aplicacion = (function() {
    var _main = function() {
        Log.print("◼◼◼◼◼ Iniciando...");
        XHR.CSV.get({
          "urls": [
            "http://127.0.0.1:9001/csv/nombres.csv",
            "http://127.0.0.1:9002/csv/nombres.csv",
            "http://127.0.0.1:9003/csv/nombres.csv"
          ],
          "despues": function(resultados) {
              Log.print("◼◼◼◼◼ Resultados");
              console.log(resultados);
          }
        });
        
        Log.print("◼◼◼◼◼ Terminando...");
    };
    
    return {
        "main": _main
    };
})();