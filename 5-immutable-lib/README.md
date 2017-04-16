# Immutable library

The idea here is to implement a small immutable library, using JavaScript classes. You can create a `Map` from a JavaScript object, similar to `Immutable.Map`. You can then retrieve properties with `.get` and set new properties with `.set`.


## Usage

```js
import ImmutMap from 'immut-map'

const johnDoe = new ImmutMap({
  firstName: 'John',
  lastName: 'Doe'
})

johnDoe.get('firstName') // John
const johnMaclane = johnDoe.set('lastName', 'Maclane')

johnDoe.get('lastName') // Doe -> johnDoe is Immutable
johnMaclane.get('lastName') // Maclane
```

## TODO

- [ ] Implement the same version, but with a Proxy