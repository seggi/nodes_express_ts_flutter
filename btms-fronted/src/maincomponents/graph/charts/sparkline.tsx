import {
    Sparkline,
    ChartValueAxis,
    ChartValueAxisItem,
  } from "@progress/kendo-react-charts";
  
  const bulletData = [55, 75];
  const bulletValueAxis = {
    min: 0,
    max: 100,
    plotBands: [
      {
        from: 0,
        to: 100,
        color: "#787878",
        opacity: 0.15,
      },
    ],
  };
  
  const SparklineContainer = () => (
    <div>
      <Sparkline data={bulletData} type="bullet">
        <ChartValueAxis>
          <ChartValueAxisItem {...bulletValueAxis} />
        </ChartValueAxis>
      </Sparkline>
    </div>
  );
  
  export default SparklineContainer;