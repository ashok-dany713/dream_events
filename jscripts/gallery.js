var popup = document.getElementById('popup');
var nextImage = document.getElementById("next_image");
var previousImage = document.getElementById("previous_image");
var i = -18;


window.addEventListener('load', () => {
  document.querySelector('.splash').classList.toggle('close');
}) 

function addImage(number) {

  const list = document.getElementById('gallery_grid');
  const myLi = document.createElement('li');
  myLi.setAttribute("class", "gallery_card");

  var image = document.createElement('img');
  image.setAttribute("src", "../dream_events/images/gallery/"+number+".jpg")
  image.addEventListener('click', () => {
    popup.style.display = "flex";
    document.getElementById("main_image").setAttribute("src", "../dream_events/images/gallery/"+number+".jpg");
    currentImage(number);
  });
  image.addEventListener('load', () => {
    i+=1;
    document.getElementById("loading_text").innerHTML = "Loading("+i+"/36)";
  });

  myLi.appendChild(image);

  list.appendChild(myLi);
}

function previous_Image(path) {
  var number = (path).replace("../dream_events/images/gallery/", "");
  number = (number).replace(".jpg", "");
  
  var image = document.getElementById('main_image');

  currentImage(parseInt(number)-1);

  image.removeAttribute("src")
  image.setAttribute("src", "../dream_events/images/gallery/"+(parseInt(number)-1)+".jpg")

}

function next_Image(path) {
  var number = (path).replace("../dream_events/images/gallery/", "");
  number = (number).replace(".jpg", "");
  
  var image = document.getElementById('main_image');

  currentImage(parseInt(number)+1);

  image.removeAttribute("src")
  image.setAttribute("src", "../dream_events/images/gallery/"+(parseInt(number)+1)+".jpg")
  

}

function currentImage(number) {

  if ((parseInt(number)) == 136){
    nextImage.style.visibility = "hidden";
    previous_image.style.visibility = "visible";
  }else if((parseInt(number)) == 1){
    previous_image.style.visibility = "hidden";
    nextImage.style.visibility = "visible";
  }else{
    previous_image.style.visibility = "visible";
    nextImage.style.visibility = "visible";
  }

}

function closeImage() {
   popup.style.display = "none";
}

for (var i=1; i <= 18; i++) {
  addImage(i);
}

document.getElementById("show_all").addEventListener('click', () => {
  document.getElementById("show_all").style.display = "none";
  for (var i=19; i <= 135; i++) {
    addImage(i);
  }
});

const next = document.getElementById("next_image");
next.addEventListener('click', () => {
  next_Image(String(document.getElementById("main_image").getAttribute("src")));
});

const previous = document.getElementById("previous_image");
previous.addEventListener('click', () => {
  currentImage();
  previous_Image(String(document.getElementById("main_image").getAttribute("src")));
});

function openMenu() {
  document.querySelector(".dropdown").classList.toggle('open');
}

function scrollToContact() {
  document.getElementById('contact_footer').scrollIntoView();
}

function scrollToAddress() {
  document.getElementById('address').scrollIntoView();
}

