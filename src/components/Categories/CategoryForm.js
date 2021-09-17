import React, {useState} from "react";

function CategoryForm({onAddCategory}) {

    const [formData, setFormData] = useState({
        category: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newCategory = {...formData};

        fetch('https://radiant-waters-01618.herokuapp.com/categories', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
        })
        .then((r) => r.json())
        .then(console.log({newCategory}))
        .then(onAddCategory);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add</h2>
                <input 
                type="text"
                name="category"
                onChange={handleChange}
                value={formData.category}
                placeholder="Enter category name"
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

export default CategoryForm;