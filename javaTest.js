window.onload = function(){
  //console.log("Tst")

  // var spatel = document.getElementById('spatelTrue');
  var camera = document.getElementById('camera');
  var werkbank2 = document.getElementById('werkbank2');
  var werkbank3 = document.getElementById('werkbank3');

  // spatel.addEventListener("mouseenter", function(){
  //
  //   document.getElementById('cursor').appendChild(this);
  //   this.setAttribute("position", "1 1 -2");
  //
  // })

  werkbank3.addEventListener("mouseenter", function(){
    //this.setAttribute("color", "#FF5508");
    //camera.setAttribute("position", "10 2 -3").style.transition = "all 2s";
    document.getElementById('cursor').appendChild("#werkbank3");
    this.setAttribute("position", "4 -1 3");
    this.setAttribute("rotation", "0 10 0");
  })

  werkbank2.addEventListener("mouseenter", function(){
    // this.setAttribute("visible", "false");
    var foo = document.getElementById('cursor').detach("#werkbank3");
    werkbank2.attach(foo);
    werkbank3.setAttribute("position", "4 -1 3");


  })


  // werkbank2.addEventListener("mouseleave", function(){
  //   this.setAttribute("color", "#FFF");
  // })

}
