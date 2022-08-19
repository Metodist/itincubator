function grow(x) {
    let j = 1;
    for (let i = 0; i < x.length; i++) {
        j *= x[i];

    }
return j;
}

console.log(grow([1, 2, 3]));
