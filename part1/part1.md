1a
1: values added: 20
2: error because through result is declared in the correct scope, it is never assigned a value
3: values added: 20
4: error because result is not declared in line 13's scope
5: error since result cannot be reassigned
6: error because result is not declared in line 13's scope

1b:
1:
at line 12, i is printed as 3 because it iterates through the prices array from 0-2.it breaks the forloop once it is no longer less than the value 3(this occurs when i=3) since it is a var, it remains outside the code block as 3.

2:
line 13 returns 150 since the last value it is assigned is 150(halved from 300) since it is a var, it remains outside the code block.

3:
line 14 returns 150. since the rounding in line 8 did not change the value from line 7, it is the same as the previous question.

4:
this function returns an array [50,100,150] the function iterates through each value in prices, applies the discount value and adds it to the discounted array

5: error because i is outside of the scope at line 12

6:
error because discountedPrice is outside the scope at line 12 since it is declared with let

7:
finalPrice will be 150. it is declared with let in the visible scope

8:
this returns an array containing 50, 100, 150. this is the same as the previous implementation except let is used instead of var

9:
error since i is declared in a different scope with let and is not visible to line 11's call

10:
3 is printed since length is in the visible scope

11:
this returns an array containing 50, 100, 150. this is the same as the previous implementation except const is used instead of let

12:
A: student.name
B: student['Grad Year']
C: student.greeting;
D: student['Favorite Teacher'].name
E: student.courseLoad[0]

13:
A: '32' because the int maps to its value in string
B: 1 because subtract maps the string to an int
C: 3 because null maps to 0
D: '3null' because null maps to the string 'null'
E: 4 because true maps to 1
F: 0 because false and null both map to 0 as ints
G:'3undefined' because undefined is casted to string
H: NaN because undefined is cast to its int representation

14:
A: true because '2' is cast to int
B: false because they are compared as strings not ints
C: true because the string and int are both mapped to 2
D: false because the type is also evaluated in the equality check
E: false because true cast to string is '1'
F: true because 2 cast to boolean is true

15: == casts before comparing and === compares data type

17: the array [1,2,3] is passed in and is iterated through. each value is passed into the called back function and is multiplied by 2, and pushed onto the newArr which gets returned at the end.

19: 
1
3
4
2



