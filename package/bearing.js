/**
 * Bearing Calculator Utilities
 * Calculate bearing angle between two geographic coordinates
 */

/**
 * Convert degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} Angle in radians
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Convert radians to degrees
 * @param {number} radians - Angle in radians
 * @returns {number} Angle in degrees
 */
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

/**
 * Calculate the bearing angle between two geographic points
 * The bearing is the compass direction from the start point to the end point
 * 
 * @param {number} startLat - Starting point latitude (-90 to 90)
 * @param {number} startLng - Starting point longitude (-180 to 180)
 * @param {number} endLat - Ending point latitude (-90 to 90)
 * @param {number} endLng - Ending point longitude (-180 to 180)
 * @returns {number} Bearing angle in degrees (0-360), where 0/360 is North
 */
function calculateBearing(startLat, startLng, endLat, endLng) {
  // Validate inputs
  if (typeof startLat !== 'number' || typeof startLng !== 'number' ||
      typeof endLat !== 'number' || typeof endLng !== 'number') {
    throw new Error('All coordinates must be numbers');
  }

  if (startLat < -90 || startLat > 90 || endLat < -90 || endLat > 90) {
    throw new Error('Latitude must be between -90 and 90 degrees');
  }

  if (startLng < -180 || startLng > 180 || endLng < -180 || endLng > 180) {
    throw new Error('Longitude must be between -180 and 180 degrees');
  }

  // Convert to radians
  const startLatRad = toRadians(startLat);
  const startLngRad = toRadians(startLng);
  const endLatRad = toRadians(endLat);
  const endLngRad = toRadians(endLng);

  // Calculate the difference in longitude
  const dLng = endLngRad - startLngRad;

  // Calculate bearing using the forward azimuth formula
  const x = Math.sin(dLng) * Math.cos(endLatRad);
  const y = Math.cos(startLatRad) * Math.sin(endLatRad) -
            Math.sin(startLatRad) * Math.cos(endLatRad) * Math.cos(dLng);

  // Calculate bearing in radians and convert to degrees
  let bearing = toDegrees(Math.atan2(x, y));

  // Normalize to 0-360 range
  bearing = (bearing + 360) % 360;

  return bearing;
}

/**
 * Get the compass cardinal/intercardinal direction from a bearing angle
 * 
 * @param {number} bearing - Bearing angle in degrees (0-360)
 * @returns {string} Compass direction (N, NE, E, SE, S, SW, W, NW)
 */
function getCompassDirection(bearing) {
  if (typeof bearing !== 'number' || bearing < 0 || bearing > 360) {
    throw new Error('Bearing must be a number between 0 and 360');
  }

  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(bearing / 45) % 8;
  return directions[index];
}

/**
 * Get detailed compass direction (16-point)
 * 
 * @param {number} bearing - Bearing angle in degrees (0-360)
 * @returns {string} Detailed compass direction (N, NNE, NE, ENE, E, etc.)
 */
function getDetailedCompassDirection(bearing) {
  if (typeof bearing !== 'number' || bearing < 0 || bearing > 360) {
    throw new Error('Bearing must be a number between 0 and 360');
  }

  const directions = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW'
  ];
  const index = Math.round(bearing / 22.5) % 16;
  return directions[index];
}

/**
 * Calculate distance between two points using Haversine formula
 * 
 * @param {number} startLat - Starting point latitude
 * @param {number} startLng - Starting point longitude
 * @param {number} endLat - Ending point latitude
 * @param {number} endLng - Ending point longitude
 * @param {string} unit - Unit of measurement ('km', 'miles', 'meters')
 * @returns {number} Distance in specified unit
 */
function calculateDistance(startLat, startLng, endLat, endLng, unit = 'km') {
  const R = {
    km: 6371,
    miles: 3959,
    meters: 6371000
  };

  const radius = R[unit] || R.km;

  const dLat = toRadians(endLat - startLat);
  const dLng = toRadians(endLng - startLng);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(startLat)) * Math.cos(toRadians(endLat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radius * c;
}

module.exports = {
  calculateBearing,
  getCompassDirection,
  getDetailedCompassDirection,
  calculateDistance,
  toRadians,
  toDegrees
};
