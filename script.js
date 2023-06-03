
async function ex()
{
  var res =await fetch("https://randomfox.ca/floof")
  var res1=await res.json()
  console.log(res1)
  let div=document.createElement('div')
  div.setAttribute('class','foxpage')

  let h1=document.createElement('h1')
  h1.setAttribute('class','Heading')
  h1.innerHTML=`<u>Random Fox Images</u>`

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

  

  div.append(h1,img,linebreak,button);
  document.body.append(div);
}
function refreshImage() {
    var foxDiv = document.querySelector('.foxpage');
    foxDiv.remove();
    ex();
  }
ex();

