import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import PurchaseOrderForm from './PurchaseOrderForm';
import SellForm from './SellForm';
import AddDrugForm from './AddDrugForm'; // Import the AddDrugForm

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showPurchaseOrderForm, setShowPurchaseOrderForm] = useState(false);
  const [showSellForm, setShowSellForm] = useState(false);
  const [activeDrugListButton, setActiveDrugListButton] = useState('');

  const renderContent = () => {
    switch (activeSection) {
      case 'expiredDrugs':
        return <h2>Expired Drugs List</h2>;
      case 'notifications':
        return <h2>Notifications</h2>;
      case 'outOfStock':
        return <h2>Out of Stock Drugs</h2>;
      case 'underStock':
        return <h2>Understocked Drugs</h2>;
      case 'addDrug':
        return (
          <div>
            <h2>Add Drug</h2>
            {/* Render the Add Drug Form */}
            <AddDrugForm />
            <div className="mb-3">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowPurchaseOrderForm(true);
                  setShowSellForm(false);
                }}
              >
                Purchase Order
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={() => {
                  setShowPurchaseOrderForm(false);
                  setShowSellForm(true);
                }}
              >
                Sell Order
              </button>
            </div>
            <div className="d-flex">
              {showPurchaseOrderForm && (
                <div className="p-2" style={{ flex: 1 }}>
                  <PurchaseOrderForm />
                </div>
              )}
              {showSellForm && (
                <div className="p-2" style={{ flex: 1 }}>
                  <SellForm />
                </div>
              )}
            </div>
          </div>
        );
      case 'drugList':
        return (
          <div>
            <h2>Drug List</h2>
            <div className="mb-3">
              <button
                className={`btn ${activeDrugListButton === 'purchased' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveDrugListButton('purchased')}
              >
                Purchased Drug
              </button>
              <button
                className={`btn ${activeDrugListButton === 'sold' ? 'btn-primary' : 'btn-secondary'} ml-2`}
                onClick={() => setActiveDrugListButton('sold')}
              >
                Sold Drug
              </button>
              <button
                className={`btn ${activeDrugListButton === 'available' ? 'btn-primary' : 'btn-secondary'} ml-2`}
                onClick={() => setActiveDrugListButton('available')}
              >
                Available Drug
              </button>
            </div>
            {activeDrugListButton === 'purchased' && <div><h3>Purchased Drugs List</h3></div>}
            {activeDrugListButton === 'sold' && <div><h3>Sold Drugs List</h3></div>}
            {activeDrugListButton === 'available' && <div><h3>Available Drugs List</h3></div>}
          </div>
        );
      default:
        return <h1 className="h3 font-weight-bold">Dashboard Overview</h1>;
    }
  };

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-4 shadow-lg"
        style={{ width: '250px', height: '100vh', position: 'fixed', top: 0, left: 0 }}
      >
        <h2 className="h4 font-weight-bold mb-4 text-uppercase">MEDFLOW</h2>
        <div className="d-flex align-items-center mb-4">
          <img
            className="rounded-circle border border-light"
            src="https://via.placeholder.com/150"
            alt="Admin"
            style={{ height: '50px', width: '50px' }}
          />
          <div className="ml-3">
            <h3 className="h6 font-weight-bold">ADMIN</h3>
            <p className="small">Admin</p>
          </div>
        </div>
        <ul className="list-unstyled">
          <li className="mb-3">
            <button
              className="text-white d-flex align-items-center p-3 rounded w-100 bg-transparent border-0 hover-effect"
              onClick={() => setActiveSection('dashboard')}
            >
              <span className="mr-2">&#128200;</span> Dashboard
            </button>
          </li>
          <li className="mb-3">
            <button
              className="text-white d-flex align-items-center p-3 rounded w-100 bg-transparent border-0 hover-effect"
              onClick={() => setActiveSection('inventory')}
            >
              <span className="mr-2">&#128203;</span> Inventory
            </button>
            <ul>
              <li>
                <button
                  className="text-white d-flex align-items-center p-2 rounded w-100 bg-transparent border-0 hover-effect"
                  onClick={() => setActiveSection('addDrug')}
                >
                  Add Drug
                </button>
              </li>
              <li>
                <button
                  className="text-white d-flex align-items-center p-2 rounded w-100 bg-transparent border-0 hover-effect"
                  onClick={() => setActiveSection('drugList')}
                >
                  Drug List
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex-grow-1 p-4" style={{ marginLeft: '250px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 font-weight-bold text-secondary">Dashboard</h1>
          <input
            type="text"
            className="form-control w-50 shadow-sm"
            placeholder="Search for anything here..."
          />
        </div>

        <div className="row">
          {/* Cards */}
          <div className="col-sm-6 col-lg-3 mb-4">
            <Card
              className="bg-light text-dark shadow-sm card-hover cursor-pointer"
              onClick={() => setActiveSection('expiredDrugs')}
              style={{ transition: 'all 0.3s ease' }}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="mb-3">Expired Drugs</Card.Title>
                <i className="fas fa-exclamation-circle fa-2x text-danger"></i>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-6 col-lg-3 mb-4">
            <Card
              className="bg-light text-dark shadow-sm card-hover cursor-pointer"
              onClick={() => setActiveSection('notifications')}
              style={{ transition: 'all 0.3s ease' }}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="mb-3">Notification</Card.Title>
                <i className="fas fa-bell fa-2x text-warning"></i>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-6 col-lg-3 mb-4">
            <Card
              className="bg-light text-dark shadow-sm card-hover cursor-pointer"
              onClick={() => setActiveSection('outOfStock')}
              style={{ transition: 'all 0.3s ease' }}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="mb-3">Out of Stock Drugs</Card.Title>
                <i className="fas fa-boxes fa-2x text-info"></i>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-6 col-lg-3 mb-4">
            <Card
              className="bg-light text-dark shadow-sm card-hover cursor-pointer"
              onClick={() => setActiveSection('underStock')}
              style={{ transition: 'all 0.3s ease' }}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="mb-3">Understock</Card.Title>
                <i className="fas fa-exclamation-triangle fa-2x text-danger"></i>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
