// Read data
	// for loop
// Match data
	// Substring match
// merge



var dat=['asjhdkvjajashvd12345','12345kasbdkbaksbdkjbasd45678','45678kajbsdkabsdkjbasdjk34567','34567akbsdkjbaskjd'];
var final_string = '';
function match(data)
{
	for(var i=0;i<data.length;i++)
	{
		var end_string = data[i].substring(data[i].length-5,data[i].length);
		//console.log(end_string);
		for(var j=i+1;j<data.length;j++)
		{
			var front_string = data[j].substring(0,5);
			console.log('fq:'+'j:'+j+'_'+front_string);
			if(end_string==front_string)
			{
				final_string = data[i] + data[j].substring(data[j].length-45,data[j].length);
			}
		}
	}
	console.log('ans:'+final_string);


	
}
//match(dat);


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
}
match2(dat);



