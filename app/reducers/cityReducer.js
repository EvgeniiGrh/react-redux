const initialState = {
  cities: [
    {
      cityName: 'Minsk',
      id: 1,
      country: "Belarus"
    },
    {
      cityName: 'Paris',
      id: 1,
      country: "France"
    }
  ],

  };

export default function cityReducer(state = initialState) {
  return state;
}
