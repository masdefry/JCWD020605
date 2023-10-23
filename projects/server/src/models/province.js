module.exports = (sequelize, Sequelize) => {
  const ProvinceModel = sequelize.define(
    "Provinces",
    {
      province_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      province: {
        type: Sequelize.STRING,
      },
    },
    {
      paranoid: true,
    }
  );
  return ProvinceModel;
};
