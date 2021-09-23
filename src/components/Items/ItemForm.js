import React, {useState} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';

function ItemForm({onAddItem}) {

    const [formData, setFormData] = useState({
        item_name: "",
        manufacturer: "",
        model: "",
        serial_number: "",
        conditions_id: "",
        rooms_id: "",
        categories_id: "",
    });

    //const [valueCategory,setValueCategory] = useState('');

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {...formData};
        console.log(newItem);

        fetch('http://127.0.0.1:3000/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .then((r) => r.json())
        .then(onAddItem)
     }

/*     const handleCategorySelect=(e)=>{
        console.log(e);
        setValueCategory(e);
    } */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add</h2>
                <input 
                type="text"
                name="item_name"
                onChange={handleChange}
                value={formData.item_name}
                placeholder="Enter item name"
                />
                <br />
                <input 
                type="text"
                name="manufacturer"
                onChange={handleChange}
                value={formData.manufacturer}
                placeholder="Enter manufacturer name"
                />
                <br />
                <input
                type="text"
                name="model"
                onChange={handleChange}
                value={formData.model}
                placeholder="Enter model name"
                />
                <br />
                <input
                type="text"
                name="serial_number"
                onChange={handleChange}
                value={formData.serial_number}
                placeholder="Enter serial number"
                />
                <br />
                <input
                type="text"
                name="conditions_id"
                onChange={handleChange}
                value={formData.conditions_id}
                placeholder="Enter condition #"
                />
                <br />
                <input
                type="text"
                name="rooms_id"
                onChange={handleChange}
                value={formData.rooms_id}
                placeholder="Enter room #"
                />
                <br />
                <input
                type="text"
                name="categories_id"
                onChange={handleChange}
                value={formData.icategories_id}
                placeholder="Enter category #"
                />
{/*                 <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleCategorySelect}
                >
                    <Dropdown.Item eventKey="7">Game Systems</Dropdown.Item>
                    <Dropdown.Item eventKey="8">Appliances</Dropdown.Item>
                    <Dropdown.Item eventKey="9">Furniture</Dropdown.Item>
                    <Dropdown.Item eventKey="10">Dishes</Dropdown.Item>
                    <Dropdown.Item eventKey="11">Games</Dropdown.Item>
                </DropdownButton> */}
                <br />
                <br />
                <input 
                name="submit"
                value="+"
                type="submit"
                className="btn btn-success"
                />
            </form>
        </div>
    );
};

export default ItemForm;