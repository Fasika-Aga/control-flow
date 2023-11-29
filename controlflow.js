const PI = 3.1415;
const initialRadius = 5;
const minSpacePerPlant = 0.8;
const maxPlants = calculateMaxPlants(initialRadius, minSpacePerPlant);
let plantCount1 = 20;
let plantCount = 100; // Start with 100 plants
let weeks = 10; // Simulate growth for 10 weeks

// Function to calculate the maximum number of plants the garden can hold
function calculateMaxPlants(radius, minSpacePerPlant) {
  const gardenArea = PI * radius * radius;
  return Math.floor(gardenArea / minSpacePerPlant);
}

// Function to simulate plant growth for a given number of weeks
function simulatePlantGrowth(weeks) {
  for (let week = 1; week <= weeks; week++) {
    // Double the number of plants every week
    plantCount *= 2;

    // Make decisions based on the current plant count
    if (plantCount > 0.8 * maxPlants) {
      console.log(`Week ${week}: Prune the plants. The garden is reaching its capacity.`);
    } else if (plantCount >= 0.5 * maxPlants && plantCount <= 0.8 * maxPlants) {
      console.log(`Week ${week}: Monitor the plant growth.`);
      // Add the appropriate code or log here
    }
  }
}
// Simulate plant growth for 1, 2, and 3 weeks
simulatePlantGrowth(1);
simulatePlantGrowth(2);
simulatePlantGrowth(3);

//////////////Part 2: Thinking Bigger/////


// let plantCount = 100; // Start with 100 plants
// let weeks = 10; // Simulate growth for 10 weeks

// Function to calculate the area of the circular garden
function calculateArea(radius) {
  return PI * radius * radius;
}
//Simulate plant growth for 10 weeks

simulatePlantGrowth(weeks);
// Simulate plant growth for a specific number of weeks
function simulateGrowthForWeeks(numberOfWeeks) {
  for (let i = 1; i <= numberOfWeeks; i++) {
    simulatePlantGrowth(i);
  }
}
 //Simulate growth for 10 weeks (you can change this number as needed)
simulateGrowthForWeeks(10);

//////////////Part 3: Errors in Judgement/////////////////

function simulatePlantGrowth(weeks) {
  try {
    // Each week, the plant count doubles
    plantCount *= 2;

    // Calculate the area after the given number of weeks
    const currentArea = calculateArea(initialRadius);
    const requiredArea = plantCount * minimumSpacePerPlant;

    // Check if the required area exceeds the available area
    if (requiredArea > currentArea) {
      throw new Error('Insufficient space to accommodate the specified number of plants.');
    }

    // Calculate the additional space required
    const additionalSpaceRequired = requiredArea - currentArea;

    // Log the results
    console.log(`Week ${weeks}:`);
    console.log(`- Current plant count: ${plantCount}`);
    console.log(`- Current garden area: ${currentArea} square meters`);
    console.log(`- Required area: ${requiredArea} square meters`);
    console.log(`- Additional space required: ${additionalSpaceRequired} square meters\n`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

