const body_btn = document.querySelector(".total-container");
const dark_btn = document.getElementById("dark-mode-btn");
const contact_icons = document.querySelectorAll(".contact-logo");
let flag = 0;
dark_btn.addEventListener("click", () => {



     if (flag % 2 == 0) {
          body_btn.style.backgroundColor = "black";
          body_btn.style.color = "white";
          contact_icons.forEach(icon => {
               icon.style.backgroundColor = "white";
               icon.style.color = "black";
               icon.style.borderRadius = "50%";
               icon.style.padding = "2px";
               icon.style.margin = "3px";
              
          });
           flag = 1;
     } else {
          body_btn.style.backgroundColor = "white";
          body_btn.style.color = "black";
          contact_icons.forEach(icon => {
               icon.style.backgroundColor = "white";
               icon.style.color = "black";
          });
          flag = 0;
     }





});

// const body_btn = document.querySelector(".total-container");
// const dark_btn = document.getElementById("dark-mode-btn");
// const contact_icons = document.querySelectorAll(".contact-logo");

// let flag = 0; // ✅ Define outside so it persists across clicks

// dark_btn.addEventListener("click", () => {
//   if (flag % 2 === 0) {
//     // Dark mode ON
//     body_btn.style.backgroundColor = "black";
//     body_btn.style.color = "white";

//     contact_icons.forEach(icon => {
//       icon.style.backgroundColor = "white";
//       icon.style.color = "black";
//     });

//     flag = 1;
//   } else {
//     // Light mode ON
//     body_btn.style.backgroundColor = "white";
//     body_btn.style.color = "black";

//     contact_icons.forEach(icon => {
//       icon.style.backgroundColor = "white";
//       icon.style.color = "black";
//     });

//     flag = 0;
//   }
// });
