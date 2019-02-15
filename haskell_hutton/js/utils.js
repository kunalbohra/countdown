const subs = ([first, ...rest]) => !first ? [[]] 
  : subs(rest).concat(subs(rest).map(x => [first].concat(x)));


const interleave = (x, [first, ...rest]) => !first ? [[x]] 
                   : [[x,first, ...rest]].concat(interleave(x, rest)
                                     .map(y => [first].concat(y)));

const perms = ([first, ...rest]) => !first ? [[]]
                   : perms(rest).map(x => interleave(first, x)).flat();              

//console.log(perms([1,2,3]));

const choices = list => subs(list).map(perms).flat();

module.exports = {
    subs,
    interleave,
    perms,
    choices
}