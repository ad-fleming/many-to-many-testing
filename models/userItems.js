module.exports = function (sequelize, DataTypes) {
    const userItems = sequelize.define(
        "userItems",
        {
            userId: DataTypes.INTEGER,
            itemId: DataTypes.INTEGER,
            count: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            distributor: DataTypes.STRING
        },
        {timestamps: false}
        );
    return userItems;
}