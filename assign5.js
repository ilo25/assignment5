var game = {};
var arrayCards = ["img1.jpg", "img1.jpg", "img6.jpg", "img6.jpg", "img3.jpg", "img3.jpg", "img7.jpg", "img7.jpg", "img4.jpg", "img4.jpg", "img9.jpg", "img9.jpg"];
randomize (arrayCards);

function randomize(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

var img = $("img");
img.on('click', show);
img.on('click', match);

function show() {
    for (var i = 0; i < img.length; i++) {
        var pick = event.target;
        if (pick === img[i]) {
            pick.src = '../Assign5/images/' + arrayCards[i];

        }
    }
}

var arrSelect = [];
var count=0;
var match=0;
var interval;

function match() {
    arrSelect.push(this);
    console.log(arrSelect);

    if (arrSelect.length === 2) {
        if (arrSelect[0].src== arrSelect[1].src) {
            match++;
        }
        else {
            var choose1 = arrSelect[0]
            var choose2 = arrSelect[1]

            interval = setTimeout(function(){
                choose1.src = "./images/bang.jpg"
                choose2.src = "./images/bang.jpg"
            }, 1000);
        }
        arrSelect = [];
    }

}



  var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
