import React, { useState } from 'react';
import axios from 'axios';

const AddDrugForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    stock: '',
    price: '',
    expirationDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/add-drug', formData);
      console.log(response.data.message);
      // Clear the form after submission
      setFormData({
        name: '',
        stock: '',
        price: '',
        expirationDate: '',
      });
    } catch (error) {
      console.error('Error adding drug:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Drug</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Drug Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            className="form-control"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Drug
        </button>
      </form>
    </div>
  );
};

export default AddDrugForm;
