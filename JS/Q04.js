function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "...";
    } else {
        return str;
    }
}

// Example usage:
console.log(truncate("What I'd like to tell on this topic is:", 20)); // Should output "What I'd like to te..."
console.log(truncate("Hi everyone!", 20));  // Should output "Hi everyone!"
