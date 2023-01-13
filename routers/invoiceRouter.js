const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController")

router.post("/createInvoice", invoiceController.createInovice);
router.get("/getInvoiceById/:id", invoiceController.getInvoiceById);
router.get("/getAllInvoices", invoiceController.getAllInvoices);

module.exports = router;