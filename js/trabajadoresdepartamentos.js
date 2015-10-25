var Trabajadoresdepartamentos =(function(){


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


  var edifi = function(valor){
  return valor["edificio"]===edificio;
  };

  var _filtrar_edificio= function(edi){
    edificio=edi;
    return filterarr(edifi,Empresa.departamentos())
  };


  var edifi = function(valor){
  return valor["id"]===edificiotra;
  };



  var _trabajadoresporedificio= function(depa){
    var personal = function(valor){
  return valor["departamento"]===depa["id"];
  };

    return filterarr(personal,Empresa.trabajadores())
  };

  var _edificiotrabajador= function(trab){
    edificiotra=trab["departamento"]
    sas= filterarr(edifi,Empresa.departamentos())
    return sas[0]
  };


  var _unionarre= function(arredepa,arretrab){
    salida=[];
     for(var indice=0; indice<arredepa.length; indice++){
    salida[indice]= _union(arredepa[indice],_trabajadoresporedificio(arredepa[indice]))
     }
    return salida;
  };

  var _union= function(edf, trbs){
    return sali={"Edificio":edf,"trabajadores":trbs}
  };

  var _conEdificio= function(edifioo, arredepatrab){
    var edifi2 = function(valor){
  return valor["Edificio"]["edificio"]===edifioo;
  };
    sas= filterarr(edifi2, arredepatrab)
    return sas[0]
  };

  var _imprimir0 = function(x){
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


  var _imprimir = function(x){
    var salida =" "
   salida = salida + "\n";
  for(var indice=0; indice<x.length; indice++){

         for(var key2 in x[indice]["Edificio"]){
         salida = salida +"\t"+key2+":"+ x[indice]["Edificio"][key2]+"\n";
         };


         salida = salida +"\t|"+Trabajadores.datos(x[indice]["trabajadores"]);

    /*  for(var indice2=0; indice2<x[indice]["trabajadores"].length; indice2++){
         salida = salida + "\t|->"
         for(var key3 in x[indice]["trabajadores"][indice2]){
         salida = salida +"\t"+x[indice]["trabajadores"][indice2][key3];
         };
        }; */

    salida = salida + "\n";
       };

   console.log(salida);
  };

  return{
  "conID":_filtrar_id,
  "connombre":_filtrar_nombre,
  "trabajadoresporedificio":_trabajadoresporedificio,
  "unionarre":_unionarre,
  "conEdificio":_conEdificio,
  "imprimir":_imprimir
  };

})();
