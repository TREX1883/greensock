let phone = document.querySelector('.location');

console.log("does this work?");
console.log(phone);

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    TweenMax.from(
    ".testing1",
    2,
    {
      x: 600,
      ease: Bounce.easeOut
    }
  );
  TweenMax.from(
    ".testing2",
    2,
    {
      x: -600,
      ease: Bounce.easeOut
    }
  );
});

phone.addEventListener('mouseover', function(){
    console.log("Hello world");
        TweenMax.to(".location", 1, {scale:1.3, x:40});
    });

phone.addEventListener('mouseleave', function(){
    console.log("Hello world");
        TweenMax.to(".location", 4, { scale:1.0, x:-40});
    });