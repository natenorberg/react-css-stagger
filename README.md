react-css-stagger [![Build Status](https://travis-ci.org/natenorberg/react-css-stagger.svg?branch=master)](https://travis-ci.org/natenorberg/react-css-stagger)
=================
A component that adds CSS transitions to create a staggered animation on entrance

Installation
============
Just install it with npm to include with your react build process

![Example Use](/images/stagger.gif?raw=true)

```
npm install --save react-css-stagger
```

Usage
=====

Specify the transition name and the delay time (in ms).
You can also specify an `initialDelay` if you don't want the first
element to appear right when the component is mounted.

Example
=======

```
// JavaScript
import Stagger from 'react-css-stagger';
...
<Stagger transition="fadeIn" delay={200}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Stagger>

// CSS
.fadeIn-enter {
  opacity: 0;
  transition: 0.3s ease-in-out all;
}

.fadeIn-enter.fadeIn-enter-active {
  opacity: 1;
}
```

License
=======

MIT
