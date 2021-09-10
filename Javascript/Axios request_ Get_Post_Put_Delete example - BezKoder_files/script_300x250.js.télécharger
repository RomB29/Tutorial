var JIVOX = JIVOX || {};

JIVOX.app = {
  init: function() 
  {
    var frame2 = $("#frame2").attr('class');
    var frame3 = $("#frame3").attr('class');
    var frame4 = $("#frame4").attr('class');
    var frame5 = $("#frame5").attr('class'); 
    if(frame2=="frame2 girl")
    {
      document.getElementById("f2-pro-content").style.cssText+="display:none";
      document.getElementById("f2-logo").style.cssText+="top:auto;left:auto;bottom:72px;right:11px;margin:0;z-index:1";
      document.getElementById("f2-rate").style.cssText+="position:absolute;top:auto;bottom:49px;right:11px;left:auto;display:block";
      document.getElementById("f2-dis").style.cssText+="position:absolute;top:42px;left:11px;display:none";
      document.getElementsByClassName("f2-cta")[0].style.cssText+="left:10px";
      document.getElementsByClassName("f2-rate-dis")[0].style.cssText+="position: static;top: 0px;width: 0px;padding: 0;box-sizing: border-box;text-align: left";
      document.getElementById("f2-offer").style.cssText+="bottom:20px;right:11px";
    }
    else
    {
      document.getElementById("f2-offer").style.cssText+="display:none"; 
      document.getElementById("f2-dis").style.cssText+="display:none";
    }
    if(frame3=="frame3 shoe")
    {
      document.getElementById("f3-offer").style.cssText+="display:none";
      document.getElementById("f3-logo").style.cssText+="top:9px;left:0;right:0;margin:0 auto";
      document.getElementById("f3-rate").style.cssText+="position:static;top:0px;left:0px;display:inline-block";
      document.getElementById("f3-dis").style.cssText+="position:static;top:0px;left:0px;display:none";
      document.getElementsByClassName("f3-rate-dis")[0].style.cssText+="position: absolute;top: 165px;width: 300px;padding: 0 5px;box-sizing: border-box;text-align: center";
    } 
    else
    {
      document.getElementById("f3-pro-content").style.cssText+="display:none";
      document.getElementById("f3-dis").style.cssText+="display:none";
    } 
    if(frame4=="frame4 girl")
    {
      document.getElementById("f4-pro-content").style.cssText+="display:none";
      document.getElementById("f4-logo").style.cssText+="top:auto;left:auto;bottom:72px;right:11px;margin:0;z-index:1";
      document.getElementById("f4-rate").style.cssText+="position:absolute;top:auto;bottom:49px;right:11px;left:auto;display:block";
      document.getElementById("f4-dis").style.cssText+="position:absolute;top:42px;left:11px;display:none";
      document.getElementsByClassName("f4-cta")[0].style.cssText+="left:10px";
      document.getElementsByClassName("f4-rate-dis")[0].style.cssText+="position: static;top: 0px;width: 0px;padding: 0;box-sizing: border-box;text-align: left";
      document.getElementById("f4-offer").style.cssText+="bottom:20px;right:11px";
    }
    else
    {
      document.getElementById("f4-offer").style.cssText+="display:none"; 
      document.getElementById("f4-dis").style.cssText+="display:none";
    }

    if(frame5=="frame5 shoe")
    {
      document.getElementById("f5-offer").style.cssText+="display:none";
      document.getElementById("f5-logo").style.cssText+="top:9px;left:0;right:0;margin:0 auto";
      document.getElementById("f5-rate").style.cssText+="position:static;top:0px;left:0px;display:inline-block";
      document.getElementById("f5-dis").style.cssText+="position:static;top:0px;left:0px;display:none";
      document.getElementsByClassName("f5-rate-dis")[0].style.cssText+="position: absolute;top: 165px;width: 300px;padding: 0 5px;box-sizing: border-box;text-align: center";
    }
    else
    {
      document.getElementById("f5-pro-content").style.cssText+="display:none";
      document.getElementById("f5-dis").style.cssText+="display:none";
    } 

    var check_ = document.getElementsByClassName('container')[0].getAttribute('data-value');
   function setAlign(){
      var logoHeight = document.getElementById("f1-logo").scrollHeight;
      var textHeight = document.getElementsByClassName("intro_text")[0].scrollHeight;
      var totalHeight = 250;
      var logoGap = 9;
      var setTop = ((totalHeight - (logoHeight+textHeight))/2);
      console.log(logoHeight,textHeight,setTop);
      document.getElementById("f1-logo").style.top = (setTop-logoGap) + "px";
      document.getElementsByClassName("intro_text")[0].style.top = (setTop+logoGap+logoHeight) + "px";
  }
  var count = false;
   function aniWidth()
  {   
    if(frame2=="frame2 shoe")
    {
    var f2width = (300-$(".f2-cta").innerWidth())/2;
    $(".f2-cta").animate({left: f2width+'px'});
    }
    if(frame3=="frame3 shoe")
    {
    var f3width = (300-$(".f3-cta").innerWidth())/2;
    $(".f3-cta").animate({left: f3width+'px'});
    }
    if(frame4=="frame4 shoe")
    {
     var f4width = (300-$(".f4-cta").innerWidth())/2;
     $(".f4-cta").animate({left: f4width+'px'});  
    }
    if(frame5=="frame5 shoe")
    {
     var f5width = (300-$(".f5-cta").innerWidth())/2;
     $(".f5-cta").animate({left: f5width+'px'});  
    }    
    gsap.to(".frame1",{opacity:1},1); 
    console.log($(".f2-cta").innerWidth());
   } 
   function setCorner(){
    if((typeof dynamicData != "undefined") && (typeof dynamicData['NC_LABEL_FD'] != "undefined") && (dynamicData['NC_LABEL_FD'].length >= 1)){
        var label_val = dynamicData['NC_LABEL_FD'][0]['saleCopy'];
        if(dynamicData['NC_LABEL_FD'][0]['position_text']=="NA"){
          var setTop = 24;//20%
          var setRight = 5.5;
        }
        if(dynamicData['NC_LABEL_FD'][0]['position_text']=="Front"){
          var setTop =21.5;
          var setRight = 8;//SAVE
          if(label_val.length>=5){ //SPARE
            var setTop = 21.5;
            var setRight = 8;
          }
          if(label_val.length>5){ //SCONTO
            var setTop = 21.5;
            var setRight = 4.5;
          }
          if(label_val=="ΕΚΠ/ΣΗ")
          {
            var setTop = 22.5;
            var setRight = 6;
          }
          
        }
        if(dynamicData['NC_LABEL_FD'][0]['position_text']=="Back"){
          var setTop = 21.5;//OFF
          var setRight = 10;
          if(label_val.length>=4){//ERAF
            var setTop = 19;
            var setRight = 7;
          }
          if(label_val.length>=5){//RABAT
            var setTop = 21.5;
            var setRight = 5.5;
          }
          if(label_val.length>5){//RABAAT
            var setTop = 20.5;
            var setRight = 4;
          }
        }
    }else{
        var setTop = 12;
    }
    var ab = document.getElementsByClassName('sale_push');
    var ba = document.getElementsByClassName('sale_corner');
    console.log(ab,ba);
    for(i_=0;i_<ab.length;i_++){
          document.getElementsByClassName('sale_push')[i_].style.right = setRight + "px";
          document.getElementsByClassName('sale_push')[i_].style.top = setTop + "px";       
    }
  }
   function csw_re_2(){
     var csw_2 = document.getElementById('frame2').getAttribute('data-val');
      jvxAd.recordEventByName(csw_2, 0);
   }
   function csw_re_3(){
     var csw_3 = document.getElementById('frame3').getAttribute('data-val');
      jvxAd.recordEventByName(csw_3, 0);
   }
   function csw_re_4(){
     var csw_4 = document.getElementById('frame4').getAttribute('data-val');
      jvxAd.recordEventByName(csw_4, 0);
   }
   function csw_re_5(){
     var csw_5 = document.getElementById('frame5').getAttribute('data-val');
      jvxAd.recordEventByName(csw_5, 0);
   }

  function animate()
  {
  var f2_offer = document.getElementById("f2-save").innerHTML;
  var f3_offer = document.getElementById("f3-save").innerHTML;
  var f4_offer = document.getElementById("f4-save").innerHTML;
  var f5_offer = document.getElementById("f5-save").innerHTML;
  function call(){
    count = true;
  }
  var value__ = 0.01;
  var mac = "Mac";
  var safari = "Safari";
  if((navigator.userAgent.indexOf(mac) > -1) && (navigator.userAgent.indexOf(safari) > -1)) 
  {
    if(navigator.userAgent.indexOf("Chrome") > -1){
      console.log("Chrome");
    }else{
      console.log("Safari");
      var value__ = 0;
    }
  }   
  var tl =  new TimelineMax({ repeat: -1 });   
  tl.add(scene1());
  tl.add(scene2());
  tl.add(scene3());
  tl.add(scene4());
  tl.add(scene5());
  var maxAnimationTime = 29.7;
      TweenLite.delayedCall(maxAnimationTime, stopAnimation);
      function stopAnimation(){
          tl.pause();
      }
      function scene1()
      {  
        tl.add(function(){
          if(count == true){
            if(f5_offer.length > 0)
            {
               tl.set(".f5-save-bg",{marginTop:"0px"},0);
               tl.set(".f5-right",{y:0,opacity:1},0); 
            }
            tl.set(".f5-cta",{width:"auto",visibility:"visible"},0);  
           tl.fromTo(".frame5-inner",{y:0},{y:-50,rotation: value__,duration:1,ease:Power3.easeOut},0);
           tl.fromTo(".frame5",{opacity:1},{opacity:1},0)
            tl.fromTo(".frame5", {height:"250px",y:0,}, {height:"-10px",y:-3,ease:Power3.easeOut,rotation: value__,duration:1.5},0); 
             tl.fromTo(["#frame1-text,#f1-logo"],{y:30},{y:0,ease:Power1.easeOut,rotation: value__,duration:1},0);
    
          }
      });      
      tl.set(["#f5-code,#f5-product,#f5-rate,#f5-offer,#f5-logo,#f5-dis"],{y:0});
       tl.to([".frame2,.frame3,.frame4"],{opacity:1},1);  
       tl.fromTo(["#frame1-text"],{opacity:0},{opacity:1},0.5);
       tl.fromTo(["#frame1-text"],{y:30},{y:0,ease:Power1.easeOut,rotation: 0.01,duration:0.5},0.5);
       tl.fromTo(".frame1", {height:"250px",y:0}, {height:"-10px",y:-3,ease:Power3.easeOut,rotation: value__,duration:1.5,delay:1},1);
       tl.fromTo(".frame1-inner",{y:0},{y:-40,rotation: value__,duration:1.5,ease:Power3.easeOut,delay:1},1)
       tl.to(".frame1", {opacity:0,rotation: value__,duration:0,delay:2.5},1);
      }
      function scene2()
      {   
       if(frame2=="frame2 shoe")
       {   
       tl.fromTo(["#f2-logo,#f2-product"],{y:30},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:1},1)
       tl.fromTo("#f2-pro-content",{y:15},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:1},1)
       tl.fromTo(["#f2-rate,#f2-dis"],{y:20},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:1},1)
       }
       else
       {
        tl.fromTo("#f2-product",{y:35},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:1},1) 
        tl.fromTo(["#f2-logo,#f2-rate,#f2-dis,#f2-offer"],{y:20},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:1},1) 
       }
       if(f2_offer.length > 0)
       {
       tl.fromTo(".f2-save-bg",{marginTop:"-80px"},{marginTop:"0px",ease:Power4,duration:1,delay:1.5},1)
       tl.fromTo(".f2-right",{y:10,opacity:0},{y:0,opacity:1,rotation: value__,duration:0.5,delay:2},1)
       }
       tl.fromTo(".f2-cta",{width:"0px",visibility:"hidden"},{width:"auto",visibility:"visible",rotation: value__,duration:0.8,delay:1.5},1)
       tl.fromTo(".frame2", {height:"250px",y:0}, {height:"-10px",y:-3,ease:Power3.easeOut,rotation: value__,duration:1.5,delay:4},1);
       tl.fromTo(".frame2-inner",{y:0},{y:-40,rotation: value__,duration:1.5,ease:Power3.easeOut,delay:4},1)
       tl.to(".frame2", {opacity:0,rotation: value__,duration:0,delay:5.5},1);
       tl.add(function() {csw_re_2()}, "=+0");
      }
      function scene3()
      {
       if(frame3=="frame3 girl")
       { 
       tl.fromTo("#f3-product",{y:35},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:4},1)
       tl.fromTo(["#f3-logo,#f3-rate,#f3-dis,#f3-offer"],{y:25},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:4},1)
       }
       else
       {
        tl.fromTo(["#f3-logo,#f3-product"],{y:30},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:4},1)
        tl.fromTo("#f3-pro-content",{y:15},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:4},1)
        tl.fromTo(["#f3-rate,#f3-dis"],{y:20},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:4},1)  
       }
       if(f3_offer.length > 0)
       {
       tl.fromTo(".f3-save-bg",{marginTop:"-80px"},{marginTop:"0px",ease:Power4,duration:1,delay:4.5},1)
       tl.fromTo(".f3-right",{y:10,opacity:0},{y:0,opacity:1,rotation: value__,duration:0.5,delay:5},1)
       }
       tl.fromTo(".f3-cta",{width:"0px",visibility:"hidden"},{width:"auto",visibility:"visible",rotation: value__,duration:0.8,delay:4.5},1)
       tl.fromTo(".frame3", {height:"250px",y:0}, {height:"-10px",y:-3,ease:Power3.easeOut,rotation: value__,duration:1.5,delay:7},1);
       tl.fromTo(".frame3-inner",{y:0},{y:-40,rotation: value__,duration:1.5,ease:Power3.easeOut,delay:7},1)
       tl.to(".frame3", {opacity:0,rotation: value__,duration:0,delay:8.5},1);
       tl.add(function() {csw_re_3()}, "=+0");
      }
      function scene4()
      {
        if(frame4=="frame4 shoe")
       {  
       tl.fromTo(["#f4-logo,#f4-product"],{y:30},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:7},1)
       tl.fromTo("#f4-pro-content",{y:15},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:7},1)
       tl.fromTo(["#f4-rate,#f4-dis"],{y:20},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:7},1)
       }
       else
       {
        tl.fromTo("#f4-product",{y:35},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:7},1) 
        tl.fromTo(["#f4-logo,#f4-rate,#f4-dis,#f4-offer"],{y:20},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:7},1) 
       }
       tl.to(".frame4", {zIndex:7,delay:8.5},1);
       if(f4_offer.length > 0)
       {
       tl.fromTo(".f4-save-bg",{marginTop:"-80px"},{marginTop:"0px",ease:Power4,duration:1,delay:7.5},1)
       tl.fromTo(".f4-right",{y:10,opacity:0},{y:0,opacity:1,rotation: value__,duration:0.5,delay:8},1)
       }
       tl.fromTo(".f4-cta",{width:"0px",visibility:"hidden"},{width:"auto",visibility:"visible",rotation: value__,duration:0.8,delay:7.5},1)
       tl.fromTo(".frame4", {height:"250px",y:0}, {height:"-10px",y:-3,ease:Power3.easeOut,rotation: value__,duration:1.5,delay:10},1);
       tl.fromTo(".frame4-inner",{y:0},{y:-40,rotation: value__,duration:1.5,ease:Power3.easeOut,delay:10},1)
       tl.to(".frame5", {height:"250px",opacity:1,delay:9.5},1);
       tl.to(".f5-cta",{width:"0px",visibility:"hidden",delay:9.5},1);
       if(f5_offer.length > 0)
        {
        tl.to(".f5-save-bg",{marginTop:"-100px",delay:9.5},1)
        tl.to(".f5-right",{y:5,opacity:0,delay:9.5},1)
        }
       tl.to(".frame5-inner", {y:0,delay:9.5},1);
       tl.to(".frame4", {opacity:0,rotation: value__,duration:0,delay:11.5},1);
       tl.add(function() {csw_re_4()}, "=+0");
      }
    
      function scene5()
      {
       if(frame5=="frame5 girl")
       { 
        tl.fromTo("#f5-product",{y:35},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:10},1) 
        tl.fromTo(["#f5-logo,#f5-rate,#f5-dis,#f5-offer"],{y:25},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:10},1)
       }
       else
       {
        tl.fromTo(["#f5-logo,#f5-product"],{y:30},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:10},1)
        tl.fromTo("#f5-pro-content",{y:15},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:10},1)
        tl.fromTo(["#f5-rate,#f5-dis"],{y:20},{y:0,ease:Power3.easeOut,rotation: value__,duration:2.5,delay:10},1)  
       }
       if(f5_offer.length > 0)
       {
       tl.fromTo(".f5-save-bg",{marginTop:"-80px"},{marginTop:"0px",ease:Power4,duration:1,delay:10.5},1)
       tl.fromTo(".f5-right",{y:10,opacity:0},{y:0,opacity:1,rotation: value__,duration:0.5,delay:11},1)
       }
       tl.fromTo(".f5-cta",{width:"0px",visibility:"hidden"},{width:"auto",visibility:"visible",rotation: value__,duration:0.8,delay:10.5},1)
       tl.to(".frame1",{height:"250px",y:0,zIndex:0,visibility:"hidden",delay:12,rotation: value__,duration:0},1);
       tl.to(".frame1-inner",{y:0,delay:12},1);
       tl.to(".frame1",{visibility:"visible",opacity:1,delay:13,rotation: value__,duration:0},1);
       tl.add(function() {call()}, "=+0");  
       tl.add(function() {csw_re_5()}, "=+0");
      } 
  }
   setTimeout(aniWidth,10);
   setTimeout(animate,100);
   setTimeout(setAlign,100);
   setTimeout(setCorner,100);
}
}