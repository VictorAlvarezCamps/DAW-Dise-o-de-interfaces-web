export default class Mapa{    

    CrearMapa(){

        let mapa = [[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    
        for(let filas=0;filas<15;filas++){
            for(let columnas=0;columnas<21;columnas++){            
                var Div = document.createElement("div");
                if(mapa[filas][columnas]==0){
                    Div.classList.add("camino");
                }else{
                    Div.classList.add("pilar");
                }
                document.querySelector(".mapa").appendChild(Div);
                
            }            
        }    
    }

    getCoordsMapa(){

    }
    
}