## Question

[Code War Link](https://www.codewars.com/kata/5b358a1e228d316283001892)

#### You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

##### For example:

```javascript
"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
```

⋅⋅⋅As you can see, the letter c is shown only once, but wih 2 asterisks.⋅⋅

⋅⋅⋅The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the⋅⋅ ⋅⋅⋅different letters are separated by a comma (,) as seen in the example above.⋅⋅

⋅⋅⋅Note that the return string must list the letters in order of their first appearence in the original string.⋅⋅

##### More examples:

```javascript
getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*"
getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*"
getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*"
```