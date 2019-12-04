window.onload = function(){

  //var voor elementen op page

  var broodjeOnderkant = document.getElementById('broodjeOnderkant');
  var burgerModel = document.getElementById('burgerModel');
  var slaModel = document.getElementById('slaModel');
  var kaas = document.getElementById('kaasModel');
  var tomaatModel = document.getElementById('tomaatModel');
  var bol = document.getElementById('bol')
  var broodjeBovenkantModel = document.getElementById('broodjeBovenkant');
  var camera = document.getElementById('camera');
  var werkbank2 = document.getElementById('werkbank2');
  var cursor = document.getElementById('cursor');
  var scene = document.getElementById("scene");
  var vlees = document.getElementById('vlees');
  var gehakt = document.getElementById('meatWrapper');
  var gehaktobj = document.getElementById('meat');
  var hanger = document.getElementById('keukenhanger');
  var hanger2 = document.getElementById('keukenhanger2');
  var hamer = document.getElementById("hamerWrapper");
  var hamerobj = document.getElementById('hamer');
  var koelKastDeur = document.getElementById('werkbank4');
  var plane4 = document.getElementById('plane4');
  var plane5 = document.getElementById('plane5');
  var rauwer = document.getElementById('rauwer');
  // var burgerRauw = document.getElementById('burgerRauw');
  var spatelbox = document.getElementById('spatelbox');
  var spatelcont = document.getElementById('spatelcont');
  var spatel = document.getElementById('spatel');
  var mes = document.getElementById('mes');
  var peter = document.getElementById('peter');
  var uiWrapper = document.getElementById('uiWrapper');
  var peper = document.getElementById('peper');
  var zout = document.getElementById('zout');
  var spatelpakken = 0
  var mespakken = 0
  var peterpakken = 0
  var hamerpakken = 0;
  var gehaktpakken = 0;
  var sky = document.getElementById('sky');
  var burgerRauwvast = false;
  var temperatuur = 0;
  var buttonTemp = document.getElementById('buttonTemp');
  var textTemp = document.getElementById('textFieldTemp');
  var gril = false;

  camera.setAttribute("position", "0.810 0 -6.50");

  var buttonCheck = setInterval(()=>{
  		var vrButton = $('.a-enter-vr-button');
  		if(vrButton.length > 0){
  			clearInterval(buttonCheck);
  			vrButton.click(()=>{
  				$('#camera').attr('position','0.810 0 -6.50');
  			});
  		}
  	},100);

  var xhttp = new XMLHttpRequest();
  var requestString = "https://api.openweathermap.org/data/2.5/weather"
                      + "?id=2751773"
                      + "&units=metric&format=json"
                      + "&APPID=3c20ba4b7307df195ee6f75a14924e06";

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);
      var x = Object.values(response.weather);
      console.log(x[0].main);
      if(x[0].main == "Drizzle"){sky.setAttribute("color","#D3D3D3") }
      if(x[0].main == "Rain"){sky.setAttribute("color","#2F4F4F") }
      if(x[0].main == "Clouds"){sky.setAttribute("color","#2F4F4F") }
      if(x[0].main == "Mist"){sky.setAttribute("color","#d3d3d3") }
    }
  }
  xhttp.open("GET", requestString);
  xhttp.send();


  var interval = null;

           buttonTemp.addEventListener("click", function(){
             interval = setInterval(tempButton, 500);
           });
           function tempButton(){
             if(temperatuur < 200){
             temperatuur = temperatuur + 50;
           }
             textTemp.setAttribute("text","value:" + temperatuur);

             if(temperatuur == 200){
               clearInterval(interval);
               vlees.setAttribute("sound","src: url(vleesSudder.mp4); autoplay: true ")
               gril = true;
             }
           }

        var objectVast = false;

        //gehakt van koelkast
        gehakt.addEventListener("click", function(){
          if(gehaktpakken == 0){
          cursor.appendChild(gehaktobj);
          gehaktobj.setAttribute("position", "0.1 -0.20 0");
          gehaktobj.setAttribute("scale", "0.3 0.3  0.3");
          gehaktobj.setAttribute("rotation", "10 -90  -30");
          gehaktpakken = 1;
            }
          });

          //leg gehakt op snijplank
          snijplank2.addEventListener("click", function(){
            if(gehaktpakken == 1){
              snijplank2.appendChild(gehaktobj);
              gehaktobj.setAttribute("position","-1.385 1.135 -3.240");
              gehaktobj.setAttribute("rotation","0 90 0");
              gehaktobj.setAttribute("scale","0.2 0.2 0.2 ");
              gehaktpakken = 2;
            }
          });

          //hamer oppakken
          hamerWrapper.addEventListener("click", function(){
            if(objectVast == false){
              if(hamerpakken == 0){
                cursor.appendChild(hamerobj);
                hamerobj.setAttribute("position", "0.1 -0.20 0");
                hamerobj.setAttribute("rotation", "10 -90  -50");
                hamerpakken = 1;
                objectVast = true;
              }
            }
          });

          //hamer terug
          hanger2.addEventListener("click", function(){
            if(objectVast == true){
              if(hamerpakken == 1){
                hamerWrapper.appendChild(hamerobj);
                hamerobj.setAttribute("position","1.624 1.615 -7.778");
                hamerobj.setAttribute("rotation", "180 270 90");
                hamerpakken = 0;
                objectVast = false;
              }
            }
          });

        //oppakken spatel
          spatelcont.addEventListener("click", function(){
            if(objectVast == false){
              cursor.appendChild(spatel);
              spatel.setAttribute("position", "0.1 -0.20 0");
              spatel.setAttribute("scale", "0.08 0.08 0.08");
              spatel.setAttribute("rotation", "10 -90  -30");
              spatelpakken = 1
              objectVast = true;
            }
          });

          //verwijder spatel
          hanger.addEventListener("click", function()
            {
              if(objectVast == true){
                if(spatelpakken == 1){
              spatelbox.appendChild(spatel);
              spatel.setAttribute("position","1.850 1.6 -7.90");
              spatel.setAttribute("rotation","0 -90 -90");
              spatel.setAttribute("scale","0.05 0.1 0.1");
              spatelpakken = 0;
              objectVast = false;
              }
            }
          });

          //oppakken mes
            mesWrapper.addEventListener("click", function(){
              if(objectVast == false){
                if(mespakken == 0){
                  cursor.appendChild(mes);
                  mes.setAttribute("position", "0.1 -0.20 0");
                  // mes.setAttribute("scale", "0.3 0.3 0.3");
                  mes.setAttribute("rotation", "-1.510 100.000 55.400");
                  mes.setAttribute("sound","src: url(unseath.mp3); autoplay: true ");
                  mespakken = 1;
                  console.log("mesopgepakt1");
                  objectVast = true;
                }
              }
            });
            //verwijder mes
            $('#keukenhanger2').click(function() {
              if(objectVast == true){
                if (mespakken == 1){
                  mesBox.appendChild(mes);
                  mes.setAttribute("position","1.352 1.460 -7.885");
                  mes.setAttribute("rotation","0 0 270");
                  mes.setAttribute("scale","0.030 0.030 0.030");
                  mespakken = 0;
                  objectVast = false;
                }
              }
            });




            //sla gehakt
            gehaktobj.addEventListener("click", function() {
              if(hamerpakken == 1){
                hamerobj.setAttribute("visible", "false");
                setTimeout(function(){

                  $('#scene').append('<a-entity id="hamer2" scale="0.05 0.05 0.05" rotation="10 -90  -30"" position="1.624 1.615 -7.778" height=".1" obj-model="obj: #vleeshamer-obj; mtl: #vleeshamer-mtl"></a-entity>');
                  var hamermation1 = document.createElement("a-animation");
                  hamermation1.setAttribute("attribute","position");
                  hamermation1.setAttribute("from","1.0 1.256 -7.465");
                  hamermation1.setAttribute("to","1.0 1.100 -7.465");
                  hamermation1.setAttribute("rotate","10 -90 -45");
                  hamermation1.setAttribute("dur","2000");
                  hamermation1.setAttribute("easing","ease-in-out-circ");
                  hamermation1.setAttribute("repeat","1");
                  hamer2.appendChild(hamermation1);

                }, 500);

                    setTimeout(function(){
                    var hamermation2 = document.createElement("a-animation");
                    hamermation2.setAttribute("attribute","position");
                    hamermation2.setAttribute("from","1.0 1.100 -7.465");
                    hamermation2.setAttribute("to","1.0 1.256 -7.465");
                    hamermation2.setAttribute("dur","2000");
                    hamermation2.setAttribute("easing","ease-in-out-circ");
                    hamermation2.setAttribute("repeat","1");
                    hamer2.appendChild(hamermation2);
                  }, 1800);


                setTimeout(function(){
                  gehaktobj.setAttribute("visible", "false");
                //  $('#scene').append('<a-entity id="ui2" scale="0.2 0.2 0.2" position="0.799 1.087 -7.665" height=".1" obj-model="obj: #ui2-obj; mtl: #ui2-mtl"></a-entity>');
                 // burgerRauw.setAttribute("position","1 1.09 -7.5");
                // burgerRauw.setAttribute("visible","true");
                $('#scene').append('<a-entity id="burgerRauw" beweeg="position: 2.3 1.6 -6.75" rotation="0 -90 0" scale=" 0.15 0.15 0.15" position="1 1.093 -7.5" height=".1" obj-model="obj: #burgerRauw-obj; mtl: #burgerRauw-mtl"></a-entity>');

                 gehaktpakken = 4;

                 burgerRauw.addEventListener("click", function(){
                     if(hamerpakken != 1 ){
                     cursor.appendChild(burgerRauw);
                     burgerRauw.setAttribute("position", "0.1 -0.20 0");
                     burgerRauwvast = true;

                     if(burgerRauwvast == true){
                     vlees.addEventListener("mouseenter", function(){
                     cursor.removeChild(burgerRauw);
                     vlees.setAttribute("opacity","1");
                     burgerRauwvast = false;
                     });
                   }
                 }
             });
                }, 3500);

                setTimeout(function() {
                  hamer2.setAttribute("visible", "false");
                  hamerobj.setAttribute("visible", "true");
                }, 4000);
              }

            });

            //snij ui
            uiWrapper.addEventListener("click", function(){

            if(mespakken == 1 && gehaktpakken == 2){
              console.log("uisnijden");

                mes.setAttribute("visible", "false");
              setTimeout(function(){

                $('#scene').append('<a-entity id="mes2" scale="0.030 0.030 0.030" rotation="-3.030 100.000 10.000" position="0.819 1.256 -7.665" obj-model="obj: #mes-obj; mtl: #mes-mtl"></a-entity>');
                var mesimation1 = document.createElement("a-animation");
                mesimation1.setAttribute("attribute","position");
                mesimation1.setAttribute("from","0.819 1.256 -7.665");
                mesimation1.setAttribute("to","0.819 1.100 -7.665");
                mesimation1.setAttribute("dur","2000");
                mesimation1.setAttribute("easing","ease-in-out-circ");
                mesimation1.setAttribute("repeat","0");
                mes2.setAttribute("sound","src: url(slash.mp3); autoplay: true ");
                mes2.appendChild(mesimation1);

              }, 500);

                setTimeout(function(){
                  var mesimation2 = document.createElement("a-animation");
                  mesimation2.setAttribute("attribute","position");
                  mesimation2.setAttribute("from","0.819 1.100 -7.665");
                  mesimation2.setAttribute("to","0.819 1.256 -7.665");
                  mesimation2.setAttribute("dur","2000");
                  mesimation2.setAttribute("easing","ease-in-out-circ");
                  mesimation2.setAttribute("repeat","0");
                  mes2.appendChild(mesimation2);
                }, 1800);


              setTimeout(function(){
                ui.setAttribute("visible", "false");
                $('#scene').append('<a-entity id="ui2" scale="0.2 0.2 0.2" position="0.799 1.087 -7.665" height=".1" obj-model="obj: #ui2-obj; mtl: #ui2-mtl"></a-entity>');

              }, 3500);

              setTimeout(function() {
                mes2.setAttribute("visible", "false");
                mes.setAttribute("visible", "true");
              }, 4000);
            }
                  setTimeout(function() {
                    var uimation = document.createElement("a-animation");
                    uimation.setAttribute("attribute","position");
                    uimation.setAttribute("from","0.799 1.087 -7.665");
                    uimation.setAttribute("to","1.002 1.264 -7.495");
                    uimation.setAttribute("dur","2000");
                    uimation.setAttribute("easing","ease-in-out-circ");
                    uimation.setAttribute("repeat","0");
                    ui2.appendChild(uimation);

                  }, 4800);

                  setTimeout(function() {
                    var uimation2 = document.createElement("a-animation");
                    uimation2.setAttribute("attribute","position");
                    uimation2.setAttribute("from","1.002 1.264 -7.495");
                    uimation2.setAttribute("to","1.002 1.12 -7.495");
                    uimation2.setAttribute("dur","2000");
                    uimation2.setAttribute("easing","ease-in-out-circ");
                    uimation2.setAttribute("repeat","0");
                    ui2.appendChild(uimation2);

                  }, 6800);

                  setTimeout(function(){
                    ui2.setAttribute("visible","false");
                  }, 8500);
          });

            //snij peterselie
          peter.addEventListener("click", function(){
          if(mespakken == 1 && gehaktpakken == 2){

          mes.setAttribute("visible", "false");
          setTimeout(function(){

          $('#scene').append('<a-entity id="mes3" scale="0.030 0.030 0.030" rotation="-3.030 100.000 10.000" position="2 1.256 -7.665" obj-model="obj: #mes-obj; mtl: #mes-mtl"></a-entity>');
          var mesimation3 = document.createElement("a-animation");
          mesimation3.setAttribute("attribute","position");
          mesimation3.setAttribute("from","1.29 1.283 -7.5");
          mesimation3.setAttribute("to","1.29 1.100 -7.665");
          mesimation3.setAttribute("dur","2000");
          mesimation3.setAttribute("easing","ease-in-out-circ");
          mesimation3.setAttribute("repeat","0");
          mes3.setAttribute("sound","src: url(slash.mp3); autoplay: true ");
          mes3.appendChild(mesimation3);

        }, 500);

          setTimeout(function(){
            var mesimation4 = document.createElement("a-animation");
            mesimation4.setAttribute("attribute","position");
            mesimation4.setAttribute("from","1.29 1.100 -7.665");
            mesimation4.setAttribute("to","1.29 1.283 -7.5");
            mesimation4.setAttribute("dur","2000");
            mesimation4.setAttribute("easing","ease-in-out-circ");
            mesimation4.setAttribute("repeat","0");
            mes3.appendChild(mesimation4);
          }, 1800);


        setTimeout(function(){
          peter.setAttribute("visible", "false");
          $('#scene').append('<a-circle id="peter2" color="green" position="1.206 1.087 -7.665" src="obj/peterselie.jpg" rotation="-90 0 90" scale="0.3 0.3 0.3" radius="0.3"></a-circle>');

        }, 3500);

        setTimeout(function() {
          mes3.setAttribute("visible", "false");
          mes.setAttribute("visible", "true");
        }, 4000);

        setTimeout(function() {
          var peterselie2 = document.createElement("a-animation");
          peterselie2.setAttribute("attribute","position");
          peterselie2.setAttribute("from","1.206 1.087 -7.665");
          peterselie2.setAttribute("to","1.002 1.264 -7.495");
          peterselie2.setAttribute("dur","2000");
          peterselie2.setAttribute("easing","ease-in-out-circ");
          peterselie2.setAttribute("repeat","0");
          peter2.appendChild(peterselie2);

        }, 4800);

        setTimeout(function() {
          var peterselie3 = document.createElement("a-animation");
          peterselie3.setAttribute("attribute","position");
          peterselie3.setAttribute("from","1.002 1.264 -7.495");
          peterselie3.setAttribute("to","1.002 1.12 -7.495");
          peterselie3.setAttribute("dur","2000");
          peterselie3.setAttribute("easing","ease-in-out-circ");
          peterselie3.setAttribute("repeat","0");
          peter2.appendChild(peterselie3);

        }, 6800);

        setTimeout(function(){
          peter2.setAttribute("visible","false");
        }, 8500);
      }
    });

          //gebruik peper
          $( "#peper" ).one( "click", function() {

              if(gehaktpakken == 2){
            // $( "#peper" ).one( "click", function() {
                console.log("peper");

                var pepermation = document.createElement("a-animation");
                pepermation.setAttribute("attribute","position");
                pepermation.setAttribute("from","0.85 1.375 -7.85");
                pepermation.setAttribute("to","0.984 1.489 -7.609");
                pepermation.setAttribute("dur","2000");
                pepermation.setAttribute("easing","ease-in-out-circ");
                pepermation.setAttribute("repeat","0");
                textPepper.setAttribute("text", "color: red");
                peper.appendChild(pepermation);
                var pepermation2 = document.createElement("a-animation");
                pepermation2.setAttribute("attribute","rotation");
                pepermation2.setAttribute("to","180 0 0");
                pepermation2.setAttribute("dur","2000");
                pepermation2.setAttribute("easing","ease-in-out-circ");
                pepermation2.setAttribute("repeat","0");
                peper.appendChild(pepermation2);

                setTimeout(function(){
                  var pepermation3 = document.createElement("a-animation");
                  pepermation3.setAttribute("attribute","position");
                  pepermation3.setAttribute("from","0.984 1.489 -7.609");
                  pepermation3.setAttribute("to","0.984 1.500 -7.609");
                  pepermation3.setAttribute("dur","500");
                  pepermation3.setAttribute("easing","ease-in-out-circ");
                  pepermation3.setAttribute("repeat","5");
                  peper.setAttribute("sound","src: url(shaker.mp3); autoplay: true ");
                  peper.appendChild(pepermation3);

                }, 2000);

                setTimeout(function(){
                  var pepermation4 = document.createElement("a-animation");
                  pepermation4.setAttribute("attribute","rotation");
                  pepermation4.setAttribute("to","0 0 0");
                  pepermation4.setAttribute("dur","2000");
                  pepermation4.setAttribute("easing","ease-in-out-circ");
                  pepermation4.setAttribute("repeat","0");
                  peper.appendChild(pepermation4);

                  var pepermation5 = document.createElement("a-animation");
                  pepermation5.setAttribute("attribute","position");
                  pepermation5.setAttribute("from","0.984 1.489 -7.609");
                  pepermation5.setAttribute("to","0.85 1.375 -7.85");
                  pepermation5.setAttribute("dur","2000");
                  pepermation5.setAttribute("easing","ease-in-out-circ");
                  pepermation5.setAttribute("repeat","0");
                  peper.appendChild(pepermation5);
                  meat.setAttribute("color", "red");

                  }, 4500);
                // });
              }
            });


            //gebruik zout
              $( "#zout" ).one( "click", function() {
                if(gehaktpakken == 2){
            // $( "#zout" ).one( "click", function() {
              console.log("zout");
              var zoutmation = document.createElement("a-animation");
              zoutmation.setAttribute("attribute","position");
              zoutmation.setAttribute("from","1.05 1.375 -7.85");
              zoutmation.setAttribute("to","0.984 1.489 -7.459");
              zoutmation.setAttribute("dur","2000");
              zoutmation.setAttribute("easing","ease-in-out-circ");
              zoutmation.setAttribute("repeat","0");
              textZout.setAttribute("text", "color: red");
              zout.appendChild(zoutmation);

              var zoutmation2 = document.createElement("a-animation");
              zoutmation2.setAttribute("attribute","rotation");
              zoutmation2.setAttribute("to","180 0 0");
              zoutmation2.setAttribute("dur","2000");
              zoutmation2.setAttribute("easing","ease-in-out-circ");
              zoutmation2.setAttribute("repeat","0");
              zout.appendChild(zoutmation2);

              setTimeout(function(){
                var zoutmation3 = document.createElement("a-animation");
                zoutmation3.setAttribute("attribute","position");
                zoutmation3.setAttribute("from","0.984 1.489 -7.459");
                zoutmation3.setAttribute("to","0.984 1.500 -7.459");
                zoutmation3.setAttribute("dur","500");
                zoutmation3.setAttribute("easing","ease-in-out-circ");
                zoutmation3.setAttribute("repeat","5");
                zout.setAttribute("sound","src: url(shaker.mp3); autoplay: true ");
                zout.appendChild(zoutmation3);

              }, 2000);

              setTimeout(function(){
                var zoutmation4 = document.createElement("a-animation");
                zoutmation4.setAttribute("attribute","rotation");
                zoutmation4.setAttribute("to","0 0 0");
                zoutmation4.setAttribute("dur","2000");
                zoutmation4.setAttribute("easing","ease-in-out-circ");
                zoutmation4.setAttribute("repeat","0");
                zout.appendChild(zoutmation4);

                var zoutmation5 = document.createElement("a-animation");
                zoutmation5.setAttribute("attribute","position");
                zoutmation5.setAttribute("from","0.984 1.489 -7.459");
                zoutmation5.setAttribute("to","1.05 1.375 -7.85");
                zoutmation5.setAttribute("dur","2000");
                zoutmation5.setAttribute("easing","ease-in-out-circ");
                zoutmation5.setAttribute("repeat","0");
                zout.appendChild(zoutmation5);

              }, 4500);

            // });
            }
          });

  //deur open
    plane4.addEventListener("click", function(){
      cursor.setAttribute('material', 'color', 'red');
      koelKastDeur.setAttribute("rotation","0 -120 0")
      koelKastDeur.setAttribute("position","-7.42 0 -10.6")

    });

    plane5.addEventListener("click", function(){
      plane4.setAttribute("color", "yellow");
      cursor.setAttribute('material', 'color', 'green');
      koelKastDeur.setAttribute("rotation","0 0 0")
      koelKastDeur.setAttribute("position","0 0 0")
    });




  vlees.addEventListener("click", function(){
    if (spatelpakken == 1 && gril == true && gehaktpakken == 4 ){
      var vleesimation1 = document.createElement("a-animation");
      vleesimation1.setAttribute("attribute","position");
      vleesimation1.setAttribute("from","1.908 1.125 -7.65");
      vleesimation1.setAttribute("to","1.908 1.45 -7.65");
      vleesimation1.setAttribute("dur","2000");
      vleesimation1.setAttribute("direction","alternate-reverse" );
      vleesimation1.setAttribute("easing","ease-in-out-circ");
      vleesimation1.setAttribute("repeat","0");
      var vleesimation2 = document.createElement("a-animation");
      vleesimation2.setAttribute("attribute","rotation");
      vleesimation2.setAttribute("from", "0 0 0");
      vleesimation2.setAttribute("to","180 0 0");
      vleesimation2.setAttribute("dur","2000");
      vleesimation2.setAttribute("easing","ease-in-out-circ");
      vleesimation2.setAttribute("repeat","0");
      vlees.appendChild(vleesimation2);
      vlees.appendChild(vleesimation1);
      gehaktpakken = 3;

    setTimeout(function(){
      scene.removeChild(vlees);
      burgerModel.setAttribute("visible","true");
    },2200);



    }
  });



  //booleans voor checksums

    var burger = false;
    var sla = false;
    var tomaat = false;
    var broodjeBovenkant = false;

    //check voor active object.

    var activeB = false;
    var activeS = false;
    var activeT = false;
    var activeBT = false;
    var activeK = false;

    // checkt of burger compleet is. (finished with topper)

    var final = false;

  //check of je iets vast houdt.

    var holdsItem = false;

  //burger oppakken

  burgerModel.addEventListener("click", function(){
    if(!burger && !holdsItem){
      cursor.appendChild(this);
      this.setAttribute("position", "0.1 -0.20 0");
      holdsItem = true;
      activeB = true;
    }
  });

  slaModel.addEventListener("click", function(){
    if(!holdsItem && burger && !final){
      cursor.appendChild(this);
      this.setAttribute("position", "0.1 -0.20 0");
      sla = true;
      holdsItem = true;
      activeS = true;
    }
  });

  tomaatModel.addEventListener("click", function(){
    if(!holdsItem && burger  && !final){
      cursor.appendChild(this);
      this.setAttribute("position", "0.1 -0.20 0");
      tomaat = true;
      activeT = true;
      holdsItem = true;
    }
  });

  kaasModel.addEventListener("click", function(){
    if(!holdsItem && burger && !final){
      cursor.appendChild(this);
      this.setAttribute("position", "0.1 -0.20 0");
      kaas = true;
      holdsItem = true;
      activeK = true;
    }
  });

  broodjeBovenkantModel.addEventListener("click", function(){
    if(holdsItem == false && burger == true && !final){
      cursor.appendChild(this);
      this.setAttribute("position", "0.1 -0.20 0");
      broodjeBovenkant = true;
      holdsItem = true;
      activeBT = true;
    }
  });

  //plaatsen burger, required

  bol.addEventListener("click", function(){
    if(!burger && activeB && !final){
      scene.appendChild(burgerModel);
      burgerModel.setAttribute("position", "3.111 1.12 -7.65");
      holdsItem = false;
      activeB = false;
      burger = true;
    }
    else if(burger && !final){
      if(sla && activeS){
        scene.appendChild(slaModel);
        slaModel.setAttribute("position", "3.111 1.15 -7.65");
        activeS = false;
        holdsItem = false;
      }
    else if(tomaat && activeT){
        scene.appendChild(tomaatModel);
        tomaatModel.setAttribute("position", "3.111 1.08 -7.65");
        activeT = false;
        holdsItem = false;
      }

          else if(kaas && activeK){
      scene.appendChild(kaasModel);
      kaasModel.setAttribute("position", "3.12 1.1 -7.55");
      activeK = false;
      holdsItem = false;
    }
    else if(broodjeBovenkant && activeBT){
        scene.appendChild(broodjeBovenkantModel);
        broodjeBovenkantModel.setAttribute("position", "3.111 1.175 -7.65");
        holdsItem = false;
        activeBT = false;
        final = true;
        scene.removeChild(bol);
        pickBurger();
      }
    }
  });

  function pickBurger(){

      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          var response = JSON.parse(this.responseText);

          var burger = response.burger + response.brood;
          var burgerSla = burger + response.salade;
          var burgerTomaat = burger + response.tomaat;
          var burgerKaas = burger + response.kaas;
          var burgerSlaTomaat = burgerSla + response.tomaat;
          var burgerSlaKaas = burgerSla + response.kaas;
          var burgerTomaatKaas = burgerTomaat + response.kaas;
          var burgerComplete = burger + response.salade + response.tomaat + response.kaas;

          var burgerVet = response.vetBurger + response.vetBrood;
          var burgerSlaVet = burgerVet + response.vetSalade;
          var burgerTomaatVet = burgerVet + response.vetTomaat;
          var burgerKaasVet = burgerVet + response.vetKaas;
          var burgerSlaTomaatVet = burgerSlaVet + response.vetKomaat;
          var burgerSlaKaasVet = burgerSlaVet + response.vetKaas;
          var burgerTomaatKaasVet = burgerTomaatVet + response.vetKaas;
          var burgerCompleteVet = burgerVet + response.vetSalade + response.vetTomaat + response.vetKaas;


      if(final){
        if(sla && tomaat && kaas){
          console.log("Complete burger!");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerComplete)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerCompleteVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(!sla && !tomaat && !kaas){
          console.log("Meat burger!");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burger)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(sla && !tomaat && !kaas){
          console.log("Only salad burger!");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerSla)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerSlaVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(!sla && tomaat && !kaas){
          console.log("Only tomato burger!");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerTomaat)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerTomaatVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(!sla && !tomaat && kaas){
          console.log("Only cheese burger!");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerKaas)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerKaasVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(sla && tomaat && !kaas){
          console.log("Compleet zonder kaas");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerSlaTomaat)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerSlaTomaatVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(sla && !tomaat && kaas){
          console.log("Compleet zonder tomaat");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerSlaKaas)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerSlaKaasVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
        else if(!sla && tomaat && kaas){
          console.log("Compleet zonder sla");
          $('#scene').append('<a-entity id="textkcal" text="value:'+ "kcal"
           + ';color: black" position="4.570 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textgvet" text="value:'+ "g vet"
            + ';color: black" position="4.570 1.715 -7.9" scale="2.5 2.5 2.5"></a-entity>');

          $('#scene').append('<a-entity id="textZero2" text="value:'+ Math.floor(burgerTomaatKaas)
           + ';color: black" position="4.305 1.875 -7.9" scale="2.5 2.5 2.5"></a-entity>');

           $('#scene').append('<a-entity id="textZero3" text="value:'+ Math.floor(burgerTomaatKaasVet)
            + ';color: black" position="4.305 1.703 -7.9" scale="2.5 2.5 2.5"></a-entity>');
        }
      }
    }}
    xhttp.open("GET", "//cors-anywhere.herokuapp.com///ipmedt3.dionvdberg.nl/BurgerApi.json", "true")
    console.log(xhttp.open);
    xhttp.send();
    }

    reset.onmouseenter = function (){
      console.log("reload");
      reset.setAttribute("color", "green");
      reloadPage();
    }

    function reloadPage(){
      location.reload();
    }

  moveplace();

  function moveplace(){
    AFRAME.registerComponent("beweeg",{
      schema: {
        position: {type : "string"}
      },
      init : function(){
        this.el.addEventListener("click",function(){
          var animation = document.createElement("a-animation");
          animation.setAttribute("attribute","position");
          animation.setAttribute("to",this.data.position);
          animation.setAttribute("dur","3000");
          animation.setAttribute("repeat","0");
          camera.appendChild(animation);
        }.bind(this));
      }
    });
}
}
