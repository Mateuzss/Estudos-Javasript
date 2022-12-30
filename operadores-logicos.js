/* operadores logicos 


-->  //filho obediente 

true && true = true 
true && false = false
false && false = false

--> ou //filho esperto    

true || true = true 
true || false = true
false || false = false

--> negação //filho do contra / rebelde 
!true = true
!false = true
*/

console.log((true && true))

console.log( !((true && true && false && false) && !(false && false && false) ||(false && false && true) ||((true && true && false)  )));