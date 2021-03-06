import Chart from 'react-apexcharts';
import ImgDsDark from 'assets/img/ds-dark.svg';
function BarChart() {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };

    return (

        <Chart
            options={{ ...options, xaxis: mockData.labels}}

        />

    );
}

export default BarChart;
