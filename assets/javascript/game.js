
//creates the crystal dom elements
function crystalGen() {

    for(var i = 1; i < 5; i++) {
        //create crystal images
        var img = $('<img>');

        //set attributes
        img.attr('id', ("gem" + i));
        img.attr('class', 'gem');
        img.attr('src', ("assets/images/gem0" + i + ".png"));

        //append to crystals section
        $("#crystals").append(img);
    }
}

//randomly assigns crystal value
function crystalVal() {

}

crystalGen();