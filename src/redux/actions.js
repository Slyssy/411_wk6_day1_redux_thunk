const url =
  'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';

export const addCar = (car) => {
  return {
    type: 'ADD_CAR',
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: 'REMOVE_CAR',
    value: index,
  };
};

//? Step 5 README
export const fetchMakes = () => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: 'FETCH_MAKES',
          value: response.Results,
        };
        dispatch(action);
      });
  };
};

//? Delete Make Action Deletes a row in Import Component
export const deleteMake = (index) => {
  return {
    type: 'DELETE_MAKE',
    value: index,
  };
};
