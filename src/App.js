import Header from "./pages/Header";
import Form from "./pages/Form";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router";
import ListData from "./pages/ListData";
import dataJson from "./data/data.json";
import "./css/reset.css";
import "./css/HomePage.css";
import { useState } from "react";

function App() {
    const [type, setType] = useState("add");
    const [data, setData] = useState(dataJson);
    const [editId, setEditId] = useState(null);
    const navigate = useNavigate();
    const handleEdit = (id) => {
        if (id === null) {
            setType("add");
        } else {
            setType("edit");
        }
        navigate("/edit");
        setEditId(id);
    };
    const payloadData = {
        type,
        data,
        setData,
        editId,
        handleEdit,
    };
    return (
        <>
            <Header />
            <main>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ListData {...payloadData} />} />
                        <Route path="/add_new" element={<Form {...payloadData} />} />
                        <Route path="/edit" element={<Form {...payloadData} isEdit/>} />
                    </Routes>
                </div>
            </main>
        </>
    );
}

export default App;
