s1=primer.boton("Guardar").tboton("verde").cid("hola");
text1=primer.elemento("label").texto("nombre");
in1= primer.input().cnombre("a").ctype("text").cplaceholder("nombre").tipo("redondo");
in2= primer.input().cnombre("b").ctype("text").cplaceholder("apellido").tipo("redondo");
text2=primer.elemento("label").texto("apellido");


c1= primer.grilla("2").componer([text1]);
c2= primer.grilla("2").componer([in1]);

c4= primer.grilla("2").componer([text2]);
c5= primer.grilla("2").componer([in2]);

c7= primer.grilla("2");
c8= primer.grilla("2").componer([s1]);

li1=primer.elemento("li").texto("xy");
li2=primer.elemento("li").texto("ab");

ol=primer.elemento("ol").componer([li1,li2]);
c9=primer.grilla("2").componer([ol]);



f1= primer.columna().componer([c1.centrar(),c2.centrar()]);
f2=primer.columna().componer([c4.centrar(),c5.centrar()]);
f3=primer.columna().componer([c7.centrar(),c8.centrar()]);
f4=primer.columna().componer([c9.centrar()]);


in1= primer.input().cnombre("prueba").ctype("text").cplaceholder("nombre").tipo("redondo");
ck1= primer.checkbox("elemento");
op= primer.option("ja");
op1= primer.option("ja2");
op2= primer.option("ja3");
combo= primer.combobox([op,op1,op2]).cid("risas");
burad= primer.buttonradio("elementoradio");
bf= primer.boton("continuar").tboton("azul").ctype("submit");

fil= primer.elemento("fieldset");

fil.componer([in1,ck1,combo,burad,bf]);

for1= primer.formulario();
for1.componer([fil]);

    it1=primer.itemencabezado("blo1");
    it2=primer.itemencabezado("blo2");
    it3=primer.itemencabezado("blo3");
    it4=primer.itemencabezado("blo4");

    itc= primer.itemcuerpo("1");
    itc1=primer.itemcuerpo("2");
    itc2=primer.itemcuerpo("3");
    itc3=primer.itemcuerpo("4");

    it2c=primer.itemcuerpo("4");
    it2c1=primer.itemcuerpo("5");
    it2c2=primer.itemcuerpo("6");
    it2c3=primer.itemcuerpo("7");

    tabla1=primer.construirtabla([it1,it2,it3,it4],[[itc,itc1,itc2,itc3], [it2c,it2c1,it2c2,it2c3]]);

itm1=primer.itemlista("ele1");
itm2=primer.itemlista("ele2");
itm3=primer.itemlista("ele3");
itm4=primer.itemlista("ele4");
lista= primer.lista([itm1,itm2]);
slista=primer.sublista("sublista",[itm3,itm4]);
encam= primer.encabezadomenu("","");
menu1 =primer.menu();

lista.componer([slista]);
menu1.componer([encam,lista]);



c = primer.contenedor().componer([f1,f2,f3,f4]);


primer.agregar("ventana",[c,for1,menu1]);
