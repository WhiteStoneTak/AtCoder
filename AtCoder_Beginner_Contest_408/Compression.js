function main(input) {
    const lines = input.trim().split("\n");
    const N = Number(lines[0]);
    const A = lines[1].split(" ").map(Number);

    const uniqueSorted = [...new Set(A)].sort((a, b) => a - b);
    
    console.log(uniqueSorted.length);
    console.log(uniqueSorted.join(" "));
}

if (require.main === module) {
    const fs = require("fs");
    const input = fs.readFileSync("/dev/stdin", "utf8");
    main(input);
}