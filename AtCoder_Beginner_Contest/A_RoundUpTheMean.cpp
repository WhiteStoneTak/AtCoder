#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b, x, sum;

    cin >> a >> b;
    sum = a + b;

    if (sum % 2 == 0) {
        x = sum / 2;
        cout << x << endl;
    } else {
        x = (sum + 1) / 2;
        cout << x << endl;
    }
}