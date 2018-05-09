/*
Shark Team
XF
5/3/18
*/

/**functions */

var bkImg = ["https://images5.alphacoders.com/410/410332.jpg","https://images8.alphacoders.com/354/354506.jpg","https://images7.alphacoders.com/403/403213.jpg","https://images.alphacoders.com/512/512797.jpg","https://images3.alphacoders.com/687/687243.jpg","https://images7.alphacoders.com/395/395539.jpg","https://images.alphacoders.com/113/113643.jpg","https://images5.alphacoders.com/352/352098.jpg","https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.unsplash.com/photo-1497543273833-e64b94e67a71?ixlib=rb-0.3.5&s=092127073f6384fd784d55b8954d86d6&auto=format&fit=crop&w=1355&q=80"];

function randomInt(min,max){
    return Math.floor(min+(Math.random()*(max-min)));
};

/*Change splash page picture every x seconds*/
function bgImageChange(){
    
    var bg = $('#splash');

    
    setInterval(function(){ 
        $('#splash').css({
            'backgroundImage':'url("'+bkImg[randomInt(0,bkImg.length)]+'")',
        })
     }, 20000);
};

function loaded(){

    bgImageChange();
};

function changePage(){
    $('.item').click(function(){
        $("#blackCurtain").toggleClass('fadeBlack');
        $('#blackCurtain').toggleClass("changePage");
        
    });
};

//Animation
function clickedBtn(a){
    //$('#head').css('top','-500vh')
    $('#body').css('top','-100vh')
    $('#head').css('opacity','0')
};


/**functions */

$(document).ready(function(){
    loaded();
    changePage();
    
    $('.btnSplash').click(function(a){
        clickedBtn(this);

    });
});