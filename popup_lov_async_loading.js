var view=apex.region("ER_CONTROL").widget().interactiveGrid("getViews","grid");

var model=view.model;
var record=view.getContextRecord(this.triggeringElement)[0];

if(!record){
return;
}
var selectedValue=$(this.triggeringElement).val();

if(!selectedValue){

return;
}
model.setValue(record,"INTR_ERR_CODE",{v:selectedValue,d:selectedValue});

var errCell=$(this.triggeringElement).closest("td");


errCell.text("Loading...");

setTimeout(function(){
errCell.text("Loading...");
},50);

apex.server.process("control",{x01:selectedValue},{
dataType:"json",
success:function(pData){

var desc=pData.desc||"Description not found";

setTimeout(function(){

model.setValue(record,"INTR_ERR","ERREUR");

model.setValue(record,"INTR_ERR_DESC",desc);

},50);
},
error:function(xhr,status,error){

setTimeout(function(){
errCell.text(selectedValue);
},50);
}
});
