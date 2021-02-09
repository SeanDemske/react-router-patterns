import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateColorForm = ({ addColor }) => {
    const history = useHistory();
    const INITIAL_STATE = {
        name: "",
        color: "black"
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        history.push("/colors")
    }
    
    return (
        <form className="CreateColorForm" onSubmit={handleSubmit}>
            <h1>Create a new color</h1>

            <label htmlFor="nameInput">Color Name: </label>
            <input id="nameInput" name="name" type="text" onChange={handleChange} value={formData.nameInput} required/>
            <br/>
            <label htmlFor="colorInput">Color Value: </label>
            <input id="colorInput" name="color" type="color" onChange={handleChange} value={formData.colorInput} required/>
            <br/>
            <button>Add Color</button>
        </form>
    );
}

export default CreateColorForm;