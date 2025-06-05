function main(input) {
    const lines = input.trim().split("\n");
    const [N, M] = lines[0].split(" ").map(Number);
    const intervals = lines.slice(1, M + 1).map(line => line.split(" ").map(Number));

    const diff = Array(N + 2).fill(0);

    for (const [L, R] of intervals) {
        diff[L]++;
        diff[R + 1]--;
    }

    const wallDef = Array(N + 1);
    let current = 0;
    let minDefense = Infinity;

    for (let i = 1; i <= N; i++) {
        current += diff[i];
        wallDef[i] = current;
        minDefense = Math.min(minDefense, current);
    }

    // 守りが最も薄い城壁を探す
    const weakWalls = [];
    for (let i = 1; i <= N; i++) {
        if (wallDef[i] === minDefense) weakWalls.push(i);
    }

    // その城壁を守る砲台だけ数える
    let result = 0;
    for (let i = 0; i < M; i++) {
        const [L, R] = intervals[i];
        for (const wall of weakWalls) {
            if (L <= wall && wall <= R) {
                result++;
                break;
            }
        }
    }

    console.log(result);
}
