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

export default function cityState(state = initialState) {
  return state;
}
