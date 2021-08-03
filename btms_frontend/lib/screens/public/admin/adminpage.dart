import 'package:btms_frontend/screens/public/admin/graph.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class AdminMainPage extends StatefulWidget {
  AdminMainPage({Key? key}) : super(key: key);

  @override
  _AdminMainPageState createState() => _AdminMainPageState();
}

class _AdminMainPageState extends State<AdminMainPage> {
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
              children: [sideBarProfile(), optionList(), rightSide()],
            ),
          ),
        )));
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
                Navigator.pushNamed(context, '/dashboard/traffic');
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

  Widget rightSide() {
    return Container(
        child: Expanded(
            child: Column(
      children: [
        Container(
            width: MediaQuery.of(context).size.width,
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  const Expanded(
                    child: Padding(
                      padding: EdgeInsets.all(16.0),
                      child: Text(
                        "Dashbord",
                        style: TextStyle(
                            fontSize: 18, fontWeight: FontWeight.w300),
                      ),
                    ),
                  ),
                  Expanded(
                    child: Container(
                        width: 200,
                        padding: const EdgeInsets.all(8.0),
                        margin: const EdgeInsets.only(right: 20.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: <Widget>[
                            IconButton(
                              color: Colors.grey[600],
                              onPressed: () {},
                              icon: const Icon(
                                Icons.settings,
                              ),
                            ),
                            const SizedBox(
                              width: 50.0,
                            ),
                            Container(
                                height: 50,
                                width: 50,
                                alignment: Alignment.topRight,
                                decoration: const BoxDecoration(
                                  shape: BoxShape.circle,
                                  image: DecorationImage(
                                      image: AssetImage(
                                          "images/board_traders.jpg"),
                                      fit: BoxFit.cover),
                                )),
                          ],
                        )),
                  ),
                ])),
        Container(
          width: MediaQuery.of(context).size.width,
          height: 150.0,
          padding: EdgeInsets.all(16.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Card(
                child: Container(
                  width: 200,
                  height: 120,
                  color: Colors.green[100],
                  child: Column(
                    children: <Widget>[
                      Container(
                        padding: const EdgeInsets.all(16.0),
                        child: const Text(
                          "Traffics",
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: const Text(
                          "34",
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      )
                    ],
                  ),
                ),
              ),
              Card(
                child: Container(
                  width: 200,
                  height: 120,
                  color: Colors.amber[100],
                  child: Column(
                    children: <Widget>[
                      Container(
                        padding: const EdgeInsets.all(16.0),
                        child: const Text(
                          "Registered",
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: const Text(
                          "100",
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      )
                    ],
                  ),
                ),
              ),
              Card(
                child: Container(
                  width: 200,
                  height: 120,
                  color: Colors.orange[100],
                  child: Column(
                    children: <Widget>[
                      Container(
                        padding: const EdgeInsets.all(16.0),
                        child: const Text(
                          "Business",
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: const Text(
                          "34",
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      )
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
        SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Container(
              color: Colors.black,
              width: MediaQuery.of(context).size.width - 400,
              height: 500,
              child: GraphTraffic()),
        )
      ],
    )));
  }
}