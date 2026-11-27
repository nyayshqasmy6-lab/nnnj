/* MOBILE MENU */

function toggleMenu(){
document.getElementById('nav').classList.toggle('open');
}

/* CART */

let cart=0;

function addCart(){
cart++;
document.getElementById('cartCount').innerText=cart;
showToast('نت به سبد خرید اضافه شد');
}

/* TOAST */

let toastTimer;

function showToast(message){
const toast=document.getElementById('toast');
toast.innerText=message;
toast.classList.add('show');
clearTimeout(toastTimer);
toastTimer=setTimeout(()=>{
toast.classList.remove('show');
},2500);
}

/* FILTER */

function filterProducts(category,button){

const products=document.querySelectorAll('.product');

products.forEach(product=>{
if(category==='all'||product.dataset.category===category){
product.style.display='block';
}else{
product.style.display='none';
}
});

if(button){
document.querySelectorAll('.filter').forEach(btn=>{
btn.classList.remove('active');
});
button.classList.add('active');
}
}

/* SEARCH */

function searchProducts(){

const value=document.getElementById('search').value.trim().toLowerCase();
const products=document.querySelectorAll('.product');

products.forEach(product=>{
const name=product.dataset.name.toLowerCase();
const title=product.innerText.toLowerCase();

product.style.display=
name.includes(value)||title.includes(value)
?'block':'none';
});

document.getElementById('products').scrollIntoView({
behavior:'smooth'
});

}

/* SEARCH ENTER */

document.getElementById('search').addEventListener('keydown',function(e){
if(e.key==='Enter'){
searchProducts();
}
});



function scrollProducts(direction){
  const track=document.getElementById('productList');
  if(!track) return;
  const card=track.querySelector('.product');
  const amount=card ? card.getBoundingClientRect().width + 17 : 280;
  track.scrollBy({left:direction * amount,behavior:'smooth'});
}

document.querySelectorAll('#nav a').forEach(link=>{
  link.addEventListener('click',()=>document.getElementById('nav').classList.remove('open'));
});
