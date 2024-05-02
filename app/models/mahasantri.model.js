module.exports = (sequelize, Sequelize) => {
    const Mahasantri = sequelize.define("mahasantri", {
      nama: {
        type: Sequelize.STRING,
      },
      asal: {
        type: Sequelize.STRING,
      },
      umur : {
        type: Sequelize.INTEGER,
      },
      telephon : {
        type: Sequelize.STRING,
      }
    });
  
    return Mahasantri;
  };
  