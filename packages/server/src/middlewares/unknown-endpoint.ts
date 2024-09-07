
export function unknownEndpoint(_req: Request, res: Response) {
  res.status(404).json({message: "Unknown endpoint"});
}