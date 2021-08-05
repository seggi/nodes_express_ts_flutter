import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import {COLORS}from "./constante";

  const renderTooltip = (context: any) => {
    const { category, value } = context.point || context;
    return (
      <div>
        {category}: {value}%
      </div>
    );
  };
  
  // Graph data
  const applicationsStatusThisMonth = [
    {
      status: "Casual Sneakers",
      value: 14,
      color: COLORS.accepted,
    },
    {
      status: "Real Snealers",
      value: 14,
      color: COLORS.interviewing,
    },
    {
      status: "Men shoes",
      value: 40,
      color: COLORS.rejected,
    },
    {
        status: "Sneakers",
        value: 32,
        color: COLORS.pending,
      },
  ];
  
  // Show category label for each item in the donut graph
  const labelContent = (e: { category: any; }) => e.category;
  
  const Charts = () => {
    return (
      <Chart pannable zoomable style={{ height: 300 }}>
        <ChartTitle text="Business status - this month" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
        <ChartLegend visible={false} />
        <ChartSeries>
          <ChartSeriesItem
            type="bar"
            data={applicationsStatusThisMonth}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;