/*
Shark Team
XF
5/3/18
*/

/**functions */
var bkImg = ["https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.unsplash.com/photo-1497543273833-e64b94e67a71?ixlib=rb-0.3.5&s=092127073f6384fd784d55b8954d86d6&auto=format&fit=crop&w=1355&q=80"];

/*Change splash page picture every x seconds*/
function bgImageChange(){
    
    var bg = $('#splash');

    
    setInterval(function(){ 
        $('#splash').css({
            'backgroundImage':'url("'+bkImg[1]+'")',
        })
     }, 12000);
};

function loaded(){

    bgImageChange();
};

/**functions */

$(document).ready(function(){
    loaded();
});