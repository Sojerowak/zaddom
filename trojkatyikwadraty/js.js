function Idonthaveagun(){
   var tekst = document.getElementById("ile").value;
   var cezar = [];
   for(let i=0; i < tekst.length; i++)
   {
     cezar[i] = (tekst[i] + 3);
   }
 
   document.getElementById("cez").innerText = "Cezar: " + cezar;
}