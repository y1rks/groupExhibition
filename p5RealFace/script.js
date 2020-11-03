let imgState = true;
let count = 0;
let blackCount = 0;

function mainProcess() {
  const img1 = document.getElementById("image1");
  const img2 = document.getElementById("image2");
  const img3 = document.getElementById("image3");
  const img4 = document.getElementById("image4");

  if (blackCount >= 80) {
    img1.src = "./images/black/black.bmp";
    img2.src = "./images/black/black.bmp";
    img3.src = "./images/black/black.bmp";
    img4.src = "./images/black/black.bmp";

    if (count === 8) {
      count = 0;
    }

  } else {
    if (count === 4) {
      img1.src = "./images/1/1.BMP";
      img2.src = "./images/1/2.BMP";
      img3.src = "./images/1/3.BMP";
      img4.src = "./images/1/4.BMP";
    } else if (count === 8) {
      img1.src = "./images/2/1.BMP";
      img2.src = "./images/2/2.BMP";
      img3.src = "./images/2/3.BMP";
      img4.src = "./images/2/4.BMP";
      count = 0;
    } else {
      if (imgState) {
        img1.src = "./images/2/1.BMP";
        img2.src = "./images/1/2.BMP";
        img3.src = "./images/1/3.BMP";
        img4.src = "./images/2/4.BMP";
      } else {
        img1.src = "./images/1/1.BMP";
        img2.src = "./images/2/2.BMP";
        img3.src = "./images/2/3.BMP";
        img4.src = "./images/1/4.BMP";
      }
    }
  }

  if (blackCount >= 112) {
    blackCount = 0;
  }

  imgState = !imgState;
  count++;
  blackCount++;
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(mainProcess, 500);
});
