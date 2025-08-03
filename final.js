/** Problem -01 ( Divide the Asset ) */
var area = 15;
//write your code here
var perPersonArea = area / 2;
console.log(perPersonArea)


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log('Laptop')
}
else if(money >= 10000){
    console.log('Cycle')
}
else{
    console.log('Chocolate')
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.startsWith('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx')){
    console.log('Store')
}
else{
    console.log('Delete')
}