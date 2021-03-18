// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
foreignKey: "product_tag",
through: {
  model: Tag,
  unique: false
}
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  foreignKey: "product_tag",
  through: {
    model:Tag,
    unique: false
  }
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};