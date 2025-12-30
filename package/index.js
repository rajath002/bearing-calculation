/**
 * Bearing Calculator
 * Calculate bearing angles between geographic coordinates
 * 
 * @module bearing-calculator
 */

// Core utilities
const {
  calculateBearing,
  getCompassDirection,
  getDetailedCompassDirection,
  calculateDistance,
  toRadians,
  toDegrees
} = require('./bearing');

module.exports = {
  // Core functions
  calculateBearing,
  getCompassDirection,
  getDetailedCompassDirection,
  calculateDistance,
  toRadians,
  toDegrees,

};
