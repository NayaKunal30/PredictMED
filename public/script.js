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