const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const firstanim =()=>{
var tl = gsap.timeline();


    tl.from('nav',{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut
})

.to('.boundingele',{
    y:0,
    ease:Expo.easeInOut,
    duration:2,
    delay:-1.6
})
.from("#landingfooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}

function circleproperties (){
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      mouse(xscale, yscale);
    })


}






const mouse =(xscale,yscale)=>{
    window.addEventListener('mousemove',(dets)=>{
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`
    })

}





document.querySelectorAll('.elem').forEach(function(items){
    var rotate = 0 ;
    var diff = 0 ;


    items.addEventListener('mouseleave',function(details){
        
        gsap.to(items.querySelector(".elemimg"),{
            opacity:0,
            ease:Power3,
            duration:0.6,
            
        })   
    })

    items.addEventListener('mousemove',function(details){
        var diff1 = details.clientY - items.getBoundingClientRect().top
        diff1 = details.clientX-rotate;
        rotate = details.clientX;
        
        gsap.to(items.querySelector(".elemimg"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left :details.clientX,
            rotate: gsap.utils.clamp(-20,20,diff1)
        })   
    })
})

firstanim()
mouse()
circleproperties()
