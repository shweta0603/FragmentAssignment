sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("fragmentassign.Assignment01.controller.View1", {
		onInit: function () {	} ,
		 
		 officeLocation: function (oEvent) {
				// alert("hi");\
				var oDialog = new sap.ui.xmlfragment("fragmentassign.Assignment01.fragmentfolder.reusableFragment", this);
				this.getView().addDependent(oDialog);
				oDialog.bindAggregation("items", {
					path: "data>/data",	
					template: new sap.m.StandardListItem({
						title: "{data>name}"
					}
						)
				});
				oDialog.open();
			},
			// onSave: function () {
			// 	this.oDialog.close();
			// },
			_handleValueHelpClose: function (evt) {

				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productInput = this.byId("input1");
					productInput.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			} 
	});
});