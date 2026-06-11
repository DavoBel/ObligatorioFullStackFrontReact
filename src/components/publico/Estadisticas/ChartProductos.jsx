import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartProductos = () => {

    const opciones = useSelector((state) => state.EstadisticasSlice.opciones);
    const ProductosDatos = useSelector((state) => state.EstadisticasSlice.ProductosDatos);

    const options ={
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
             legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Productos utilizados:',
            },
        }
    }

    const data = {
        labels: opciones,
        datasets: [
            {
                label: 'Productos',
                data: ProductosDatos,
                backgroundColor: '#43a847',
            },
        ],
    };

    if (!opciones || !ProductosDatos) return null;

    return (
        <div className="chart-container">
            <Bar options={options} data={data} />
        </div>
    )
}

export default ChartProductos