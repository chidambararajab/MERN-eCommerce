import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Chid User",
    email: "admin@chid.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sanji",
    email: "sanji@chid.com",
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "Zoro",
    email: "zoro@chid.com",
    password: bcryptjs.hashSync("123456", 10),
  },
];

export default users;
