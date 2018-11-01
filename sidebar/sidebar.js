window.onload = function() {
    document.getElementById("add").onclick = function() {
      var listNode = document.getElementById("folderlist"),
      textNode = document.createTextNode(inputText.value),
      liNode = document.createElement("LI");

      liNode.appendChild(textNode);
      listNode.appendChild(liNode);


      liNode.onclick = function(){
       index = tab.indexOf(liNode.innerHTML);
       console.log(liNode.innerHTML + " INDEX = " + index);
       // set the selected li value into input text
       inputText.value = liNode.innerHTML;
      };
    };

    document.getElementById("delete").onclick = function() {

      if(items.length > 0){
          items[index].parentNode.removeChild(items[index]);
          inputText.value = "";
      };
    };

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

