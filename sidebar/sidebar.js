window.onload = function() {

}

var inputText = document.getElementById("txt"),
     items = document.querySelectorAll("#folderlist li"),
     tab = [], index;

 // get the selected li index using array
 // populate array with li values

 for(var i = 0; i < items.length; i++){
     tab.push(items[i].innerHTML);
 }

 // get li index onclick
 for(var i = 0; i < items.length; i++){

     items[i].onclick = function(){
         index = tab.indexOf(this.innerHTML);
         console.log(this.innerHTML + " INDEX = " + index);
         // set the selected li value into input text
         inputText.value = this.innerHTML;
     };

 }
