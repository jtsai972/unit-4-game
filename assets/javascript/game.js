//Setting up variables
    let countWin, countLoss, target, points;

//initialize
    countWin = countLoss = points = 0;

//creates the crystal dom elements
function crystalGen() {

    //creating the crystals because I'm too lazy to type that 4 times
    for(var i = 1; i < 5; i++) {
        //create crystal images
        var img = $('<img>');

        //set attributes
        img.attr('id', "gem" + i);
        img.attr('class', 'gem');
        img.attr('src', ("assets/images/gem0" + i + ".png"));

        //append to crystals section
        $("#crystals").append(img);
    }
}

//Giving crystals values
function crystalVal() {
    //creating the crystals because I'm too lazy to type that 4 times
    for(var i = 1; i < 5; i++) {
        //creating crystal values because I'm too lazy to make another variable for this
        var rndVal = Math.floor( (Math.random() * (12-1)) + 1 ); //I know it's 11 but I'm lazy

        //set attributes
        $("#gem"+i).val(rndVal);

        console.log("gem" + i + ": " + rndVal);
    }
}

function targetGen() {
    //Set a target amount
    target = Math.floor( (Math.random() * (120-19)) + 19 ); //I know it's 101 but I'm lazy
    console.log(target);

    $("#target").text(target);
}

function print() {
    $("#wins").text(countWin);
    $("#losses").text(countLoss);
    $("#result").text(points);
}

function newRound() {
    points = 0;
    targetGen();
    crystalVal();
    
    print();
}

crystalGen();
newRound();

//On Keypress
$( function() { //this is the equivalent of $(document).ready();

    //on gem click
    $(".gem").on("click", function() {
        points += Number($(this).val());
        
        $("#result").text(points);

        if(points >= target) {

            if(points > target) { countLoss++; }
            
            if (points === target) { countWin++; }

            newRound();
        }
        
    });
});