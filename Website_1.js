function locomotive_animation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main_parent"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main_parent", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}





var right_elem_img = document.querySelectorAll("#right-elem");

right_elem_img.forEach(function(element) {
    // element.addEventListener("mouseenter" , function(){
    //     element.childNodes[3].style.opacity =1;
    // });               (OR)

element.addEventListener("mouseenter" , function(){
    gsap.to(element.childNodes[3] , {
        opacity:1,
        scale:1
    })
})
element.addEventListener("mouseleave" , function(){
    gsap.to(element.childNodes[3] , {
        opacity:0,
        scale:0
    })
})

element.addEventListener("mousemove" ,function(dets){
    gsap.to(element.childNodes[3] ,{
        x : dets.x - element.getBoundingClientRect().x
    })
})
});



var video = document.querySelector(".page_3 video");
var video_bg = document.querySelector(".page3_center");

video_bg.addEventListener("click" , function(){
    video.play();
    gsap.to(video , {
        transform:"scaleX(1)  scaleY(1)",
        opacity:1,
        borderRadius:0

    })
})

 video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.2) scaleY(0)",
            opacity: 0,
           
        })
    })

// video_bg.addEventListener("click" , function(){
//     video.pause();
//     gsap.to(video ,{
//         transform:"scaleX(0) scaleY(0)",
//         opcaity:0
//     })
// })

var sectionss = document.querySelectorAll(".section-right");

sectionss.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        elem.childNodes[3].play();
        elem.childNodes[3].style.opacity=1;
    })

    elem.addEventListener("mouseleave" , function(){
        elem.childNodes[3].load();
        elem.childNodes[3].style.opacity=0;
    })
});


var sections_move = document.querySelectorAll(".sectionss-right");
sections_move.forEach(function(elem){
   console.log(elem)
})
// sections_move.addEventListener("mousemove" ,function(dets){
// })



var dropd = document.querySelectorAll("#headingarrow i");
var summ = document.querySelectorAll("summary");
dropd.forEach(function(icon) {
        icon.addEventListener("click", function() {
    if (icon.classList.contains("ri-arrow-drop-down-line")) {
            icon.classList.remove("ri-arrow-drop-down-line");
            icon.classList.add("ri-arrow-drop-up-line");
        } else {
            icon.classList.remove("ri-arrow-drop-up-line");
            icon.classList.add("ri-arrow-drop-down-line");
        }
    });
});


gsap.from("#page9_part2 h4",{
 x: 0,
 duration:1,
stragger:{
    amount:-0.5
},
  scrollTrigger: {
            trigger: "#page9_part2",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top -10%",
            scrub: true
        }
    })


gsap.from("#page9_part3 h4",{
 x: 0,
 duration:1,
stragger:{
    amount:-0.5
},
  scrollTrigger: {
            trigger: "#page9_part3",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top -10%",
            scrub: true
        }
    })


    
gsap.from("#page9_part4 h4",{
 x: 0,
 duration:1,
stragger:{
    amount:-0.5
},
  scrollTrigger: {
            trigger: "#page9_part4",
            scroller: "body",
            // markers:true,
            start: "top 80%",
            end: "top -10%",
            scrub: true
        }
    })

// locomotive_animation()
