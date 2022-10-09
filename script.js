S1={
  price: 1379,
  amount: 0
};
S2={
  price: 999,
  amount: 0
};
S3={
  price:1299,
  amount:0
};
S4={
  price:1486,
  amount:0
};
S5={
  price:832,
  amount:0
};

S6={
  price:2499,
  amount:0
};

Sn1 = document.getElementById("Sn1");
Sn2=document.getElementById("Sn2");
Sn3=document.getElementById("Sn3");
Sn4=document.getElementById("Sn4");
Sn5=document.getElementById("Sn5");
Sn6=document.getElementById("Sn6")

function vis(){
  if (S1.amount===0) {
    Sn1.style.visibility="hidden";
    Sn1.style.height="0px";
  }
  else{
    Sn1.style.visibility="visible";
    Sn1.style.height="270px";
  };
  if (S2.amount===0) {
    Sn2.style.visibility="hidden";
     Sn2.style.height="0px";
  }
  else {
    Sn2.style.visibility = "visible";
    Sn2.style.height="270px";
  };
  if (S3.amount === 0) {
    Sn3.style.visibility = "hidden";
     Sn3.style.height="0px";
  }
   else {
     Sn3.style.visibility = "visible";
     Sn3.style.height="270px";
   } ;
  if (S4.amount === 0) {
    Sn4.style.visibility = "hidden";
     Sn4.style.height="0px";
  }
  else {
    Sn4.style.visibility = "visible";
    Sn4.style.height="270px";
  };
  if (S5.amount == 0) {
    Sn5.style.visibility = "hidden";
    Sn5.style.height="0px";
  }
  else {
    Sn5.style.visibility = "visible";
    Sn5.style.height="270px";
  };
    if (S6.amount == 0) {
    Sn6.style.visibility = "hidden";
     Sn6.style.height="0px";
  }
  else {
    Sn6.style.visibility = "visible";
    Sn6.style.height="270px";
  };
};
vis();

function Snk1(){
  S1.amount=1;
  vis();
};
function Snk2(){
  S2.amount=1;
  vis();
};
function Snk3(){
  S3.amount=1;
  vis();
};
function Snk4(){
  S4.amount=1;
 vis(); 
};
function Snk5(){
  S5.amount=1;
  vis();
};
function Snk6(){
  S6.amount=1;
  vis();
};
