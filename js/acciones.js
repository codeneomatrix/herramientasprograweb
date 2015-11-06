var Acciones= (function(){
			var _cp_1_2= function(){
				var in1 = document.getElementById("i1");
				var in2 = document.getElementById("i2");
				in2.value=in1.value;
			};

			var _obv= function(id){
				var in1 = document.getElementById(id);
				return in1.value || " ";
			};

			var _mostrar= function(text){
				console.log(text);
			};

		return{
			"cp":_cp_1_2,
			"obv":_obv,
			"mostrar":_mostrar
		};

		})();
