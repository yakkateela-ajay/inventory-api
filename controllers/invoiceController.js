const invoiceSchema = require("../models/invoice");

exports.createInovice = async function(request, response) {
    try {
        const invoice = new invoiceSchema(request.body);
        await invoice.save();
        response.status(200).json({
            message: "invoice added successfully",
            data: invoice
        });
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.getAllInvoices = async function(request, response) {
    try {
        const invoicesList = await invoiceSchema.find();
        response.status(200).json({
            message: "invoices fetched successfully",
            data: invoicesList
        });
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.getInvoiceById = async function(request, response) {
    try {
        const invoice = await invoiceSchema.findOne({_id: request.params.id});
        response.status(200).json({
            message: "invoice fetched successfully",
            data: invoice
        });
    } catch (error) {
        response.status(500).json(error);
    }
}
