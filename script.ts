let a=0
let y=1
let res=0
let id:number
let max:number=0
let mom:number=0
let mom1:number=0
class Timer {
    constructor(public counter = 60) {

        let intervalId = setInterval(() => {
            document.getElementById("timer").innerText=String(this.counter);
            this.counter = this.counter - 1;
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }
}
class Board{
  c:number=0;
  z:number
  totsum:number=0
    constructor(a:number)
    {
        this.z=a
        console.log(a);
        let table=document.createElement('table');
        table.innerHTML=`<thead>
        <tr>
          <th scope="col">TEAM 1</th>
          <th scope="col">B1</th>
          <th scope="col">B2</th>
          <th scope="col">B3</th>
          <th scope="col">B4</th>
          <th scope="col">B5</th>
          <th scope="col">B6</th>
          <th scope="col">TOTAL</th>
        </tr>
      </thead>
      `;
    
        for (let index = 1; index <= 10; index++) {
            let sum=0;
            let tr=document.createElement('tr');
            let th=document.createElement('th');
            th.innerText="Player "+ index;
            tr.appendChild(th);
            for (let index = 1; index <=6; index++) {
                this.c=0;
                let td=document.createElement('td');
                let rand=Math.floor(Math.random() * 7 );
                sum+=rand;

                td.innerText=String(rand);
                tr.appendChild(td);
                if(rand === 0)
                {
                    this.c=6-index;
                    break;
                } 
            }
            if(sum>max && this.z===0)
            {
              max=sum;
              mom=index;
            }
            if(sum>max)
            {
              max=sum;
              mom1=index;
            }
            this.totsum+=sum;
            for (let i = 0; i <this.c; i++) {
              let ts=document.createElement('td');
              ts.innerText=" ";
              tr.appendChild(ts);
            }
            let s=document.createElement('td');
            s.innerText=String(sum);
            tr.appendChild(s);
            table.appendChild(tr);
          
          }
        
        
        table.setAttribute("class", "table  table-bordered");
      if(this.z===0)
      {
       document.getElementById("table1").appendChild(table);
      }
      else{
        document.getElementById("table2").appendChild(table);
      }
      if(this.totsum>res)
      {
        res=this.totsum;
        id=this.z;
      }

    }
 

}


function func(){
  new Board(a)
  
}
let b=document.getElementById('btn1');
b.addEventListener("click",func);

function func1(){
  new Board(y)
  
}
let x=document.getElementById('btn2');
x.addEventListener("click",func1);

let w=document.getElementById('won')
function func2(){
if(id===0)
{
  w.innerHTML="TEAM1"
  let m=document.getElementById('man');
  m.innerHTML="PLAYER"+ mom;
}
else
{
  w.innerHTML="TEAM2"
  let m=document.getElementById('man');
  m.innerHTML="PLAYER"+ mom1;
}
}
let r=document.getElementById('resu');
r.addEventListener("click",func2);
