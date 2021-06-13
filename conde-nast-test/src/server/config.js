export var Config = (function () {
    var instance;
    var PORT=process.env.PORT || 5000

    function CreateInstance() {
        var object = {};
        object.NEWS_API_KEY = process.env.NEWS_API_KEY || "d2431f428e1b49a0b859e6a37c96f7fb";
        object.PUSHER_APP_ID = process.env.PUSHER_APP_ID || "";
        object.PUSHER_APP_KEY = process.env.PUSHER_APP_KEY || "";
        object.PUSHER_APP_SECRET = process.env.PUSHER_APP_SECRET || "";
        object.PUSHER_APP_CLUSTER = process.env.PUSHER_APP_CLUSTER || "";
        object.PORT = PORT;
        object.IsCacheEnabled=process.env.IS_CACHE_ENABLED || false
        return object
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = CreateInstance();
            }
            return instance;
        },
        getPort: function () {
            return this.getInstance().PORT
        },
        getPusherAppId: function () {
            return this.getInstance().PUSHER_APP_ID
        },
        getPusherAppKey: function () {
            return this.getInstance().PUSHER_APP_KEY
        },
        getNewsAPIKey: function () {
            return this.getInstance().NEWS_API_KEY
        },
        getPusherAppSecret: function () {
            return this.getInstance().PUSHER_APP_ID
        },
        getPusherAppCluster: function () {
            return this.getInstance().PUSHER_APP_CLUSTER
        },
        isCacheEnabled: function () {
            return this.getInstance().IsCacheEnabled
        }
    };
})();
// var response = await newsapi.v2.everything({
      //   q: searchTerm,
      //   language: 'en',
      //   page: pageNum,
      //   pageSize: 5,
      // });