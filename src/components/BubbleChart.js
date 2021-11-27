import React from 'react';
import Chart from "react-google-charts";

const bubbleChart = ( { allCountries }) => {

    // const countries = allCountries.map((country) => {
    //     return [country.cca3, parseFloat(country.latlng[0]), parseFloat(country.latlng[1]), country.population]
    // })

    // console.log(countries)

    // const header = ['ID', 'Latitude', 'Logitude', 'Population'];
    // countries.unshift(header);

 

    const chartData = [['ID', 'Logitude', 'Latitude', 'Region', 'Population']]
    for (let i = 0; i < allCountries.length; i++) {
        var currentCountry = allCountries[i];
        chartData.push([currentCountry.cca3, parseFloat(currentCountry.latlng[1]), parseFloat(currentCountry.latlng[0]), currentCountry.region, currentCountry.population])
    }






    var Chart = require("react-google-charts").Chart;

    return (
        <>
            {/* <p>I am the bubble chart</p> */}
            <div>
                <Chart
                    width={1000}
                    height={'600px'}
                    chartType="BubbleChart"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                        // title: 'The Countries of the World',
                        hAxis: { title: 'Longitude'},
                        vAxis: { title: 'Latitude' },
                        bubble: { textStyle: { fontSize: 11 } },
                        // backgroundColor: "green",
                        axisTitlesPosition: 'none',
                        chartArea: { left: 80, top: 40, width: '78%', height: '80%'},
                        explorer: ['dragToZoom', 'dragToPan', 'rightClickToReset'],
              
                    }}
                    
                />
            </div>
            {/* <div>
                <Chart
                    width={400}
                    height={'300px'}
                    chartType="BubbleChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                        ['CAN', 80.66, 1.67, 'North America', 33739900],
                        ['DEU', 79.84, 1.36, 'Europe', 81902307],
                        ['DNK', 78.6, 1.84, 'Europe', 5523095],
                        ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                        ['GBR', 80.05, 2, 'Europe', 61801570],
                        ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                        ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                        ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                        ['RUS', 68.6, 1.54, 'Europe', 141850000],
                        ['USA', 78.09, 2.05, 'North America', 307007000],
                    ]}
                    options={{
                        title:
                        'Correlation between life expectancy, fertility rate ' +
                        'and population of some world countries (2010)',
                        hAxis: { title: 'Life Expectancy' },
                        vAxis: { title: 'Fertility Rate' },
                        bubble: { textStyle: { fontSize: 11 } },
                    }}
                />
            </div> */}
        </>
    )
}

export default bubbleChart;