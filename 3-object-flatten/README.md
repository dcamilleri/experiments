# Object flatten

We all had to deal with complex nested objects once. But how do you (safely) access a deeply nested property of an object without throwing an error ?

```js
const data = {
  user: {
    infos: {
      city : {
        name: 'Paris',
        code: '75000'
      }
    }
  }
}

const cityCode = data.user.infos.city.code // If infos, city or code is not defined, it'll throw
```

The point of this technique is to inline the keys to be able to query deep selectors:

```js
const userData = flatten(data)

/*
{
  'user.infos.city.name': 'Paris',
  'user.infos.city.code': '75000'
}
*/

userData['user.infos.city.name'] // 'Paris'
```

## The experiment

The **challenge** in this section is to implement different versions of an Object Flattening algorithm in JavaScript. 

## TODO

### Algorithm
- [x] Write tests
- [x] Write a recursive version
- [ ] Write a non-recursive version
- [ ] Write a version with higher-order functions