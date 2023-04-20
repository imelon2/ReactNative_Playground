import React from 'react';
import {View, Text, Dimensions, processColor} from 'react-native';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';
import { PieChart, PieData, ChartDescription } from 'react-native-charts-wrapper';
const {width} = Dimensions.get('screen');
// function Chart() {
//   const data = [
//     {
//       name: 'Seoul',
//       population: 21500000,
//       color: 'rgba(131, 167, 234, 1)',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'Toronto',
//       population: 2800000,
//       color: '#F00',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'Beijing',
//       population: 527612,
//       color: 'green',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'New York',
//       population: 8538000,
//       color: '#ffffff',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//     {
//       name: 'Moscow',
//       population: 11920000,
//       color: 'rgb(0, 0, 255)',
//       legendFontColor: '#7F7F7F',
//       legendFontSize: 15,
//     },
//   ];
//   const chartConfig = {
//     backgroundColor: '#1cc910',
//     backgroundGradientFrom: '#eff3ff',
//     backgroundGradientTo: '#efefef',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//   };
//   return (
//     <View>
//       <PieChart
//         data={data}
//         width={width}
//         height={200}
//         chartConfig={chartConfig}
//         accessor={'population'}
//         backgroundColor={'transparent'}
//         paddingLeft={'15'}
//         // center={[10, 50]}
//         absolute
//       />
//       <BarChart
//         data={{
//           labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//           datasets: [
//             {
//               data: [20, 45, 28, 80, 99, 43],
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width - 16}
//         height={220}
//         chartConfig={{
//           backgroundColor: '#1cc910',
//           backgroundGradientFrom: '#eff3ff',
//           backgroundGradientTo: '#efefef',
//           decimalPlaces: 2,
//           color: (opacity = 0) => `rgba(0, 0, 10, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// }

function Chart() {
    const data = {
        dataSets: [{
            values: [{ value: 70 }, { value: 30 }],
            label: '',
            config: {
                colors: [processColor('#8CB2EA'), processColor('#E4F799')],
                valueTextSize: 14,
                valueTextColor: processColor('black'),
                // sliceSpace: 10,
                selectionShift: 13,
                valueFormatter: "#.#'%'",
            }
        }],
    }
    return (
        <View style={{ flex: 5, alignItems: 'center' }} >
        <PieChart
            style={{
                width: 205,
                height: 205,
            }}
            data={data}
            holeRadius={30}
            transparentCircleRadius={0} // 투명반지름
            holeColor={3}
            chartDescription={{ text: '' }}
            legend={{ enabled: false }}
        />
    </View>
    )
}

export default Chart;
