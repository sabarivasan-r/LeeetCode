var createCounter = function(init) {
    var global = init
    return {
    increment: function(){
        init +=1
        return init
    },
    reset : function(){
        init = global
        return global
    },
    decrement: function(){
        init -=1
        return init
    }
}

};