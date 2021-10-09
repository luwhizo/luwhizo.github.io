let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(400, 400); 
       frameRate(300);

     // A partir de esta linea podemos codificar nuestros dibujos


       let x = 200;
        let sp = 1; 
       draw=function(){
        mousePressed = function() {
            ellipse(mouseX, mouseY, 20, 20);
        };
          
            background(0,255,0);
            fill(255,0,0);
            ellipse(x, 200, 40, 40);
            x=x+sp; 

            if( x > 380 )
            {
                sp = -8; 
            }

            if( x < 20 )
            {
                sp = 1; 
            }
           
            if(mousePressed){
                console.log("dfdf")
            }
            
           

            fill(0,0,255);
            ellipse(x, mouseY, 40, 40);

            

       }



   //------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc); 