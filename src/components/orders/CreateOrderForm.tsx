'use client';

import { ChangeEvent, useState } from 'react';

const initState = {
  name: '',
  services: [],
  total_cost_labor: 0,
  total_cost_service: 0,
  total_cost: 0,
};

const initServiceState = {
  id: 1,
  name: '',
  cause: '',
  concern: '',
  correction: '',
  labor: [],
};

const initLaborState = {
  name: '',
  rate: 0,
  hours: 0,
  total_cost: 0,
};

const CreateOrderForm = () => {
  const [state, setState] = useState({ ...initState });
  const [services, setServices] = useState([{ ...initServiceState }]);
  const [labor, setLabor] = useState([{ ...initLaborState }]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (
    evt: ChangeEvent<HTMLInputElement>,
    serviceIndex: number
  ) => {
    const { name, value } = evt.target;

    setServices((prevState) =>
      prevState.map((service, index) =>
        index === serviceIndex ? { ...service, [name]: value } : service
      )
    );
  };

  const handleAddNewService = () => {
    setServices((prevState) => [
      ...prevState,
      { ...initServiceState, id: services.length + 1 },
    ]);
  };

  const handleLaborChange = (
    evt: ChangeEvent<HTMLInputElement>,
    laborIndex: number
  ) => {
    const { name, value } = evt.target;

    setLabor((prevState) =>
      prevState.map((labor, index) =>
        index === laborIndex ? { ...labor, [name]: value } : labor
      )
    );
  };

  const handleAddNewLabor = () => {
    setLabor((prevState) => [
      ...prevState,
      { ...initLaborState, id: labor.length + 1 },
    ]);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    // Handle form submission logic here
    const totalLaborCost =
      labor.reduce((acc, curr) => acc + curr.hours * curr.rate, 0) *
      labor.length;
    const totalServiceCost = services.length;

    console.log('Order Created:', {
      ...state,
      services,
      labor,
      total_cost_labor: totalLaborCost,
      total_cost_service: totalServiceCost,
      total_cost: totalLaborCost + totalServiceCost,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-1">
      <div className="mb-2">
        <label>Name:</label>
        <input
          name="name"
          id="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <div className="mb-2">
          <h2>Service:</h2>

          {services.map((service, serviceIndex) => (
            <div key={service.id} className="mb-2">
              <div>
                <label>Name:</label>
                <input
                  name="name"
                  id={`service-name-${service.id}`}
                  value={service.name}
                  onChange={(evt) => handleServiceChange(evt, serviceIndex)}
                />
              </div>

              <div>
                <label>Concern:</label>
                <input
                  name="concern"
                  id={`service-concern-${service.id}`}
                  value={service.concern}
                  onChange={(evt) => handleServiceChange(evt, serviceIndex)}
                />
              </div>
              <div>
                <label>Cause:</label>
                <input
                  name="cause"
                  id={`service-cause-${service.id}`}
                  value={service.cause}
                  onChange={(evt) => handleServiceChange(evt, serviceIndex)}
                />
              </div>
              <div>
                <label>Correction:</label>
                <input
                  name="correction"
                  id={`service-correction-${service.id}`}
                  value={service.correction}
                  onChange={(evt) => handleServiceChange(evt, serviceIndex)}
                />
              </div>
            </div>
          ))}

          <button type="button" onClick={handleAddNewService}>
            Add service
          </button>
        </div>

        <div>
          <h2>Labor:</h2>

          {labor.map((labor, laborIndex) => (
            <div key={laborIndex} className="mb-2">
              <div>
                <label>Name:</label>
                <input
                  name="name"
                  id={`labor-name-${laborIndex}`}
                  value={labor.name}
                  onChange={(evt) => handleLaborChange(evt, laborIndex)}
                />
              </div>
              <div>
                <label>Rate:</label>
                <input
                  name="rate"
                  id={`labor-rate-${laborIndex}`}
                  value={labor.rate}
                  onChange={(evt) => handleLaborChange(evt, laborIndex)}
                />
              </div>

              <div>
                <label>Hours:</label>
                <input
                  name="hours"
                  id={`labor-hours-${laborIndex}`}
                  value={labor.hours}
                  onChange={(evt) => handleLaborChange(evt, laborIndex)}
                />
              </div>
            </div>
          ))}

          <button type="button" onClick={handleAddNewLabor}>
            Add labor
          </button>
        </div>
      </div>

      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
