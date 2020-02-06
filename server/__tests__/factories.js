import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../src/app/models/User';

factory.define('User', User, {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
