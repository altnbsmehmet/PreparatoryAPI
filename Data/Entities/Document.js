export default (sequelize, DataTypes) => {
    const Document = sequelize.define(
        'Document', 
        {
            Id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            FileName: {
                type: DataTypes.STRING
            },
            FileType : {
                type: DataTypes.STRING
            }
        }
    );
    return Document;
};