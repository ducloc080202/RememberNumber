let cells=document.getElementsByClassName('cell');
let i=0;
let soluong=cells.length;

while(i<soluong/2){
    let random=Math.random();
    random=Math.floor(random*soluong);

    if(cells[random].innerText==''){
        cells[random].innerText=`${i}`;
    i++;
    }
}
let j=0;
while(j<soluong/2){
    let random=Math.random();
    random=Math.floor(random*soluong);

    if(cells[random].innerText==''){
        cells[random].innerText=`${j}`;
    j++;
    }
}
var temp,move;
move =0;
for (let i=0; i<cells.length; i++){
    // alert(i);
    cells[i].addEventListener('click', 
        function abc(){
            this.style.backgroundColor='white';
            if(move%2==0){
                temp=this;
            }else{
                if((this.innerText==temp.innerText)&&(this!=temp)){
                    this.removeEventListener('click', abc)
                    temp.removeEventListener('click', abc)
                    this.innerText='';
                    temp.innerText='';
                    this.style.color='white';
                    temp.style.color='white';
                }else{
                    setTimeout(() => {   
                        this.style.backgroundColor='black';
                        temp.style.backgroundColor='black';
                    }, 200);
                    }
            }
            move++;
        }
    )
}