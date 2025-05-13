# What is the use of enums in TypeScript? Provide an example of a numeric and string enum?
Enum is a special class in typescript that represent a group of constants defined as unchangeable variables. Developer can define a set of named constants which makes easier to handle named sets of constants.
By default, it’s a number based, starting at 0(zero) and each option is assigned as increment by 1 (one). But we can use both numeric and string based enum.

### Example:
**Numeric ENUM**

We can assign unique values for each  enum value and those unique value will not increment automatically
```
Enum myEnum{
name1=2,
name2=4,
}
console.log(myEnum.name1);
```

**String ENUM**

String type enum is common, developer can debug easily as runtime does not require to lookup the number
```
Enum myEnum{
name1=’suvo’;
name2=’roy’;
}
console.log(myEnum.name1);
```

## Summary
- Enums help manage a collection of related constants.
- Numeric enums can be auto-incremented or manually assigned.
- String enums are more descriptive and easier to debug.
- Enums improve code readability, maintainability, and reduce the risk of using incorrect values.



-----



# Provide an example of using union and intersection types in TypeScript.


## Union Type


In typescript, union is a types that allows a variable contain several types.

**Example**
```
type Name= “firstName” | “middleName” | “lastName”;
// Define a union of string literals
type Name = "firstName" | "middleName" | "lastName";

function getNamePart(part: Name) {
  console.log(`You chose: ${part}`);
}
getNamePart("firstName");
```

`Note : We represent union by using | operator`


## Intersection Type


An intersection is a type which allows us to combine multiple types within one variable.

**Example**
```
type WithPlace = { place: string };
type WithDistance = { distance: number };
type ToDestination = WithPlace & WithDistance;

const trip: ToDestination = {
  place: "Dhaka",
  distance: 288
};

console.log(trip.place, trip.distance);
```

## At a Glance

| Type         | Syntax  | Meaning                                      |
| :----------- | :-----: | --------------------------------------------:|
| Union        | A &#124; B | A value can be of type A **or** type B       |
| Intersection | A & B   | A value must satisfy both A **and** B        |

