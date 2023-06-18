grammar math;

/*
    Parser
 */
equation: expression EQ expression;

expression: negation
            | NUMBER
            | VARIABLE;

negation: MINUS (NUMBER | VARIABLE);


/*
     Lexer
 */

 fragment DIGIT: [0-9];
 fragment E: 'E' | 'e';
 
 MINUS: '-';
 PLUS: '+';
 TIMES: 'x';
 DIV: '/';
 POW: '^';
 LOG: 'log';
 ABS: 'abs';
 EQ: '=';


 NUMBER: DIGIT+ ([.] DIGIT+)?;

 VARIABLE: [a-zA-Z];