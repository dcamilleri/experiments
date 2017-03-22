# Model Validator

I've always had trouble finding model/resource validators on the Internet. Also, I've always wondered how to be sure the resource received from your back-end matches your internal model ?

## The experiment

The **challenge** here was to create a simple model/resource validator. It gave me the opportunity to write **type validators**, and also to learn how to use [Jest](https://facebook.github.io/jest/).

## Usage

This validator lets you declare models like JavaScript objects. You can then match these models with any other object, or resources received from your API, and see if they are **valid** or not. You can also register custom validators.

_For now, the validation is only based on object's value types._

**Example**

```js
import { v, validate } from 'validator'

const userModel = {
  firstName: v.String,
  age: v.Number,
  address: v.String
}

const validUseResource = {
  firstName: 'John',
  age: 24,
  address: 'Paris, France'
}

const invalidUserResource = {
  firstName: 'John',
  age: 24,
  address: {
    city: 'Paris',
    country: 'France'
  }
}

const userValidation = validate(validUseResource, userModel)
const badUserValidation = validate(invalidUserResource, userModel)

console.log(userValidator.valid) // true
console.log(badUserValidation.valid) // false
```

## TODO

- [x] Write tests
- [x] Create custom validators
- [x] Write an example
- [ ] Create default custom validators (equals, greater than...)
- [ ] Report errors more efficiently
- [ ] Make sure that resource nesting doesn't swallow errors
- [ ] Report new/unrecognized keys
- [ ] Write docs and publish it ?