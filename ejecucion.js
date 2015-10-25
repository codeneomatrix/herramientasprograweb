s1=pure.boton("rojo").tboton("verde").cid("hola");
s2= pure.boton("f ");
i= pure.i().cclase("fa fa-circle-o-notch fa-spin");
s2.componer([i]);

in1= pure.input().cnombre("prueba").ctype("text").cplaceholder("nombre").tipo("redondo");
ck1= pure.checkbox("elemento");
op= pure.option("ja");
op1= pure.option("ja2");
op2= pure.option("ja3");
combo= pure.combobox([op,op1,op2]).cid("risas");
burad= pure.buttonradio("elementoradio");
bf= pure.boton("continuar").tboton("azul").ctype("submit");

fil= pure.elemento("fieldset");
l=pure.legend("Super formulario");


fil.componer([l,in1,ck1,combo,burad,bf]);

for1= pure.formulario().tipo("stack");
for1.componer([fil]);

    it1=pure.itemencabezado("blo1");
    it2=pure.itemencabezado("blo2");
    it3=pure.itemencabezado("blo3");
    it4=pure.itemencabezado("blo4");

    itc= pure.itemcuerpo("1");
    itc1=pure.itemcuerpo("2");
    itc2=pure.itemcuerpo("3");
    itc3=pure.itemcuerpo("4");

    it2c=pure.itemcuerpo("4");
    it2c1=pure.itemcuerpo("5");
    it2c2=pure.itemcuerpo("6");
    it2c3=pure.itemcuerpo("7");

    tabla1=pure.construirtabla([it1,it2,it3,it4],[[itc,itc1,itc2,itc3], [it2c,it2c1,it2c2,it2c3]]);

itm1=pure.itemlista("ele1");
itm2=pure.itemlista("ele2");
itm3=pure.itemlista("ele3");
itm4=pure.itemlista("ele4");
lista= pure.lista([itm1,itm2]);
slista=pure.sublista("sublista",[itm3,itm4]);
encam= pure.encabezadomenu("","");
menu1 =pure.menu();

lista.componer([slista]);
menu1.componer([encam,lista]);

g0=pure.grilla("5","5");

g1= pure.grilla("2");
g2= pure.grilla("2");
c = pure.contenedor();

g1.componer([s1,for1]);
g2.componer([s2,tabla1,menu1]);
g0.componer([g1,g2]);
c.componer([g0]);


pure.agregar("ventana",[c]);
