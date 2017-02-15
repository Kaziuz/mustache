function process() {
    
  var template, data, html;
  
  /* .val() es usado para tomar los valores de los elementos input, select y textarea */
  /* Aqui lo que hacemos es almacenar el codigo guardado en #template textarea y lo almacenamos en una variable llamada template */
  
  template = $('#template').val();
  
  /* eval es una función javascript para evaluar o ejecutar expresiones aritmeticas */
  
  /* seleccionamos #data y su contenido text-area que crea el objeto data */
  eval( $('#data').val() );
  
  /*llamamos a mustache.render() pasandole como argumentos la plantilla seleccionada con la variable template, y los datos seleccionados con data 
  Esto genera las etiquetas finales que almacena en la varibale html
  */
  html = Mustache.render( template, data );
  
  /* Html que resultaria*/
  $('#html').text( html );
  // html resultante
  $('#result').html( html );
}