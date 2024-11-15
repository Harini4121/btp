sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.details", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("details").attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function(oEvent) {
            debugger
            var sFormData = oEvent.getParameter("arguments").formData;
            var aFormData = JSON.parse(sFormData);
            //var firstname_new = aFormData[0]._IDGenInput1;
           
            console.log("before  parse"+sFormData);
            console.log("Hiiii555"+aFormData[0].SS);
           
           var oModel = new JSONModel({
                formData: aFormData,
                
        
            });
           // var oModel = this.getView().getModel();
           oModel.setProperty("/Business owner", aFormData[0]._IDGenInput1);
           oModel.setProperty("/Business name", aFormData[0]._IDGenInput2);
           oModel.setProperty("/contact number", aFormData[0]._IDGenInput3);
           oModel.setProperty("/Email", aFormData[0]._IDGenInput4);
           oModel.setProperty("/SupplierName", aFormData[0]._IDGenInput5);
           oModel.setProperty("/Street", aFormData[0]._IDGenInput6);
           oModel.setProperty("/ZIPCode", aFormData[0]._IDGenInput8);
           oModel.setProperty("/State", aFormData[0].state);
            this.getView().setModel(oModel);

        },
        back: function () {
            debugger
            //var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
             //oRouter.onNavdetail("detail");
            // this.getRouter().navTo("detail", {}, true /no history/);
             var oRouter = this.getOwnerComponent().getRouter();
             oRouter.navTo("Routeregistration");
          }
       
        });
      
    });