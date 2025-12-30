/**
 * Test file for bearing-calculator
 * Run with: node test.js
 */

// Import directly from bearing.js to avoid React dependency
const {
  calculateBearing,
  getCompassDirection,
  getDetailedCompassDirection,
  calculateDistance
} = require('./bearing');

console.log('=== Bearing Calculator Tests ===\n');

// Test 1: New York to London
console.log('Test 1: New York (40.7128, -74.0060) to London (51.5074, -0.1278)');
const bearing1 = calculateBearing(40.7128, -74.0060, 51.5074, -0.1278);
console.log(`  Bearing: ${bearing1.toFixed(2)}°`);
console.log(`  Direction: ${getCompassDirection(bearing1)}`);
console.log(`  Detailed: ${getDetailedCompassDirection(bearing1)}`);
console.log(`  Distance: ${calculateDistance(40.7128, -74.0060, 51.5074, -0.1278).toFixed(2)} km\n`);

// Test 2: Los Angeles to Tokyo
console.log('Test 2: Los Angeles (34.0522, -118.2437) to Tokyo (35.6762, 139.6503)');
const bearing2 = calculateBearing(34.0522, -118.2437, 35.6762, 139.6503);
console.log(`  Bearing: ${bearing2.toFixed(2)}°`);
console.log(`  Direction: ${getCompassDirection(bearing2)}`);
console.log(`  Distance: ${calculateDistance(34.0522, -118.2437, 35.6762, 139.6503).toFixed(2)} km\n`);

// Test 3: Due North
console.log('Test 3: Due North (0, 0) to (10, 0)');
const bearing3 = calculateBearing(0, 0, 10, 0);
console.log(`  Bearing: ${bearing3.toFixed(2)}° (expected: 0°)`);
console.log(`  Direction: ${getCompassDirection(bearing3)} (expected: N)\n`);

// Test 4: Due East
console.log('Test 4: Due East (0, 0) to (0, 10)');
const bearing4 = calculateBearing(0, 0, 0, 10);
console.log(`  Bearing: ${bearing4.toFixed(2)}° (expected: 90°)`);
console.log(`  Direction: ${getCompassDirection(bearing4)} (expected: E)\n`);

// Test 5: Due South
console.log('Test 5: Due South (10, 0) to (0, 0)');
const bearing5 = calculateBearing(10, 0, 0, 0);
console.log(`  Bearing: ${bearing5.toFixed(2)}° (expected: 180°)`);
console.log(`  Direction: ${getCompassDirection(bearing5)} (expected: S)\n`);

// Test 6: Due West
console.log('Test 6: Due West (0, 10) to (0, 0)');
const bearing6 = calculateBearing(0, 10, 0, 0);
console.log(`  Bearing: ${bearing6.toFixed(2)}° (expected: 270°)`);
console.log(`  Direction: ${getCompassDirection(bearing6)} (expected: W)\n`);

console.log('=== All Tests Completed ===');
