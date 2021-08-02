import 'package:btms_frontend/screens/auth/signup/desktopsignup.dart';
import 'package:btms_frontend/screens/auth/signup/mobilesignupage.dart';
import 'package:flutter/material.dart';

class SignUpPage extends StatelessWidget {
  const SignUpPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Title(
      color: Colors.blue, // This is required
      title: 'Sign up',
      child: LayoutBuilder(builder: (context, constraints) {
        if (constraints.maxWidth > 1200) {
          return DesktopNavBar();
        } else if (constraints.maxWidth > 800 && constraints.maxWidth < 1200) {
          return DesktopNavBar();
        } else {
          return MobileNavBar();
        }
      }),
    );
  }
}
