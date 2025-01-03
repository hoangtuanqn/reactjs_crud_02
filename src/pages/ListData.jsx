import { useState } from "react";
import ListDataNoSearch from "./ListDataNoSearch";
import ListDataSearch from "./ListDataSearch";
import { useNavigate } from "react-router";
const ListData = ({ type, setData, handleEdit, data = [] }) => {
    const navigate = useNavigate();

    const [search, setSearch] = useState();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            const newData = [...data];
            newData.splice(id, 1);
            setData(newData);
        }
    };
    const payloadData = {
        data,
        handleDelete,
        handleEdit,
        search,
    };
    return (
        <div className="table-data">
            <div className="dfcenter search-country">
                <form action="">
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by Country Name ...."
                        />
                    </div>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Country Code</th>
                        <th>Country Name</th>
                        <th>Capital City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length !== 0 ? (
                        !search ? (
                            <ListDataNoSearch {...payloadData} />
                        ) : (
                            <ListDataSearch {...payloadData} />
                        )
                    ) : (
                        <tr>
                            <td align="center" colSpan={4}>
                                Không có dữ liệu
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListData;
