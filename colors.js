function clickme(name) {

	/*this one is a way:
	document.getElementById("istanbul").innerText = colorberil[parseInt(name.substr(1,1))-1]
	document.getElementById("istanbul").style.background = colorberil[parseInt(name.substr(1,1))-1] */
 

	/*In this way I tried to turn rgb color codes to hex color codes without using rgbtohex function. 
  Instead I wrote funtion hexa and function converter to do this: */
		a= document.getElementById(name).style.background;
		var rgbValue = a;
    // rgb array --> rgb(xxx,yyy,zzz) take the part before "rgb", turn them to numbers and makes it an array
		var rgbArray = rgbValue.substring(4, rgbValue.length - 1).split(',').map(Number);
    // executes the function hexa for each member of the array
	 	document.getElementById("istanbul").innerText = hexa(rgbArray);
	 	document.getElementById("istanbul").style.background = document.getElementById(name).style.background
	
	

console.log(rgbArray);
console.log(hexa(rgbArray[0],rgbArray[1],rgbArray[2]));

}

function hexa(rgb) {
    var text = '';
    for (var i = 0; i < rgb.length; i++) {
      var result = [];
      var quotient = rgb[i] / 16;
      console.log(Math.trunc(quotient));
      var remainder = rgb[i] % 16;
      console.log(remainder);
      result[0] = converter(Math.trunc(quotient));
      result[1] = converter(remainder);
      console.log(result);
      var res = result.join(",");
      var resR = res.replace(",", "").trim();
      text += resR;
    }
    return text;
  }
  
/*I tried to convert numbers larger than 9 to letters(a,b,c,d,e,f),
in ordert to convert rgb to hex.*/

function converter(x){
	if (x > 9) {
  switch (x) {
    case 10:
    x = "a";
      break;
    case 11:
      x = "b";
      break;
    case 12:
      x = "c";
      break;
    case 13:
      x = "d";
      break;
    case 14:
      x = "e";
      break;
    case 15:
      x = "f";
      break;
  }
}else x = x
return x
}




