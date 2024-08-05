// Write a function that converts between metric and imperial units. Break up the units into 
// millimeters, centimeters, and meters for metric, and into inches 
// and feet for imperial, up to 2 decimal places.
// example

// > convertUnits(7, "ft")
// > "2m 13cm 3.6mm"

// > convertUnits(44, "cm")
// > "1ft 5.32in"

// Function to convert metric to imperial units
function convertMetricToImperial(lengthInMetric, metricUnit) {
    let inchesPerMeter = 39.3701;
    let feetPerMeter = 3.28084;

    // Convert metric length to meters
    let meters;
    switch (metricUnit) {
        case 'millimeters':
            meters = lengthInMetric / 1000;
            break;
        case 'centimeters':
            meters = lengthInMetric / 100;
            break;
        case 'meters':
            meters = lengthInMetric;
            break;
        default:
            return 'Invalid metric unit';
    }

    // Convert meters to inches and feet
    let inches = meters * inchesPerMeter;
    let feet = meters * feetPerMeter;

    // Round to 2 decimal places
    inches = inches.toFixed(2);
    feet = feet.toFixed(2);

    return {
        inches: parseFloat(inches),
        feet: parseFloat(feet)
    };
}

// Function to convert imperial to metric units
function convertImperialToMetric(lengthInImperial, imperialUnit) {
    let metersPerInch = 0.0254;
    let metersPerFoot = 0.3048;

    // Convert imperial length to inches and feet
    let inches, feet;
    switch (imperialUnit) {
        case 'inches':
            inches = lengthInImperial;
            feet = lengthInImperial / 12;
            break;
        case 'feet':
            inches = lengthInImperial * 12;
            feet = lengthInImperial;
            break;
        default:
            return 'Invalid imperial unit';
    }

    // Convert inches and feet to meters
    let meters = inches * metersPerInch;
    let centimeters = meters * 1000;
    let millimeters = meters * 1000;

    // Round to 2 decimal places
    meters = meters.toFixed(2);
    centimeters = centimeters.toFixed(2);
    millimeters = millimeters.toFixed(2);

    return {
        millimeters: parseFloat(millimeters),
        centimeters: parseFloat(centimeters),
        meters: parseFloat(meters)
    };
}

// Example usage:
let metricLength = 2.5; // Length in metric units
let metricUnit = 'meters'; // Metric unit ('millimeters', 'centimeters', 'meters')

console.log(`Converting ${metricLength} ${metricUnit
