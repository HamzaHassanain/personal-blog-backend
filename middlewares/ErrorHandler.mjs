import Debug from "../utils/Debug.mjs";

export default (err, req, res, next) => {
  Debug.error(err);
  res.status(err.code || 500).json({ ...err });
};
