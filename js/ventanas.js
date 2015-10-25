sa="";
function bus(){
 return Departamentostrabajadores.imprimir(Departamentostrabajadores.conEdificio(Acciones.obv("busqueda"),Departamentostrabajadores.unionarre(Empresa.trabajadores(),Empresa.departamentos())))
}

function intercambiar(i,f){
 i.style.visibility = "hidden";
 f.style.visibility = "visible";
}

//-----------------------------------------------------------------------------------------
text1=primer.elemento("label").texto("Edificio");
in1= primer.input().cnombre("a").ctype("text").cplaceholder("Edificio").tipo("redondo").cid("busqueda");
s1=primer.boton("Buscar").tboton("verde").cid("buscar").cp("onclick","intercambiar(co,co2);li1.texto(bus())");

//boton1.addEventListener("click",Acciones.cp,false);

c1= primer.grilla("4").componer([text1]);
c2= primer.grilla("4").componer([in1,s1]);


f1= primer.columna().componer([c1.centrar(),c2.centrar()]);
//f3=primer.columna().componer([c7.centrar(),c8.centrar()]);

co = primer.contenedor().componer([f1]);
//-----------------------------------------------------------------------------------------
 li1=primer.elemento("li").texto("XY");
 li2=primer.elemento("li").texto("ab");

 ol=primer.elemento("ol").componer([li1,li2]);
 c9=primer.grilla("4").componer([ol]);
 f4=primer.columna().componer([c9.centrar()]);

 s2=primer.boton("Volver").tboton("verde").cid("volver").cp("onclick","intercambiar(co2,co)");;
 c10= primer.grilla("2").componer([s2]);
 f5=primer.columna().componer([c10.centrar()]);

 co2 = primer.contenedor().componer([f4,f5]);
 co2.style.visibility = "hidden";
//-----------------------------------------------------------------------------------------
