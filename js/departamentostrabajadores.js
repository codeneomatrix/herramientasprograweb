var Departamentostrabajadores =(function(){


  var filterarr = function(f,entrada){
  var salida=[];
   for(var indice=0; indice<entrada.length; indice++){
    if(f(entrada[indice])){
     salida.push(entrada[indice]);}
  }
  return salida;
 }


  var _edificiotrabajador= function(trab){
    var edifi = function(valor){
  return valor["id"]===trab[0]["departamento"]
  };
    sas= filterarr(edifi,Empresa.departamentos())
    return sas;
  };


  var _unionarre= function(arretrab, arredepa){
    salida=[];
     for(var indice=0; indice<arretrab.length; indice++){
    salida[indice]= _union(arretrab[indice],Departamentos.conID(arretrab[indice]["departamento"])[0])
     }
    return salida;
  };

  var _union= function(trab, depa){
    return sali={"trabajador":trab,"departamento":depa}
  };

  var _conEdificio= function(nomed, arrer){
    var nombr = function(valor){
    return valor["departamento"]["edificio"]===nomed;
    };
    return filterarr(nombr,arrer);
  };

  var _porEdificio= function(nomed, arrer){
    var nombr = function(valor){
    return valor["departamento"]===nomed[0]["id"];
    };
    return filterarr(nombr,arrer);
  };

  var _imprimir = function(x){
    var salida =""
     for(var key in x[0]){
       for(var key2 in x[0][key]){
    salida = salida +"\t"+ key2;
       };
    };
   salida = salida + "\n";
  for(var indice=0; indice<x.length; indice++){
     for(var key in x[indice]){
       for(var key2 in x[indice][key]){
         salida = salida +"\t"+x[indice][key][key2];
       };
     };
    salida = salida + "\n";
  };
   console.log(salida);
   return salida
  };

  return{
  "imprimir": _imprimir,
  "unionarre":_unionarre,
  "conEdificio":_conEdificio,
  "porEdificio":_porEdificio,
  "edificiotrabajador":_edificiotrabajador
  };

})();
