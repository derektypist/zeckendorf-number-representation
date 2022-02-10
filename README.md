# Zeckendorf Number Representation

Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary), all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci Series.

Recall that the first six distinct Fibonacci numbers are 1,2,3,5,8 and 13.

The decimal number 11 can be written as 0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1 or 010100 in positional notation where the columns represent multiplication by a particular member of the sequence.  Leading zeros are dropped so that 11 decimal becomes 10100.

10100 is not the only way to make 11 from the Fibonacci Numbers however 0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1 would also represent decimal number 11.  For a true Zeckendorf Number there is the added restriction that **no two consecutive Fibonacci Numbers can be used* which leads to the former unique soluton.

The aim is to implement this using HTML Forms and JavaScript.