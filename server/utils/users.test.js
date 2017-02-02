const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Juan',
      room: 'codo en barra'
    }, {
      id: '2',
      name: 'Paco',
      room: 'lads'
    }, {
      id: '3',
      name: 'Fons',
      room: 'codo en barra'
    }];
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'fons',
      room: 'Lols'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove user', () => {
    var userId = '100';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('Should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('Should return names for room A', () => {
    var userList = users.getUserList('codo en barra');
    expect(userList).toEqual(['Juan', 'Fons']);
  });

  it('Should return names for room B', () => {
    var userList = users.getUserList('lads');
    expect(userList).toEqual(['Paco']);
  });
})
