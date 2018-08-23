secondFromLast list = if n < 2
                        then head list
                      else
                        last (take (n-1) list)
                      where n = length list