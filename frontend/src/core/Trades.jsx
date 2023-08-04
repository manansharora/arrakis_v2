import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Trades = ({ trades }) => {
    return (
        <div>
            <Menu />
            <Table striped>
                <tbody>
                    {trade.map(trade =>
                    <tr key={trade.id}>
                        <td>
                        <Link to={`/notes/${trade.id}`}>
                            {trade.content}
                        </Link>
                        </td>
                        <td>
                        {trade.user}
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>

    );
}

export default Trades;