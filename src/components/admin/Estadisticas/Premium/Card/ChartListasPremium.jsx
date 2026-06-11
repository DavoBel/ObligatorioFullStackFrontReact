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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartListasPremium = () => {

    const opciones = useSelector((state) => state.EstadisticasSlice.opciones);
    const ListasDatos = useSelector((state) => state.EstadisticasSlice.ListasDatosPremium);

    const options ={
        responsive: true,
        maintainAspectRatio: false,
        plugins:{
             legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Listas Creadas',
            },
        }
    }

    const data = {
        labels: opciones,
        datasets: [
            {
                label: 'listas',
                data: ListasDatos,
                backgroundColor: '#1a1a2e',
            },
        ],
    };

    if (!opciones || !ListasDatos) return null;

    return (
        <div className="chart-card">
            <div className="chart-container">
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}

export default ChartListasPremium