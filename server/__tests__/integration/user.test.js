import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to registrer', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        firstName: 'Maike',
        lastName: 'Rodrigues',
        email: 'maikefdn13@gmail.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
