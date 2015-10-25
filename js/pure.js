var pure= (function(){

  function _i(){
	  	var i = _elemento("i")
      return i;
   }

  function _agregar(p,e){
   var v = doom.id(p)[0];
   var ad = function(elemen){
      v.appendChild(elemen);
   };
   funcional.maparr(ad, e)
  };


  function _boton(m){
    var boton = _elemento('button').cclase("pure-button");
    boton.textContent=m || "soy button";

    boton.tboton= function(x){
    var tb = "pure-button";
    var botones = {
        "activo":      " pure-button-active",
        "primario":    " pure-button-primary",
        "desactivado": " pure-button-disabled",
        "verde":       " button-success ",
        "rojo": " button-error ",
        "naranja":     " button-warning ",
        "azul": " button-secondary ",
        "xchico":      " button-xsmall ",
        "chico":       " button-small ",
        "grande":      " button-large ",
        "xgrande":     " button-xlarge "
      }
    if(botones[x] !== undefined) tb += botones[x];
    boton.cclase(tb);
    return boton;
    }
    return boton;
  }

  function _imagen(){

  	  var imagen = _elemento('img').cclase("pure-img");

      imagen.csrc= function(u){
        var fuente = u || "...";
        imagen.src=fuente;
        return imagen;
      }

  	  return imagen;
  }

  function _grilla(n){
    var ac =  _elemento("div");
    var i= n || "5";
    //var f= v || "1";
	  ac.cclase("pure-u-"+i+"-5 pure-u-md-"+i+"-5");

	  return ac;
  }

  function _grilla24(n){
    var ac =  _elemento("div");
    var i= n || "24";
    //var f= v || "1";
	  ac.cclase("pure-u-"+i+"-24 pure-u-md-"+i+"-24");

	  return ac;
  }

  function _contenedor(){
    var conten =  _elemento("div").cclase("pure-g");
	  return conten;
  }

  function _elemento(e){
    var el =  document.createElement(e);

      el.componer= function(e){
         var ad = function(elemen){
            el.appendChild(elemen);
         };
         funcional.maparr(ad, e)
         return el;
      };
      el.cid= function(id){
        el.setAttribute("id",id);
        return el;
      }
      el.texto= function(text){
        el.textContent=text;
        return el;
      }
      el.cnombre= function(id){
        el.setAttribute("name",id);
        return el;
      }
      el.ctype= function(id){
        el.setAttribute("type",id);
        return el;
      }
      el.cclase= function(id){
        el.setAttribute("class",id);
        return el;
      }
      el.chref= function(id){
        el.setAttribute("href",id);
        return el;
      }
      el.cp= function(pr,v){
        el.setAttribute(pr,v);
        return el;
      }

	  return el;
  };

  function _input(){
    var inpu =  _elemento("input");

    inpu.cplaceholder= function(id){
      inpu.setAttribute("placeholder",id);
      return inpu;
    }

    inpu.tipo= function(x){
      forma= "pure-input-1-2";
      if(x==="redondo") forma= "pure-input-rounded";
      inpu.cclase(forma);
      return inpu;
    };

    inpu.cnombre("prueba");
    inpu.ctype("text");
    inpu.tipo();
    inpu.cplaceholder("prueba");

	  return inpu;
  };

  function _checkbox(texto){

    var lab= _elemento("label").cclase("pure-checkbox");

    var inp1= _elemento("input").ctype("checkbox");
    inp1.textContent=texto || "prueba";

    lab.componer([inp1])

	  return lab;
  }

  function _buttonradio(texto){
    mensaje=texto || "prueba";

    br= _elemento("label").cclase("pure-radio");
    inp1= _elemento("input").cclase("optionsRadios").ctype("radio");
    inp1.textContent=mensaje;
    br.componer([inp1])

	  return br;
  }

  function _formulario(){
    var form = _elemento("form");
    form.tipo= function(x){
      var tb = "pure-form";
      var formularios = {
          "stack":      " pure-form-stacked",
          "alineado":    " pure-form pure-form-aligned",
      }
      if(formularios[x] !== undefined) tb +=formularios[x];
      form.cclase(tb);
      return form;
    }

    form.cclase("pure-form");
    return form;
  }
  function _legend(m){
    var mensaje = m || " ";
    var l=_elemento("legend");
    l.textContent=mensaje;
    return l;
  }


  function _combobox(arrop){
    select= _elemento("select");
    select.componer(arrop)
	  return select;
  }

  function _option(conte){
    option= _elemento("option");
    option.textContent=conte
    return option;
  }

  function _tabla(){
    var tb = "pure-table";
    var tabla = _elemento('table');
    tabla.cclase(tb);

    tabla.ttabla= function(x){
      var tb = "pure-table";
      var tablas = {
         "bordes":      " pure-table-bordered",
         "horizontal":    " pure-table-horizontal"
      }
      if(tablas[x] !== undefined) tb += tablas[x];
      tabla.cclase(tb);
      return tabla
    }
    return tabla
  };

  function _encabezadotabla(arr){
    th= _elemento("thead");
    tr= _elemento("tr");
    tr.componer(arr);
    th.componer([tr])
    return th
  };
  function _itemencabezado(d){
    da= d || "ejemplo";
    th= _elemento("th");
    th.textContent=da
    return th
  };

  function _cuerpotabla(arr){
    th= _elemento("tbody");
    th.componer(arr)
    return th
  };
  function _agruparcuerpo(arr){

    tr= _elemento("tr")
    tr.tcuerpo=function(tipo){
      ti=""
      if(tipo==="gris") ti="pure-table-odd"
      tr.cclase(ti);
    }
    tr.componer(arr)
    return tr
  };
  function _itemcuerpo(d){
    da= d || "ejemplo";
    th= _elemento("td");
    th.textContent=da
    return th
  };

  function _construirtabla(arr1,arrarr2,ttbl,agr){

    function rar (arrr){
      return _agruparcuerpo(arrr);
    }

    p2= funcional.maparr(rar, arrarr2);
    ct=_cuerpotabla(p2);
    ent=_encabezadotabla(arr1);
    tabla1=_tabla().cid(ttbl);
    tabla1.componer([ent,ct]);
    return tabla1
  }

  function _menu(x){
    var tb = "pure-menu custom-restricted-width";
    var menus = {
       "vertical":    "pure-menu custom-restricted-width",
       "horizontal":  "pure-menu pure-menu-horizontal",
       "hscroll":  "pure-menu pure-menu-horizontal pure-menu-scrollable",
       "vscroll":  "pure-menu pure-menu-scrollable custom-restricted"
    }
    var menu = _elemento('div');
    if(menus[x] !== undefined) tb = menus[x];
    menu.cclase(tb);

    return menu;
  };

  function _encabezadomenu(x,men){
    var m= men || "TITULO";
    var tb = "pure-menu-heading";
    var encab = {
       "link":  " pure-menu-link"
    }
    if(encab[x] !== undefined) tb += encab[x];
    enca= _elemento("span",tb).cclase(tb);
    enca.textContent=m
    return enca;
  };

  function _sublista(text, arr){
    li = _elemento("li").cclase("pure-menu-item pure-menu-has-children pure-menu-allow-hover");
    a= _elemento("a").cclase("pure-menu-link");
    a.textContent=text;
    a.cid("menuLink1");
    ul= _elemento("ul").cclase("pure-menu-children");
    ul.componer(arr);

    li.componer([a,ul]);
    return li
  };

  function _lista(arr){
    ul= _elemento("ul").cclase("pure-menu-list");
    ul.componer(arr)
    return ul;
  };

  function _itemlista(d){
    da= d || "ejemplo";
    li= _elemento("li");
    a= _elemento("a").cclase("pure-menu-link");
    a.textContent=da;
    li.componer([a]);
    return li
  };


return {
	"boton": _boton,
	"imagen":_imagen,
	"grilla":_grilla,
  "grilla24":_grilla24,
  "contenedor":_contenedor,
  "i":_i,
  "agregar":_agregar,
  "elemento":_elemento,
  "input":_input,
  "formulario":_formulario,
  "checkbox":_checkbox,
  "option":_option,
  "combobox":_combobox,
  "buttonradio":_buttonradio,
  "tabla":_tabla,
  "itemcuerpo": _itemcuerpo,
  "itemencabezado":_itemencabezado,
  "cuerpotabla":_cuerpotabla,
  "encabezadotabla":_encabezadotabla,
  "cuerpotabla":_cuerpotabla,
  "agruparcuerpo":_agruparcuerpo,
  "construirtabla":_construirtabla,
  "lista":_lista,
  "itemlista":_itemlista,
  "sublista":_sublista,
  "menu":_menu,
  "encabezadomenu":_encabezadomenu,
  "legend":_legend
};

})();


/*pure.boton("primario");
*/
