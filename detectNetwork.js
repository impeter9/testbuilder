// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstNumber = cardNumber.slice(0,1)
  var firstTwoNumber = cardNumber.slice(0,2);
  var firstThreeNumber = cardNumber.slice(0,3);
  var firstFourNumber = cardNumber.slice(0,4);
  var firstSixNumber = cardNumber.slice(0,6);

  if (((firstTwoNumber == '38' || firstTwoNumber == '39')) && (cardNumber.length == 14)){
  	return "Diner's Club"
  } else if (((firstTwoNumber == '34') || (firstTwoNumber == '37')) && (cardNumber.length == 15)){
  	return "American Express"
  } else if (((firstFourNumber == '4903') || (firstFourNumber =='4905') || (firstFourNumber =='4911') || (firstFourNumber == '4936') || (firstSixNumber == '564182') 
    || (firstSixNumber =='633110') || (firstFourNumber =='6333') || (firstFourNumber =='6759')) && ((cardNumber.length ==16) || (cardNumber.length ==18) 
    || (cardNumber.length ==19))){
    return "Switch"
  } else if ((firstNumber == '4') && ((cardNumber.length == 13) || (cardNumber.length == 16) || (cardNumber.length == 19))){
  	return "Visa"
  } else if (((firstTwoNumber == '51') || (firstTwoNumber == '52') || (firstTwoNumber == '53') || 
  	(firstTwoNumber == '54') || (firstTwoNumber == '55')) && (cardNumber.length == 16)){
  	return "MasterCard"
  } else if (( (firstFourNumber == '6011') || ( (parseInt(firstThreeNumber) >= 644) && (parseInt(firstThreeNumber) <= 649) ) || (firstTwoNumber == '65') ) && 
  	((cardNumber.length == 16) || (cardNumber.length == 19))){
  	return "Discover"
  } else if (((firstFourNumber == '5018') || (firstFourNumber == '5020') || (firstFourNumber == '5038') || 
  	(firstFourNumber == '6304')) && ((cardNumber.length >= 12) && (cardNumber.length <= 19))) {
  	return "Maestro"
  } else if ((((parseInt(firstSixNumber) >= 622126 ) && (parseInt(firstSixNumber) <= 622925)) || ((parseInt(firstThreeNumber) >= 624 ) && (parseInt(firstThreeNumber) <= 626)) 
    || ((parseInt(firstFourNumber) >= 6282) && (parseInt(firstFourNumber) <= 6288))) && ((cardNumber.length >= 16) && (cardNumber.length <= 19))){
    return "China UnionPay"
  }
};

