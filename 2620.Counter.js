var createCounter = function(n) {
    let i=n-1
    return function() {
        return i+=1
        
    };
};