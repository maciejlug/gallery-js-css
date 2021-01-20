function zoomImage(id) {

  imageid = id;

    /* Adding image to gallery */
    img = document.createElement("img");
    img.src = "zdjecia/zdj"+id+".jpg";
    document.getElementById('galleryDiv').appendChild(img);
    document.getElementById('galleryDiv').classList.add("galleryDivClicked");

    /* Adding exit button */
    imgExit = document.createElement("img");
    imgExit.src = "exit.gif";
    
    document.getElementById('exitDiv').appendChild(imgExit);

    /* Adding right/left buttons */

    imgLeft = document.createElement("img");
    imgLeft.src = "left.gif";

    if(imageid > 1){
      document.getElementById('leftArrow').appendChild(imgLeft);
    }

    imgRight = document.createElement("img");
    imgRight.src = "right.gif";

    if(imageid < 6){
      document.getElementById('rightArrow').appendChild(imgRight);
    }
    
    /* Adding styles to gallery */
    document.getElementById('gallery-background').classList.add("gallery-backgroundClicked");

    return imageid, imgLeft, imgRight

}

  function exitGallery(){

    document.getElementById('galleryDiv').removeChild(document.getElementById('galleryDiv').childNodes[0]);
    document.getElementById('exitDiv').removeChild(document.getElementById('exitDiv').childNodes[0]);
    document.getElementById('gallery-background').classList.remove("gallery-backgroundClicked");

    if (document.getElementById('leftArrow').childNodes[0] != null ){
    document.getElementById('leftArrow').removeChild(document.getElementById('leftArrow').childNodes[0]);
    }

    if (document.getElementById('rightArrow').childNodes[0] != null ){
    document.getElementById('rightArrow').removeChild(document.getElementById('rightArrow').childNodes[0]);
  }

  }

  function leftArrow(){
    console.log(imageid)
    document.getElementById('galleryDiv').removeChild(document.getElementById('galleryDiv').childNodes[0]);
    if(imageid == 6){
      document.getElementById('rightArrow').appendChild(imgRight);
    }
    if (imageid >= 1){
      imageid -= 1;
      if(imageid == 1){
        document.getElementById('leftArrow').removeChild(document.getElementById('leftArrow').childNodes[0]);
      }
      }
    console.log(imageid)
    var img = document.createElement("img");
    img.src = "zdjecia/zdj"+imageid+".jpg";
    document.getElementById('galleryDiv').appendChild(img);
    document.getElementById('galleryDiv').classList.add("galleryDivClicked");

  }

  function rightArrow(){
    console.log(imageid)
    document.getElementById('galleryDiv').removeChild(document.getElementById('galleryDiv').childNodes[0]);

    if(imageid == 1){
      document.getElementById('leftArrow').appendChild(imgLeft);
    }

    if (imageid <= 6){
      imageid += 1;
      if(imageid == 6){
        document.getElementById('rightArrow').removeChild(document.getElementById('rightArrow').childNodes[0]);
      }
      }

    var img = document.createElement("img");
    img.src = "zdjecia/zdj"+imageid+".jpg";
    document.getElementById('galleryDiv').appendChild(img);
    document.getElementById('galleryDiv').classList.add("galleryDivClicked");
  }

  


  
