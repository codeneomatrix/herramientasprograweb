var doom= (function(){
   function _id (ide){
    var elemento = document.getElementById(ide);
      var arr_s=[];
      if(elemento===null){
      return arr_s;
      }
      arr_s.push(elemento);
      return arr_s;
  };

  function _etiqueta(eti){
    var elementos = document.getElementsByTagName(eti);
    var arr_s=[];
      for(var i=0; i<elementos.length; i++){
        arr_s.push(elementos[i]);
      }
      return arr_s;
  };

  return{
   "id": _id,
    "etiqueta":_etiqueta
  };

})();
