const Tyre = require("../models/Tyre");
const Disk = require("../models/Disk");
const Accumulator = require("../models/Accumulator");

const getCartItems = async (req, res) => {
  const { items } = req.body;

  try {
    const results = await Promise.all(
      items.map(async ({ id, type }) => {
        switch (type) {
          case "tyres":
            return await Tyre.findById(id);
          case "disks":
            return await Disk.findById(id);
          case "accumulators":
            return await Accumulator.findById(id);
          default:
            return null;
        }
      })
    );
    res.status(200).json(results.filter(Boolean));
  } catch (error) {
    console.error("Error while fetching cart itmes: ", error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
};

module.exports = {
  getCartItems,
};
