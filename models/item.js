module.exports = function(sequelize, DataTypes) {
    const item = sequelize.define("item", {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
    });

    // WE'll add an item.associate = function(models){} here
    item.associate = function(models){
        item.belongsToMany(models.user, {
            through: "userItems",
            foreignKey: "itemId"
        });
    }
    return item;
}