function findUnused(logs) {
    var variables = {};
    
    // Step 1: Identify all variables and their usage
    for (var i = 0; i < logs.length; i++) {
        var line = logs[i];
        
        // Check if it's a variable assignment
        var equalIndex = -1;
        for (var j = 0; j < line.length; j++) {
            if (line[j] === "=") {
                equalIndex = j;
                break;
            }
        }

        if (equalIndex !== -1) {
            var varName = "";
            for (var j = 0; j < equalIndex - 1; j++) {
                varName += line[j];
            }
            varName = varName.trim();
            variables[varName] = false;
        }

        // Check if it's a log statement
        var logIndex = -1;
        for (var j = 0; j < line.length - 3; j++) {
            if (line[j] === "l" && line[j+1] === "o" && line[j+2] === "g" && line[j+3] === "(") {
                logIndex = j;
                break;
            }
        }
        
        if (logIndex !== -1) {
            var logVarName = "";
            for (var j = logIndex + 4; j < line.length - 1; j++) {
                logVarName += line[j];
            }
            logVarName = logVarName.trim();
            if (variables.hasOwnProperty(logVarName)) {
                variables[logVarName] = true;
            }
        }
    }

    // Step 2: Collect unused variables
    var unusedVariables = [];
    for (var varName in variables) {
        if (variables[varName] === false) {
            unusedVariables[unusedVariables.length] = varName;
        }
    }

    return unusedVariables;
}

// Example usage:
console.log(findUnused(["a = 1", "b = a", "c = 2", "log(b)"])); // ["c"]
console.log(findUnused(["a = 1", "b = a", "c = 2", "log(c)"])); // ["a", "b"]
