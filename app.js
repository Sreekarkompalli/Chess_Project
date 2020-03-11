var queen = {
    direction:"s",
    position : {
          x:4,
          y:0
    }
};


function changedDirection(direction,steps){
    switch(direction){
        case  "s":
            queen.position.x=queen.position.x+steps;
            break;
        case "n":
            queen.position.x=queen.position.x-steps;
            break;
        case "e":
            queen.position.y=queen.position.y+steps;
            break;
        case "w":
            queen.position.y=queen.position.y-steps;
            break;
        case"ne":
            queen.position.x=queen.position.x-steps;
            queen.position.y=queen.position.y+steps;
            break;
        
        case "nw":
            queen.position.x=queen.position.x-steps;
            queen.position.y=queen.position.y-steps;
            break;
        
        case "se":
            queen.position.x=queen.position.x+steps;
            queen.position.y=queen.position.y+steps;
            break;
        
        case "sw":
            queen.position.x=queen.position.x+steps;
            queen.position.y=queen.position.y-steps;
            break;
        default:
            direction:"s"
    }
}
changedDirection("s",3);