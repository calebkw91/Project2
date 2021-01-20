module.exports = (sequelize, DataTypes) => {
    let Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        userNotes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        bookedIt: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    // Book.associate = (models) => {
    //     models.Book.belongsTo(models.User, {
    //         onDelete: 'CASCADE',
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Book;
};