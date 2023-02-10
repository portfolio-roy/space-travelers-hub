import missionsService from '../../getters/getMissions';

describe('Get Missions', () => {
  test('gets the correct data', async () => {
    const data = await missionsService.getAllMissions();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
