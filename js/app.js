$(function() {
    $("form[name='registration']").validate({
      // Acá van las reglas (Casillas obligatorias, máximo / minimos caracteres,)
      rules: {
        firstname: {
            required: true,
            minlength: 2,
            maxlenght:20,
        },
        email: {
          required: true,
          email: true
        },
        number: {
            required: true,
            minlength: 9,
            maxlength:9,
          }
        },
        // En éstos mensajes específicamos lo que saldrá, llamando el ID del formulario seguido del mensaje.
        messages: {
          firstname: "Introduce un nombre con mínimo 2 letras y máximo 20.",
          number: "Por favor, introduce un número de móvil válido (9 digitos).",
          email: "Por favor, introduce un correo válido."
          
        },
      
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

