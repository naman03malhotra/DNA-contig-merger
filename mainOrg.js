// Read data
	// for loop
// Match data
	// Substring match
// merge

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
C2AACCAATTGGTGTCGGGAACCTGTACCGCCTGATGCGGGGCTATGCGGAA
H4CGGAAGTATGTGGGTGCTGCCGGAAGTCCGGCGCAGATGCGGCGGGCCGA
N8GCCGATTAATTTTAATCAGAACAATCACGTGGTGATTCAGAACGACGGTA
T9CGAAATTTTGCGACCGGAGGATTTACGGGAACCGGCGGCAAATATGAGCC
G1TGGCCAGGTGCGCAGGATGAGCTCCGGCTGCAGTTGCGTGATGGCGGTCT
I5GGTGGGGATTGTCGGGAGTATCGGCAGCGCTATTGGCGGGGCTGTTGGTG
O6TGGTGGCATCCGCGTCAGGCGGTACAGCCATTCAGGCAGCTGCGGCGAAA
B1CTCCGTGCTGTCCATGATGACAGAAATTCTGCTGAAGCAGGCAATGGTGG
L7CGGTAGGACAGGCCGGGCCGCAGCTGATGAAAGCGGTGTATGAGATGGCC
E3GAGCCGGATTGTCCACCGCGGGGAGTTTGTCTTCACGAAGGAGGCAACCA

*/
var real_data = 
'C2AACCAATTGGTGTCGGGAACCTGTACCGCCTGATGCGGGGCTATGCGGAA\nH4CGGAAGTATGTGGGTGCTGCCGGAAGTCCGGCGCAGATGCGGCGGGCCGA\nN8GCCGATTAATTTTAATCAGAACAATCACGTGGTGATTCAGAACGACGGTA\nT9CGAAATTTTGCGACCGGAGGATTTACGGGAACCGGCGGCAAATATGAGCC\nG1TGGCCAGGTGCGCAGGATGAGCTCCGGCTGCAGTTGCGTGATGGCGGTCT\nI5GGTGGGGATTGTCGGGAGTATCGGCAGCGCTATTGGCGGGGCTGTTGGTG\nO6TGGTGGCATCCGCGTCAGGCGGTACAGCCATTCAGGCAGCTGCGGCGAAA\nB1CTCCGTGCTGTCCATGATGACAGAAATTCTGCTGAAGCAGGCAATGGTGG\nL7CGGTAGGACAGGCCGGGCCGCAGCTGATGAAAGCGGTGTATGAGATGGCC\nE3GAGCCGGATTGTCCACCGCGGGGAGTTTGTCTTCACGAAGGAGGCAACCA';

var preprocess = function(data){
	var data = data.split('\n');
	for(var i = 0;i<data.length;i++)
	{
		data[i] = data[i].substring(2,data[i].length); 
	}
	return data;
}



var dat=['98989aaaaaaaaaa12345','45678aaaaaaaaaa34567','34567aaaaaaaaaa98989','12345aaaaaaaaaa45678'];


function match(data)
{
	//console.log('data,len='+data.length);
	var i;
	
	for(var k=0;k<data.length;k++)
	{
		var count2=0;
		var front_string = data[k].substring(0,5);	
		for(var l=0;l<data.length;l++)
		{
			var end_string = data[l].substring(data[l].length-5,data[l].length);
			if(front_string!=end_string)
			{
				count2++;
				
			}

		}
		//console.log(count2)
		if(count2==data.length)
		{
			i=k;
			//console.log('dataI='+data[k]);
			break;
		}
	}
	//var i=0;
	var count=0;
	var final_string = data[i].substring(0,data[i].length-5);
	//for(i;i<data.length;i++)
	while(count!=data.length-1)
	{
		var end_string = data[i].substring(data[i].length-5,data[i].length);
		//console.log(end_string);
		for(var j=0;j<data.length;j++)
		{
			var front_string = data[j].substring(0,5);
			//console.log('fq:'+'j:'+j+'_'+front_string);
			if(end_string==front_string)
			{
				final_string += '('+data[j].substring(0,5)+')'+data[j].substring(data[j].length-45,data[j].length);
				i=j;
				count++;
			
				break;
			}
		}
		//console.log(count,data.length);
		
	}
	
console.log('ans:\n'+final_string);

	
}
//match(dat);
/*

var match2 = function(data)
{
	var obj = {};
	var fin_arr = [];
	data.forEach(function(dat,i){
			if(!obj[dat.substring(0,5)])
			{
				obj[dat.substring(0,5)]=1;
				console.log('I have '+i);
			}
			else
			{
				fin_arr.push(dat);
			}
	});
	console.log(fin_arr);
	console.log(obj);
}*/
//match(dat);
match(preprocess(real_data));



