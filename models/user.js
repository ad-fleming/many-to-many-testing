module.exports = function(sequelize, DataTypes){
    const user = sequelize.define("user", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    });
    // WE'll put a user.associate= function here to associate with items and items table (AKA Inventory)
    user.associate = function (models){
        user.belongsToMany(models.item, {
            through:"userItems",// <----------- be careful to call this whatever is being exported (ESPECIALLY WHEN DIFFERENT FROM MODEL FILE NAME)
            foreignKey: "userId"
        });
    }
    return user;
}