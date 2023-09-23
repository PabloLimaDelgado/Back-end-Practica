import fs from "fs";
//const crypto = require('crypto')

class UsersManager {
  constructor(path) {
    this.path = path;
  }

  async createUser(obj) {
    try {
      //const hashPassword = crypto.createHash('sha256').update(obj.password).digest('hex')
      const users = await this.getUsers({});
      let id;
      if (!users.length) {
        id = 1;
      } else {
        id = users[users.length - 1].id + 1;
      }
      //users.push({id,...obj, password:hashPassword})
      //users.push({id,...obj})
      const newUser = { id, ...obj };
      users.push(newUser);
      await fs.promises.writeFile(this.path, JSON.stringify(users));
      return newUser;
    } catch (error) {
      return error;
    }
  }

  async getUsers(queryObj) {
    const {order} = queryObj
    try {
      if (fs.existsSync(this.path)) {
        const info = await fs.promises.readFile(this.path, "utf-8");
        const infoParsed = JSON.parse(info);
        return order === 'ASC' 
            ? infoParsed.sort((a,b) => a.first_name.localCompare(b.first_name)) 
            : order === 'DESC' 
            ? infoParsed.sort((a,b) => b.first_name.localCompare(a.first_name)) 
            : infoParsed
        //return JSON.parse(info)
      } else {
        return [];
      }
    } catch (error) {
      return error;
    }
  }

  async getUserById(idUser) {
    try {
      const users = await this.getUsers({});
      const user = users.find((u) => u.id === idUser);
      return user;
    } catch (error) {
      return error;
    }
  }

  async deleteUser(idUser) {
    try {
      const users = await this.getUsers();
      const user = users.find((u) => u.id === idUser);
      if (!user) {
        return -1;
      }
      const newArrayUsers = users.filter((u) => u.id !== idUser);
      await fs.promises.writeFile(this.path, JSON.stringify(newArrayUsers));
      return 1;
    } catch (error) {
      return error;
    }
  }

  async updateUser(idUser, obj) {
    try {
      const users = await this.getUsers();
      const index = users.findIndex((u) => u.id === idUser);

      if (index === -1) {
        return -1;
      }

      const user = users[index];
      users[index] = { ...user, ...obj };
      await fs.promises.writeFile(this.path, JSON.stringify(users));
      return error;
    } catch (error) {
      return error;
    }
  }
}

/*const user1 = {
    first_name: 'Laura',
    last_name: 'Suarez',
    age: 25,
    course: 'JavaScript',
    password: '12345'
}

const user2 = {
    first_name: 'Juan',
    last_name: 'Lima',
    age: 20,
    course: 'Python',
    password: 'abc123'
} */

/* async function test(){
    const manager1 = new UserManager('Users.json')
    //await manager1.createUser(user2)
    //console.log(users)
    //const user = await manager1.getUserById(2)
    //console.log(user)

    //await manager1.deleteUser(1)
    //const users = await manager1.getUsers()
    //console.log(users)
}

test() */

export const userManager = new UsersManager("UsersAPI.json");
