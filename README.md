# Vec2
Basic JavaScript vector class to get you started. (Very useful for 2D games).

Usage:

```
const myVector = new Vec2(12, 20);

myVector.add(5, 2); // x: 17, y: 22

myVector.mult(2); // x: 34, y: 44

myVector.copy().div(2, 11); // vector remains unchanged

myVector.sub(5).add(0, 5); // x: 29, y: 49

myvector.mult(2, 10).negateX(); // x: -58, y: 490

myVector.negateY(); // x: -58, y: -490

myVector.negate(); // x: 58, y: 490
```

Yep... That's all there is to it folks.
