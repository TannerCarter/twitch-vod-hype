const router = require("express").Router();

const API = require("call-of-duty-api");

router.get("/store", async (req, res) => {
  try {
    let data = await API.GetPurchasablePublic();
  } catch (Error) {
    console.log(error);
  }

  res.render("store", {
    weapon,
  });
});
