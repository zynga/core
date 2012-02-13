// https://gist.github.com/1779852
var HashMap = (function () {
    var PROTO_SUPPORT = !Object.prototype.isPrototypeOf({__proto__ : null}),
        OBJECT_CREATE = typeof Object.create != 'undefined',
        DONT_ENUM_BUG = !{'toString' : true}.propertyIsEnumerable('toString');
        
    var hasOwnP = {}.hasOwnProperty,
        dontEnums = []; 
    
    if (DONT_ENUM_BUG) {
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ];
    }    
     
    function HashMap() {
        if (OBJECT_CREATE) {
            this.__map__ = Object.create(null);
        }
        else if (PROTO_SUPPORT) {
            this.__map__ = {__proto__ : null};    
        }
        else {
            this.__map__ = {};
        }
    }  
    
    if (OBJECT_CREATE || PROTO_SUPPORT) {
        HashMap.prototype.hasKey = function (key) {
            return key in this.__map__;
        };
        
        HashMap.prototype.get = function (key) {
            return this.__map__[key];
        }; 
        
        HashMap.prototype.keys = function () {
            var keys = [];
            for (var key in this.__map__) {
                keys.push(key);
            }
            return keys;    
        };           
    }
    else {
        HashMap.prototype.hasKey = function (key) {
            return hasOwnP.call(this.__map__, key);
        };
        
        HashMap.prototype.get = function (key) {
            if (this.hasKey(key)) {
                return this.__map__[key];
            }
        };
        
        HashMap.prototype.keys = function () {
            var keys = [];
            for (var key in this.__map__) {
                if (this.hasKey(key)) {
                    keys.push(key);
                }    
            }
            
            for (var i = dontEnums.length; i--;) {
                if (this.hasKey(dontEnums[i])) {
                    keys.push(dontEnums[i]);    
                }
            }    
        };                                
    }
    
    HashMap.prototype.set = function (key, value) {
        this.__map__[key] = value;
    };
    
    HashMap.prototype.remove = function (key) {
        delete this.__map__[key];
    };
    
    return HashMap;
})();

