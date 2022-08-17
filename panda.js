

document.getElementById("backpack").style.backgroundColor = 'pink';
//------------------------------------------------------
const collection = document.getElementsByClassName("card");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.borderRadius = "30px";
};
//------------------------------------------------
document.getElementById('menu-btn').addEventListener('click',function(){
    document.getElementById('cash').innerText='Dam onek kinte parba na';
    
})

//----------------------------------------------------
const priceList = document.getElementsByClassName('price');

    for(const prices of priceList){
        prices.addEventListener('click',function(event){
            const columns = document.getElementById('column')
            event.target.parentNode.removeChild(event.target)
        })
        
    }

// document.getElementById('main-container').addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target);
// })
//---------------------------------------------------------

document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const text = event.target.value;
    if(text === "email@gmail.com"){
        document.getElementById('submit-btn').removeAttribute('disabled')
    }
    else{
        document.getElementById('submit-btn').setAttribute('disabled',true)
    }
})
//---------------------------------------------------------
const images = document.getElementById('image')
images.addEventListener('mouseenter',function(){
    images.src ='https://www.wallpics.net/wp-content/uploads/2021/12/Ana-Cheri-Photos-768x960.jpg';
})
images.addEventListener('mouseout',function(){
    images.src ='images/bags/bag-1.png';
})

//**** */
const images2 = document.getElementById('image2')
images2.addEventListener('mouseenter',function(){
    images2.src ='https://www.wallpics.net/wp-content/uploads/2020/02/Mia-Melano-768x1010.jpg';
})
images2.addEventListener('mouseout',function(){
    images2.src ='images/bags/bag-2.png';
})
//**** */
const images3 = document.getElementById('image3')
images3.addEventListener('mouseenter',function(){
    images3.src ='https://www.wallpics.net/wp-content/uploads/2021/12/Alison-Tyler-Gallery-768x1098.jpg';
})
images3.addEventListener('mouseout',function(){
    images3.src ='images/bags/bag-3.png';
})