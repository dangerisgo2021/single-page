export const logError = (err, req, res, next) => {
  if (err) {
    console.log('error happened');
    console.log(err);
    console.log(err.stack);
    console.log(err.errors);
    res.status(400).json(err.message);
  } else {
    next();
  }
};
