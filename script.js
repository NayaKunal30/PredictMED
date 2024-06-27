var animation = lottie.loadAnimation({
    container: document.getElementById('animation-container1'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './public/animation1.json' 
  });
  var animation = lottie.loadAnimation({
      container: document.getElementById('animation-container2'), 
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './public/animation2.json' 
    });
    lottie.loadAnimation({
      container: document.getElementById('animation-container3'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './public/animationmain.json' 
    });
    
// Selecting the mobile menu button and the dropdown menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Adding click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('active'); // Toggle the 'active' class on the dropdown menu
});

