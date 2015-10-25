var Empresa =(function(){

  var _trabajadores = function(){
  return [{"id":"10","nombre":"juan","apellido":{"paterno":"peres","materno":"quijano"},"sexo":"m","departamento":"10"},
          {"id":"12","nombre":"pedro","apellido":{"paterno":"juan","materno":"juanes"},"sexo":"m","departamento":"2"},
          {"id":"122","nombre":"alberto","apellido":{"paterno":"francisco","materno":"ramirez"},"sexo":"m","departamento":"2"},
          {"id":"123","nombre":"juana","apellido":{"paterno":"gonzales","materno":"lopez"},"sexo":"f","departamento":"3"},
          {"id":"34","nombre":"andres","apellido":{"paterno":"andrade","materno":"martinez"},"sexo":"m","departamento":"4"}];
  };

   var _departamentos = function(){
  return [{"id":"10","nombre":"recursos humanos","edificio":"A"},
          {"id":"2","nombre":"recursos financieros","edificio":"R"},
          {"id":"3","nombre":"operatividad","edificio":"Z"},
          {"id":"4","nombre":"inten","edificio":"A"}];
  };

  return{
  "trabajadores": _trabajadores,
  "departamentos": _departamentos
  };

})();
