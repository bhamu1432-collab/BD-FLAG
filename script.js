
const area=document.getElementById('dropArea');
const input=document.getElementById('fileInput');
const img=document.getElementById('preview');
const ph=document.getElementById('placeholder');

area.onclick=()=>input.click();

input.onchange=e=>load(e.target.files[0]);

area.addEventListener('dragover',e=>{
 e.preventDefault();
 area.style.background='#eef7ff';
});
area.addEventListener('dragleave',()=>{
 area.style.background='#fafafa';
});
area.addEventListener('drop',e=>{
 e.preventDefault();
 area.style.background='#fafafa';
 load(e.dataTransfer.files[0]);
});

function load(file){
 if(!file)return;
 const r=new FileReader();
 r.onload=()=>{
   img.src=r.result;
   img.style.display='block';
   ph.style.display='none';
 };
 r.readAsDataURL(file);
}
