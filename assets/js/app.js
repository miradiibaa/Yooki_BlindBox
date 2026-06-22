const PRODUCTS = [
  { id:1, name:'Versatile Idol - Grey', series:'Versatile Idol Series', price:125000, stock:50, img:'assets/img/new/versatile/abu.jpg', img2:'assets/img/new/versatile/1box.webp', status:'new' },
  { id:2, name:'Versatile Idol - Brown', series:'Versatile Idol Series', price:125000, stock:45, img:'assets/img/new/versatile/brownie.webp', img2:'assets/img/new/versatile/1box.webp', status:'new' },
  { id:3, name:'Versatile Idol - Pink Purple', series:'Versatile Idol Series', price:125000, stock:30, img:'assets/img/new/versatile/pinyu.webp', img2:'assets/img/new/versatile/1box.webp', status:'new' },
  { id:4, name:'Versatile Idol - Green', series:'Versatile Idol Series', price:125000, stock:8, img:'assets/img/new/versatile/ijomelet.webp', img2:'assets/img/new/versatile/1box.webp', status:'new' },
  { id:5, name:'Hopping Bunny - Blue', series:'Yooki Hopping Bunny', price:135000, stock:40, img:'assets/img/new/bunny/bluw.jpg', img2:'assets/img/new/bunny/all product 1.jpg', status:'new' },
  { id:6, name:'Hopping Bunny - Orange', series:'Yooki Hopping Bunny', price:135000, stock:35, img:'assets/img/new/bunny/oyen.jpg', img2:'assets/img/new/bunny/all product 1.jpg', status:'new' },
  { id:7, name:'Hopping Bunny - Pink', series:'Yooki Hopping Bunny', price:135000, stock:28, img:'assets/img/new/bunny/piku.jpg', img2:'assets/img/new/bunny/all product 1.jpg', status:'new' },
  { id:8, name:'Hopping Bunny - Patterned', series:'Yooki Hopping Bunny', price:135000, stock:9, img:'assets/img/new/bunny/macan.jpg', img2:'assets/img/new/bunny/all product 1.jpg', status:'new' },
  { id:9, name:'V11 Bunny Boo - Cream & Brown', series:'V11 Bunny Boo Cutely Rabbit', price:145000, stock:25, img:'assets/img/new/v11/krinie.jpg', img2:'assets/img/new/v11/1box.jpg', status:'new' },
  { id:10, name:'V11 Bunny Boo - Pink, Yellow & Blue', series:'V11 Bunny Boo Cutely Rabbit', price:145000, stock:20, img:'assets/img/new/v11/pikublue.jpg', img2:'assets/img/new/v11/1box.jpg', status:'new' },
  { id:11, name:'V11 Bunny Boo - White & Black', series:'V11 Bunny Boo Cutely Rabbit', price:145000, stock:15, img:'assets/img/new/v11/utitam.jpg', img2:'assets/img/new/v11/1box.jpg', status:'new' },
  { id:12, name:'V10 Gourmet - Green', series:'V10 Hug Gourmet Restaurant', price:0, stock:0, img:'assets/img/old/v10/ijo.jpg', img2:'assets/img/old/v10/1box2.webp', status:'gallery' },
  { id:13, name:'V10 Gourmet - Pink', series:'V10 Hug Gourmet Restaurant', price:0, stock:0, img:'assets/img/old/v10/pinkeu.jpg', img2:'assets/img/old/v10/1box2.webp', status:'gallery' },
  { id:14, name:'V10 Gourmet - Purple', series:'V10 Hug Gourmet Restaurant', price:0, stock:0, img:'assets/img/old/v10/unyu.jpg', img2:'assets/img/old/v10/1box2.webp', status:'gallery' },
  { id:15, name:'V4 Bear - Blue', series:'V4 Take A Bite Of Bear', price:0, stock:0, img:'assets/img/old/v4/bilu.jpg', img2:'assets/img/old/v4/1 box.webp', status:'gallery' },
  { id:16, name:'V4 Bear - Brown', series:'V4 Take A Bite Of Bear', price:0, stock:0, img:'assets/img/old/v4/coklat.jpg', img2:'assets/img/old/v4/1 box.webp', status:'gallery' },
  { id:17, name:'V4 Bear - Yellow', series:'V4 Take A Bite Of Bear', price:0, stock:0, img:'assets/img/old/v4/kuning.jpg', img2:'assets/img/old/v4/1 box.webp', status:'gallery' },
  { id:18, name:'V6 Ocean Baby - Blue', series:'V6 Ocean Baby Series', price:0, stock:0, img:'assets/img/old/v6/blue.jpg', img2:'assets/img/old/v6/1box1.webp', status:'gallery' },
  { id:19, name:'V6 Ocean Baby - Pink', series:'V6 Ocean Baby Series', price:0, stock:0, img:'assets/img/old/v6/pinky.jpg', img2:'assets/img/old/v6/1box1.webp', status:'gallery' },
  { id:20, name:'V6 Ocean Baby - Purple', series:'V6 Ocean Baby Series', price:0, stock:0, img:'assets/img/old/v6/purple.jpg', img2:'assets/img/old/v6/1box1.webp', status:'gallery' },
];

const PROMOS = {
  'YOOKI10':   { type:'percent', value:10, min:100000 },
  'NEWCOLLECT':{ type:'fixed',   value:20000, min:150000 },
  'WELCOME':   { type:'percent', value:15, min:0 },
};

const SHIPPING = {
  1: [ {id:'reg',name:'JNE REG',desc:'3-5 business days',price:15000}, {id:'yes',name:'JNE YES',desc:'1-2 business days',price:25000}, {id:'jnt',name:'J&T Express',desc:'2-3 business days',price:14000} ],
  2: [ {id:'reg',name:'JNE REG',desc:'4-6 business days',price:18000}, {id:'yes',name:'JNE YES',desc:'2-3 business days',price:32000}, {id:'jnt',name:'J&T Express',desc:'3-4 business days',price:17000} ],
  3: [ {id:'reg',name:'JNE REG',desc:'6-8 business days',price:25000}, {id:'yes',name:'JNE YES',desc:'3-5 business days',price:45000}, {id:'jnt',name:'J&T Express',desc:'4-6 business days',price:23000} ],
};

const CITIES = [
  {name:'Jakarta',zone:1},{name:'Surabaya',zone:1},{name:'Bandung',zone:1},{name:'Yogyakarta',zone:1},
  {name:'Tanjung Pinang',zone:2},{name:'Batam',zone:2},{name:'Medan',zone:2},{name:'Palembang',zone:2},
  {name:'Makassar',zone:3},{name:'Jayapura',zone:3},{name:'Sorong',zone:3},
];

function rp(n){ return 'Rp '+new Intl.NumberFormat('id-ID').format(n); }

function toast(msg, type=''){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' '+type : '');
  clearTimeout(t._t);
  t._t = setTimeout(()=>{ t.className='toast'; }, 3000);
}

function getCart(){ try{ return JSON.parse(localStorage.getItem('yooki_cart')||'[]'); }catch{ return []; } }
function saveCart(c){ localStorage.setItem('yooki_cart',JSON.stringify(c)); updateBadge(); }

function updateBadge(){
  const n = getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-count').forEach(el=>{
    el.textContent = n;
    el.classList.toggle('show', n>0);
  });
}

function addToCart(id, silent=false){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const cart = getCart();
  const ex = cart.find(x=>x.id===id);
  if(ex) ex.qty++;
  else cart.push({id:p.id,name:p.name,series:p.series,price:p.price,img:p.img,qty:1});
  saveCart(cart);
  if(!silent) toast(p.name+' added to cart!','ok');
}

function toggleNav(){
  document.querySelector('.nav-links').classList.toggle('open');
}


document.addEventListener('DOMContentLoaded',()=>{
  updateBadge();
  const cur = location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===cur) a.classList.add('active');
  });
});
