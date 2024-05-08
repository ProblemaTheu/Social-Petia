    var senha = $("#password");
    var olho = $("#eye");

    olho.mousedown(function() {
      senha.attr("type", "text");
    });

    olho.mouseup(function() {
      senha.attr("type", "password");
    });

    olho.mouseout(function() { 
      senha.attr("type", "password");
    });