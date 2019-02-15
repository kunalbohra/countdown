

const ValidOperations = {
  add: () => true,
  Sub: (x, y) => x > y,
  Mul: () => true,
  Div: (x, y) => x % y === 0
}

const valid = (oper, x, y) => {
  return ValidOperations[oper] ? ValidOperations[operator](x,y) : false;
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



console.log(valid("Sub", 1,2));
console.log(apply("Add", 1,2));