/*******mohammed gamal mohammed / Cairo********/


var firstTextp = document.getElementById('first-text-p');
    text ='I am Mohamed Gamal from Cairo, Egypt. I am a frontend designer. I am good at HTML ,HTML5 ,CSS ,CSS3 ,JS ,Bootstrap3 , Bootstrap4 and jQuery. I am hungry to work with a new group,inbox me .We will talk about the details in your project and you have the right to modify anything you want.'
var ArrayfirstTextp = Array.from(text);

var i =0
  setTimeout(function(){
    setInterval(function(){
      if(i>=ArrayfirstTextp.length){
          clearInterval(setInterval);
      }else{
        firstTextp.textContent+=ArrayfirstTextp[i]
        i++
      }
  },20)

  },1500)

var videos = document.querySelectorAll('#workes video'),
    videosarray = Array.from(videos);

videosarray.forEach(function(video){
    $('video').hover(function(){
      $(this).attr('controls','');
    },function(){
      this.removeAttribute('controls');
    
    })

})

/*************************************** */
// Looding
window.onload=function(){
  setTimeout(function(){
      document.querySelector('.looding').classList.add('go');
      document.querySelector('.looding').remove();
      document.querySelector('body').style.overflow='auto'
  },1500)
}
/***************************************** */


$('#first #conection i').hover(function(){
  $(this).children('span').fadeIn(800)
},function(){
  $(this).children('span').fadeOut(80)
})