(function () {
    var apiKey = "YOUR_API_KEY";
    var el = new Everlive(apiKey);

    window.addView = kendo.observable({
        add: function () {
            if (this.grocery.trim() === "") {
                navigator.notification.alert("Please provide a grocery.");
                return;
            }

            groceryDataSource.add({
                Name: this.grocery
            });
            groceryDataSource.one("sync", this.close);
            groceryDataSource.sync();
        },
        close: function () {
            $("#add").data("kendoMobileModalView").close();
            this.grocery = "";
        }
    });

    var groceryDataSource = new kendo.data.DataSource({
        offlineStorage: "grocery-storage",
        type: "everlive",
        transport: {
            typeName: "Groceries"
        }
    });

    function bindNetworkEvents() {
        document.addEventListener("online", function() {
            groceryDataSource.online(true);
        });
        
        document.addEventListener("offline", function() {
            groceryDataSource.online(false);
        }); 
    };
    
    function initialize() {
        var app = new kendo.mobile.Application(document.body, {
            skin: "flat",
            transition: "slide"
        });
        navigator.splashscreen.hide();

        $("#grocery-list").kendoMobileListView({
            dataSource: groceryDataSource,
            template: "#: Name #"
        });
        
        bindNetworkEvents();
    }

    document.addEventListener("deviceready", initialize);
}());