const ListDataNoSearch = ({ data, handleDelete, handleEdit }) => {
    return data.map((item, index) => (
        <tr key={index} onClick={(e) => handleEdit(index)}>
            <td>{item.countryCode}</td>
            <td>{item.countryName}</td>
            <td>{item.capitalCity}</td>
            <td className="action" onClick={(e) => e.stopPropagation()}>
                <span className="action_data" onClick={() => handleDelete(index)} href="#!">
                    Remove
                </span>
            </td>
        </tr>
    ));
};

export default ListDataNoSearch;
