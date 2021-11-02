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
  formInfo: (req, res) => {
    const { firstName, lastName, title, email, message } = req.body;
    const postForm = pool.query(
      "INSERT INTO forms (first_name, last_name, title, email, message) VALUES($1, $2, $3, $4, $5)",
      [firstName, lastName, title, email, message]
    );
    res.status(201).json({ data: { contact: req.body } });
  },
};
