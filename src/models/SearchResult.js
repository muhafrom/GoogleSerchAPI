const mongoose = require("mongoose");

// Define a schema for search results
const searchResultSchema = new mongoose.Schema(
  {
    query: { type: String, required: true },
    results: [
      {
        title: String,
        link: String,
        snippet: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("SearchResult", searchResultSchema);
