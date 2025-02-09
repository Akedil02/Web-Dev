alert(null || 2 || undefined); //2

alert(alert(1) || 2 || alert(3));//first1,then 2

alert(1 && null && 2); //null

alert(alert(1) && alert(2)); // first 1, then undefind

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert('first');

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert('second');

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert('third');