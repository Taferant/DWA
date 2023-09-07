


var blocksize=25;

var rows=20;
var colomns=20;
var board;
var context; 



 //

window.onload=function(){
    board=document.getElementById("board");
    board.height=rows*blocksize;
    board.width=colomns*blocksize;
   context= board.getContext('2d');
   
    
   setInterval(update,1000/10 )
   food();
   document.addEventListener("keyup",changedirection )
}

//snakeElement
var snakex=blocksize*10;
var snakey=blocksize*10;


//FoodElement 
var foodx=blocksize*15;
var foody=blocksize*10

function update(){
    context.fillStyle="black"
    context.fillRect(0,0,board.width,board.height)
     
     

 context.fillStyle="green" 
 context.fillRect(snakex,snakey,blocksize,blocksize)
 snakex +=movex;

 snakey +=movey;
 context.fillStyle="red" 
 context.fillRect(foodx,foody,blocksize,blocksize) 
}

function food(){
    foodx=Math.floor(Math.random()*colomns)*blocksize;
    foody=Math.floor(Math.random()*rows)*blocksize 
}

var movex=0
var movey=0


function changedirection(e){
    if(e.code=='arrowup'){
        movex=0;
        movey=-1;
    }
    else if(e.code=="arrowdown"){
        movex=0;
        movey=+1;
    }
    else if(e.code=="arrowright"){
        movex=1 ;
        movey=0;
    } 
      else (e.code=="arrowleft")
      {
        movex=-1;
        movey=0;
    

      }

    

} 

 /* 1.What are the benefits of direct DOM mutations over replacing HTML?
   A. is that you can targetspecific elements and avoid re-renduring the intire HTML content,
      which can be costy in terms of perfomance
      
     2.What low-level noise do JavaScript frameworks abstract away?
       
     A. DOM mutation
     B. perfomance ioptimazation



3. What essence do JavaScript frameworks elevate?
  They allow programmers to use the most up-to-date JavaScript features and tools without having to go
   through the arduous task of coding them from scratch by themselves.

4. Very broadly speaking, how do most JS frameworks achieve abstraction?
They hide away the imperative DOM mutations

5. What is the most important part of learning a JS framework?

*/

