# Compound Components

## Problem

Compound components are components that work together to form a complete UI. The classic example of this is <select> and <option> in HTML:

```html
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

## Flexible compound components

Right now our component can only clone and pass props to immediate children. So we need some way for our compound components to implicitly accept the on state and toggle method regardless of where they're rendered within the Toggle component's "posterity" :)
