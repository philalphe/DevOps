//var name = "Phil";
//
//var age = 23;
// 
//var shootingScore = 45.6;
//
//var message = "Hi, Iam "+ name +" and I am "+ age +" Years old!!";
//        
////alert(message);

//var firstName = "Phil";
//
//var lastName = "Bones";
//
//var dateOfBirth = "10-01-94";
//
//var age = 25;
//
//var profileImgUrl= "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = " Welcome, " + firstName + ". Happy " + age + " th birthday !" ;
//
//
//
//console.log(loginWelcomeMessage);
//

//var sum = 10 + 15;
//
//var sub = 15 - 10;
//
//var mul = 10 * 3;
//
//var div = 10 / 3;
//
//var mod = 10 % 3;
//
//var msg = "10 /3 = with a remainder of " + mod ;
//
//var result = 10 * ((5 + 3) - 4 );
//console.log(result)



//var myAccountBalance = 300;
//var nikeSBShoes = 700.23;
//var coupon = 500;
//
//if (nikeSBShoes <= myAccountBalance){
////    myAccountBalance = myAccountBalance - nikeSBShoes;
//    myAccountBalance -= nikeSBShoes;
//    console.log("we just bought the shoe");
//    console.log("Account Balance : "+ myAccountBalance);
//}else if(nikeSBShoes - coupon 
//<= myAccountBalance){
//    myAccountBalance -= nikeSBShoes- coupon;
//    console.log("we just bought a dope shoes with a coupon");  
//
//}else{
//    console.log("you too broke boy");
//}

//== equal to
//=== ??
//<= less than or equal to
//>= greater than or equal to
//!== not equal to

//var val1 = 23;
//var val2 = "23";
//
//if(val1 != val2){
//    console.log("These are the same");
//}else{
//    console.log("one is not like the other");
//}

//if (true && false){
//    console.log("these are the same!!")
//}
//
//if(1 === 3 || "joe" === "joe"){
//    console.log("one of these are true!!");
//}
//
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3Handicap = true;
//
//if((cat1 > cat2 && cat1 > cat3) && !cat3Handicap){
//    console.log("cat1 is the cutest");
//} else if((cat2 > cat1 && cat2 > cat3) && !cat3Handicap){
//    console.log("cat2 is the cutest!");
//} else if((cat3 > cat1 && cat3 > cat2) || cat3Handicap){
//    console.log("cat3 is the cutest");
//}



//var students = ["Tim","Jane","Arun"];
//var naughtyList = [];
//
//naughtyList.push(students[0]);
//
//var index = naughtyList.indexOf("Tim");
//
//console.log(naughtyList);
//
//if( index > -1){
//    naughtyList.splice(index, 1);
//}
//
//console.log(naughtyList);

//var total = 10;
//for (var x = 0; x < total; x++){
//    console.log(x);
//}

var students = [];

function Student0(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
    return "Hi, I am " + this.firstName + " and I am " + this.age + " years old.";
    };
}

students.push(new Student0("John", "Bones", 5));

students.push(new Student0("Joseph", "Bee", 8));

students.push(new Student0("Jote", "soul", 10));

var student = students[0];

for(var key in student){
    console.log(student[key]);
}

//for (var x = 0; x < students.length; x++){
//    
//    var student= students[x];
//    console.log(student.greeting());
//}

//var s1 = new Student0("John", "Bones", 5);
//console.log(s1);
//console.log(s1.greeting());


//var student = {
//    firstName : "John",
//    lastName : "Bones",
//    age : 17
//}
//};

//console.log(student.greeting());
//
//var student1 = new Object();
//student1.firstName = "Sylvie";
//student1.lastName = "Suzie";
//student1.age = 19;
//
//var student2 = {};
//student2.firstName = "flora";
//student2.lastName = "Nico";
//student2.age = 20;

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);

//var students = [];
//students.push(student);
//students.push(student1);
//students.push(student2);
//for (var x = 0; x < students.length; x++){
//    console.log(students[x]);
//}



//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;

//function area(length,width){
//    return length * width;
//}
//
//var rectanglesAreas = [];
//
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(20,15));
//rectanglesAreas.push(area(5,15));
//console.log(rectanglesAreas);
//
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale){
//    if (priceOfSale <= bankBalance){
//        bankBalance -= priceOfSale;
//        console.log("purchase sucessful");
//} else {
//    console.log("insufficient funds");
//}
//}
//
//console.log(bankBalance);
//makeTransaction(80.00);
//console.log(bankBalance);
//makeTransaction(8.00);
//console.log(bankBalance);
//makeTransaction(20.00);
//console.log(bankBalance);
//makeTransaction(85.00);
//
//var transaction = function(priceOfSale){
//    if (priceOfSale <= bankBalance){
//        bankBalance -= priceOfSale;
//        console.log("purchase sucessfull");
//} else {
//    console.log("insufficient funds");
//}
//};
//
//var printCustomerName = function(first,last){
//    console.log("first name : "+ first + " Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul){
//    
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);