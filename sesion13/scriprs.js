// WINDOW

function innerheight(){
    let mego = window.innerHeight;
    window.alert(mego);
}
function innerwidth(){
    let mego = window.innerWidth;
    window.alert(mego);
}
function openn(){
    myWindow = window.open("http://google.com.mx", "myWindow", "width=600, height=300");   // Opens a new window
}
function closee(){
    myWindow.close();   // Closes the new window
}
function movera() {
    myWindow.moveBy(75, 50);
    myWindow.focus();
  }
  function movera() {
    myWindow = window.open("http://google.com.mx", "myWindow", "width=600, height=300");   // Opens a new window
    myWindow.focus();
    myWindow.moveTo(500, 100);                                  // Moves the new window   
}
function otrotam() {
    myWindow = window.open("http://google.com.mx", "", "width=600, height=300");  // Opens a new window
    myWindow.focus();                                        // Sets focus to the new window
    myWindow.resizeTo(900, 500);                             // Resizes the new window

  }

  function alerta(){
    alert("HOLA, SOY UNA ALERTA!");
  }
  function despliega(){
    window.prompt("PON ALGO")
  }
  function confirma(){
    confirm("TAS SEGURO?");
  }

  // SCREEN
  function sheit(){
    var x = "ALTURA DE LA VENTANA: " + screen.height;
    window.alert(x);
  }

  function swidt(){
    var x = "ANCHURA DE LA VENTANA: " + screen.width;
    window.alert(x);
  }

  function shei(){
    var x = "ALTURA DISPONIBLE DE LA VENTANA: " + screen.availHeight;
    window.alert(x);
  }

  function swid(){
    var x = "ANCHURA DISPONIBLE DE LA VENTANA: " + screen.availWidth;
    window.alert(x);
  }
  function colores(){
    var x = "Color Depth: " + screen.colorDepth;
    window.alert(x);
  }

  function resolu(){
    var x = "Color Resolution: " + screen.pixelDepth;
    window.alert(x);
  }

  // LOCATION 

  function localizar(){
    var x = location.href;
    window.alert(x)
  }
function nombrehost(){
    var x = location.hostname;
    window.alert(x)
}
function protocolo(){
    var x = location.protocol;
    window.alert(x)
}

function asignar(){
    location.assign("https://www.google.com");
}
function recargar(){
    location.reload();
}
function reemplazar(){
    location.replace('http://google.com');
}

// HISTORY

function elementos(){
    var x = history.length;
    window.alert(x);
}

function atras(){
    history.back();
}
function adelante(){
    history.forward();
}
function ira() {
    let introo = prompt("Cuántos saltos quieres dar? / ingresa número entero negativo si quieres ir hacía atrás o positivo si quieres ir hacía adelante");
    window.history.go(introo);
  }

  // NAVIGATOR

  function nav1(){
    var x = "Browser CodeName: " + navigator.appCodeName;
    window.alert(x);
  }
  function nav2(){
    var x = "Browser Name: " + navigator.appName;
    window.alert(x);
  }
function nav3(){
    var x = "Version Info: " + navigator.appVersion;
    window.alert(x);
}
function nav4(){
    var x = "User-agent header sent: " + navigator.userAgent;
    window.alert(x);
}
function nav5(){
    var x = "Language of the browser: " + navigator.language;
    window.alert(x);
}
function nav6(){
    var x = "Platform: " + navigator.platform;
    window.alert(x);
}
function nav7(){
    var x = "Is the browser online? " + navigator.onLine;
    window.alert(x);
}