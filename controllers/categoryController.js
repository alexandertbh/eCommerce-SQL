const express = require("express");
const router = express.Router();
const { Category, Product } = require("../models");

router.get("/", (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((categoryData) => {
      if (categoryData.length === 0) {
        return res.status(404).json({ msg: "no categories in database!" });
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

// router.get("/:name", (req, res) => {
//   Category.findAll({
//     where: {
//       category_name: req.params.name,
//     },
//   })
//     .then((categories) => {
//       if (categories.length === 0) {
//         return res
//           .status(404)
//           .json({ msg: "no categories with this name in database!" });
//       }
//       res.json(categories);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "error occurred", err });
//     });
// });

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((categories) => {
      if (!categories) {
        return res
          .status(404)
          .json({ msg: "no categories with that id in database!" });
      }
      res.json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.put("/:id", (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((editCategory) => {
      if (!editCategory[0]) {
        return res
          .status(404)
          .json({ msg: "no category with this id in database!" });
      }
      res.json(editCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delProduct) => {
      console.log("line 120", delProduct);
      if (!delProduct) {
        return res
          .status(404)
          .json({ msg: "no category with this id in database!" });
      }
      res.json(delProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

module.exports = router;
