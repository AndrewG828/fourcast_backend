const request = require('supertest');
const { app } = require('../server'); // Import your Express app

describe('Station API', () => {
  let stationId;

  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new station and return the station object', async () => {
    const newStation = {
      name: 'New York Weather Center',
      location: 'New York, USA',
      latitude: '40.712800',
      longitude: '-74.006000',
      regionType: 'Coastal',
    };

    const response = await request(app)
      .post('/api/stations/')
      .send(newStation)
      .expect(201);

    stationId = response.body.id;
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name', newStation.name);
  });

  it('should return a station by ID', async () => {
    const response = await request(app)
      .get(`/api/stations/${stationId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', stationId);
  });

  it('should return 404 if station is not found', async () => {
    const invalidStationId = 9999;
    const response = await request(app)
      .get(`/api/stations/${invalidStationId}`)
      .expect(404);

    expect(response.body.message).toBe('Station not found');
  });
});

