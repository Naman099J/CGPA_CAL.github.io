
// function display()
// {
//     const p=String(document.getElementById("myname").value)
//     console.log(p)
//     document.getElementById("para").innerHTML=p
// }

function cal()
{
    const g1=Number(document.getElementById("g1").value)
    const g2=Number(document.getElementById("g2").value)
    const g3=Number(document.getElementById("g3").value)
    const g4=Number(document.getElementById("g4").value)
    const g5=Number(document.getElementById("g5").value)
    const g6=Number(document.getElementById("g6").value)

    const c1=Number(document.getElementById("c1").value)
    const c2=Number(document.getElementById("c2").value)
    const c3=Number(document.getElementById("c3").value)
    const c4=Number(document.getElementById("c4").value)
    const c5=Number(document.getElementById("c5").value)
    const c6=Number(document.getElementById("c6").value)

    const res=(g1*c1 + g2*c2 + g3*c3 + g4*c4 + g5*c5 + g6*c6)/(c1+c2+c3+c4+c5+c6)

    document.getElementById("result").innerHTML=res.toFixed(2)
    console.log(res)
}

// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 80;
// const home = fs.readFileSync('Form.html')

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-type':'text/html'});
//     res.end(home)
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });