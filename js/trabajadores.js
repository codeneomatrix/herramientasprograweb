var Trabajadores =(function(){

  var f = function(valor){
  return valor["sexo"]==="f";
  };

   var gh = function(valor){
  return valor["sexo"]==="m";
  };



  var filterarr = function(f,entrada){
  var salida=[];
   for(var indice=0; indice<entrada.length; indice++){
    if(f(entrada[indice])){
     salida.push(entrada[indice]);}
  }
  return salida;
 }

  var _filtrar_mujeres = function(x){
    return filterarr(f,x)
  };


  var _filtrar_id= function(iid){
    var id = function(valor){
      return valor["id"]===iid;
    };
    return filterarr(id,Empresa.trabajadores())
  };




   var _filtrar_nombre= function(nom){
     var nombr = function(valor){
    return valor["nombre"]===nom;
    };
    return filterarr(nombr,Empresa.trabajadores())
  };



  var _filtrar_apellidopat= function(appat){
    var paterno = function(valor){
    return valor["apellido"]["paterno"]===appat;
    };
    return filterarr(paterno,Empresa.trabajadores())
  };



  var _filtrar_apellidomat= function(apmat){
    var materno = function(valor){
  return valor["apellido"]["materno"]===apmat;
  };
    return filterarr(materno,Empresa.trabajadores())
  };

  var _filtrar_hombres= function(x){
    return filterarr(gh,x)
  };

  var _imprimir = function(x){
  salida="";
     for(var key in x[0]){
    salida = salida +"   "+ key;
    };
   salida = salida + "\n";
  for(var indice=0; indice<x.length; indice++){
     for(var key in x[indice]){
       if( key === "apellido"){
         salida = salida +"   "+x[indice][key]["paterno"];
         salida = salida +"   "+x[indice][key]["materno"];
       }else{
         salida = salida +"   "+x[indice][key];
       }

     };
    salida = salida + "\n";
  };
   console.log(salida);
  };



  var _datos = function(x){
    var salida ="\n#...............................#\n";
  for(var indice=0; indice<x.length; indice++){
    salida=salida+"->"
     for(var key in x[indice]){
       if( key === "apellido"){
         salida = salida +"   "+key+"paterno : "+x[indice][key]["paterno"];
         salida = salida +"   "+key+"materno : "+x[indice][key]["materno"];
       }else{
         salida = salida +"   "+key+": "+x[indice][key];
       }

     };
    salida = salida + "\t\n";
  };
   return salida;
  };


  return{
  "imprimir_en_pantalla": _imprimir,
  "datos": _datos,
  "filtrar_mujeres": _filtrar_mujeres,
  "filtrar_hombres": _filtrar_hombres,
  "conID":_filtrar_id,
  "connombre":_filtrar_nombre,
  "conapellidopaterno":_filtrar_apellidopat,
  "conapellidomaterno":_filtrar_apellidomat
  };

})();
