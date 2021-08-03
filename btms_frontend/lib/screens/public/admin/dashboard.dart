import 'package:btms_frontend/screens/public/admin/graph.dart';
import 'package:flutter/material.dart';

class Dashboardpage extends StatefulWidget {
  Dashboardpage({Key? key}) : super(key: key);

  @override
  _DashboardpageState createState() => _DashboardpageState();
}

class _DashboardpageState extends State<Dashboardpage> {
  @override
  Widget build(BuildContext context) {
    return rightSide();
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

class MyHomePage extends StatelessWidget {
  var list = ["Home", "Services", "Work", "About"];
  var colors = [Colors.orange, Colors.blue, Colors.red, Colors.green];

  PageController controller = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Column(
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          Row(
            children: <Widget>[
              Container(
                width: 50,
                height: 50,
                margin: EdgeInsets.all(8),
                decoration: BoxDecoration(
                    color: Colors.blue,
                    borderRadius: BorderRadius.circular(10)),
              ),
              Spacer(),
              Row(
                children: List.generate(3, (index) {
                  return GestureDetector(
                    onTap: () {
                      _scrollToIndex(index);
                    },
                    child: Container(
                      margin: EdgeInsets.all(8),
                      child: Text(list[index + 1]),
                    ),
                  );
                }),
              )
            ],
          ),
          Expanded(
            child: PageView(
                scrollDirection: Axis.vertical,
                pageSnapping: false,
                controller: controller,
                children: List.generate(list.length, (index) {
                  return Container(
                    width: MediaQuery.of(context).size.width,
                    height: double.maxFinite,
                    color: colors[index],
                    child: Center(
                      child: Text(
                        list[index],
                        style: TextStyle(color: Colors.white, fontSize: 50),
                      ),
                    ),
                  );
                })),
          ),
        ],
      )),
    );
  }

  void _scrollToIndex(int index) {
    controller.animateToPage(index + 1,
        duration: Duration(seconds: 2), curve: Curves.fastLinearToSlowEaseIn);
  }
}
