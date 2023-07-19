var arr=[3,5,4,6,8,10,11,12,13,15,20];

document.write("The Given Number:"+arr);
document.write("<br>");

for(let i=0;i<arr.length;i++){
	if((arr[i]%3==0)&&(arr[i]%5==0))
	{
		document.write(arr[i]+"<br>");
	}
}