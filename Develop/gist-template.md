# Title (Regex to match URL)

Regular expressions can be used to find certain patterns of characters within a string. You can also find and replace a character or sequence of characters within a string. They are also frequently used to validate input. This regex matches URL info for a matching URL.

## Summary

We will be anaylizing a URL Regex : `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Character Classes](#character-classes)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Author](#author)

## Regex Components

### Anchors

The anchors used to contain this regular expression are as follows: `^` to start with, and then `$` to end.
Meta Escape - `^` asserts position at start of the string.
Meta Escape - `$`asserts position at the end of the string, or before the line terminator right at the end of the string.
Basically it's saying what is enclosed between these two anchors, we're asking the search function to match exactly what it begins with
and what it ends with.

         ^ is the anchor that matches beginning of input string
         $ matches the end of the input string

### Quantifiers

This regular expression has 5 Quantifiers in it.
Quantifiers communicate to the regex engine that it must match the quantity of the character or expression to its left. These are the

    quatifiers that are used in regex:
    ?, +, _, {n}, {n, }, {n,m}
    In the URL matching regex they are used in the following places:
    https? Matches 'https', 'http'
    [\da-z\.-]+ Matches a single digit, group of letters (a-z), dot (.) or hyphen (-) 1 or more times
    [a-z\.]{2,6} Matches 2 to 6 copies of the sequence [a-z\.]
    [\/\w \.-]_ Matches '/', '.', '-', 'www', '//'

First is the `?` after https. And it matches the previous token between zero and one times, as many times as possible, giving back as needed 'greedy'. Basically means that characters can be present or not.

Second is the `?` between the first and second Capturing Group. Same thing as first. `?` basically means that characters can be present or not.

Third is the `+` after the character class `[\da-z\.-]`. And it matches between one and unlimited times, as many as possible, giving back as needed. 'greedy'. Basically means that the previous item or 'collection of chars' can be repeated multiple times.

Fourth is the `{2, 6}` after the second Character Class. And it matches previous token between 2 and 6 times, as many times possible, giving back as needed. 'greedy'. It basically means that the search must be between 2 and 6 characters.

Fifth is the `*` after the second Character Class. And matches previous token between zero and unlimited times, as many times possible, giving back as needed. 'greedy'.

Sixth is the `*` after the fourth Capturing Group. And matches previous token between zero and unlimited times. 'greedy'.

Seventh is the `?` that is after `\/` and before the Meta Escape `$`. And matches the previous token between zero and one times. 'greedy'

### Character Classes

In this regular expression, one of the character class is `[\da-z\.-]`
Character classes are components within our regular expression that tells us what type of characters to expect. In our example our character classes are confined within brackets `[]`. Basically referring to whats inside `[]` brackets, their being matched for example `[abc123]` will match a,b,c,1,2,3. We can do alot with these Character Classes.

Meta Escape: `\d` matches a digit equivalent to `0-9`
Range: `a-z` matches a single char in the range between `a` 'index 97' and `z` 'index 122' in case sensitive.
Text: `\.` matches the character `.` with index literally case sensitive.
Text: `-` matches the character `-` with index literally case sensitive.

Character Classes ensure that a given sequence of characters matches a larger set of characters.

    [a-z]          Matches lowercase alphabetic characters between a and z
    \w             Matches a word
    \d             Matches a single character that is a digit
    .              Matches any character

### Grouping and Capturing

Grouping and Capturing in regex is basically grouping and capturing the pattern in the regex expression, and then using the group name to access the captured value.

The use of grouping expressions is to allow for the extraction of the characters of a given group for validation. The text between paranthesis is a group.

    (https?:\/\/)       Matches: ' ', 'https://', 'http://'
    ([\da-z\.-]+)       Matches: 'ab.c-7', 'ab'
    ([a-z\.]{2,6})      Matches: 'ab.', '.ca'
    ([\/\w \.-]*)       Matches: '/', '/ab.'

There are four groups being captured in the regex.
Group num 1 is literally https://. And regex looks like this `(https?:\/\/)`
Group num 2 captures regex101 and looks like this in regex -> `([\da-z\.-]+)`
Group num 3 is .com - and the regex looks like this `([a-z\.]{2,6})`
Group num 4 is /r/kQ0lX5/1. And regex looks like this `([\/\w \.-]\*)`

### Bracket Expressions

Much like the groups in this example, there are also 3 bracket expressions. The information in the bracket expressions is opened and closed between brackets like this `[]`. This indentifies which information is allowed to be matched.
Brackets are pretty simple, these `[]` simply define the character class. Any characters placed inside them will produce a match to the Regex pattern, unless of course the negate character`(^)`precedes the characters in the class. In the Regex example above `[a-z]` defines any character class that is within the alphabet

    Following Bracket Expressions are in this regex:
    [\da-z\.-]
    [a-z\.]
    [\/\w \,-]

Bracket Expression #1: `[\da-z\.-]` includes all digits that are case sensitive from a-z and periods and hyphens.

Bracket Expression #2: `[a-z\.]` includes case sensitive chars from a-z and periods.

Bracket Expression #3: `[\/\w \.-]` includes case sensitive chars that match diff chars and matches any word

### Greedy and Lazy Match

In this example we have only used greedy quantifiers `+` and `{}`, meaning that it will allow the match to expand as long as it needs to go. If these quantifiers were lazy quantifiers, they would appear as `+?` or `{}?`, this will direct the system to make the shortest match.

    ([\da-z\.-]+)
    "+" operator is greedy as it allows chars matching from one to an infinite amount of times.

## Author

Greetings! <('.') , >('.')> My name is Jordan Hackworth and I hope that this can help clear up any questions you may have.
If you have any questions or comments please feel free to contact me.

Jordan Hackworth aka HacAtac </br>
GitHub repo: https://github.com/hacAtac </br>
GitHub Gist: https://gist.github.com/HacAtac/23aacf02e8f459b456b642fdad318280 </br>
E-mail: jhack00@icloud.com </br>
