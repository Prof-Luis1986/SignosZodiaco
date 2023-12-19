function zodiac() {
    let dia, mes;
    dia = parseInt(document.formulario.dia.value);
    mes = parseInt(document.formulario.mes.value);
  
    let image = document.getElementById('imagenes');
  
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        document.getElementById('imagenes').src = "./Aries.png";
    }
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) {
        document.getElementById('imagenes').src = "./Tauro.png";
    }
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
        document.getElementById('imagenes').src = "./Geminis.png";
    }
    if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
        document.getElementById('imagenes').src = "./Cancer.png";
    }
    if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
        document.getElementById('imagenes').src = "./Leo.png";
    }
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
        document.getElementById('imagenes').src = "./Virgo.png";
    }
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
        document.getElementById('imagenes').src = "./Libra.png";
    }
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
        document.getElementById('imagenes').src = "./Scorpio.png";
    }
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
        document.getElementById('imagenes').src = "./sagitario.png";
    }
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
        document.getElementById('imagenes').src = "./capricornio.png";
    }
    if ((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)) {
        document.getElementById('imagenes').src = "./acuario.png";
    }
    if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        document.getElementById('imagenes').src = "./piscis.png";
    }
  }