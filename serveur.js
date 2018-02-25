const http = require("http"); 
const fs = require("fs");


http.createServer((request, response) => 
{ 
 console.log('Branchement sur le port 3000')
 response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
 fs.readFile('pro.json', (err, data) => {
 if (err) return console.error(err);


  const contenu_objet_json = (o)=>{
   let trace = '<table>';
   
   for (let p in o) { 
     trace += '<tr><td>' + p + ' </td><td>' + o[p] + '</td></tr>'; 
   } 
   trace+= '</table>'
   return trace;
   }


	response.write(contenu_objet_json(JSON.parse(data))); 
	response.end(); 
});

}).listen(3000);