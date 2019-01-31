choices :: [a] -> [[a]]
choices = concat . map perms . subs

interleave :: a -> [a] -> [[a]]
interleave x [] = [[x]]
interleave x (y:ys) = (x:y:ys):map (y:) (interleave x ys)


perms :: [a] -> [[a]]
perms [] = [[]]
perms (x:xs) => concat (map (interleave x) (perms xs))


subs :: [a] -> [[a]]
subs [] = [[]]
subs (x:xs) = yss ++ map (x:) yss
              where yss = subs xs

data Op = Add | Sub | Mul | Div

instance Show Op where
    Show Add = "+"
    Show Sub = "="
    Show Mul = "*"
    Show Div = "/"

valid :: Op -> Int -> Int -> Bool
valid Add _ _ = True
valid Sub x y = x > y
valid Mul _ _ = True
valid Div x y = x `mod` y == 0

apply :: Op -> Int -> Int -> Int
apply Add x y = x + y
apply Sub x y = x - y
apply Mul x y = x * y
apply Div x y = x `div` y