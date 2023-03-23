window.addEventListener('scroll', function() {

 document.querySelector('.nav__title').innerHTML=Math.round(pageYOffset)
    document.querySelector('.bar__filler').style.width=pageYOffset/100+'%';
    
    setTimeout(
        function(){
 if(this.pageYOffset>=300){
document.querySelector('.nav').style.top='0px'
 
}
else{
    document.querySelector('.nav').style.top='-100px'   
}
},1003)
  });
 
  function Tr(event){
    event.target.classList.toggle('tr')
    
  }
  let i=0;
  function Left(event){
    i+=Math.random()*100
    event.target.style.marginLeft+=i+'px'
  }
  setTimeout(function(){
    let unit=document.querySelectorAll('.unit')
    for(let i=0;i<unit.length;i++){
        unit[i].style.position='relative'
    }
    
  document.querySelector('.unit1').style.marginLeft=Math.random()*1000+'px';
  document.querySelector('.unit2').style.marginLeft=Math.random()*1000+'px';
  document.querySelector('.unit3').style.marginLeft=Math.random()*1000+'px';
  document.querySelector('.unit4').style.marginLeft=Math.random()*1000+'px';
  document.querySelector('.unit5').style.marginLeft=Math.random()*1000+'px';
  document.querySelector('.unit6').style.marginLeft=Math.random()*1000+'px';
  document.querySelector('.unit7').style.marginLeft=Math.random()*1000+'px';



  document.querySelector('.unit1').style.marginTop=Math.random()*100+'px';
  document.querySelector('.unit2').style.marginTop=Math.random()*100+'px';
  document.querySelector('.unit3').style.marginTop=Math.random()*100+'px';
  document.querySelector('.unit4').style.marginTop=Math.random()*100+'px';
  document.querySelector('.unit5').style.marginTop=Math.random()*100+'px';
  document.querySelector('.unit6').style.marginTop=Math.random()*100+'px';
  document.querySelector('.unit7').style.marginTop=Math.random()*100+'px';

  },2000)