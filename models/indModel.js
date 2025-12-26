const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/database");
const Register = require("./userModel");

const IndInfo = sequelize.define(
    "IndividualInfo",
    {
        ind_id:{
            type: DataTypes.INTEGER,
            references :{
                model: Register,
                key : "id"
            }
        },

        description: {
            type: DataTypes.STRING,
            allowNull:false
        },

        logo_path: {
            type: DataTypes.STRING,
            allowNull:false
        },
        
        address: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName : "indinfo",
        timestamps : true
    }
)

//associations for better queries
IndInfo.belongsTo(Register, { foreignKey: "ind_id", onDelete: "CASCADE"});
Register.hasOne(IndInfo,{foreignKey: "ind_id", onDelete: "CASCADE"});

module.exports = IndInfo;