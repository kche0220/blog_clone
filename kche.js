  var swiper = new Swiper(".sns_slide", {
    slidesPerView: "4",
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 7000,
  });

  
 document.addEventListener("DOMContentLoaded", function () {
   const ham = document.querySelector(".ham");
   const hamDep = document.querySelector(".ham_dep");

   ham.addEventListener("click", function () {
     if (hamDep.style.opacity === "0" || hamDep.style.opacity === "") {
       hamDep.style.opacity = "1";
     } else {
       hamDep.style.opacity = "0";
     }
   });
 });
 
 