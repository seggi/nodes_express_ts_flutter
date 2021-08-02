import 'package:btms_frontend/screens/auth/signin/desktoppage.dart';
import 'package:btms_frontend/screens/auth/signin/mobilepage.dart';
import 'package:flutter/material.dart';

class SignIpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth > 1200) {
        return DesktopNavBar();
      } else if (constraints.maxWidth > 800 && constraints.maxWidth < 1200) {
        return DesktopNavBar();
      } else {
        return MobileNavBar();
      }
    });
  }
}
