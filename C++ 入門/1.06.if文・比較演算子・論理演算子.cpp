#include <bits/stdc++.h>
using namespace std;

int main() {
  int A, B;
  string op;
  cin >> A >> op >> B;

  if (op == "+") {
    cout << A + B << endl;
  } else if (op == "-") {
    cout << A - B << endl;
  } else if (op == "*") {
    cout << A * B << endl;
  } else if (op == "/") {
        if (B == 0) {
            cout << "error" << endl;
        }else if ((A / B) % 1 != 0){
            cout << ((A -  ((A / B) % 1))/ B) << endl;
        } else {
            cout << A / B << endl;
        }
  } else if (op == "?" || "=" || "!") {
    cout << "error" << endl;
  }
}
