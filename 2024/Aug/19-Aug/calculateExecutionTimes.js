// Given an array of function logs, where each log consists of a function name, a timestamp, and an event (either start or end), 
// return the total execution time for each function. The timestamp is an integer representing milliseconds 
// since the start of the program.


// Example:

// > calculateExecutionTimes([
//     { name: "main", time: 0, event: "start" },
//     { name: "subTask1", time: 5, event: "start" },
//     { name: "subTask1", time: 10, event: "end" },
//     { name: "subTask2", time: 15, event: "start" },
//     { name: "subTask2", time: 20, event: "end" },
//     { name: "main", time: 25, event: "end" }
// ])
// > { main: 25, subTask1: 5, subTask2: 5 }
function calculateExecutionTimes(logs){
    const executionTime = {}; // Object to store total execution time for each function
    const stack = []; // Stack to track active functions

    logs.forEach(log => {
        const { name, time, event } = log;

        if (event === "start") {
            // Push the function onto the stack with its start time
            stack.push({ name, startTime: time });
        } else if (event === "end") {
            // Pop the function from the stack, calculate its execution time, and add it to the total
            const { name: startName, startTime } = stack.pop();
            const timeSpent = time - startTime;

            if (executionTime[startName]) {
                executionTime[startName] += timeSpent;
            } else {
                executionTime[startName] = timeSpent;
            }
        }
    });

    return executionTime;
}
// Example usage
const logs = [
    { name: "main", time: 0, event: "start" },
    { name: "subTask1", time: 5, event: "start" },
    { name: "subTask1", time: 10, event: "end" },
    { name: "subTask2", time: 15, event: "start" },
    { name: "subTask2", time: 20, event: "end" },
    { name: "main", time: 25, event: "end" }
];

console.log(calculateExecutionTimes(logs));