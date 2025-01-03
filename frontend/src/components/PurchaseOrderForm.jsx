import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PurchaseOrderForm = () => {
  const [formData, setFormData] = useState({
    poNumber: '',
    manufacturerName: '',
    supplierName: '',
    drugName: '',
    drugCode: '',
    quantity: '',
    pricePerUnit: '',
    totalPrice: 0,
    purchaseDate: '',
    expectedDeliveryDate: '',
    paymentTerms: '',
    shippingAddress: '',
    billingAddress: '',
    status: 'pending',
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
      if (name === 'quantity' || name === 'pricePerUnit') {
        updatedData.totalPrice = updatedData.quantity * updatedData.pricePerUnit || 0;
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Purchase Order Data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Purchase Order Form</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="form-group mb-3">
          <label htmlFor="poNumber">Purchase Order Number</label>
          <input
            type="text"
            className="form-control"
            id="poNumber"
            name="poNumber"
            placeholder="Enter PO Number"
            value={formData.poNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="supplierName">Supplier Name</label>
          <input
            type="text"
            className="form-control"
            id="supplierName"
            name="supplierName"
            placeholder="Enter Supplier Name"
            value={formData.supplierName}
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
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            placeholder="Enter Quantity"
            value={formData.quantity}
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
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input
            type="date"
            className="form-control"
            id="purchaseDate"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="expectedDeliveryDate">Expected Delivery Date</label>
          <input
            type="date"
            className="form-control"
            id="expectedDeliveryDate"
            name="expectedDeliveryDate"
            value={formData.expectedDeliveryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="paymentTerms">Payment Terms</label>
          <input
            type="text"
            className="form-control"
            id="paymentTerms"
            name="paymentTerms"
            placeholder="e.g., Net 30"
            value={formData.paymentTerms}
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
          <label htmlFor="status">Order Status</label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
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

        <button type="submit" className="btn btn-primary">
          Submit Purchase Order
        </button>
      </form>
    </div>
  );
};

export default PurchaseOrderForm;