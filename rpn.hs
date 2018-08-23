--reverse polish notation calculator --https://en.wikipedia.org/wiki/Reverse_Polish_notation

module RPN where

solveRPN :: String -> Integer
solveRPN = head . foldl foldingFunction [] . words
  where    foldingFunction (x:y:ys) "*" = (x * y) : ys
           foldingFunction (x:y:ys) "+" = (x + y) : ys
           foldingFunction (x:y:ys) "-" = (y - x) : ys
           foldingFunction xs numberString = read numberString:xs