$(document).ready(function(){
     $(".submitGridSize").click(function() {
        setGrid();
       $(".square").mouseenter(function() {
         $(this).css("background", "#0057ff");
       });
     });

     $(".reset").click(function() {
         setGrid();
         clean();
     });
     $(".default").click(function() {
       $(".square").unbind();
       $(".square").mouseenter(function() {
         $(this).css("background", "#0057ff");
       });
     });
     $(".random").click(function() {
       $(".square").unbind();
       $(".square").mouseenter(function() {
         $(this).css("background", randomColor());
       });
     });
     $(".trail").click(function() {
       $(".square").unbind();
       $(".square").mouseenter(function() {
 			    $(this).css("background-color", "#1b2631");
 			    $(this).css("opacity", "1");
 			    $(this).fadeTo("slow", 0.30);
        });
     });
     $(".opacity").click(function() {
       $(".square").unbind();
       $(".square").mouseenter(function() {
 			      reduceOpacity($(this));
 		    });
     });
});

function displayGrid(n) {
   var size = 960;
   var boxSize = (960-4*n)/n;
   var wrap = $(".wrap").html("");
   for(var j = 0; j < n; j++){
      for(var i = 0; i < n; i++) {
          wrap.append($("<div></div>").addClass("square").height(boxSize).width(boxSize));
      }
   }
}

function setGrid() {
  var gridSize = $("#gridSize").prop("value");
  displayGrid(gridSize);
  clean();
}

function clean(){
  $(".square").css("background", "#e5eeff").css("opacity", '1');
}

function randomColor() {
  var red = Math.floor(Math.random()*256)
  var blue = Math.floor(Math.random()*256)
  var green = Math.floor(Math.random()*256)
  return "rgb(" + red + "," + green + "," + blue + ")";
}

function reduceOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1;
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
}
