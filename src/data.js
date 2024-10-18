export const data = {
  /* python mcq */
  python: [
    {
      question: 'What is a correct syntax to output "Hello World" in Python?',
      options: ['print("hello world")', 'printf("hello world")', 'println("hello world")', 'None of the above'],
      answer: 0,
    },
    {
      question:
        'What does pip stand for python?',
      options: ['Pip Installs Python','Pip Installs Packages','Preferred Installer Program','All of the mentioned'],
      answer: 2,
    },
    {
      question:
        'Python supports the creation of anonymous functions at runtime, using a construct called __________',
      options: ['pi','anonymous','lambda','none of the mentioned'],
      answer: 2,
    },
    {
      question:
        `What will be the output of the following Python code?<code lang="python">
        i = 1
while True:
    if i%3 == 0:
        break
    print(i)
 
    i + = 1</code>`,
      options: ['1 2 3','error','12','none of the mentioned'],
      answer: 1,
    },
    {
      question:
        'Which of the following character is used to give single-line comments in Python?',
      options: ['#','//','!','/*'],
      answer: 0,
    },
    {
      question:
        'Which keyword is used for function in Python language?',
      options: ['Function','def','Fun','Define'],
      answer: 1,
    },
    {
      question:
        'Which of the following is used to define a block of code in Python language?',
      options: ['Indentation','Key','Brackets','All of the mentioned'],
      answer: 0,
    },
    {
      question:
        `What will be the value of the following Python expression?<code lang="python">
        4 + 3 % 5</code>`,
      options: ['1','2','4','7'],
      answer: 3,
    },
    {
      question:
        'All keywords in Python are in _________',
      options: ['all the above','Capitalized','lower case','UPPER CASE'],
      answer: 0,
    },

    {
      question:
        'Which type of Programming does Python support?',
      options: ['object-oriented programming','structured programming','functional programming','all the above'],
      answer: 3,
    },
    {
      question:
        'Who developed Python Programming Language?',
      options: ['Wick van Rossum','Rasmus Lerdorf','Guido van Rossum','Niene Stom'],
      answer: 2,
    },
    {
      question:
        'Given an integer n, return the number of trailing zeroes in n factorial n!',
      options: ['Count all digits','Count factors of 5','Multiply digits','Count factors of 2'],
      answer: 1,
    },
    {
      question:
        `What are the values of the following Python expressions?<code lang="python">
        2*(3*2)
       (2*3)*2
       2*3*2</code>`,
      options: ['512, 64, 512','512, 512, 512','64, 512, 64','64,64,64'],
      answer: 0,
    },
    {
      question:
      'Which of the following is the truncation division operator in Python?',
      options: ['|','//','/','%'],
      answer: 1,
    },
    {
      question:
        'Which all Python libraries have you used for visualization?',
      options: ['NumPy','TensorFlow','Seaborn', 'Django'],
      answer: 2,
    },
    {
      question:
        'What are the advantages of NumPy over regular Python lists?',
      options: ['Performance and functionality','Less memory usage', 'Slower operations', 'Fewer functions available'],
      answer: 0,
    },
    {
      question:
        `What will be the output of the following Python code?<code lang="python">
        l=[1, 0, 2, 0, 'hello', '', []]
        list(filter(bool, l))</code>`,
      options: ['Error','hellohello','true','None of the above'],
      answer: 0,
    },
    {
      question:
        `What will be the output of the following Python function?<code lang="python">
        min(max(False,-3,-4), 2,7)</code>`,
      options: ['-4','-3','2','false'],
      answer: 3,
    },
    {
      question:
        'Which of the following is not a core data type in Python programming?',
      options: ['Tuples','Lists','Class','Dictionary'],
      answer: 2,
    },
    

    {
      question:
        'Why use else in try/except construct in Python?',
      options: ['Force termination','Handle no exceptions','Initialize variables', 'Repeat execution'],
      answer: 1,
    },
    {
      question:
        'What is the Python “with” statement designed for?',
      options: ['Conditional execution', 'Loop control', 'Function definition', 'Resource management'],
      answer: 3,
    },
    {
      question:
        'What is the difference between a mutable data type and an immutable data type?',
      options: ['Static vs Dynamic', 'Integer vs Float', 'Changeable vs Unchangeable', 'None of the above'],
      answer: 2,
    },
    {
      question:
        'What is _init_() in Python?',
      options: ['Instance method','Constructor method','Destructor method', 'Class variable'],
      answer: 1,
    },
    {
      question:
        'What does break and continue do in Python?',
      options: ['Define function', 'Initialize variable', 'Control flow', 'None of the above'],
      answer: 2,
    },
    {
      question:
        'How do you reverse a list in Python?',
      options: ['sort()', 'append()', 'pop()','reverse()'],
      answer: 3,
    },

  ],
  /*javaScript mcq*/
  javascript: [
    {
      question: `What is the result of the following code? <code lang="javascript">
      5 + "5"
    </code>`,
      options: ['0', '1', '10', '55'],
      answer: 3,
    },
    {
      question: 'Which of the following is not a JavaScript data type?',
      options: ['String', 'Boolean', 'Float', 'Undefined'],
      answer: 2,
    },
    {
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: [
        'The global object',
        'The object that the function is a method of',
        'The object that the function was called on',
        'The object that the function is defined in',
      ],
      answer: 2,
    },
    {
      question:
        'What does the following expression evaluate to: [1, 2, 3].slice(1)?',
      options: ['[1, 2, 3]', '[1]', '[2, 3]', '[3]'],
      answer: 2,
    },
    {
      question: 'Which of the following is not a JavaScript loop statement?',
      options: ['for', 'while', 'do-while', 'switch'],
      answer: 3,
    },
    {
      question: `Which of the following is the correct output for the following JavaScript code? <code lang="javascript">
      varx=5,y=1  
      var obj ={ x:10}  
      with(obj)  
      {  
      alert(y)  
      }</code>`,
      options: ['1','Error','10','5'],
      answer: 0,
    },
    {
      question: `In the following given syntax of the switch statement, the Expression is compared with the labels using which one of the following operators? <code lang="javascript">
      switch(expression)  
      {  
      statements
      }</code>`,
      options: ['==','equals','===','None of the above'],
      answer: 2,
    },
    {
      question: `Which of the following is the correct output for the following JavaScript code? <code lang="javascript">
      Int x=8;  
      if(x>9)  
      {  
      document.write(9);  
       }  
       else  
       {  
       document.write(x);  
       }</code>`,
      options: ['9','0','8','Undefined'],
      answer: 2,
    },
    {
      question: `Which of the following is the correct output for the following JavaScript code? <code lang="javascript">
      var x=3;  
      var y=2;  
      var z=0;  
      If(x==y)  
      document.write(x);  
      elseif(x==y)  
      document.write(x);  
      else  
      document.write(z);</code>`,
      options: ['3','0','Error','2'],
      answer: 1,
    },
    {
      question:
        'Which type of JavaScript language is ______',
      options: ['Object-Oriented','Object-Based','Assembly-language','High-level'],
      answer: 1,
    },
    {
      question:
        'Which one of the following also known as Conditional Expression?',
      options: ['Alternative to if-else','Switch statement','If-then-else statement','immediate if'],
      answer: 3,
    }, 
    {
      question:
        'When interpreter encounters an empty statements, what it will do?',
      options: ['Shows a warning','Prompts to complete the statement','Throws an error','Ignores the statements'],
      answer: 3,
    },
    {
      question:
        'The "function" and " var" are known as:',
      options: ['Keywords','Data types','Declaration statements','Prototypes'],
      answer: 2,
    },
    {
      question:
        'Which of the following variables takes precedence over the others if the names are the same?',
      options: ['Global variable','The local element','The two of the above','None of the above'],
      answer: 1,
    },
    {
      question:
        'Which one of the following is the correct way for calling the JavaScript code?',
      options: ['Preprocessor','Triggering Event','RMI','Function/Method'],
      answer: 3,
    },
    {
      question:
        'Which of the following type of a variable is volatile?',
      options: ['Mutable variable','Dynamic variable','Volatile variable','Immutable variable'],
      answer: 0,
    },
    {
      question:
        'Which of the following option is used as hexadecimal literal beginning?',
      options: ['00','0x','0X','Both 0x and 0X'],
      answer: 3,
    },
    {
      question: 'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints_______',
      options: ['Prints an exception error','Prints an overflow error','Displays "Infinity"','Prints the value as such'],
      answer: 2,
    },
    {
      question: 'In the JavaScript, which one of the following is not considered as an error?',
      options: ['Syntax error','Missing of semicolons','Division by zero','Missing of Bracket'],
      answer: 2,
    },
    {
      question: 'Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?',
      options: ['toExponential()','toFixed()','toPrecision()','toLocaleString()'],
      answer: 1,
    },
    {
      question: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL" ?',
      options: ['if(a!==null)','if (a!)','if(a!null)','if(a!=null)'],
      answer: 0,
    },
    {
      question: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?',
      options: ['slice()','split()','substr()','search()'],
      answer: 2,
    },
    {
      question: 'Which of the following number object function returns the value of the number?',
      options: ['toString()','valueOf()','toLocaleString()','toPrecision()'],
      answer: 1,
    },
    {
      question: 'In JavaScript, what will be used for calling the function definition expression?',
      options: ['Function prototype','Function literal','Function calling','Function declaration'],
      answer: 1,
    },
    {
      question: 'Which one of the following is used for the calling a function or a method in the JavaScript?',
      options: ['Property Access Expression','Functional expression','Invocation expression','Primary expression'],
      answer: 2,
    },


    /*c ++ mcq*/
  ],
  cpp: [ {
    question: 'Who invented C++?',
    options: ['Dennis Ritchie','Ken Thompson','Brian Kernighan','Bjarne Stroustrup'],
    answer: 3,
  },
  {
    question: 'Which of the following is the correct syntax of including a user defined header files in C++ ?',
    options: ['#include [userdefined]', '#include “userdefined”', '#include <userdefined.h>', '#include<userdefined>'],
    answer: 1,
  },
  {
    question: 'Which of the following extension is used for user-defined header file in c++?',
    options: ['hg', 'cpp', 'h', 'hf'],
    answer: 2,
  },
  {
    question: 'Which of the following is a correct identifier in C++?',
    options: ['VAR_1234', '$var_name', '7VARNAME', '7var_name'],
    answer: 0,
  },
  {
    question: 'Which of the following is not a type of Constructor in C++?',
    options: ['Default constructor', 'Parameterized constructor', 'Copy constructor', 'Friend constructor'],
    answer: 3,
  },
  {
    question: 'Which of the following approach is used by C++?',
    options: ['Left-right', 'Top-down', 'Right-left', 'Bottom-up'],
    answer: 3,
  },
  {
    question: 'By default, all the files in C++ are opened in _________ mode.',
    options: ['Binary', 'VTC', 'Text', 'ISCII'],
    answer: 2,
  },
  {
    question: 'Which of the following correctly declares an array in C++ ?',
    options: ['array{10};', 'array array[10];', 'int array;', 'int array[10];'],
    answer: 3,
  },
  {
    question: 'What is the size of wchar_t in C++ ?',
    options: ['Based on the number of bits in the system', '2 or 4', '4', '2'],
    answer: 0,
  },
  {
    question: 'Which is more effective while calling the C++ functions?',
    options: [' call by object', 'call by pointer', 'call by value', 'call by reference'],
    answer: 3,
  },
  {
    question: 'Which of the following is used to terminate the function declaration in C++ ?',
    options: [';', ']', ')', ':'],
    answer: 0,
  },
  {
    question: 'The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.',
    options: [' catch', 'throw', 'try', 'finally'],
    answer: 2,
  },
  {
    question: 'What is Inheritance in C++?',
    options: [' Deriving new classes from existing classes', 'Overloading of classes', 'Classes with same names', 'Wrapping of data into a single class'],
    answer: 0,
  },
  {
    question: 'Which of the following symbol is used to declare the preprocessor directives in C++?',
    options: [' $', '^', '#', '*'],
    answer: 2,
  },
  {
    question: 'Which is more effective while calling the C++ functions?',
    options: [' call by object', 'call by pointer', 'call by value', 'call by reference'],
    answer: 3,
  },


],
/* c mcq */
c: [ {
  question: 'The standard header _______ is used for variable list arguments (…) in C.',
  options: ['<stdio.h>','<stdlib.h>','<math.h>','<stdarg.h>'],
  answer: 3,
},
{
  question: 'Which of the following return-type cannot be used for a function in C?',
  options: [
    'char *',
    'struct',
    'void',
    'none of the mentioned'
  ],
  answer: 3,
},
{
  question: 'Which of the following is not possible statically in C language?',
  options: [
    'Jagged Array',
    'Rectangular Array',
    'Cuboidal Array',
    'Multidimensional Array'
  ],
  answer: 0,
},
{
  question: 'How many number of pointer (*) does C have against a pointer variable declaration?',
  options: [
    '7',
    '127',
    '255',
    'No limits'
  ],
  answer: 3,
},
{
  question: 'The C-preprocessors are specified with _________ symbol.',
  options: [
    '#',
    '$',
    '” ”',
    '&'
  ],
  answer: 0,
},
{
  question: 'Which of the following are C preprocessors?',
  options: [
    '#ifdef',
    '#define',
    '#endif',
    'all of the mentioned'
  ],
  answer: 3,
},
{
  question: 'C preprocessors can have compiler specific features.',
  options: [
    'True',
    'False',
    'Depends on the standard',
    'Depends on the platform'
  ],
  answer: 0,
},
{
  question: 'What is #include <stdio.h>?',
  options: [
    'Preprocessor directive',
    'Inclusion directive',
    'File inclusion directive',
    'None of the mentioned'
  ],
  answer: 0,
},
{
  question: 'Property which allows to produce different executable for different platforms in C is called?',
  options: [
    'File inclusion',
    'Selective inclusion',
    'Conditional compilation',
    'Recursive macros'
  ],
  answer: 2,
},
{
  question: 'Functions in C Language are always _________',
  options: [
    'Internal',
    'External',
    'Both Internal and External',
    'External and Internal are not valid terms for functions'
  ],
  answer: 1,
},
{
  question: 'Functions can return enumeration constants in C?',
  options: [
    'true',
    'false',
    'depends on the compiler',
    'depends on the standard'
  ],
  answer: 0,
},
{
  question: 'What is an example of iteration in C?',
  options: [
    'for',
    'while',
    'do-while',
    'all of the mentioned'
  ],
  answer: 3,
},
{
  question: 'Which of the following typecasting is accepted by C language?',
  options: [
    'Widening conversions',
    'Narrowing conversions',
    'Widening & Narrowing conversions',
    'None of the mentioned'
  ],
  answer: 2,
},
{
  question: 'Which keyword is used to prevent any changes in the variable within a C program?',
  options: ['immutable', 'mutable', 'const', 'volatile'],
  answer: 2,
},
{
  question: 'Which of the following declaration is not supported by C language?',
  options: [
    'String str;', 
    'char *str;', 
    'float str = 3e2;', 
    'Both “String str;” and “float str = 3e2;”'
  ],
  answer: 0,
},
{
  question: 'What is short int in C programming?',
  options: [
    'The basic data type of C',
    'Qualifier',
    'Short is the qualifier and int is the basic data type',
    'All of the mentioned'
  ],
  answer: 2,
},
{
  question: 'Which of the following cannot be a variable name in C?',
  options: ['volatile', 'true', 'friend', 'export'],
  answer: 0,
},
{
  question: 'Which is a valid C expression?',
  options: [
    'int my_num = 100,000;', 
    'int my_num = 100000;', 
    'int my num = 1000;', 
    'int $my_num = 10000;'
  ],
  answer: 1,
},
{
  question: 'All keywords in C are in ____________',
  options: ['LowerCase letters', 'UpperCase letters', 'CamelCase letters', 'None of the mentioned'],
  answer: 0,
},
{
  question: 'Which of the following is not a valid C variable name?',
  options: ['int number', 'float rate', 'int variable_count', 'int $main'],
  answer: 3,
},],
/*java mcq */
  java: [ 
    {
      question: 'Which component is used to compile, debug and execute the java programs?',
      options: [
        'JRE',
        'JIT',
        'JDK',
        'JVM'
      ],
      answer: 3,
    },
    {
      question: 'Which one of the following is not a Java feature?',
      options: [
        'Object-oriented',
        'Use of pointers',
        'Portable',
        'Dynamic and Extensible'
      ],
      answer: 1,
    },
    {
      question: 'Which of these cannot be used for a variable name in Java?',
      options: [
        'identifier & keyword',
        'identifier',
        'keyword',
        'none of the mentioned'
      ],
      answer: 2,
    },
    {
      question: 'Which environment variable is used to set the java path?',
      options: [
        'MAVEN_Path',
        'JavaPATH',
        'JAVA',
        'JAVA_HOME'
      ],
      answer: 3,
    },
    {
      question: 'Which of the following is not an OOPS concept in Java?',
      options: [
        'Polymorphism',
        'Inheritance',
        'Compilation',
        'Encapsulation'
      ],
      answer: 2,
    },
    {
      question: 'Which of the following is a type of polymorphism in Java Programming?',
      options: [
        'Multiple polymorphism',
        'Compile time polymorphism',
        'Multilevel polymorphism',
        'Execution time polymorphism'
      ],
      answer: 1,
    },
    {
      question: 'What is Truncation in Java?',
      options: [
        'Floating-point value assigned to a Floating type',
        'Floating-point value assigned to an integer type',
        'Integer value assigned to floating type',
        'Integer value assigned to floating type'
      ],
      answer: 1,
    },
    {
      question: 'Which exception is thrown when java is out of memory?',
      options: [
        'MemoryError',
        'OutOfMemoryError',
        'MemoryOutOfBoundsException',
        'MemoryFullException'
      ],
      answer: 1,
    },
    {
      question: 'Which of these are selection statements in Java?',
      options: [
        'break',
        'continue',
        'for()',
        'if()'
      ],
      answer: 3,
    },
    {
      question: 'Which of these keywords is used to define interfaces in Java?',
      options: [
        'intf',
        'Intf',
        'interface',
        'Interface'
      ],
      answer: 2,
    },
    {
      question: 'Which of the following is a superclass of every class in Java?',
      options: [
        'ArrayList',
        'Abstract class',
        'Object class',
        'String'
      ],
      answer: 2,
    },
    {
      question: 'Which of the below is not a Java Profiler?',
      options: [
        'JProfiler',
        'Eclipse Profiler',
        'JVM',
        'JConsole'
      ],
      answer: 2,
    },
    {
      question: 'Which of these packages contains the exception Stack Overflow in Java?',
      options: [
        'java.io',
        'java.system',
        'java.lang',
        'java.util'
      ],
      answer: 2,
    },
    {
      question: 'Which of these keywords are used for the block to be examined for exceptions?',
      options: [
        'check',
        'throw',
        'catch',
        'try'
      ],
      answer: 3,
    },
    {
      question: 'Which one of the following is not an access modifier?',
      options: [
        'Protected',
        'Void',
        'Public',
        'Private'
      ],
      answer: 1,
    },
    {
      question: 'What is the numerical range of a char data type in Java?',
      options: [
        '0 to 256',
        '-128 to 127',
        '0 to 65535',
        '0 to 32767'
      ],
      answer: 2,
    },
    {
      question: 'Which class provides system independent server side implementation?',
      options: [
        'Server',
        'ServerReader',
        'Socket',
        'ServerSocket'
      ],
      answer: 3,
    },
    {
      question: 'Number of primitive data types in Java are?',
      options: [
        '6',
        '7',
        '8',
        '9'
      ],
      answer: 2,
    },
    {
      question: 'What is the size of float and double in java?',
      options: [
        '32 and 64',
        '32 and 32',
        '64 and 64',
        '64 and 32'
      ],
      answer: 0,
    },
    {
      question: 'Find the output of the following code.\n\nint Integer = 24;\nchar String  = \'I\';\nSystem.out.print(Integer);\nSystem.out.print(String);',
      options: [
        'Compile error',
        'Throws exception',
        'I',
        '24 I'
      ],
      answer: 0,
    },
    {
      question: 'Find the output of the following program.\n\npublic class Solution{\n       public static void main(String[] args){\n                     short x = 10;\n                     x =  x * 5;\n                     System.out.print(x);\n       }\n}',
      options: [
        '50',
        '10',
        'Compile error',
        'Exception'
      ],
      answer: 2,
    },
    {
      question: 'Select the valid statement.',
      options: [
        'char[] ch = new char(5)',
        'char[] ch = new char[5]',
        'char[] ch = new char()',
        'char[] ch = new char[]'
      ],
      answer: 1,
    },
    {
      question: 'When an array is passed to a method, what does the method receive?',
      options: [
        'The reference of the array',
        'A copy of the array',
        'Length of the array',
        'Copy of first element'
      ],
      answer: 0,
    },
    {
      question: 'Find the value of A[1] after execution of the following program.\n\nint[] A = {0,2,4,1,3};\nfor(int i = 0; i < A.length; i++){\nA[i] = A[(A[i] + 3) % A.length];\n}',
      options: [
        '0',
        '1',
        '2',
        '3'
      ],
      answer: 1,
    },
    {
      question: 'When is the object created with new keyword?',
      options: [
        'At run time',
        'At compile time',
        'Depends on the code',
        'None'
      ],
      answer: 0,
    },



],
};
