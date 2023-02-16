# Reading notes for Module 5

## What is css

+ CSS (Cascading Style Sheet) is what helps us coders creater good looking web pages. Unlike the original css style web pages use we can also design this to how ever we like.

+ When we reffer to documents we mean a file structured using a make up language this can be HTML, SVG, or XML.

+ Presenting a document to the user means converting it into a form usable by the audience. For instance a browser(Sometimes called a user agent).

+ Using CSS we can change the color, size, or format a pange using colums or text lay out.

# Declarations

+ A decloration is basicaly asking the css to do something for you using the property and value rule.

## Example

+ h1 { <br>
    color: red; <br>
    font-size: 5em <br>
    }

    </br>

    <p> In the example above we use the H1. which stands for a header and we ask the css to change the header using the braket and the rule as mentioned above.</p>

    The Color is a property that we would like to implement into the header and the color red after the colon is the value in which we want to add this rule makes the header red.</p>
<br>

    # How To Add CSS

    There are three ways to insert CSS 
    
   + External CSS
   + Internal CSS
   + Inline CSS

<br>

   ## External CSS

+ <p>The External is changing the look of the entire website by changing one file. External styles are defined within the <..link..> element, inside the head section</p>

< !DOCTYPE html>
< html>
< head>
< link rel="stylesheet" href="mystyle.css">
< /head>
< body>

< h1>This is a heading< /h1>

< p>This is a paragraph.< /p>

< /body>
< /html>

## Internal CSS

+ <p>An internal style sheet may be used if one single HTML page has a unique style. Can be defined inside the < style> element inside the head section</p>

< !DOCTYPE html>
< html>
< head>
< style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
< /style>
< /head>
< body>

< h1>This is a heading< /h1>
< p>This is a paragraph.< /p>

< /body>
< /html>

## Inline CSS

+ <p>An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.</p> 

## Multiple Style Sheets

+ <p>If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.So is we use the internal CSS after the external the changes for the internal will be the one used</p>

# Cascading Order

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

+ Inline style (inside an HTML element)
+ External and internal style sheets (in the head section)
+ Browser default

# CSS Syntax

color: color|initial|inherit;

## Property Values

+ color- Specifies the text color. Look at CSS Color Values for a complete list of possible color values.

+ initial- Sets this property to its default value. 

+ inherit- 	Inherits this property from its parent element.



