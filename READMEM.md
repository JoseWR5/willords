# willords

willords is a madeup language from the course on JavaScript Fundamentals.

## madeup Language Descripcion

1) if the word ends with "ing", we take out this three letters from the word.

2) if the word starts with a "vowel" we add "lar" at the end.

3) if the word contains 10 or more letters we have to split it in half and add "-" between them.

4) if the word is a palindrome, none of the prev. rules count and the return word will be the same but with capital letters every other letter.

## Installation
```
npm install willords

```
## Use

```
import willords from 'willords'

willords("Running") // Runn
willords("use") // uselar
willords("abecedario") // abece-dario
willords("sometemos") // SoMeTeMoS
```
## Credits
[Jose W. Rivas]


## License
[MIT](https://opensource.org/licenses/MIT)