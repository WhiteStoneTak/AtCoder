
function main(input) {
    const lines = input.trim().split("\n");
    const [N, S] = lines[0].split(" ").map(Number);
    const times = lines[1].split(" ").map(Number);

    let lastTap = 0;
    const limit = S + 0.5;

    for (let i = 0; i < N; i++) {
        if (times[i] - lastTap >= limit) {
            console.log("No");
            return;
        }

        lastTap = times[i];
    }

    console.log("Yes");
}

if (require.main === module) {
    const fs = require("fs");
    const input = fs.readFileSync("/dev/stdin", "utf8");
    main(input);
}
