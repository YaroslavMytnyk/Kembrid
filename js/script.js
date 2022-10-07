window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementById("header")
    const phone = document.getElementById("phone")
    const imgPhone = document.getElementById("imgPhone")

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.background =  "#242527";
        header.style.borderBottomColor = "rgba(255, 255, 255, 0.2)";
        phone.style.background =  "#ffffff";
        phone.style.color =  "#000000";
        imgPhone.src = "icons/black-phone.svg";
    } else {
        header.style.background =  "none";
        header.style.borderBottomColor = "rgba(255, 255, 255, 0.5)";
        phone.style.background =  "none";
        phone.style.color =  "#ffffff";
        imgPhone.src = "icons/white-phone.svg";
    }
}

var checkbox = document.querySelector( '#menu' );
var toggle = document.querySelector( '#toggle' );
var listener = function( e ) {
    if( e.target !== checkbox && e.target !== toggle ) {
        checkbox.checked = false;
        document.removeEventListener( 'click', listener );
    }
};

checkbox.addEventListener( 'click', function(){
    if( this.checked ) {
        document.addEventListener( 'click', listener );
    }
});