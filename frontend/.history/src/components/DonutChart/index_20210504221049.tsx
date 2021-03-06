import Chart from 'react-apexcharts';
import ImgDsDark from 'assets/img/ds-dark.svg';
function DonutChart() {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (

        <Chart
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="240"

        />

    );
}

export default DonutChart;
