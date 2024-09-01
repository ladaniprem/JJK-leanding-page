function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
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
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./p (102).jpg
       ./p (103).jpg
       ./p (104).jpg
       ./p (105).jpg
       ./p (106).jpg
       ./p (107).jpg
       ./p (108).jpg
       ./p (109).jpg
       ./p (110).jpg
       ./p (111).jpg
       ./p (112).jpg
       ./p (113).jpg
       ./p (114).jpg
       ./p (115).jpg
       ./p (116).jpg
       ./p (117).jpg
       ./p (118).jpg
       ./p (119).jpg
       ./p (120).jpg
       ./p (121).jpg
       ./p (122).jpg
       ./p (123).jpg
       ./p (124).jpg
       ./p (125).jpg
       ./p (126).jpg
       ./p (127).jpg
       ./p (128).jpg
       ./p (129).jpg
       ./p (130).jpg
       ./p (131).jpg
       ./p (132).jpg
       ./p (133).jpg
       ./p (134).jpg
       ./p (135).jpg
       ./p (136).jpg
       ./p (137).jpg
       ./p (138).jpg
       ./p (139).jpg
       ./p (140).jpg
       ./p (141).jpg
       ./p (142).jpg
       ./p (143).jpg
       ./p (144).jpg
       ./p (145).jpg
       ./p (146).jpg
       ./p (147).jpg
       ./p (148).jpg
       ./p (149).jpg
       ./p (150).jpg
       ./p (151).jpg
       ./p (152).jpg
       ./p (153).jpg
       ./p (154).jpg
       ./p (155).jpg
       ./p (156).jpg
       ./p (157).jpg
       ./p (158).jpg
       ./p (159).jpg
       ./p (160).jpg
       ./p (161).jpg
       ./p (162).jpg
       ./p (163).jpg
       ./p (164).jpg
       ./p (165).jpg
       ./p (166).jpg
       ./p (167).jpg
       ./p (168).jpg
       ./p (169).jpg
       ./p (170).jpg
       ./p (171).jpg
       ./p (172).jpg
       ./p (173).jpg
       ./p (174).jpg
       ./p (175).jpg
       ./p (176).jpg
       ./p (177).jpg    
./p (220).jpg
./p (221).jpg
./p (222).jpg
./p (223).jpg
./p (224).jpg
./p (225).jpg
./p (226).jpg
./p (227).jpg
./p (228).jpg
./p (229).jpg
./p (230).jpg
./p (231).jpg
./p (232).jpg
./p (233).jpg
./p (234).jpg
  `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
});
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  let nav = document.querySelector("nav");

window.addEventListener("load",()=>{

setTimeout(()=>{

nav.style.height = "0";
nav.style.fontSize = "0";

}, 1000);

})
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })