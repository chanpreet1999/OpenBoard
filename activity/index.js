let body = document.querySelector('body');
let p = document.createElement("p");
p.innerText = "This is inner text";
p.style.backgroundColor = 'red';

let ul = document.createElement("ul");
let clickBtn = document.querySelector( '.click-btn' );

clickBtn.addEventListener('click', function(){
   let ul = document.querySelector("ul");
   let li = document.createElement("li");
   let input = document.querySelector( 'input' );
   li.innerText = input.value;
   ul.appendChild(li);
});
body.appendChild(p);


