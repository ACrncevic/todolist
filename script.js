// dodavanje x kraj svakog zadatka
var lista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < lista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "br";
  span.appendChild(txt);
  lista[i].appendChild(span);
}


// brisanje odabranog zadatka 

var zat=document.getElementsByClassName("br");
for (var i=0; i<zat.length;i++)
{
	zat[i].onclick= function()
	{
		var div=this.parentElement;
		div.style.display="none";
	}
}

//dodavanje novog elementa u listu

function novi() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("zadatak").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  document.getElementById("myUL").appendChild(li);
 
  document.getElementById("zadatak").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "br";
  span.appendChild(txt);
  li.appendChild(span);
  
  
  var zat=document.getElementsByClassName("br");
for (var i=0; i<zat.length;i++)
{
	zat[i].onclick= function()
	{
		var div=this.parentElement;
		div.style.display="none";
	}
}


}
	
	
