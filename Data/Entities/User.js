export default (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
        {
            Id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            Email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            FirstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            LastName: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    );
    return User;
};