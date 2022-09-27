module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "Guitars",
          "color",
          {
            type: Sequelize.STRING,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    {
      return Promise.all([
        queryInterface.removeColumn(
          "Guitars",
          "color",
          {
            type: Sequelize.STRING,
          },
          { transaction: t }
        ),
      ]);
    }
  },
};
