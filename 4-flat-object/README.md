# Flat Objects

After the first experiment on flattening an object, I wanted to build a small class to create a flat object, and then be able to `get` and `set` new data inside the flattened object.
Also, I benchmarked my class with the classic safe ways to retrieve nested values in an object.


## Usage

```js
import FlatObject from 'flat-object'

const nestedObject = {
  a: {
    b: {
      c: 'hey you'
    }
  }
}

nestedObject.a.b.d.e // throws an error...

const flatObject = new FlatObject(nestedObject)

flatObject.get('a.b.c') // 'hey you'
flatObject.get('a.b.d.e') // does not throw, returns null

flatObject.set('hey.you', 'whaddup') 
flatObject.get('hey.you') // whaddup

flatObject.getFlattened() // { 'a.b.c': 'hey you', 'hey.you': 'whaddup' }
```

## Current benchmark results (node v6.1.0)
```
FlatObject: creating new Instance: 0.498ms
FlatObject: accessing a really deep key: 0.067ms

Classic Objects: (safely) accessing a really deep key: 0.032ms
Classic Objects: (dangerously) accessing a really deep key: 0.004ms
```

### Take Away
😢 Looks like flattening the object in slower than safely checking for all fields to be defined. 

### Why?
Maybe this comes from the use of WeakMaps, which are a bit slow. I should try with a more classic approach.

## TODO

- [ ] Try to implement an alternative version without WeakMaps
- [ ] Try to implement an alternative without a Class (only a module that returns a closure)