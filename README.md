grocery-list-offline
====================

A simple app that leverages the online state of the device and toggles the data source mode online/offline

The app levereges the state of the network connection and the data source **online** mode.

If the app is not **online** the data source operates in **offline** mode.

When a connection becomes available - the data source switches to **online** mode, all saved items are automatically synced with the server. 

For more information about the offline support in the Kendo UI data source component see this [article](http://docs.telerik.com/kendo-ui/framework/datasource/offline).

For more information about the 'everlive' dialect of the component customized to work with Telerik Backend Services, see this [article](http://docs.telerik.com/platform/backend-services/development/javascript-sdk/kendoui/kendo-uidata-source).
