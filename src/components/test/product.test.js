import axios from 'axios';

jest.mock('axios');

const data = [
  {
    "id":1,
    "title":"Title Product 1",
    "description":"Description Product 1",
    "createdAt":"2022-01-15T14:49:22.000Z",
    "updatedAt":"2022-01-15T14:49:22.000Z"
  },
  {
    "id":2,
    "title":"Title Product 2",
    "description":"Description Product 2",
    "createdAt":"2022-01-15T14:49:26.000Z",
    "updatedAt":"2022-01-15T14:49:26.000Z"
  },
  {
    "id":3,
    "title":"Title Product 3",
    "description":"Description Product 3",
    "createdAt":"2022-01-15T14:49:32.000Z",
    "updatedAt":"2022-01-15T14:49:32.000Z"
  }
];


describe('server fetching tests', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });


  it('should return data', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({data}),
    );

    const rawData = await axios.get('http://localhost:3002/products/');

    expect(rawData.data).toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});