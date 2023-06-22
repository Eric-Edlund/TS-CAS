/*
BSD License
Copyright (c) 2013, Tom Everett
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. Neither the name of Tom Everett nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

grammar arithmetic;

equation
   : expression relop expression
   ;

expression
   : open
   ;

// Stuff like 
// (a + b) and b that can be multiplied
closed
   :  LPAREN open RPAREN #Paren
   |  atom #ClosedAtom
   |  left=closed DIV right=closed #Division
   |  left=closed POW right=closed #Power
   |  left=closed TIMES? right=closed #Product
   |  LOG base=closed? content=closed #Log
   |  INT integrand=closed #Integral
   ;

// Stuff that can be multiplied if there is a
// closed expression to the right
// Like -a and -(b^2)
// But not a + b
right_closed
   :  closed #ClosedIsRight_Closed
   |  (PLUS | MINUS) closed #UnaryOnExpression
   |  left=right_closed right=closed #Right_ClosedImplicitProduct
   ;

// Expressions that can't be multiplied implicitly
// a + b
open
   :  right_closed #Right_ClosedIsOpen
   //|  (PLUS | MINUS)* atom #UnaryOnAtom
   |  left=open (PLUS | MINUS) right=right_closed #Sum
   ;

atom
   : SCIENTIFIC_NUMBER
   | VARIABLE
   ;

relop
   : EQ
   //| GT
   //| LT
   ;

// Lexer

//The NUMBER part gets its potential sign from "(PLUS | MINUS)* atom" in the expression rule
SCIENTIFIC_NUMBER
   : NUMBER (E SIGN? UNSIGNED_INTEGER)?
   ;

fragment NUMBER
   : ('0' .. '9') + ('.' ('0' .. '9') +)?
   ;

fragment UNSIGNED_INTEGER
   : ('0' .. '9')+
   ;


fragment E
   : 'E' | 'e'
   ;

fragment L: 'l' | 'L';
fragment O: 'o' | 'O';
fragment G: 'g' | 'G';


fragment SIGN
   : '+' | '-'
   ;


LPAREN
   : '('
   ;


RPAREN
   : ')'
   ;


PLUS
   : '+'
   ;


MINUS
   : '-'
   ;


TIMES
   : '*' | '·'
   ;


DIV
   : '/'
   ;


GT
   : '>'
   ;


LT
   : '<'
   ;


EQ
   : '='
   ;


POINT
   : '.'
   ;


POW
   : '^'
   ;

INT
   : ('i' | 'I') ('n' | 'N') ('t' | 'T')
   ;

LOG: L O G;

VARIABLE
   : 'a' .. 'z' | 'A' .. 'Z'
   ;

WS
   : [ \r\n\t] + -> skip
   ;