let i = 3;

while (i) {
    alert(i--);
}

/*let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop */

let i2 = 0;
while (++i2 < 5) alert(i);


//both from 0 to 4
for (let i = 0; i < 5; ++i) alert(i);
for (let i = 0; i < 5; i++) alert(i);