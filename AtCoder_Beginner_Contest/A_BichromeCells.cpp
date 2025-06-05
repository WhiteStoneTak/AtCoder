#include <bits/stdc++.h>
using namespace std;

int main() {
    int N, A;

    cin >> N >> A;
    // **はC++20以降で使用可能 pow(base, exponents);
    cout << N * N - A;
}