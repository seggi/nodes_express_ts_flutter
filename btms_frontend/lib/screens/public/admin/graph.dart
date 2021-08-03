import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_charts/charts.dart';
import 'package:syncfusion_flutter_charts/sparkcharts.dart';

class GraphTraffic extends StatefulWidget {
  // ignore: prefer_const_constructors_in_immutables
  GraphTraffic({Key? key}) : super(key: key);

  @override
  GraphTrafficState createState() => GraphTrafficState();
}

class GraphTrafficState extends State<GraphTraffic> {
  List<_SalesData> data = [
    _SalesData('Jan', 35),
    _SalesData('Feb', 28),
    _SalesData('Mar', 34),
    _SalesData('Apr', 32),
    _SalesData('June', 35),
    _SalesData('July', 28),
    _SalesData('August', 34),
    _SalesData('September', 32),
    _SalesData('October', 40)
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      child: SfCartesianChart(
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        primaryXAxis: CategoryAxis(),
        title: ChartTitle(text: 'Traffic by Month'),
        legend: Legend(isVisible: true),
        tooltipBehavior: TooltipBehavior(enable: true),
        series: <ChartSeries<_SalesData, String>>[
          SplineAreaSeries<_SalesData, String>(
              dataSource: data,
              xValueMapper: (_SalesData sales, _) => sales.year,
              yValueMapper: (_SalesData sales, _) => sales.sales,
              name: 'Traffic',
              // Enable data label
              dataLabelSettings: DataLabelSettings(isVisible: true))
        ],
        // isTransposed: true,
      ),
    ));
  }
}

class _SalesData {
  _SalesData(this.year, this.sales);

  final String year;
  final double sales;
}
