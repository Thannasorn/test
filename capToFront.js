function capToFront(text){
    let up = "";
    let low = "";
    let temp = text.split('');
    for(let char of temp){
        if(char === char.toUpperCase()){  //เปลี่ยนเป็นพิมพ์ใหญ่
            up += char;
        }
        if(char === char.toLowerCase()){ //เปลี่ยนเป็นพิมพ์เล็ก
            low += char;
        }
    }
    return up+low;
}

console.log(capToFront("hApPy")); 
console.log(capToFront("moveMENT")); 
console.log(capToFront("shOrtCAKE")); 