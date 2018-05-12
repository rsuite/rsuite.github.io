# Schema

Schema can define a data model for validating data, and can validate Form component data.

* Schema.Model Defining Data Model objects
* Schema.Types Provides a set of data types：
  * StringType
  * NumberType
  * ArrayType
  * DateType
  * ObjectType
  * BooleanType

## Usage

```js
import { Schema } from 'rsuite';

const userModel = Schema.Model({
  username: Schema.Types.StringType().isRequired('User name is required'),
  email: Schema.Types.StringType().isEmail('Please enter the correct email'),
  age: Schema.Types.NumberType('Age should be a number').range(
    18,
    30,
    'Age should be 18-30 years old'
  )
});

const checkResult = userModel.check({
  username: 'foobar',
  email: 'foo@bar.com',
  age: 40
});

console.log(checkResult);
```

Output: `checkResult`

```js
{
  username: { hasError: false },
  email: { hasError: false },
  age: { hasError: true, errorMessage: 'Age should be 18-30 years old' }
}
```

## Multiple authentication

```js
StringType()
  .minLength(6, 'The field cannot be less than 6 characters')
  .maxLength(30, 'The field cannot be greater than 30 characters')
  .isRequired('This field is required');
```

## Custom validation

Customize a rule by using the `addRule` function.

If you are validating a string type of data, you can set a regular expression to customize validation by using the `pattern` function.

```js
const myModel = Schema.Model({
  field1: Schema.Types.StringType().addRule(value => {
    return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
  }, 'Please enter a legal character'),
  field2: Schema.Types.StringType().pattern(
    /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/,
    'Please enter a legal character'
  )
});
```

## Customizing dynamic error messages

For example, to return different error messages through different cases of `value`, refer to the following

```js
const myModel = Schema.Model({
  field1: Schema.Types.StringType().addRule(value => {
    if (value === 'root') {
      return {
        hasError: true,
        errorMessage: "You can't be the keyword root"
      };
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      return {
        hasError: true,
        errorMessage: 'Only English characters'
      };
    }

    return {
      hasError: false
    };
  })
});
```

## Schema.Types

---

* `StringType`
* `NumberType`
* `ArrayType`
* `DateType`
* `ObjectType`
* `BooleanType`

### StringType

* isRequired()

```js
StringType().isRequired('This field is required');
```

* isEmail(errorMessage: string)

```js
StringType().isEmail('Please enter the correct email');
```

* isURL(errorMessage: string)

```js
StringType().isURL('Please enter the correct URL');
```

* isHex(errorMessage: string)

```js
StringType().isHex('Please enter the correct hexadecimal value color number');
```

* isOneOf(items: Array&lt;string&gt;, errorMessage: string)

```js
StringType().isOneOf(['Javascript', 'CSS'], 'You can only enter `Javascript` and `CSS`');
```

* containsLetter(errorMessage: string)

```js
StringType().containsLetter('Must contain English characters');
```

* containsUppercaseLetter(errorMessage: string)

```js
StringType().containsUppercaseLetter('Must contain uppercase English characters');
```

* containsLowercaseLetter(errorMessage: string)

```js
StringType().containsLowercaseLetter('Must contain lowercase English characters');
```

* containsLetterOnly(errorMessage: string)

```js
StringType().containsLetterOnly('English characters that can only be included');
```

* containsNumber(errorMessage: string)

```js
StringType().containsNumber('Must contain numbers');
```

* pattern(regexp: RegExp , errorMessage: string)

```js
StringType().pattern(/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/, 'Please enter a legal character');
```

* rangeLength(minLength: number, maxLength: number, errorMessage: string)

```js
StringType().rangeLength(6, 30, 'The number of characters can only be between 6-30');
```

* minLength(minLength: number, errorMessage: string)

```js
StringType().minLength(6, 'Requires a minimum of 6 characters');
```

* maxLength(maxLength: number, errorMessage: string)

```js
StringType().minLength(30, 'Up to 30 characters');
```

* addRule(onValid: (value: string)=>boolean, errorMessage: string)

```js
StringType().addRule(value => {
  return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, 'Please enter a legal character');
```

### NumberType

* isRequired()

```js
NumberType().isRequired('This field is required');
```

* isInteger(errorMessage: string)

```js
NumberType().isInteger('Only integral type');
```

* isOneOf(items: Array&lt;number&gt;, errorMessage: string)

```js
NumberType().isOneOf([5, 10, 15], 'can only be `5`, `10`, `15`');
```

* pattern(regexp: RegExp: , errorMessage: string)

```js
NumberType().pattern(/^[1-9][0-9]{3}$/, 'Please enter a legal character');
```

* range(minLength: number, maxLength: number, errorMessage: string)

```js
NumberType().range(18, 40, 'Please enter a number between 18-40');
```

* min(min: number, errorMessage: string)

```js
NumberType().min(18, 'Minimum value 18');
```

* max(min: number, errorMessage: string)

```js
NumberType().max(40, 'Maximum Value 40');
```

* addRule(onValid: (value:number) => boolean, errorMessage: string)

```js
NumberType().addRule(value => {
  return value % 5 === 0;
}, 'Please enter a valid number');
```

### ArrayType

* isRequired()

```js
ArrayType().isRequired('This field is required');
```

* rangeLength(minLength: number, maxLength: number, errorMessage: string)

```js
ArrayType().rangeLength(1, 3, 'Select at least 1, but not more than 3');
```

* minLength(minLength: number, errorMessage: string)

```js
ArrayType().minLength(1, 'Select at least 1');
```

* maxLength(maxLength: number, errorMessage: string)

```js
ArrayType().maxLength(3, 'No more than 3');
```

* unrepeatable(errorMessage: string)

```js
ArrayType().unrepeatable('Duplicate options cannot occur');
```

* of(type: Type, errorMessage: string)

```js
ArrayType().of(StringType().isEmail(), 'Malformed');
```

* addRule(onValid: (value:Array&lt;any&gt;)=>boolean , errorMessage: string)

```js
ArrayType().addRule(value => {
  return value.length % 2 === 0;
}, 'Good things in pairs');
```

### DateType

* isRequired()

```js
DateType().isRequired('Date cannot be empty');
```

* range(min: Date, max: Date, errorMessage: string)

```js
DateType().range(
  new Date('08/01/2017'),
  new Date('08/30/2017'),
  'Time should be between 08/01/2017-08/30/2017'
);
```

* min(min: Date, errorMessage: string)

```js
DateType().min(new Date('08/01/2017'), 'The minimum value of the date 08/01/2017');
```

* max(max: Date, errorMessage: string)

```js
DateType().max(new Date('08/30/2017'), 'Max of the date 08/30/2017');
```

* addRule(onValid: (value: Date)=>boolean, errorMessage: string)

```js
DateType().addRule(value => {
  return value.getDay() === 2;
}, 'It's only Tuesday.');
```

### ObjectType

* isRequired()

```js
ObjectType().isRequired('The object cannot be empty');
```

* shape(types: Object)

```js
ObjectType().shape({
  email: StringType().isEmail('should be an email'),
  age: NumberType().min(18, 'Age should be more than 18 years old')
});
```

* addRule(onValid: (value: Object)=>boolean, errorMessage: string)

```js
ObjectType().addRule(value => {
  if (value.id || value.email) {
    return true;
  }
  return false;
}, 'ID and email must have a cannot be empty');
```

### BooleanType

* isRequired()

```js
BooleanType().isRequired('This field is required');
```

* addRule(onValid: (value)=>boolean, errorMessage: string)

```js
BooleanType().addRule(value => {
  if (typeof value === 'undefined' && A === 10) {
    return false;
  }
  return true;
}, 'This value must be empty when a equals 10');
```
