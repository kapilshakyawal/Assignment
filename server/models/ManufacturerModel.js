const mongoose = require("mongoose")
const manufacturerSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      order_id: {
        type: String,
      },
      to: {
        type: String,
      },
      from: {
        type: String,
      },
      quantity: {
        type: String,
      },
      transporter_quantity: {
        type: String,
        enum: ["single"],
      },
})

module.exports = mongoose.model("manufacturer",manufacturerSchema)