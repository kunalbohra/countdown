coords :: (Num t1, Num t, Enum t1, Enum t) => t1 -> t -> [(t1, t)]
coords m n = [(x,y) | x <- [0..m], y <- [0..n]]