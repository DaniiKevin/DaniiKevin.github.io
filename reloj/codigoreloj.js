	//alert("Te guta mi reloj? 😊👍🏻🙏🏻\n  Porfavor espere 5 segundos")
	
	function h()
	{
		var e=0,n=new 
		Date,c=n.getHours(),i=n.getMinutes(),m=n.getSeconds();i=g(i),m=g(m),c>12&&24!=c?(e=c-12,document.getElementById("h").innerHTML=e+":"+i+":"+m+"PM"):24==c?(e=c-12,document.getElementById("h").innerHTML=e+":"+i+":"+m+"AM"):document.getElementById("h").innerHTML=12==c?c+":"+i+":"+m+"PM":c+":"+i+":"+m+"AM",t=setTimeout("h()",250)}function g(e){return e<10&&(e="0"+e),e}