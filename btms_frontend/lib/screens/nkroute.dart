import 'package:btms_frontend/screens/auth/signinpage.dart';
import 'package:btms_frontend/screens/auth/signuppage.dart';
import 'package:btms_frontend/screens/public/admin/adminpage.dart';
import 'package:flutter/material.dart';

class RoutesName {
  // ignore: non_constant_identifier_names
  static const String FIRST_PAGE = '/first_page';
  // ignore: non_constant_identifier_names
  static const String SECOND_PAGE = '/second_page';
}

class RouteGenerator {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case RoutesName.FIRST_PAGE:
        return _GeneratePageRoute(
            widget: SignIpPage(), routeName: settings.name);
      case RoutesName.SECOND_PAGE:
        return _GeneratePageRoute(
            widget: SignUpPage(), routeName: settings.name);
      default:
        return _GeneratePageRoute(
            widget: SignIpPage(), routeName: settings.name);
    }
  }
}

class _GeneratePageRoute extends PageRouteBuilder {
  final Widget widget;
  final String routeName;
  _GeneratePageRoute({required this.widget, required this.routeName})
      : super(
            settings: RouteSettings(name: routeName),
            pageBuilder: (BuildContext context, Animation<double> animation,
                Animation<double> secondaryAnimation) {
              return widget;
            },
            transitionDuration: Duration(milliseconds: 500),
            transitionsBuilder: (BuildContext context,
                Animation<double> animation,
                Animation<double> secondaryAnimation,
                Widget child) {
              return SlideTransition(
                textDirection: TextDirection.rtl,
                position: Tween<Offset>(
                  begin: Offset(1.0, 0.0),
                  end: Offset.zero,
                ).animate(animation),
                child: child,
              );
            });
}
