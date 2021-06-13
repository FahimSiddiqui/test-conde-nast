import  redis from "redis";
export var CacheWrapper = (function () {
    var instance;
    function CreateInstance() {
        var object = {};
        object.client = redis.createClient();
        return object
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = CreateInstance();
            }
            return instance;
        },
        getClient: function () {
            return this.getInstance().client;
        }
    }
})();
