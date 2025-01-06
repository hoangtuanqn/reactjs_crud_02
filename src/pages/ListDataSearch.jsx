const ListDataNoSearch = ({ data, handleDelete, search, handleEdit }) => {
    const newData = data.filter((item) => item.countryName.toLowerCase().includes(search.toLowerCase()));

    return newData.map((item, index) => (
        <tr key={index} onClick={(e) => handleEdit(index)}>
            <td>{item.countryCode}</td>
            <td>{item.countryName}</td>
            <td>{item.capitalCity}</td>
            <td className="action">
                <span className="action_data" onClick={() => handleDelete(index)} href="#!">
                    Remove
                </span>
            </td>
        </tr>
    ));
};

export default ListDataNoSearch;
