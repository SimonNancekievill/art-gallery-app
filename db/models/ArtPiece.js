import mongoose from "mongoose";

const { Schema } = mongoose;

const artPieceSchema = new Schema({
  slug: { type: String, required: true },
  artist: { type: String },
  name: { type: String },
  imageSource: { type: String },
  year: { type: Number },
  genre: { type: String },
  colors: [{ type: String }],
  dimensions: {
    height: { type: Number },
    width: { type: Number },
    type: { type: String },
  },
});
const ArtPiece =
  mongoose.models.ArtPiece || mongoose.model("ArtPiece", artPieceSchema);

export default ArtPiece;
