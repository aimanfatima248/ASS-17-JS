// CHAP4
// QS1
// var firstName, age, qualifiaction;
// console.log(age)

// QS2
// Legal Variable Names
// var firstName,
//     $age,
//     birthyear1996,
//     Last_name,
//     _;
   

// Illegal Variable Names
//  var first Name, 
//     1996myage,
//     last-Name,
//     myage@,
//     alert="rose";
// alert(alert)

// QS3
// a)
// var heading=("Rules For Naming JS Variables");
// document.write("<h1>"+heading+ "</h1>" )

// b)
// var contain=("Variable names can only contain numbaers,$ and _. For example $my_1stVariable");
// document.write(contain)

// C)
//   var  begin=("Variables must begin with a letter, $ or _. For example $name, _name or name");
//   document.write(begin)

// d)
// var names=("Variable names are case sensitive")
// document.write(names)

// e)
// var keyword=("Variable names shouldnot be JS keywords");
// document.write(keyword)

// CHAP 5

// QS1

// var a=3;
// var b=5;
// var total=a+b;
// document.write(" Sum of"  + " " + a + " " + "and"+ " " + b + " " +"is"+ " " + total)

// QS2
// Subtraction
// var a=3;
// var b=5;
// var difference=a-b;
// document.write(" difference of"  + " " + a + " " + "and"+ " " + b + " " +"is"+ " " + difference)

// multiplication

// var a=3;
// var b=5;
// var product=a*b;
// document.write(" product of"  + " " + a + " " + "and"+ " " + b + " " +"is"+ " " + product)
 
// Modulus
// if the value of numerator is less than denominator then the result is value of numerator
//  var a=3;
// var b=5;
// var percent=a%b;
// document.write(" result of"  + " " + a + " " + "and"+ " " + b + " " +"is"+ " " + percent)

// QS3
// a)
// var a;
// console.log(a)
// b)
// var a;
// document.write("value after variable declaration is:"+ a)
// c)
// var a=8;
// d)
// var a=5
// document.write("Initial value:" +" "+ a)
// e)
// var a =5
// var b= a++
// console.log(b)
// f)
// var a =5
// var b= ++a
// document.write("Value after increment is:"+ " " + + b)
// g)
//  var a=5,b=++a;
//    c=b+7
// h)
//  var a=5,b=++a;
//   c=b+7
// document.write("Value after addition is:"+ " " + + c)
// i)
// var a =13
// var b= a--
// console.log(b)
// j)
// var a=13,b=--a;
// document.write("Value after decrement is:"+ " "+ + b)
// k)
// var a=12
// var b=3
//     c=12%3;
//     console.log(c)
// l)
// var a=12
// var b=3
//     c=12%3;
//     document.write("The remainder is:" + " "+ c)
// QS4
// var ticketprice=600,totalprice=ticketprice*5;
//  document.write("Total cost to buy 5 tickets to a movie is"+  " "+ + totalprice+ " "+ "PKR")

// QS5
// var number = +prompt("Enter table number..");

// document.write(
//   number +
//     "x 1 =" +
//     number * 1 +
//     "<br>" +
//     number +
//     "x 2 =" +
//     number * 2 +
//     "<br>" +
//     number +
//     "x 3 =" +
//     number * 3 +
//     "<br>" +
//     number +
//     "x 4 =" +
//     number * 4 +
//     "<br>" +
//     number +
//     "x 5 =" +
//     number * 5 +
//     "<br>" +
//     number +
//     "x 6 =" +
//     number * 6 +
//     "<br>" +
//     number +
//     "x 7 =" +
//     number * 7 +
//     "<br>" +
//     number +
//     "x 8 =" +
//     number * 8 +
//     "<br>" +
//     number +
//     "x 9 =" +
//     number * 9 +
//     "<br>" +
//     number +
//     "x 10 =" +
//     number * 10 +
//     "<br>"
// );

// QS7
// var priceofitem1=650,
//     priceofitem2=100,
//     Quantityofitem1=3,
//     quantityofitem2=7,
//     shippingcharges=100,
//     heading="SHOPPING CART";
//     total= (priceofitem1*Quantityofitem1)+(priceofitem2*quantityofitem2)+(shippingcharges)

//     document.write( "<h1>"+heading+"</h1>")
//     document.write( "Price of item 1 is"+ " "+ + priceofitem1 + "<br>") 
//     document.write( "Price of item 2 is"+ " "+ + priceofitem2 + "<br>")
//     document.write("Qunatity of item 1 is" + " " + Quantityofitem1 + "<br>")
//     document.write("Qunatity of item 2 is" + " " + quantityofitem2 + "<br>")
//     document.write("Shipping Charges" + " "+ +shippingcharges + "<br>")
//     document.write("Total cost of your order is" +" "+ total)

// QS8
// var totalmarks=980,
//     marksobt=804,
//     percent=(804/980)*100
//     heading="Marks Sheet"

//     document.write("<h1>" + heading+ "</h1>"),
//     document.write("Total marks:"+ totalmarks + "<br>")
//     document.write("Marks obtained:"+ marksobt + "<br>")
//     document.write( "Percentage:"+ percent+"%")

// QS9
// var US=10*104.80,
//     saudi=25*28,
//     total=(US+saudi),
//     heading="Currency In PKR";
//     document.write("<h1>"+heading+ "</h1>")
//     document.write("Total Currency in PKR:"+total)

// QS10
//  var a=3;
//  var b= (a+5)*10/2
//  document.write(b)

// QS11
// var currentyear=2024;
//      birthyear=1996;
//      c=(currentyear-birthyear)
//      heading="AGE CALCULATOR"
//     document.write("<h1>"+ heading+ "</h1>")
//     document.write("Current year:"+ currentyear + "<br>")
//     document.write("BirthYear:"+ birthyear+ "<br>")
//      document.write( "Your age is:"+c)

// QS13
    // var snack="lays",
    //     currentage=27,
    //     maxage=75,
    //     amount=2;
    //     document.write( "<h1>"+"The Lifetime Supply Calculaor"+"</h1>" )
    //     document.write("Favourite snack:" + " "+ snack + "<br>") 
    //     document.write("Current age:" + " "+ currentage + "<br>")  
    //     document.write("Estimated maximum age" + " "+ maxage + "<br>") 
    //     document.write("Amount of snacks per day:" + " "+ amount + "<br>") 
    
    // CHAP 6-9:
// QS1
//  var a=10;
//  document.write("Result:" + "<br>" + "The value of a is:" + a + "<br>" + ".................................." + "<br>" + "<br>")

//  var  a=10,
//       b=++a;
// document.write("the value of ++a is" + b + "<br>" + " "+ "Now the value of a is"+ a + "<br>" + "<br>")

// var a=11,
//     b=a++;
   
// document.write("the value of a++ is" + b  + "<br>"+ " "+ "Now the value of a is"+ a + "<br>" + "<br>")

// var  a=12
//       b=--a
// document.write("the value of --a is" + b + "<br>" + " "+ "Now the value of a is"+ a + "<br>" + "<br>")

// var  a=11
//       b=a--
// document.write("the value of a-- is" + b + "<br>" + " "+ "Now the value of a is"+ a + "<br>" + "<br>")

// QS2
// var a=2,b=1;
// document.write( "a is "+ a + "<br>")
// document.write( "b is "+ b + "<br>")
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// 1
// --a - --b;
    // 1-0
// --a - --b + ++b;
    // 1-0+1
// --a - --b + ++b + b--
//    1-0+1+1
// document.write( "Result is"+ result)   

// QS3
// var a= prompt("Enter your Name")
//     b=("welcome to the website")
//     alert(b)

// QS 4 5
// var defaultname=(5)
// var number=+prompt ("enter your number", defaultname); 
// document.write(
//       number +
//         "x 1 =" +
//         number * 1 +
//         "<br>" +
//         number +
//         "x 2 =" +
//         number * 2 +
//         "<br>" +
//         number +
//         "x 3 =" +
//         number * 3 +
//         "<br>" +
//         number +
//         "x 4 =" +
//         number * 4 +
//         "<br>" +
//         number +
//         "x 5 =" +
//         number * 5 +
//         "<br>" +
//         number +
//         "x 6 =" +
//         number * 6 +
//         "<br>" +
//         number +
//         "x 7 =" +
//         number * 7 +
//         "<br>" +
//         number +
//         "x 8 =" +
//         number * 8 +
//         "<br>" +
//         number +
//         "x 9 =" +
//         number * 9 +
//         "<br>" +
//         number +
//         "x 10 =" +
//         number * 10 +
//         "<br>"
//     );
    
// QS6
var subject1= ("Englsih");
var subject2=("Urdu");
var subject3=("Maths");
var totalmarks1=(100);
var totalmarks2=(100);
var totalmarks3=(100);
var obtmarks1=54;
var obtmarks2=48;
var obtmarks3=54;
var total=(totalmarks1+totalmarks2+totalmarks3);
document.write( "total marks are:" + " "+ + total + "<br>")
 var totalobtainedmarks=(obtmarks1+obtmarks2+obtmarks3);
 document.write( "Obtained marks are"+ " "+  + totalobtainedmarks + "<br>"  )
var Percentage=(totalobtainedmarks / (total )* 100 );
document.write( "Percentage is "+ " "+  Percentage + "%" )
