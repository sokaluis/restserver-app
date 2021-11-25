const { Router } = require("express");
const {
  usersGET,
  usersPUT,
  usersPOST,
  usersDELETE,
  usersPATCH,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/", usersGET);
router.put("/:id", usersPUT);
router.post("/", usersPOST);
router.delete("/", usersDELETE);
router.patch("/", usersPATCH);

module.exports = router;
