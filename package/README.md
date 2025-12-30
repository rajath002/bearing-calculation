# Bearing Angle 🧭 Calculator

A lightweight JavaScript utility library for calculating bearing angles between geographic coordinates.

## Installation

```bash
npm install bearing-calculator
```

## Usage

```javascript
import { calculateBearing, getCompassDirection, calculateDistance } from 'bearing-calculator';

// Calculate bearing from New York to London
const bearing = calculateBearing(40.7128, -74.0060, 51.5074, -0.1278);
console.log(bearing); // ~51.2°

// Get compass direction
const direction = getCompassDirection(bearing);
console.log(direction); // "NE"

// Calculate distance
const distance = calculateDistance(40.7128, -74.0060, 51.5074, -0.1278, 'km');
console.log(distance); // ~5570 km
```

### CommonJS

```javascript
const { calculateBearing, getCompassDirection } = require('bearing-calculator');
```

## API Reference

### `calculateBearing(startLat, startLng, endLat, endLng)`

Returns bearing angle (0-360°) from start to end point.

### `getCompassDirection(bearing)`

Returns 8-point compass direction (N, NE, E, SE, S, SW, W, NW).

### `getDetailedCompassDirection(bearing)`

Returns 16-point compass direction (N, NNE, NE, ENE, E, ESE, SE, SSE, S, SSW, SW, WSW, W, WNW, NW, NNW).

### `calculateDistance(startLat, startLng, endLat, endLng, unit)`

Returns distance between points.

| Parameter | Type | Description |
|-----------|------|-------------|
| `startLat` | number | Starting latitude (-90 to 90) |
| `startLng` | number | Starting longitude (-180 to 180) |
| `endLat` | number | Ending latitude (-90 to 90) |
| `endLng` | number | Ending longitude (-180 to 180) |
| `unit` | string | `'km'` (default), `'miles'`, or `'meters'` |

### `toRadians(degrees)`

Converts degrees to radians.

### `toDegrees(radians)`

Converts radians to degrees.

## License

MIT
