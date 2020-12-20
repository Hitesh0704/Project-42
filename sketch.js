var hr, mn, sc; // var for hour, minute and seconds hand
var hrAngle, mnAngle, scAngle; // var to map the hands and make them the same with 360 to 60 ratio.

function setup(){
    createCanvas(400,400); 
    
    angleMode(DEGREES);   //calculate angle in degrees

}

function draw(){
    background(0); //back black
    hr = hour(); //getting hour property into hr
    mn = minute(); //getting minute property into mn
    sc = second(); //getting second property into sc

    translate(200,200) //move everything 200, 200
    



    
    scAngle = map(sc, 0, 60, 0, 360); //360:60 ration
    mnAngle = map(mn,0,60,0,360) //360:60 ratio
    hrAngle = map(hr,0,12,0,360) //360:12 ratio

    //draw seconds
    push();
    rotate(-90)
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //draw minutes
    push();
    rotate(-90)
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //draw hour
    push();
    rotate(-90)
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    //make arc to follow the hands.
    stroke(255,0,255);
    point(0,0)

    rotate(-90)    
    strokeWeight(10);
    noFill();
    stroke(255,0,0);
    //arc(x,y,w,h.start,stop)
    arc(0,0,300,300,0,scAngle);
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}