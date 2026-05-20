import dbConnect from "@/db/connect";
import ArtPiece from "@/db/models/ArtPiece";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const artPieces = await ArtPiece.find();
    response.status(200).json(artPieces);
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
