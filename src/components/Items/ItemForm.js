import React, {useState} from "react";

function ItemForm({onAddItem}) {

    const [formData, setFormData] = useState({
        item_name: "",
        manufacturer: "",
        model: "",
        serial_number: "",
        index_items_on_conditions_id: "",
        index_items_on_rooms_id: "",
        index_items_on_categories_id: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {...formData};

        fetch('https://radiant-waters-01618.herokuapp.com/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .then((r) => r.json())
        .then(console.log({newItem}))
        .then(onAddItem);
    }

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
                value={formData.index_items_on_conditions_id}
                placeholder="Enter condition #"
                />
                <br />
                <input
                type="text"
                name="rooms_id"
                onChange={handleChange}
                value={formData.index_items_on_rooms_id}
                placeholder="Enter room #"
                />
                <br />
                <input
                type="text"
                name="categories_id"
                onChange={handleChange}
                value={formData.index_items_on_categories_id}
                placeholder="Enter category #"
                />
                <br />
                <br />
                <input 
                name="submit"
                value="+"
                type="submit"
                className="btn btn-warning btn-circle btn-xl"
                />
            </form>
        </div>
    );
};

export default ItemForm;