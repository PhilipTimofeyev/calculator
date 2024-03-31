# Calculator

*Calculator* is the final project of the Odin Foundations course, and is meant to replicate the standard functionality of a calculator. It is built using Javascript, HTML, and CSS, and is able to accept input from the mouse as well as the keyboard.

The logic of the calculator functions was challenging due to subtle nuances that you may forget exist when using a typical calculator. These nuances include:

- Keeping track and using multiple working variables in memory.
- Converting between strings to display content, and numbers to operate on content.
- Continuing previous operation when repeatedly clicking equals.
- Preventing the `.` point button from being able to be typed or clicked if it was already used a number entry.

My approach to building this application was to first set up the basic HTML structure with buttons and a display. Then create the functions to get the basic workings of a calculator functional. I then added each feature separately such as +/- functionality or keyboard input. Then I went through testing and trying to "break" the calculator while fixing any bugs I could find. Finally, I added CSS to give the calculator a more pleasing look and feel.

Coming from Ruby and rspec, I have a greater appreciation for proper testing such as rspec within development. Because this project did not involve TDD or any testing tools, I had to create my own tests to try out after every function modification or addition. 

In future development, I would approach a project like this with more of a plan to understand and structure the logic before beginning to code, as well as work in proper testing like rspec.

## License

[GNU](https://choosealicense.com/licenses/gpl-3.0/)
