const subs = ([first, ...rest]) => !first ? [[]] 
  : subs(rest).concat(subs(rest).map(x => [first].concat(x)));


const interleave = (x, [first, ...rest]) => !first ? [[x]] 
                   : [[x,first, ...rest]].concat(interleave(x, rest)
                                     .map(y => [first].concat(y)));

const perms = ([first, ...rest]) => !first ? [[]]
                   : perms(rest).map(x => interleave(first, x)).flat();              

//console.log(perms([1,2,3]));

const choices = list => subs(list).map(perms).flat();

const Op = {
  Add: (x, y) => x + y,
  Sub: (x , y) => x - y,
  Mul: (x, y) => x * y,
  Div: (x, y) => x / y
};

const ValidOperations = {
  
}

const valid = (oper, x, y) => {
  switch(oper) {
    case "Add": return true;
      break;
    case "Sub": return x > y;
      break;
    case "Mul": return true;
      break;
    case "Div": return x % y === 0
      break;
    default: return false;  
  }
}

const apply = (oper, x, y) => {
  return valid(oper, x, y) && Op[oper](x,y) 
}

console.log(valid("Sub", 1,2));
console.log(apply("Add", 1,2));