#include <bits/stdc++.h>
using namespace std;

int main() {
    int R, G;

    cin >> R >> G;

    // (r + a) / 2 = g
    // r + a = 2 * g
    // a = 2 * g - r
    cout << 2 * G - R << endl;
}
