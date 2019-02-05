//definisco un utente admin

export default class Account {
  _id = null;
  username = "";
  password = "";
  role = null;
  adminId = null;

  static Role = {
    ADMIN: "admin"
  };

  constructor(_id, { username = "", password = "", role = null, adminId = null }) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.adminId = adminId;
  }
}