// Type definitions for bearing-calculator

/**
 * Convert degrees to radians
 */
export function toRadians(degrees: number): number;

/**
 * Convert radians to degrees
 */
export function toDegrees(radians: number): number;

/**
 * Calculate bearing angle between two geographic points
 * @param startLat Starting latitude (-90 to 90)
 * @param startLng Starting longitude (-180 to 180)
 * @param endLat Ending latitude (-90 to 90)
 * @param endLng Ending longitude (-180 to 180)
 * @returns Bearing angle in degrees (0-360)
 */
export function calculateBearing(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number
): number;

/**
 * Get 8-point compass direction from bearing
 * @param bearing Bearing angle (0-360)
 * @returns Cardinal direction (N, NE, E, SE, S, SW, W, NW)
 */
export function getCompassDirection(bearing: number): string;

/**
 * Get 16-point compass direction from bearing
 * @param bearing Bearing angle (0-360)
 * @returns Detailed compass direction (N, NNE, NE, ENE, etc.)
 */
export function getDetailedCompassDirection(bearing: number): string;

/**
 * Calculate distance between two geographic points
 * @param startLat Starting latitude
 * @param startLng Starting longitude
 * @param endLat Ending latitude
 * @param endLng Ending longitude
 * @param unit Unit of measurement ('km', 'miles', 'meters')
 * @returns Distance in specified unit
 */
export function calculateDistance(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number,
  unit?: 'km' | 'miles' | 'meters'
): number;
