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



function match(data)
{
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
		if(count2==data.length)
		{
			i=k;
			break;
		}
	}
	var count=0;
	var final_string = data[i].substring(0,data[i].length-5);
	while(count!=data.length-1)
	{
		var end_string = data[i].substring(data[i].length-5,data[i].length);
		for(var j=0;j<data.length;j++)
		{
			var front_string = data[j].substring(0,5);
			if(end_string==front_string)
			{
				final_string += '('+data[j].substring(0,5)+')'+data[j].substring(data[j].length-45,data[j].length);
				i=j;
				count++;

				break;
			}
		}
		
	}
	
	console.log('ans:\n'+final_string);
	
}

match(preprocess(real_data));



