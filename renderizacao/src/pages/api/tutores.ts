export default function handle(req: any, res: any, next: any) {
  res.status(200).json({ id: req.query.id });
}
