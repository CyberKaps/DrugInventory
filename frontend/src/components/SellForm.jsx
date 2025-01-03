import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SellForm = () => {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    manufacturerName: '',
    buyerName: '',
    drugName: '',
    drugCode: '',
    quantitySold: '',
    pricePerUnit: '',
    totalPrice: 0,
    saleDate: '',
    deliveryDate: '',
    paymentStatus: 'pending',
    paymentMethod: '',
    shippingAddress: '',
    billingAddress: '',
    discount: 0,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQuantityOrPriceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedData = {
        ...prevState,
        [name]: value,
      };
      if (name === 'quantitySold' || name === 'pricePerUnit') {
        updatedData.totalPrice = (updatedData.quantitySold * updatedData.pricePerUnit) - (updatedData.discount || 0);
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sale Data:', formData);
    // Save the formData to the database here (e.g., Firebase, MongoDB, etc.)
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sell Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="invoiceNumber">Invoice Number</label>
          <input
            type="text"
            className="form-control"
            id="invoiceNumber"
            name="invoiceNumber"
            placeholder="Enter Invoice Number"
            value={formData.invoiceNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="manufacturerName">Manufacturer Name</label>
          <input
            type="text"
            className="form-control"
            id="manufacturerName"
            name="manufacturerName"
            placeholder="Enter Manufacturer Name"
            value={formData.manufacturerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="buyerName">Buyer Name</label>
          <input
            type="text"
            className="form-control"
            id="buyerName"
            name="buyerName"
            placeholder="Enter Buyer Name"
            value={formData.buyerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="drugName">Drug Name</label>
          <input
            type="text"
            className="form-control"
            id="drugName"
            name="drugName"
            placeholder="Enter Drug Name"
            value={formData.drugName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="drugCode">Drug Code (Batch/SKU)</label>
          <input
            type="text"
            className="form-control"
            id="drugCode"
            name="drugCode"
            placeholder="Enter Drug Code"
            value={formData.drugCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="quantitySold">Quantity Sold</label>
          <input
            type="number"
            className="form-control"
            id="quantitySold"
            name="quantitySold"
            placeholder="Enter Quantity Sold"
            value={formData.quantitySold}
            onChange={handleQuantityOrPriceChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="pricePerUnit">Price per Unit</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="pricePerUnit"
            name="pricePerUnit"
            placeholder="Enter Price per Unit"
            value={formData.pricePerUnit}
            onChange={handleQuantityOrPriceChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="number"
            className="form-control"
            id="totalPrice"
            name="totalPrice"
            value={formData.totalPrice}
            readOnly
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="saleDate">Sale Date</label>
          <input
            type="date"
            className="form-control"
            id="saleDate"
            name="saleDate"
            value={formData.saleDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="deliveryDate">Expected Delivery Date</label>
          <input
            type="date"
            className="form-control"
            id="deliveryDate"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="paymentStatus">Payment Status</label>
          <select
            className="form-control"
            id="paymentStatus"
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
            required
          >
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="partially-paid">Partially Paid</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="paymentMethod">Payment Method</label>
          <input
            type="text"
            className="form-control"
            id="paymentMethod"
            name="paymentMethod"
            placeholder="Enter Payment Method"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="shippingAddress">Shipping Address</label>
          <textarea
            className="form-control"
            id="shippingAddress"
            name="shippingAddress"
            placeholder="Enter Shipping Address"
            value={formData.shippingAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="billingAddress">Billing Address</label>
          <textarea
            className="form-control"
            id="billingAddress"
            name="billingAddress"
            placeholder="Enter Billing Address"
            value={formData.billingAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="discount">Discount (if any)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="discount"
            name="discount"
            placeholder="Enter Discount"
            value={formData.discount}
            onChange={handleQuantityOrPriceChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            className="form-control"
            id="notes"
            name="notes"
            placeholder="Enter any additional notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Sale</button>
      </form>
    </div>
  );
};

export default SellForm;