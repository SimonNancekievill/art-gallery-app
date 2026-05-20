import dbConnect from "@/db/connect";
import ArtPiece from "@/db/models/ArtPiece";

export default async function handler(request, response) {
  await dbConnect();
  const { slug } = request.query;

  if (request.method === "GET") {
    const artPiece = await ArtPiece.findOne({ slug: slug });

    if (!artPiece) {
      response.status(404).json({ status: "Not Found." });
      return;
    }
    response.status(200).json(artPiece);
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
}
