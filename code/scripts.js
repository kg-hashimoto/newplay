$(function() {
  
    
    const viewwidth = window.innerWidth;
    const explaintop=$('.explain').offset().top;
    const starsend=$('.examples').offset().top + $('.examples').outerHeight();
    const continueEnd=$('#percent-text').offset().top - $(window).outerHeight();
    const winHeight=$(window).outerHeight();
    console.log(starsend);
    console.log(continueEnd);
    let dooropen = 0;
    var elem = document.getElementById("castle");
    gsap.timeline({repeat:-1,yoyo:true})
    .to('.image-photo',10,{x:'-45%'})
    .to('.image-photo',7,{y:'-20%'})
    .to('.image-photo',10,{x:0})
    .to('.image-photo',7,{y:0})
    .to('.image-photo',7,{width:'160%'});
    gsap.timeline({repeat:-1,yoyo:true})
    .to('.image-photo2',7,{y:'-20%'})
    .to('.image-photo2',7,{x:'-45%'})
    .to('.image-photo2',10,{x:0})
    .to('.image-photo2',7,{y:0})
    .to('.image-photo2',7,{width:'160%'});

    gsap.timeline({repeat:-1})
    .to('#alone-person',2,{'left':5})
    .add(()=>{
        $('#wb1').fadeIn();
        $('#text').html('&nbsp;1人でのんびり');
        $('#text').css('line-height',-5+$('#wb1').outerHeight()+'px');
    })
    .to('#alone-person',4,{scale:1.2})
    .add(()=>{
        $('#wb1').fadeOut();
        $('#text').html('');
    })
    .to('#alone-person',1,{'left':-70,scale:1})
    .to('#friend1',2,{'left':5})
    .to('#friend2',2,{'right':5},"-=2")
    .add(()=>{
        $('#wb2').fadeIn();
        $('#text').text('友達とワイワイ');
    })
    .to('#friend1,#friend2',4,{scale:1.2})
    .add(()=>{
        $('#wb2').fadeOut();
        $('#text').text('');
    })
    .to('#friend1',1,{'left':-70,scale:1})
    .to('#friend2',1,{'right':-70,scale:1},"-=1")
    .to('#couple1',2,{'left':5})
    .to('#couple2',2,{'right':5},"-=2")
    .add(()=>{
        $('#wb2').fadeIn();
        $('#text').text('カップルでも');
    })
    .to('#couple1,#couple2',4,{scale:1.2})
    .add(()=>{
        $('#wb2').fadeOut();
        $('#text').text('');
    })
    .to('#couple1',1,{'left':-70,scale:1})
    .to('#couple2',1,{'right':-70,scale:1},"-=1")
    
    gsap.timeline({repeat:-1})
    .to('.continue-text',0.4,{opacity:1})
    .add(()=>{
        $('.continue-text').css('display','none');
    })
    .to('.continue-text',0.4,{opacity:1})
    .add(()=>{
        $('.continue-text').css('display','block');
    });
    console.log(viewwidth);
    	$(window).scroll(function() {
		var value = $(this).scrollTop(); //スクロールの値を取得
        $('.start-text').css('top','-50px');
		$('#scrollValue').text(value);
        $('#blueback').css('opacity', 4 -( value/160));
        $('#orangeback').css('opacity',5 - (value/300));
        $('#castle').css('right',40 + (value/4)-((value/4)%5));
        $('#castle').css('opacity',15-(value/100));
        $('#ground').css('opacity',15-(value/100));
        $('#crowd1').css('right',260 + (value/20));
        $('#crowd2').css('right',70 + (value/10));
        $('#crowd3').css('right',120 + (value/12));
        $('#balloon1').css('top',1000 - value*2);
        $('#balloon2').css('top',870 - value*3);
        $('#balloon3').css('top',1080 - value*3.3);
        $('.explain').css('opacity',-15 + value/100);
        $('.image,.image2').css('transform','translatey('+(explaintop-value)/4.5+'px)');
        $('#crow').css('left',-650 + value);
        if(starsend < value){
            $('.stars').fadeOut();
        }else{
            $('.stars').fadeIn();
        }
        if(viewwidth-(40 + (value/4)-((value/4)%5))<140){
            $('#maid').fadeOut(100);
        }
        if (viewwidth-(40 + (value/4)-((value/4)%5))<120){
            dooropen+=1;
        }
        if (viewwidth-(40 + (value/4)-((value/4)%5))>120 && viewwidth-(40 + (value/4)-((value/4)%5))<180 && dooropen ==0){
         
        elem.src="img/castle-open.png";    }else{
            elem.src="img/castle.png";
        }
        if(value > 1400){
            gsap.timeline().to('.stars',30,{scale:1.5}).to('.stars',30,{x:-50},"-=30");      
        }
        if(value>1050 && value<1450){
            $('.news').fadeIn();
            gsap.to('.news',0.5,{right:8});


        }else{
            $('.news').fadeOut();
            gsap.to('.news',0.5,{right:-250});
        }

        if(value>continueEnd && value<=starsend){
            $('#percent-gage').css('width',((value-continueEnd)/(starsend - continueEnd)*266)+'px');
            $('#percent-text').text(Math.round(((value-continueEnd)/(starsend - continueEnd)*100))+'%');
        }else if(value>starsend){
            $('#percent-gage').css('width','266px');
            $('#percent-text').text('100%');
            $('.continue-text').text('SUCCESS!');
            $('#continue').fadeOut(2000);
            $('#about').fadeIn();

        }

    
    });
    gsap.from("#about", {
        //アニメーションしたい要素を指定
        y: winHeight, //横に500px動かす
        duration: 2, 
        scrollTrigger: {
          trigger: ".examples", //アニメーションが始まるトリガーとなる要素
          start: "bottom top", //アニメーションが始まる位置
          markers: true,
        },
      });

 
});