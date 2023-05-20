# Classroom Manager

This repository contains the front-end mockup for the Classroom Manager web application. The application is designed to store and retrieve Class and Student data from a database.

## Task for Exercise

1. The Classroom Manager is a web application.
2. The application should store and retrieve Class and Student data from a database.
3. The Classroom Manager screen will load the Classes into a drop-down. When a Class is selected from the drop-down, it will populate the Teacher field and the list of Students in the class (if any).
4. This screen will not be used to add, remove, or edit Classes or Teachers. Therefore, prepopulate your Classes table with values.
5. This screen will only be used to add new Students to classes. Students cannot be edited or removed from the list.
6. This screen will allow the user to sort the list of Students in Ascending (Asc) or Descending (Desc) order. Storing the Students in Asc or Desc order in the database is not required.
7. The buttons can be any shade of green. When the user hovers over a button with their mouse, it should turn to any shade of blue.

## Running the Program

To run the program, follow these steps:

1. In the `class-manager` directory, use the following commands:
   - Run server script: `npm run server`
   - Start React script: `npm run build` followed by `npm start`

#Time
  Roughly 12 hours
  
##Assumptions
1) Student with same name can be in same class. 
2) Should look simlair as possble to given sheet.
3) Reload page on submit
4) Using any framework is fine.
5) Use any hooks I am comfortable with
6) Handle white space and allowed characters when adding a new student.
7) Database store Fullname instead of firstname and lastname.
