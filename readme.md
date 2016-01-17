# Map, filter, and reduce

## Assumptions
You may assume that students:
- have written applications in Java, Ruby, or any other OO language for 2-3 years
- can define and invoke functions, using JavaScript, that take 0 or more, non-function, parameters

## Objective 
By the end of this lesson, students should be able to:

- Perform basic data manipulation using map, filter, and reduce in JavaScript.

## Why
Using filter, map, and reduce allows you to create self-contained, reusable, and testable
 functions that filter and transform arrays (non-destructive).

## Assessment
Working code for each of the activities listed below.

## Activities

### List all companies originally licensed in 2015

### What is the trade name, supervisor, and phone number of each company located in Arapahoe county?
If trade name is not specified, use business name.

```json
[
    { name: "ECHO SUMMIT PROPERTY MANAGEMENT", supervisor: "Scott T Lukes", phone: "3037688255" },
    { name: "HQ HOMES", supervisor: "Scott T Lukes", phone: "3033592915" },
    ...
]
```

### What was the original issue date of the oldest licensed company?
For ties, last company in the array wins.

### Extra credit - For each year in the license data, how may companies were licensed in that year?
Desired output

```json
[
    { '2014': 141 },
    { '2015': 131 },
    ...
]
```
