customProperties:"formComponent:false,\
methods:{\
onLoadMethodID:{\
arguments:null,\
parameters:null\
},\
onShowMethodID:{\
arguments:null,\
parameters:null\
}\
},\
useCssPosition:true",
dataSource:"db:/example_data/orders",
encapsulation:60,
extendsID:"41A4A812-1F60-4887-8AFD-FA76C5F54876",
items:[
{
height:267,
partType:5,
typeid:19,
uuid:"CE1CBDE8-4C71-4041-A722-1D10B63AB399"
},
{
anchors:11,
cssPosition:"5,5,5,5,100%,90%",
json:{
anchors:11,
backgroundColor:"backgroundColor",
cssPosition:{
bottom:"5",
height:"90%",
left:"5",
right:"5",
top:"5",
width:"100%"
},
foundset:{
dataproviders:{
label:"order_details_to_products.productname",
value:"subtotal"
},
foundsetSelector:"orders_to_order_details"
},
hoverBackgroundColor:"hoverBackgroundColor",
legendLabel:"orderid",
location:{
x:5,
y:5
},
onClick:"EA56DF97-BEBE-4E96-A7FA-D1E00177F492",
size:{
height:227,
width:300
},
styleClass:"chart",
type:"horizontalBar"
},
location:"5,5",
name:"chart",
size:"300,227",
typeName:"svychartjs-chart",
typeid:47,
uuid:"DCE02890-0A32-460B-AF15-391F8D084961"
}
],
name:"chart_5_desktop",
onLoadMethodID:"CA3626F3-D05A-42BD-B549-C75AEC6C3AA6",
onShowMethodID:"969E7484-A39B-436D-AA0D-FD2BA9876415",
showInMenu:true,
size:"651,457",
styleClass:"chart-main",
typeid:3,
uuid:"ADF6F5AE-C9F4-4843-A1AD-0F69172BA0B2"