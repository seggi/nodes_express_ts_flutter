import 'dart:async';
import 'dart:math';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:btms_frontend/screens/public/admin/dashboard.dart';
import 'package:btms_frontend/screens/public/admin/graph.dart';

class AdminMainPage extends StatefulWidget {
  AdminMainPage({Key? key}) : super(key: key);

  @override
  _AdminMainPageState createState() => _AdminMainPageState();
}

class _AdminMainPageState extends State<AdminMainPage> {
  PageController controller = PageController();

  @override
  Widget build(BuildContext context) {
    return Title(
        color: Colors.blue, // This is required
        title: 'dashboard',
        child: Scaffold(
            body: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Container(
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.height,
            child: Row(
              children: [
                // pagesList(),
                // sideBarProfile(),
                testScreen(),
                optionList(),
                pagesList()
              ],
            ),
          ),
        )));
  }

  Widget pagesList() {
    return Expanded(
        child: Column(
      mainAxisSize: MainAxisSize.max,
      children: const [],
    ));
  }

  Widget sideBarProfile() {
    return Container(
        width: 100,
        height: MediaQuery.of(context).size.height,
        color: Colors.black87,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: RichText(
                  text: const TextSpan(
                      text: "B",
                      style: TextStyle(
                        color: Colors.white,
                        letterSpacing: 0.0,
                        fontWeight: FontWeight.bold,
                        fontSize: 22,
                      ),
                      children: <TextSpan>[
                    TextSpan(
                        text: "T",
                        style: TextStyle(
                          letterSpacing: 0.0,
                          color: Colors.green,
                          fontWeight: FontWeight.bold,
                          fontSize: 30,
                        )),
                    TextSpan(
                        text: "MS",
                        style: TextStyle(
                          color: Colors.white,
                          letterSpacing: 0.0,
                          fontWeight: FontWeight.bold,
                          fontSize: 22,
                        ))
                  ])),
            ),
            Container(
                margin: const EdgeInsets.only(bottom: 50.0),
                child: Ink(
                  decoration: const ShapeDecoration(
                    color: Colors.lightBlue,
                    shape: CircleBorder(),
                  ),
                  child: IconButton(
                    color: Colors.white,
                    onPressed: () {},
                    icon: const Icon(Icons.logout_rounded),
                  ),
                ))
          ],
        ));
  }

  Widget optionList() {
    return Container(
      color: Colors.grey[100],
      width: 70,
      height: MediaQuery.of(context).size.height,
      child: Column(children: [
        // const Text("General"),
        const SizedBox(
          height: 50,
        ),
        Container(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            IconButton(
              color: Colors.green,
              onPressed: () {},
              icon: const Icon(Icons.dashboard),
              iconSize: 30,
            ),
            const SizedBox(
              height: 10,
            ),
            IconButton(
              color: Colors.grey[600],
              onPressed: () {
                Navigator.pushReplacement<void, void>(
                    context,
                    MaterialPageRoute(
                        builder: (BuildContext context) => testScreen()));
              },
              icon: const Icon(Icons.person_sharp),
              iconSize: 30,
            ),
            const SizedBox(
              height: 10,
            ),
            IconButton(
              color: Colors.grey[600],
              onPressed: () {},
              icon: const Icon(Icons.view_carousel),
              iconSize: 30,
            ),
            const SizedBox(
              height: 10,
            ),
            IconButton(
              color: Colors.grey[600],
              onPressed: () {},
              icon: const Icon(Icons.account_box),
              iconSize: 30,
            ),
          ],
        ))
      ]),
    );
  }

  Widget testScreen() {
    return const Text("DDDDD");
  }
}
