/** Demo app for routing. */

const express = require('express');
const ExpressError = require("./expressError")
const {convertInput, mean, median, mode} = require('./math-helper')

const app = express();

// mean route handler
app.get('/mean', function(request, response, next) {
  try {
    const nums = convertInput(request.query.nums);
    if (nums.includes(NaN)) throw new ExpressError('All input values must be a number.', 400);
    if (!nums) throw new ExpressError('Input requires at least one number.', 400);
    const result = {'operation': 'mean', 'value': mean(nums)};
    return response.json(result);
  } catch (error) {
    return next(error);
  }
});

// median route handler
app.get('/median', function(request, response, next) {
  try {
    const nums = convertInput(request.query.nums);
    if (nums.includes(NaN)) throw new ExpressError('All input values must be a number.', 400);
    if (!nums) throw new ExpressError('Input requires at least one number.', 400);
    const result = {'operation': 'median', 'value': median(nums)};
    return response.json(result);
  } catch (error) {
    return next(error);
  }
});

// mode route handler
app.get('/mode', function(request, response, next) {
  try {
    const nums = convertInput(request.query.nums);
    if (nums.includes(NaN)) throw new ExpressError('All input values must be a number.', 400);
    if (!nums) throw new ExpressError('Input requires at least one number.', 400);
    const result = {'operation': 'mode', 'value': mode(nums)};
    return response.json(result);
  } catch (error) {
    return next(error);
  }
});

// 404 handler
app.use(function (request, response, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// generic error handler
app.use(function(error, request, response, next) {
  // the default status is 500 Internal Server Error
  let status = error.status || 500;
  let message = error.message;

  // set the status and alert the user
  return response.status(status).json({
    error: {message, status}
  });
});
// end generic handler

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
// end app.listen
