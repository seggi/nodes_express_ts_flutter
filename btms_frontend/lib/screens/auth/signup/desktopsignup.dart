import 'package:flutter/material.dart';

class DesktopNavBar extends StatelessWidget {
  DesktopNavBar({Key? key}) : super(key: key);
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(context) {
    return Scaffold(
        backgroundColor: Colors.grey[200],
        body: Container(
          padding: const EdgeInsets.all(0.0),
          color: Colors.grey[200],
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                width: 400,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Container(
                        width: 500,
                        margin: const EdgeInsets.only(bottom: 0.0, left: 50.0),
                        padding: const EdgeInsets.all(8.0),
                        child: RichText(
                            text: const TextSpan(
                                text: "B",
                                style: TextStyle(
                                  letterSpacing: 0.0,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 30,
                                ),
                                children: <TextSpan>[
                              TextSpan(
                                  text: "T",
                                  style: TextStyle(
                                    letterSpacing: 0.0,
                                    color: Colors.green,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 48,
                                  )),
                              TextSpan(
                                  text: "MS",
                                  style: TextStyle(
                                    letterSpacing: 0.0,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 30,
                                  ))
                            ])),
                      ),
                      Container(
                        alignment: Alignment.topCenter,
                        margin:
                            const EdgeInsets.only(bottom: 100.0, left: 30.0),
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(
                              // width: 500,
                              height: 500,
                              alignment: Alignment.center,
                              padding: const EdgeInsets.all(8.0),
                              decoration: const BoxDecoration(
                                  // color: Colors.white,
                                  borderRadius: BorderRadius.only(
                                      topRight: Radius.circular(400.0))),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Container(
                                    alignment: Alignment.topLeft,
                                    margin: const EdgeInsets.only(left: 20.0),
                                    child: const Text(
                                      "Sign Up",
                                      style: TextStyle(
                                          letterSpacing: -1.0,
                                          fontSize: 28.0,
                                          fontWeight: FontWeight.w700),
                                    ),
                                  ),
                                  const SizedBox(height: 10.0),
                                  Container(
                                    width: 400.0,
                                    padding: const EdgeInsets.all(16.0),
                                    child: MobileSignInForm(_formKey),
                                  ),
                                  const SizedBox(height: 10.0),
                                  TextButton(
                                      onPressed: () {
                                        Navigator.pop(context);
                                      },
                                      child: RichText(
                                          text: const TextSpan(
                                              text: "Don't have an account? ",
                                              style: TextStyle(
                                                letterSpacing: 0.0,
                                                fontWeight: FontWeight.w300,
                                                fontSize: 16,
                                              ),
                                              children: <TextSpan>[
                                            TextSpan(
                                                text: "register now",
                                                style: TextStyle(
                                                  letterSpacing: 0.0,
                                                  color: Colors.green,
                                                  fontWeight: FontWeight.w300,
                                                  fontSize: 16,
                                                )),
                                          ])))
                                ],
                              )),
                        ),
                      ),
                    ]),
              ),
              Container(
                  height: MediaQuery.of(context).size.height,
                  width: 400,
                  alignment: Alignment.topRight,
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(500.0),
                        topLeft: Radius.circular(500.0)),
                    image: DecorationImage(
                        image: AssetImage("images/board_traders.jpg"),
                        fit: BoxFit.cover),
                  )),
            ],
          ),
        )
        // transform: Matrix4.rotationZ(0.1),
        );
  }
}

// Mobile Signin Form

// ignore: non_constant_identifier_names
Widget MobileSignInForm(_formKey) {
  return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.topLeft,
            margin: const EdgeInsets.only(left: 0.0),
            child: const Text(
              "Email",
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w300),
            ),
          ),
          const SizedBox(
            height: 5.0,
          ),
          TextFormField(
            decoration: const InputDecoration(
              filled: true,
              fillColor: Colors.white,
              hintText: 'Email',
              contentPadding: EdgeInsets.only(left: 8.0, bottom: 8.0, top: 8.0),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
          ),
          const SizedBox(height: 20.0),
          Container(
            alignment: Alignment.topLeft,
            margin: const EdgeInsets.only(left: 0.0),
            child: const Text(
              "Password",
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w300),
            ),
          ),
          const SizedBox(height: 5.0),
          TextFormField(
            autofocus: false,
            obscureText: true,
            style: const TextStyle(fontSize: 18.0, color: Color(0xFFbdc6cf)),
            decoration: const InputDecoration(
              filled: true,
              fillColor: Colors.white,
              hintText: '*********',
              contentPadding: EdgeInsets.only(left: 8.0, bottom: 8.0, top: 8.0),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
          ),
          const SizedBox(height: 20.0),
          Container(
            alignment: Alignment.topLeft,
            margin: const EdgeInsets.only(left: 0.0),
            child: const Text(
              "Confirm Password",
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w300),
            ),
          ),
          const SizedBox(height: 5.0),
          TextFormField(
            autofocus: false,
            obscureText: true,
            style: const TextStyle(fontSize: 18.0, color: Color(0xFFbdc6cf)),
            decoration: const InputDecoration(
              filled: true,
              fillColor: Colors.white,
              hintText: '*********',
              contentPadding: EdgeInsets.only(left: 8.0, bottom: 8.0, top: 8.0),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some text';
              }
              return null;
            },
          ),
          const SizedBox(height: 50.0),
          InkWell(
              child: Container(
            width: 400,
            padding: const EdgeInsets.all(16.0),
            decoration: const BoxDecoration(
                color: Colors.black87,
                borderRadius: BorderRadius.all(Radius.circular(400.0))),
            child: const Center(
              child: Text('Sign Up',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                  )),
            ),
          )),
        ],
      ));
}
