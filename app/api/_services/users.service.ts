import path from "path";
import fs from "fs/promises";
import { hash, compare } from "bcrypt";

export class UserService {
  constructor() {}

  signup(firstName: string, lastName: string, email: string, password: string) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const data: any = await this.getFileData();

        //check if users exists
        if (data.length !== 0) {
          //check if email exists
          const userIndex = data.findIndex((item: any) => item.email === email);
          if (userIndex === -1) {
            //hash password
            const hashedPassword = await this.hashPassword(password);

            //create new user
            const newUser = {
              firstName,
              lastName,
              email,
              password: hashedPassword,
            };
            await this.writeFileData([newUser, ...data]);
            resolve({
              status: true,
              code: 200,
              message: `User created successfully`,
            });
          } else {
            resolve({
              status: false,
              code: 400,
              message: `Email already exists`,
            });
          }
        } else {
          //hash password
          const hashedPassword = await this.hashPassword(password);

          //create new user
          const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
          };
          await this.writeFileData([newUser, ...data]);
          resolve({
            status: true,
            code: 200,
            message: `User created successfully`,
          });
        }
      } catch (e) {
        reject(e);
      }
    });
  }

  login(email: string, password: string) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const data: any = await this.getFileData();

        //check if users exists
        if (data.length !== 0) {
          //check if email exists
          const userIndex = data.findIndex((item: any) => item.email === email);

          if (userIndex === -1) {
            resolve({
              status: false,
              code: 400,
              message: `User doesn't exist`,
            });
          } else {
            const currentUser = data[userIndex];

            //compare hash wth password
            const isPasswordValid = await this.comparePassword(
              password,
              currentUser.password
            );
            if (isPasswordValid) {
              const { firstName, lastName, password, ...result } =
                data[userIndex];

              resolve({
                status: true,
                code: 200,
                message: `Login successful`,
                result: result,
              });
            } else {
              resolve({
                status: false,
                code: 400,
                message: `Invalid credentials`,
              });
            }
          }
        } else {
          resolve({
            status: false,
            code: 400,
            message: `User doesn't exists`,
          });
        }
      } catch (e) {
        reject(e);
      }
    });
  }

  getFileData() {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const dbPath = path.join("./app/api/_data", "db.json");
        const fileData = await fs.readFile(dbPath, { encoding: "utf8" });
        const data = JSON.parse(fileData);
        resolve(data);
      } catch (e) {
        reject(e);
      }
    });
  }

  writeFileData(data: any) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const dbPath = path.join("./app/api/_data", "db.json");
        await fs.writeFile(dbPath, JSON.stringify(data), {
          encoding: "utf8",
        });
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  async hashPassword(password: string) {
    return await hash(password, 10);
  }

  async comparePassword(password: string, hash: string) {
    return await compare(password, hash);
  }
}
