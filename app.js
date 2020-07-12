// function READMORE(){
//     var text = "But suppose you don't want a collection of all the paragraphs in the document. Suppose you want just a collection of all the paragraphs within a particular div"
//     var peragraph = document.getElementById('pera');
//     peragraph.innerHTML = text();
//     }

function READMORE(){
        var text = document.getElementById('text').innerHTML;
         var peragraph = document.getElementById('pera');
        peragraph.innerHTML = text();
        }