const form=document.querySelector('#searchform');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchterm=form.elements.query.value;
    const res =await axios.get(`https://api.jikan.moe/v4/anime?q=${searchterm}`);
    makeshows(res.data.data);
    form.elements.query.value='';
  
})
const makeshows =(shows)=>{
    const section=document.querySelector('section');
    section.innerHTML=""
    for(let result of shows)
    {
        console.log(result);
        const div=document.createElement('DIV');
        div.classList.add('result')
        const img=document.createElement('IMG');
        const p=document.createElement('P')
        img.src=result.images.jpg.image_url;
        p.innerText=`${result.title}`;
        div.append(img);
        div.append(p);
        section.append(div)
      
    }
}
