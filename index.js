let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
     // A partir de esta linea podemos codificar nuestros dibujos
        let colorFondo = color(0,255,0)
        let puntos = 0;
        let x=500;
        direccion = 0;

        let direccionVertical = 1;

        let p=1;

        let y=0;
        let xAleatorio = 0;
        draw=function(){
            background(colorFondo);

            textSize(30);
            fill(0,0,0);
            text("Puntos: "+puntos,400,100);
            
            /// rECTANGULO 
            fill(0,0,222)
            rect(xAleatorio,y,10,10);
            y=y+direccionVertical;
            xAleatorio = xAleatorio + p;
            console.log(y)
            if( xAleatorio <= x+50 && xAleatorio >= x-50  &&  y>=450 && y<=550){
              
                direccionVertical=-1;
                
                puntos=puntos+1;
               
            }
            if( y <= 0 ){
              
                direccionVertical=+1;
               
            }
            if( xAleatorio >= 1000 ){
              
                p=-1;
               
            }
            if( xAleatorio <= 0 ){
              
                p=+1;
               
            }
            if( y >= 600 ){
              
                textSize(100);
                fill(222,0,0);
                text("GAME OVER" ,200,300);
                direccion=0
                colorFondo=color(120,220,210);
            }
            

           

            if(xAleatorio <= x+50 && xAleatorio >= x-50  &&  y>=450 && y<=550 ){
                textSize(90);
                fill(222,222,222);
                text(":-)" ,200,200);
                //colorFondo=color(0,0,0);
            } 

            /// ELIPSE 
            fill(255,0,0);
            ellipse(x,500,100,100);
        

            x = x + direccion;

            keyPressed=function(){
                //colorFondo = color(0,255,0)
                if (key.code == 65){
                    direccion = -2;
                    console.log(mouseX);
                    
                } 
                if (key.code == 68){
                    direccion = +2;
                    
                }  
            }


            mousePressed=function(){
                //console.log(mouseX);
                 //colorFondo = color(0,255,0)
                if (mouseX > 500){
                    direccion = +2;
                } 
                if (mouseX < 500){
                    direccion = -2;
                    
                }  
            }

            if( x >= 975 ){
                direccion=-2;
            }
            if( x <= 25 ){
                direccion=+2;
            }
        }



        /* fill(255,0,0);
        keyPressed=function(){
            //textSize(50);
            //console.log(key.code); // key.code Almacena el codigo de la tecla presionada

            if (key.code == 65){
                ellipse(mouseX,mouseY,50,50)
            } 
        } */




   //------------------------------------------------------

   }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc); 
