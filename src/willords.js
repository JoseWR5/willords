//Jose W. Rivas

/*
In this toturial we will write a function (willords) that given a word: the return is a modify string that comply with the following rules

1) if the word ends with "ing", we take out this three letters from the word. (ex willords("Running") => "Runn")

2) if the word starts with a "vowel" we add "lar" at the end.
   (ex platzom("use") => "uselar")

3) if the word contains 10 or more letters we have split it in half and add "-" between them.
  (ex platzom("temperature") => "tempe-rature")

4) if the word is a palindrome, none of the prev. rules count and the return word will be the same but with         capital letters every other letter.
    (ex platzom("sometemos") => "SoMeTeMoS")

 
*/

export default function willords(word) {
  var length = word.length;

  if (palindrome(word)) {
    var Upperword = "";
    for (var i = 0; i < length; i++) {
      if ((i % 2) == 0) {
        Upperword += word.charAt(i).toUpperCase();
      } else {
        Upperword += word.charAt(i).toLowerCase();
      }
    }
    word = Upperword;
    return word;

  } else {
    if (word.toLowerCase().endsWith('ing')) {
      word = word.substr(0, length - 3);
    }
    if (word.toLowerCase().startsWith('a') || 
        word.toLowerCase().startsWith('e') ||
        word.toLowerCase().startsWith('i') ||
        word.toLowerCase().startsWith('o') ||
        word.toLowerCase().startsWith('u')) {
      word = word + "lar";
    }
    if (length >= 10) {
      var firstHalf = word.substr(0, Math.floor(length / 2));
      var secondHalf = word.substr(Math.floor(length / 2));
      word = firstHalf + "-" + secondHalf;
    }


    return word;
  }

}

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
