import { user, User } from './user';

describe('user', () => {
  it('should return object', () => {
    expect(typeof user()).toEqual('object');
  });

  it('should return 1 user obj', () => {
    const testUser: User[] = user();
    expect(testUser.length).toEqual(1);
    expect(typeof testUser[0]).toEqual('object');
  });

  it('user should have required params', () => {
    const testUser: User = user()[0];
    expect(testUser.gender).toBeDefined();
    expect(testUser.name).toBeDefined();
    expect(testUser.name.title).toBeDefined();
    expect(testUser.name.first).toBeDefined();
    expect(testUser.name.last).toBeDefined();
    expect(testUser.email).toBeDefined();
    expect(testUser.email).toEqual(`${testUser.name.first}.${testUser.name.last}@example.com`.toLowerCase());
    expect(testUser.age).toBeDefined();
    expect(testUser.dob).toBeDefined();
    expect(testUser.registered).toBeDefined();
    expect(testUser.phone).toBeDefined();
  });

});
