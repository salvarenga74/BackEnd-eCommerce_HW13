// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: " ",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: " ",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

// Tags belongToMany Products (through ProductTag)
TimeRanges.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
