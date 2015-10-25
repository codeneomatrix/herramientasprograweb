var funcional = (function(){

var _mapobj = function(f,obj_entrada){
var obj_salida={};
  for(var llave in obj_entrada){
    obj_salida[llave] = f(obj_entrada[llave]);
  }
  return obj_salida;
}
var _filterobj = function(f,obj_entrada){
var obj_salida={};
  for(var llave in obj_entrada){
  if(f(obj_entrada[llave])){
    obj_salida[llave] = obj_entrada[llave];}
  }
  return obj_salida;
}

var _reduceobj = function(f,valor_inicial,obj_entrada){
var valor_final=valor_inicial;
  for(var llave in obj_entrada){
    valor_final = f(valor_final,obj_entrada[llave]);}
  return valor_final;
}

var _maparr = function(f,entrada){
var salida=[];
  for(var indice=0; indice<entrada.length; indice++){
    salida.push(f(entrada[indice]));}
  return salida;
}

var _filterarr = function(f,entrada){
var salida=[];
   for(var indice=0; indice<entrada.length; indice++){
    if(f(entrada[indice])){
     salida.push(entrada[indice]);}
  }
  return salida;
}

var _reducearr = function(f,valor_inicial,entrada){
var valor_final=valor_inicial;
  for(var indice=0; indice<entrada.length; indice++){
   valor_final = f(valor_final,entrada[indice]);}
  return valor_final;
}


return {
  "mapobj":_mapobj,
  "filterobj":_filterobj,
  "reduceobj":_reduceobj,
  "maparr":_maparr,
  "filterarr":_filterarr,
  "reducearr":_reducearr
}

})();
