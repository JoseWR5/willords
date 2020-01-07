
const expect = require('chai').expect;
const willords = require('../lib/willords').default;

describe('#willords', function (){

  it('if the word ends with "ing", we take out this three letters from the word', function(){
   const translation = willords("Running")
   expect(translation).to.equal("Runn")
  })

  it('if the word starts with a "vowel" we add "lar" at the end', function(){
   const translation = willords("Use")
   expect(translation).to.equal("Uselar")
  })

  it('if the word contains 10 or more letters we have to split it in half and add "-" between them', function(){
   const translation = willords("temperature")
   expect(translation).to.equal("tempe-rature")
  })

  it('if the word is a palindrome, none of the prev. rules count and the return word will be the same but with capital letters every other letter', function(){
   const translation = willords("sometemos")
   expect(translation).to.equal("SoMeTeMoS")
  })
})
