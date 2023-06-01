// var p1 = fetch('https://restcountries.com/v3.1/all')
//   .then((data) => data.json())
//   .then((data1) => foo(data1));

// function foo(data1) {
 
//   for (var i = 0; i < data1.length; i++) {
//     let div=document.createElement('div')
//     div.innerHTML=`countryname:${data1[i].name.common} capital:${data1[i].capital[0]}`
//    document.body.append(div);
//   }
// }

async function ex()
{
  var res =await fetch("https://randomfox.ca/floof")
  var res1=await res.json()
  console.log(res1)
  let div=document.createElement('div')
  div.setAttribute('class','foxpage')
  let img=document.createElement('img')
  img.setAttribute('class','foximg')
  img.setAttribute('src',res1.image)


  var linebreak=document.createElement("br");

  var button=document.createElement("button");
  button.setAttribute("type","button");
  button.classList.add("btn","btn-primary");
  button.style.margin="10px";
  button.innerHTML="Refresh";
  button.addEventListener('click', refreshImage);

  

  div.append(img,linebreak,button);
  document.body.append(div);
}
function refreshImage() {
    var foxDiv = document.querySelector('.foxpage');
    foxDiv.remove();
    ex();
  }
ex();

