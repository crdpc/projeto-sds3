import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "utils/requests";

const DataTable() {

const [page, setPage] = useState<SalePage>( {
    first: true,
    number: 0,
    totalElments: 0,
    totalPage: 0
});

useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
    .then(response => {
        setPage(response.data);
    })
}, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item => (
                        <tr>
                        <td>{item.date}</td>
                        <td>{item.seller.name}</td>
                        <td>{item.visited}</td>
                        <td>{item.deals}</td>
                        <td>{item.amount}</td>
                    </tr>
                    ))}
                    
                    
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
