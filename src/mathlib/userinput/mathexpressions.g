grammar mathexpressions;

// Lexing
LOG: 'log' ;
LN: 'ln' ;
TIMES: '*' ;
ADD: '+' ;
MINUS: '-' ;
DIVIDE: '/' ;
POW: '^' ;
INTEGRATE: 'int';
OPEN: '(' ;
CLOSE: ')' ;

NUMBER: [0-9]+ ('.' [0-9]+)? ;
VARIABLE: [a-zA-Z];

// Ignore white space
WS: [ \t\r\n]+ -> skip ;


// Parsing
expression
    : NUMBER
    | VARIABLE
    | expression (ADD expression)+
    | expression (TIMES expression)+
    | expression expression
    | expression POW expression
    | expression DIVIDE expression
    | INTEGRATE expression
    | OPEN expression CLOSE
    | LOG expression expression
    ;

/*
equality
    : expression ('=' expression)+
    ;

statement
    : equality
    ;

statements
    : statement*
    ;
    */