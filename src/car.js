import * as gps from './gps';
import * as fuelTank from './fuelTank';
import * as screen from './screen';

const SPEED = 10;

fuelTank.onLowFuel(() => {
  screen.show('Fuel low');
});

export function showSpeed() {
  screen.show(`${SPEED} km/h`)
}

export function showFuelPercentage() {
  const percentage = fuelTank.getPercentage();

  screen.show(`Fuel percentage: ${percentage}%`)
}

export async function showPosition() {
  const [latitude, longitude] = await gps.getPosition();

  screen.show(`GPS coördinates: ${latitude}, ${longitude}`);
}
