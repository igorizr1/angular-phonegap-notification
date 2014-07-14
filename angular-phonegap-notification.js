angular.module('NotificationModule', ["general.config"])
.factory('NotificationModule', function(GENERAL_CONFIG) {
    return {
        alert : function(message){
            try{
                return navigator.notification
                    .alert(message,
                        function(){},
                        GENERAL_CONFIG.APP_NAME,
                        "ok");
            }catch(t){
                return alert(message);
            }
        },
        confirm : function(message, callback){
            try{
                navigator.notification.confirm(
                    message,
                    function(buttonIndex){
                        if(callback)callback(buttonIndex === 1 ? true : false);
                    },
                    GENERAL_CONFIG.APP_NAME,
                    ['Ok','Cancel']
                );
            }catch(t){
                confirm(message, callback);
            }
        }
    };
    
});