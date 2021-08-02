import 'package:btms_frontend/screens/auth/signuppage.dart';
import 'package:flutter/material.dart';
import 'package:btms_frontend/screens/auth/signinpage.dart';

void main() {
  runApp(MaterialApp(
    title: "Sign In",
    initialRoute: '/',
    routes: {
      '/': (context) => SignIpPage(),
      '/signup': (context) => const SignUpPage()
    },
  ));
}

// const MyApp()

// class MyApp extends StatelessWidget {
//   const MyApp({Key? key}) : super(key: key);

//   // This widget is the root of your application.
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Flutter Demo',
//       theme: ThemeData(
//         primarySwatch: Colors.blue,
//       ),
//       home: SignIpPage(),
//     );
//   }
// }
