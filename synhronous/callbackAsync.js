function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 1000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1000);
}

function registerUser(callback) {
    setTimeout(() => {
        console.log("User registered successfully");
        callback(null);
    }, 1000);
}

function sendVerification(callback) {
    setTimeout(() => {
        console.log("Verification email sent");
        callback(null);
    }, 1000);
}

function loginUser(callback) {
    setTimeout(() => {
        console.log("User logged in successfully");
        callback(null);
    }, 1000);
}

function displayWelcomeMessage(callback) {
    setTimeout(() => {
        console.log("Welcome message displayed");
        callback(null);
    }, 1000);
}

registerUser((err) => {
    if (err) return console.log("Error during registration:", err);
    sendVerification((err) => {
        if (err) return console.log("Error sending verification:", err);
        loginUser((err) => {
            if (err) return console.log("Error logging in:", err);
            displayWelcomeMessage((err) => {
                if (err) return console.log("Error displaying welcome message:", err);
                console.log("All tasks completed successfully");
            });
        });
    });
});
