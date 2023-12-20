
const simpleInterest=()=>{
    let pri=document.getElementById("value").value;
    let rate=document.getElementById("rate").value;
    let period=document.getElementById("period").value;
    let interest=((pri*rate*period)/100);
    let intres=document.getElementById("earned");
    let princi=document.getElementById("principal");
    let amount=document.getElementById("finamount");
    intres.innerText="Interest Earned: "+`₹ ${interest}`;
    princi.innerText="Principal Amount: "+`₹ ${pri}`;
    amount.innerText="Total Value:  "+`₹ ${parseInt(pri)+parseInt(interest)}`;
}

const compFrequency=()=>{
    let n=0;
    let frequency=document.getElementById("ctype").value;
    if(frequency==="daily"){
        n=365;
    }else if(frequency==="week"){
        n=52.143;
    }else if(frequency==="month"){
        n=12;
    }else if(frequency==="quart"){
        n=4;
    }else if(frequency==="semi"){
        n=2;
    }else{
        n=1
    }
    return n;
}

const compoundInterest=()=>{
    let pri=document.getElementById("value").value;
    let rate=document.getElementById("rate").value;
    let period=document.getElementById("period").value;
    let n=compFrequency();
    let intr= (pri*(Math.pow((1+rate/(100*n)),period*n)))-pri
    let intres=document.getElementById("earned");
    let princi=document.getElementById("principal");
    let amount=document.getElementById("finamount");
    intres.innerText="Interest Earned: "+`₹ ${intr}`;
    princi.innerText="Principal Amount: "+`₹ ${pri}`;
    amount.innerText="Total Value:  "+`₹ ${parseInt(pri)+parseInt(intr)}`;
}

const intType=()=>{
    let selection=document.getElementById("type").value;
    let hide=document.querySelector(".compound");
    if(selection==="SI"){
        hide.style.display="none";
    }else{
        hide.style.display="block";
    }
}

const amountCal=()=>{
    let selection=document.getElementById("type").value;
    
    if(selection==='SI'){
        simpleInterest();
    }else{
        compoundInterest();
    }
}


