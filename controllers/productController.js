const express = require("express");
const router = express.Router();
const { Product, Category, Tag } = require("../models");

router.get("/", (req, res) => {
  Product.findAll({
    attributes: ["id", "product_name", "price", "stock", "category_id"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: Tag,
        attributes: ["id", "tag_name"],
      },
    ],
  })
    .then((productData) => {
      if (productData.length === 0) {
        return res.status(404).json({ msg: "no products in database!" });
      }
      res.json(productData);
    })
    .catch((err) => {
      console.log("Error Product : ", err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.get("/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "product_name", "price", "stock", "category_id"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: Tag,
        attributes: ["id", "tag_name"],
      },
    ],
  })
    .then((tags) => {
      if (!tags) {
        return res
          .status(404)
          .json({ msg: "no tags with that id in database!" });
      }
      res.json(tags);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.post("/", (req, res) => {
  Product.create({
    product_name: req.body.product_name,
  })
    .then((newProduct) => {
      res.json(newProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.put("/:id", (req, res) => {
  Product.update(
    {
      product_name: req.body.product_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((ediProduct) => {
      if (!ediProduct[0]) {
        return res
          .status(404)
          .json({ msg: "no tag with this id in database!" });
      }
      res.json(ediProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delProduct) => {
      console.log("line 120", delProduct);
      if (!delProduct) {
        return res
          .status(404)
          .json({ msg: "no tag with this id in database!" });
      }
      res.json(delProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

module.exports = router;
