var maparr = function(f,entrada){
var salida=[];
  for(var indice=0; indice<entrada.length; indice++){
    salida.push(f(entrada[indice]));}
  return salida;
}

 var g = function(valor){
  return !valor;
 }

 var ed = function(valor){
  return valor>18 && 120>valor;
 }

 QUnit.test("pruebas de map",function(assert){
 assert.deepEqual(maparr( g, [true,false,false,true]),[false,true,true,false]);

 assert.deepEqual(maparr( g,[true,false]),[false,true]);

 assert.deepEqual(maparr( g, []),[]);

 assert.deepEqual(maparr( g, [false]),[true]);

 });

QUnit.test("pruebas de edad",function(assert){
  assert.deepEqual(maparr( ed,[-3, 10, 20, -5, 37, 1000] ),[false,false,true,false,true,false]);
 });


var filterarr = function(f,entrada){
var salida=[];
   for(var indice=0; indice<entrada.length; indice++){
    if(f(entrada[indice])){
     salida.push(entrada[indice]);}
  }
  return salida;
}

var promedioarr = function(valor){
  var total=0;
  console.log(valor)
for(var indice=0; indice<valor.length; indice++){
    total+=valor[indice];}
  console.log(total);
  var sali = total/(valor.length);
return sali;
}

QUnit.test("pruebas de filter",function(assert){
  assert.deepEqual(filterarr( function(valor){
  return valor;
  }
    ,[true,false,false,true] ),[true,true]);

   assert.deepEqual(filterarr( function(valor){
  return (valor%2)===0;
  }
    ,[1,2,3,4,5,6] ),[2,4,6]);

  assert.deepEqual(filterarr( function(valor){
  return (valor%2)===0;
  }
    ,[-6,-5,-4,-3,-2,-1] ),[-6,-4,-2]);

  assert.deepEqual(filterarr( function(valor){
  return (valor.length)===2;
  }
    ,[[1,2,3],[1,2],[0],[6,7]]),[[1,2],[6,7]]);

  assert.deepEqual(filterarr( function(valor){
  return (valor["calificacion"])>=70 && (valor["calificacion"])<=100;
  }
    ,[{"materia":"a11","calificacion":70},
      {"materia":"634","calificacion":0},
      {"materia":"c74","calificacion":80}]),

    [{"materia":"a11","calificacion":70},
     {"materia":"c74","calificacion":80}]);

  assert.deepEqual(filterarr( function(valor){
  return (valor["sexo"])==="f";
  }
    ,[{"id":"t24","nombre":"...","sexo":"m"},
      {"id":"t73","nombre":"...","sexo":"f"},
     {"id":"t91","nombre":"...","sexo":"f"}]),

    [{"id":"t73","nombre":"...","sexo":"f"},
    {"id":"t91","nombre":"...","sexo":"f"}]);

  assert.deepEqual(filterarr( function(valor){
  return (valor["sexo"])==="m";
  }
    ,[{"id":"t24","nombre":"...","sexo":"m"},
      {"id":"t73","nombre":"...","sexo":"f"},
      {"id":"t91","nombre":"...","sexo":"f"}]),

      [{"id":"t24","nombre":"...","sexo":"m"}]);


  assert.deepEqual(

              filterarr( function(valor){
              return (valor["promedio"])>=70;
              },
              maparr( function(valor){
                salid={};
                for(var key in valor){
                salid[key]= valor[key];
                }
                  salid["promedio"]= promedioarr(salid["calificaciones"]);
                return salid;
                }
                  ,[{"id":"m12","calificaciones":[0,0,100]},
                    {"id":"m72","calificaciones":[90,90,90]},
                    {"id":"m45","calificaciones":[80,80,80]}])
              )
    ,

      [ {"id":"m72","calificaciones":[90,90,90],"promedio":90},
        {"id":"m45","calificaciones":[80,80,80],"promedio":80}]);


});





filterarr( function(valor){
return (valor["promedio"])>=70;
},
maparr( function(valor){
  salid={};
  for(var key in valor){
  salid[key]= valor[key];
  }
    salid["promedio"]= promedioarr(salid["calificaciones"]);
  return salid;
  }
    ,[{"id":"m12","calificaciones":[0,0,100]},
      {"id":"m72","calificaciones":[90,90,90]},
      {"id":"m45","calificaciones":[80,80,80]}])
);









function estaenobj(obj, propiedad, valor){
     return obj[propiedad] === valor;
}

function estamateenarr(arr, propiedad, valor){
  var ti=false;
  for(var indice=0; indice<(arr.length); indice++){
    ti = estaenobj(arr[indice], propiedad, valor);
  }
     return ti;
}

function f(arreglo_de_alumnos,comob, materia){
  return filterarr( function(valor){
  return estamateenarr(valor["materias"], comob, materia);
} , arreglo_de_alumnos );
  }

function alumnos(){
return [{"id":"m34","materias":[{"id":"m34","nombre":"Español","calificaciones":[0,0,100]},{"id":"m64","nombre":"mate","calificaciones":[0,0,100]}]},
      {"id":"a75","materias":[{"id":"m64","nombre":"mate","calificaciones":[90,90,90]},{"id":"m73","nombre":"geogra","calificaciones":[90,90,90]}]},
      {"id":"m12","materias":[{"id":"m94","nombre":"jjj","calificaciones":[90,90,90]},{"id":"m50","nombre":"nmate","calificaciones":[90,90,90]}]}];
}

f( alumnos() ,"nombre", "geogra");


QUnit.test("pruebas de f",function(assert){

  assert.deepEqual( f( alumnos() ,"nombre", "geogra")
,[{"id":"a75","materias":[{"id":"m64","nombre":"mate"},{"id":"m73","nombre":"geogra"}]}]);

 });



/*imprime el nombre de los alumnos que tienen un promedio mayor o igual a 70*/

filterarr( function(valor){
  var sp=false;
  for(var indice=0; indice<(valor["materias"].length); indice++){
   sp= (valor["materias"][indice]["promedio"])>=70;
  }
return sp;
},
maparr( function(valor){
  salid={};
  for(var key in valor){
  salid[key]= valor[key];
  }
   for(var indice=0; indice<(salid["materias"].length); indice++){
    console.log(salid["materias"][indice]["calificaciones"]);
    salid["materias"][indice]["promedio"]= promedioarr(salid["materias"][indice]["calificaciones"]);
  }

  return salid;
  }
    , f( alumnos() ,"nombre", "geogra")
));




/*..........................................................................*/


function reducearr (f,valor_inicial,entrada){
var valor_final=valor_inicial;
  for(var indice=0; indice<entrada.length; indice++){
   valor_final = f(valor_final,entrada[indice]);}
  return valor_final;
}




reducearr(function(va,vb){
return va+vb;
},
  0, [70,0,80,93,75]
);


function lamda(objeto, numero){
  if(numero%2 ===0){
  objeto.pares.push(numero);
  }else{
  objeto.impares.push(numero);
  }
  return objeto;
}


reducearr(lamda,{"pares":[],"impares":[]},[1,2,3,4,5]);

function lamda2(objeto, numero){

  objeto.sumatoria += numero;

  objeto.cantidad += 1;

  return objeto;
}

reducearr(lamda2,{"sumatoria":0,"cantidad":0},[2,3,4,5]);




function existe (parametros){
for(var indice=0; indice<parametros.en.length; indice++){
  if(parametros.en[indice] === parametros.el){
    return true;
  }
}
}


existe({"en": [3,4,5,6,7,8,9],"el": 8});

function si_existe (parametros){
for(var indice=0; indice<parametros.en.length; indice++){
  if(parametros.en[indice] === parametros.el){
    return parametros.entonces(parametros.el);
  }
}
  return parametros.si_no(parametros.en);
}


function duplicar(numero){
return 2*numero;
}


si_existe({"el":4, "en":[3,4,5,6,7,8,9], "entonces": duplicar, "si_no": lamda});

function existe_dentro(parametros){
for(var indice=0; indice<parametros.de.length; indice++){
  for(var j=0; j<parametros.de[indice].length; j++){
    if(parametros.de[indice][j] === parametros.el){
    return true;
  }
}
}
  return false;
}


  existe_dentro({"de":[[1,2,3],[],[4,5],[6]],"el":4});


function cuantas_veces_existe(parametros){
var total=0;
for (var i=0; i<parametros.en.length;i++){
if(parametros.en[i]===parametros.el){
total += 1;
}
}
  return total;
}

cuantas_veces_existe({
  "en":[3,4,5,4,9,7,5,4],
  "el":4
});


