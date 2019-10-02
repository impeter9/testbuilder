//test cases for detectNetwork.js
//--------------------------------------------------------------------------------------------
//Diner's Club
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var expect = chai.expect;

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });
});

//--------------------------------------------------------------------------------------------
//American Express
describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect;

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

//--------------------------------------------------------------------------------------------
//Visa
describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;
 

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

//--------------------------------------------------------------------------------------------
//MasterCard
describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

//--------------------------------------------------------------------------------------------
//Discover
describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function(){
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });
  for (var i=644; i<650; i++){
    (function(i){
      it('has a prefix of ' + i + ' and a length of 16', function(){
        expect(detectNetwork(i + '4567890123456')).to.equal('Discover');
      });
    })(i);
  };
  for (var i=644; i<650; i++){
    (function(i){
      it('has a prefix of ' + i + ' and a length of 19', function(){
        expect(detectNetwork(i + '4567890123456789')).to.equal('Discover');
      });
    })(i);
  };
  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });
});

//--------------------------------------------------------------------------------------------
//Maestro
describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  for (var i=12; i<=19; i++){
    var cardNum = '5018';
    for (var j=0; j<(i-4); j++){
      cardNum = cardNum + '0';
    };
    (function(i,cardNum){
      it('has a prefix of 5018 and a length of ' + i, function(){
        expect(detectNetwork(cardNum)).to.equal('Maestro');
      }); 
    })(i,cardNum);   
  };

  for (var i=12; i<=19; i++){
    var cardNum = '5020';
    for (var j=0; j<(i-4); j++){
      cardNum = cardNum + '0';
    };
    (function(i,cardNum){
      it('has a prefix of 5020 and a length of ' + i, function(){
        expect(detectNetwork(cardNum)).to.equal('Maestro');
      }); 
    })(i,cardNum);   
  };

  for (var i=12; i<=19; i++){
    var cardNum = '5038';
    for (var j=0; j<(i-4); j++){
      cardNum = cardNum + '0';
    };
    (function(i,cardNum){
      it('has a prefix of 5038 and a length of ' + i, function(){
        expect(detectNetwork(cardNum)).to.equal('Maestro');
      }); 
    })(i,cardNum);  
  };

  for (var i=12; i<=19; i++){
    var cardNum = '6304';
    for (var j=0; j<(i-4); j++){
      cardNum = cardNum + '0';
    };
    (function(i,cardNum){
      it('has a prefix of 6304 and a length of ' + i, function(){
        expect(detectNetwork(cardNum)).to.equal('Maestro');
      }); 
    })(i,cardNum);   
  };
});

//--------------------------------------------------------------------------------------------
//China UnionPay
describe('China UnionPay', function() {
  var expect = chai.expect;

  for (var j = 16; j <= 19; j++){

    for (var i=622126; i<=622925; i++){
      var cardNum = i.toString();
        for (var k=0; k<(j-6); k++){
          cardNum = cardNum + '0';
        };
        (function(i,j,cardNum){
          it('has a prefix of ' + i + ' and a length of ' + j, function(){
            expect(detectNetwork(cardNum)).to.equal('China UnionPay');
          }); 
        })(i,j,cardNum);   
    };

    for (var i=624; i<=626; i++){
      var cardNum = i.toString();
        for (var k=0; k<(j-3); k++){
          cardNum = cardNum + '0';
        };
        (function(i,j,cardNum){
          it('has a prefix of ' + i + ' and a length of ' + j, function(){
            expect(detectNetwork(cardNum)).to.equal('China UnionPay');
          }); 
        })(i,j,cardNum);   
    };

    for (var i=6282; i<=6288; i++){
      var cardNum = i.toString();
        for (var k=0; k<(j-4); k++){
          cardNum = cardNum + '0';
        };
        (function(i,j,cardNum){
          it('has a prefix of ' + i + ' and a length of ' + j, function(){
            expect(detectNetwork(cardNum)).to.equal('China UnionPay');
          }); 
        })(i,j,cardNum);   
    };

  };
});

//--------------------------------------------------------------------------------------------
//Switch
describe('Switch', function() {
  var expect = chai.expect;

  for (var j=16; j<=19; j++){

    if (j === 17) {
      continue;
    }

  var cardNum = '4903';
    for (var k=0; k<(j-4); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 4903 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   

  var cardNum = '4905';
    for (var k=0; k<(j-4); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 4905 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);    

  var cardNum = '4911';
    for (var k=0; k<(j-4); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 4911 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   

  var cardNum = '4936';
    for (var k=0; k<(j-4); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 4936 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   

  var cardNum = '564182';
    for (var k=0; k<(j-6); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 564182 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   

  var cardNum = '633110';
    for (var k=0; k<(j-6); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 633110 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   

  var cardNum = '6333';
    for (var k=0; k<(j-4); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 6333 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   

  var cardNum = '6759';
    for (var k=0; k<(j-4); k++){
      cardNum = cardNum + '0';
    };
    (function(j,cardNum){
      it('has a prefix of 6759 and a length of ' + j, function(){
        expect(detectNetwork(cardNum)).to.equal('Switch');
      }); 
    })(j,cardNum);   
  };
});