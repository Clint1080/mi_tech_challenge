const pool = require("../db");
module.exports = {
  getCardInfo: async (req, res) => {
    try {
      const allCards = await pool.query(`SELECT * FROM cards`);
      res.status(200).json(allCards.rows);
    } catch (error) {
      console.log(error);
    }
  },
};
