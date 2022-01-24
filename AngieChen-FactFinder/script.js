
	document.getElementById('menu').a.addEventListener("click",button1);
	
	function button1(){
		document.getElementById('funfact').innerHTML = "<div> Diamonds and pencils are made of the same material. <br> <br> <img src = 'images/diamond.jpg' width= 'auto' height='300px' alt= 'give me that ring'></div>"; 
	}
	
	
	document.getElementById('menu').b.addEventListener("click",button2);
	
	function button2(){
		document.getElementById('funfact').innerHTML = "<div>Honey is the only food that truly lasts forever and does not spoil. <br> <br> <img src = 'images/honey.jpg' width= 'auto' height='300px alt= 'honey honey baby'> </div>"; 
	}

	document.getElementById('menu').c.addEventListener("click",button3);
	
	function button3(){
		document.getElementById('funfact').innerHTML = " <div> The beach became a popular destination during Britain’s Industrial Revolution, mostly because doctors were prescribing it  <br> <br> <img src = 'images/beach.jpg' width= 'auto' height='250px alt= 'big beach'> </div>"; 
	}

	document.getElementById('menu').d.addEventListener("click",button4);
	
	function button4(){
		document.getElementById('funfact').innerHTML = " <div> There are more trees on earth than the stars in the milky way. <br> <br> <img src = 'images/space.jpg' width= 'auto' height='250px alt= 'woahhh stars'> </div>"; 
	}

	document.getElementById('menu').e.addEventListener("click",button5);
	
	function button5(){
		document.getElementById('funfact').innerHTML = " <div> Trees are the longest living organisms on Earth, and never die of old age.<br><br> <img src = 'images/tree.jpg' width= 'auto' height='275px alt= 'lonely tree'> </div>"; 
	}
	document.getElementById('style').x.addEventListener("click",clouds);
	
		
	function clouds(){
		document.querySelector('body').style.backgroundColor = "#F9F8F8";
		document.querySelector('main').style.backgroundColor = "#FDF1D9";
		document.querySelector('main').style.border= "3px solid #FADEA7";
		document.querySelector('section').style.backgroundColor = "#D7E9EA";
		document.querySelector('section').style.color = "#80909D";
		document.querySelector('section').style.border= "3px solid #FADEA7";
		
		var subs = document.getElementsByTagName('input');
		
		for(var n= 0 ; n < 8; n++){
			subs[n].style.backgroundColor= "#D7E9EA";
			subs[n].style.color= "#80909D";
			subs[n].style.borderWidth = "0px";
			
		}
		
	}
	
	document.getElementById('style').y.addEventListener("click", classic,);
	
	function classic(){
		document.querySelector('body').style.backgroundColor = "#f2d6ff";
		document.querySelector('main').style.backgroundColor = " #fff0f5";
		document.querySelector('main').style.border= "3px solid #ffb3cc";
		document.querySelector('section').style.backgroundColor = " #F8F6FF";
		document.querySelector('section').style.color = "#C5BDE7";
		document.querySelector('section').style.border= "3px solid #ffb3cc";
		
		var subs = document.getElementsByTagName('input');
		
		for(var n= 0 ; n < 8; n++){
			subs[n].style.backgroundColor= " #F8F6FF";
			subs[n].style.color= "#C5BDE7";
			subs[n].style.border= "3px solid #ffb3cc";
			
		}
		
	}
	document.getElementById('style').z.addEventListener( "click", beach,);
	
	function beach(){
		document.querySelector('body').style.backgroundColor = "#B5F7F1";
		document.querySelector('main').style.backgroundColor = "#FBB2BA";
		document.querySelector('main').style.border= "3px solid #F88C99";
		document.querySelector('section').style.backgroundColor = "#DBF8FB";
		document.querySelector('section').style.color = "#587291";
		document.querySelector('section').style.border= "3px solid #F88C99";
		
		var subs = document.getElementsByTagName('input');
		
		for(var n= 0 ; n < 8; n++){
			subs[n].style.backgroundColor= "#DBF8FB";
			subs[n].style.color= "#587291";
			subs[n].style.borderWidth = "0px";
			
		}
		
	}