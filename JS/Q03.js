function checkEmailId(str) {
    let atIndex = str.indexOf('@');
    let dotIndex = str.indexOf('.', atIndex);
    
    return atIndex > 0 && dotIndex > atIndex + 1;
}

// Example usage:
console.log(checkEmailId("example@domain.com"));  // Should return true
console.log(checkEmailId("exampledomain.com"));   // Should return false
