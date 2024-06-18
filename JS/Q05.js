let styles = ["James", "Brennie"];
console.log(styles);

styles.push("Robert");
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles);

let firstElement = styles.shift();
console.log(styles);
console.log(firstElement);

styles.unshift("Rose", "Regal");
console.log(styles);

