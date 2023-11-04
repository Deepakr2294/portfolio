



// loder js start
let loader = document.getElementById('loading');
let main = document.getElementById('main-section');

function loadfun() {
  main.style.visibility = 'hidden';
  // Hide the loader after 3000 milliseconds (3 seconds)
  setTimeout(function () {
    main.style.visibility = 'visible';
    loader.style.display = 'none';
  }, 3000);
}


// loder js closed


// header js start

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// header js closed






// nav links js

// // // project  section start

document.addEventListener('DOMContentLoaded', function () {
  let splide = new Splide(".splide", {
      type: "loop",
      perPage: 3,
      focus: "center",
      updateOnMove: true,
      padding: "2%",
      pagination: false,
      breakpoints: {
          1280: {
              perPage: 1,
              padding: "30%",
          },
          678: {
              padding: "18%",
          },
      },
  });

  splide.mount();
});
// project section closed 



//  top scroll button js
// $(document)?.ready(function () {
//   'use strict';
//   $('i').on('click', function () {
//      $('html').animate({
//          scrollTop: 0
//      }, 800);
//   });
//   $(window).on('scroll', function () {
//      if ($(window).scrollTop() > 800) {
//          $('i').fadeIn();
//      } else {
//          $('i').fadeOut();
//      }
//   });
// });

// navbar menu item highlight js start

var lastId,
  topMenu = $("#nav-head1"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation

menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of the current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active-nav class
    menuItems
      .parent().removeClass("active-nav")
      .end().filter("[href='#" + id + "']").parent().addClass("active-nav");
  }
});

// 

