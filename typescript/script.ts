 let textBox=document.querySelector(`input`) as HTMLInputElement;
 let p=document.querySelector(`p`) as HTMLParagraphElement;
 let sinalOp=document.querySelector(`#sinal`) as HTMLSpanElement;

function interNummber(val:any){
    textBox.value+=val;
}


function operacao(acao:string){
    let result:number=0
    
    if(acao=="soma"){
        if (p.innerText!="") {
            if (textBox.value=="") {
                textBox.value="0"
            } 
             igual()
            
            p.innerText =textBox.value.toString()
            sinalOp.innerText="+"
            textBox.value=""

        }
        else{
            igual()
            result=parseFloat(textBox.value)
            p.innerText=result.toString()
            textBox.value=""
            sinalOp.innerText="+"
        }
    }
    if(acao=="sub"){
        if (p.innerText!="") {
            if (textBox.value=="") {
                textBox.value="0"
            } 
            igual()
            
            p.innerText =textBox.value.toString()
            sinalOp.innerText="-"
            textBox.value=""
        }
        else{
            igual()
            result=parseFloat(textBox.value)
            p.innerText=result.toString()
            sinalOp.innerText="-"
            textBox.value=""
            
        }
    }
    if(acao=="mult"){
        if (p.innerText!="") {
            if (textBox.value=="") {
                textBox.value="1"
            } 
            igual()
             
            p.innerText =textBox.value.toString()
            sinalOp.innerText="*"
            textBox.value=""

        }
        else{
            igual()
            result=parseFloat(textBox.value)
            p.innerText=result.toString()
            textBox.value=""
            sinalOp.innerText="*"
        }
    }
    if(acao=="div"){
        if (p.innerText!="") {
            if (textBox.value=="") {
                textBox.value="1"
            } 
            igual()
             
            p.innerText =textBox.value.toString()
            sinalOp.innerText="/"
            textBox.value=""

        }
        else{
            igual()
            result=parseFloat(textBox.value)
            p.innerText=result.toString()
            textBox.value=""
            sinalOp.innerText="/"
        }
        
    }
    if(acao=="del"){
            if (textBox.value!="") {
                textBox.value=textBox.value.slice(0,-1)
            }        
    }
    if(acao=="CE"){
        if (textBox.value!="") {
            textBox.value="0"
        }        
    }
    if(acao=="C"){
            textBox.value="0"
            p.innerText=""
            sinalOp.innerText=""     
    } 
    if(acao=="MoM"){
        if (textBox.value!="") {
            
                textBox.value= (parseFloat(textBox.value) * -1).toString()
            
        }        
}
}



function igual(){
    let resultado:number=0
    
        if (sinalOp.innerText=='+') {
            resultado= parseFloat(p.innerText) + parseFloat(textBox.value) 
            textBox.value =resultado.toString()
            sinalOp.innerText=""
            p.innerText=""
        }
        else if (sinalOp.innerText=='-') {
            resultado= parseFloat(p.innerText) - parseFloat(textBox.value) 
            textBox.value =resultado.toString()
            sinalOp.innerText=""
            p.innerText=""
        }
        else if (sinalOp.innerText=='*') {
            resultado= parseFloat(p.innerText) * parseFloat(textBox.value) 
            textBox.value =resultado.toString()
            sinalOp.innerText=""
            p.innerText=""
        }
        else if (sinalOp.innerText=='/') {
            resultado= parseFloat(p.innerText) / parseFloat(textBox.value) 
            textBox.value =resultado.toString()
            sinalOp.innerText=""
            p.innerText=""
        }
    
}