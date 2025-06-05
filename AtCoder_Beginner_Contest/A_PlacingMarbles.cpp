#include <bits/stdc++.h>
using namespace std;

int main() {
    int s;

    // 000, 001, 010, 011, 100, 101, 110, 111
    //  0    1    1    2    1    2    2    3

    cin >> s;

    if (s == 0) {
        cout << 0 << endl;
    } else if (s == 1 || s == 10 || s == 100) {
        cout << 1 << endl;
    } else if (s % 9 == 2) {
        cout << 2 << endl;
    } else {
        cout << 3 << endl;
    }
}