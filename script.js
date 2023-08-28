// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true

});

// let menu=document.querySelector("#menu").addEventListener("onclick",function(){
//     document.querySelector("#menu").style.opacity=1;
// });
// menu

function firstPageAnim() {
    var tl = gsap.timeline(100);
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1
    })
        .to('.boundingelem', {
            y: 0,
            // opacity:1,
            ease: Expo.easeInOut,
            delay: -1,
            duration: 1.5, stagger: 0.3
        })

        .from("#hero-footer", {
            y: +10,
            opacity: 0,
            ease: Expo.easeInOut,
            delay: -0.5,
            duration: 1

        })

}
function flatCircle() {
    window.addEventListener("mousemove", function (dets) {

    })
}
firstPageAnim();
function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX + 3}px,${dets.clientY + 3}px)`;
    })
}
circleMouseFollower()

// function showImage(){
//     window.addEventListener( 'mousemove',function(dets){
//     document.getElementsByClassName(".hide-image").style.visibility='visible';
//     document.getElementsByClassName(".hide-image").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
//     alert("hello")
//     }

//     )
// }
// showImage();


   
    document.querySelectorAll(".element").forEach(function (elem) {
        elem.addEventListener("mouseleave",function(dets){
            gsap.to(elem.querySelector("img"),{
           display:"none"
            })
            gsap.to( elem.querySelector("h1"),{
                opacity:0.8,
               paddingLeft:"0px",
               })
            document.querySelector("#mini-circle").style.width =`10px`;
               document.querySelector("#mini-circle").style.height =`10px`;
               document.querySelector("#mini-circle").innerHTML=" ";
               
        })
        elem.addEventListener("mousemove", function (dets) {
            // clearTimeout(timeout)
            var difftop=dets.clientY - elem.getBoundingClientRect().top;
            // const difftop=  ;
            // console.log()
            gsap.to(elem.querySelector("img"), {
                top:difftop,
              display:"block",
                ease:Power1,
                left:dets.clientX ,
                
            });
               gsap.to( elem.querySelector("h1"),{
                opacity:0.2,
               paddingLeft:"50px",
            // ease:Expo.easeO,
            // duration:1.5
            // overflow:hidden
            

               })
               
            
               document.querySelector("#mini-circle").style.width =`40px`;
               document.querySelector("#mini-circle").style.height =`40px`;
               document.querySelector("#mini-circle").style.opacity =`0.5`;
               document.querySelector("#mini-circle").innerHTML="view"
        });
        
        // setTimeout(function(){
        //     gsap.to( elem.querySelector("h1"),{
        //         opacity:0.6,
        //        paddingLeft:"0px"
        //         // ease:Expo.easeOut,
        //         // overflow:hidden

        //        },100)
        //})
    });
    let currentDate = new Date();
let am_pm = currentDate.toLocaleTimeString();
console.log(currentDate)
  document.getElementById("time").innerHTML=currentDate.getHours()+":"+currentDate.getMinutes()+" EST";
document.getElementById("year").innerHTML= new Date().getFullYear()+"&copy;"