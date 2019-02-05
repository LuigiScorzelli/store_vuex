export default class Product {
  _id = null;
  name = "";
  price = null;
  category = null;
  stocks = null;

  constructor(_id, {name = "", price = null, category = null, stocks = null }) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stocks = stocks;
  }

  static Category = {
    INFORMARICA: "informatica",
    ABBIGLIAMENTO: "abbigliamento",
    HOME: "home"
  };
}