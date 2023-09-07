

export function changedirection(e){
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
    