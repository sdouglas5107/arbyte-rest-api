const { Router } = require("express");
const router = new Router();
const controller = require("../controllers/orders");

const routeName = "/orders";

router.get(routeName, controller.getAll);

// Pega os dados de um Pedido
router.get(`${routeName}/:id`, (req, res) => {
  res.json({
    message: "Vai retornar os dados de um Pedido dado um id",
    id: req.params.id,
  });
});

router.post(routeName, controller.create);

router.patch(`${routeName}/:id`, controller.update);

//Deleta um Pedido
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end());

module.exports = router;
