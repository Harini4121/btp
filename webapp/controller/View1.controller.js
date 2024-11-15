sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller,MessageBox) {
    "use strict";

    return Controller.extend("registration.controller.registration", {
        onInit: function () { 
        },
        preview: function () {
        debugger
        var oView = this.getView();
        var oMobileInput1 = oView.byId("_IDGenInput1");
        var oNameInput = oView.byId("_IDGenInput2");
        var oEmailInput = oView.byId("_IDGenInput3");
        var oAadharInput = oView.byId("_IDGenInput4");
        var oAadharInput1 = oView.byId("_IDGenInput5");
        var oAadharInput2 = oView.byId("_IDGenInput6");
        var oAadharInput3 = oView.byId("_IDGenInput8");
        var oMobileInput = oView.byId("state");
        

    if (!oNameInput.getValue() ||
        !oMobileInput1.getValue() ||
        !oEmailInput.getValue() ||
        !oAadharInput.getValue() ||
        !oAadharInput1.getValue() ||
        !oAadharInput2.getValue() ||
        !oAadharInput3.getValue() ||
        !oMobileInput.getSelectedKey() 
        ) {
       sap.m.MessageToast.show("Please fill out all required fields.");
      return;
    }

     //this.onpress();
       // sap.m.MessageStrip.text("Success");
       sap.m.MessageToast.show("Registration successful!");
       // },
        
        //onpress: function () {
          //var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           //oRouter.onNavdetail("detail");
          // this.getRouter().navTo("detail", {}, true /no history/);
          debugger
          var aFormData = [];
          var oFormData = {  
            _IDGenInput1: oMobileInput1.getValue(),
            _IDGenInput2: oNameInput.getValue(),
            _IDGenInput4: oAadharInput.getValue(),          
               _IDGenInput5: oAadharInput1.getValue(),
               _IDGenInput6: oAadharInput2.getValue(),
               _IDGenInput8: oAadharInput3.getValue(),
               _IDGenInput3:  oEmailInput.getValue(),
               state: oMobileInput.getSelectedKey(),
          };
          aFormData.push(oFormData);
  
           var oRouter = this.getOwnerComponent().getRouter();
           oRouter.navTo("View2",{
            formData: JSON.stringify(aFormData)
           });
        },
        });  
           
    });