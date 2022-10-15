var counter=1;
setInterval(()=>{
    document.getElementById('radio'+ counter).checked=true;
    counter++;
    if(counter >4){
      counter=1;
    }
},5000);



const menu=document.querySelector('.menu');
const menubar=document.querySelector('.menubar');
menu.addEventListener('click',()=>{
  menubar.classList.toggle('show')
})


const arrow=document.querySelector('.doown');
const hidden=document.querySelector('.hidden')
arrow.addEventListener('click',()=>{
       hidden.classList.toggle('shoower')
})



display=document.querySelector('.dissplay')
async function getApi(){
  const res =await axios.get('https://api.jikan.moe/v4/top/anime?limit=24');
  data=res.data.data;

  for(let result of data)
  {
      console.log(result);
      const div=document.createElement('DIV');
      div.classList.add('result')
      const img=document.createElement('IMG');
      const p=document.createElement('P')
      p.innerText=`${result.title}`;
      img.src=result.images.jpg.image_url;
      div.append(img);
      div.append(p);
      display.append(div)
      
    
  }
}
getApi()

popular=document.querySelector('.popularshow')
async function getpop(){
  const res =await axios.get('https://api.jikan.moe/v4/top/anime?limit=24');
  data=res.data.data;

  for(let result of data)
  {
      console.log(result);
      const div=document.createElement('DIV');
      div.classList.add('popular')
      const img=document.createElement('IMG');
      const p=document.createElement('P')
      const icon=document.createElement('p')
      icon.innerHTML=`<i class="fa-solid fa-star"></i>`;
      icon.style="color:yellow; display:block"
      p.innerText=`${result.title}`;
      img.src=result.images.jpg.image_url;
      div.append(img);
      div.append(p);
      div.append(icon)
      popular.append(div)
      
    
  }
}
getpop()


