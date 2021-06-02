# CSS Notes

##### 4/2/21

>The CSS Cascade is the algorithm by which the browser decides which CSS styles to apply to an element — a lot of people like to think of this as the style that “wins”.

## Attibutes CSS checks in order from hightest to least weight

> 1. Origin & Importance
> 2. Selector Specificity
> 3. Order of Appearance
> 4. Initial & Inherited Properties (default values)

### Origin and Importance

three places a rule can originate from
User-Agent, User, Author

Combinations of origin and importance browser uses to  decide which declaration wins

>1. User-Agent & !important 
>2. User & !important
>3. Author & !important
>4. CSS Animations, @keyframes (This is the only exception, it is still originating from the author, but as animations are temporary/fleeting the browser weights them slightly higher than normal author rules)
>5. Author, normal weight
>6. User, normal weight
>7. User agent, normal weight

if the conflict comes from two declarations on the same level the cascasde flows on to specificity

### selector specificity

both number of selectors AND their priority level are considered

1. inline styles
2. IDs
3. Classes /pseudo-selectors
4. Type selectors and pseudo-elements

### Order of Apperance

With same specificity the declaration that come last wins out.

The same also applies to the order in which external stylesheets are applied. The rules in the second sheet will override the first etc.

### Initial & Inherited Properties (default values)

*look up : inherited vs. non-inherited properties*

An inherited property trickle down from parent elements to children.

inital values are the defaluts defined by the CSS spec for any given rule.

you can opt in to use an inherited or inital value with the kewords `initial` and `inherit`

also `unset` whiches sets the property to it's natural value (either inherit or initial case by case)

Newest is `revert` which currently has limited browser support.

`all` property can accept any of the above as values and applies the values to all elements in its scope.

>A common practice is to define generic styles for the basic elements, and then create classes for those which are different -MDN


When grouping selectors separated by commas if any one selector is invalid the whole rule will be ignored.



## The box model

Block boxe and inline boxes







[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

[ Second Source](https://blog.logrocket.com/how-css-works-understanding-the-cascade-d181cd89a4d8/)

