const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class Stream extends Model {}

// define table columns and configuration
Stream.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    user_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    game_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    viewer_count: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "Stream",
  }
);

module.exports = Stream;
