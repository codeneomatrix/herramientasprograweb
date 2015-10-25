var Departamentos =(function(){


  var filterarr = function(f,entrada){
  var salida=[];
   for(var indice=0; indice<entrada.length; indice++){
    if(f(entrada[indice])){
     salida.push(entrada[indice]);}
  }
  return salida;
 }



  var _filtrar_id= function(iid){
    var id = function(valor){
    return valor["id"]===iid;
    };
    return filterarr(id,Empresa.departamentos())
  };




  var _filtrar_nombre= function(nom){
    var nombr = function(valor){
    return valor["nombre"]===nom;
    };
    return filterarr(nombr,Empresa.departamentos())
  };


  ;

  var _filtrar_edificio= function(edi){
    var edifi = function(valor){
    return valor["edificio"]===edi;
    }
    return filterarr(edifi,Empresa.departamentos())
  };


  var _imprimir = function(x){
    var salida =""
     for(var key in x[0]){
    salida = salida +" "+ key+"      ";
    };
   salida = salida + "\n";
  for(var indice=0; indice<x.length; indice++){
     for(var key in x[indice]){
         salida = salida +"   "+x[indice][key];
     };
    salida = salida + "\n";
  };
   console.log(salida);
  };

  return{
  "imprimir": _imprimir,
  "conID":_filtrar_id,
  "connombre":_filtrar_nombre,
  "conedificio":_filtrar_edificio
  };

})();
