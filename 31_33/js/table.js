function getarea() {
  var rco=region.querySelectorAll('input');
	var pco=product.querySelectorAll('input');
	var v=[];
	var m=[];
	var n=[];
	var a=[];
	var b=[];
for(var x=1;x<=rco.length-1;x++){
	if(rco[x].checked){		 
        a.push(rco[x]);  
	}
}  
for(var y=1;y<=pco.length-1;y++){
	if(pco[y].checked){		
        b.push(pco[y]);     	
	}
}   
for(var i=0;i<=sourceData.length-1;i++){
for(var xx=0;xx<=a.length-1;xx++){
 if(sourceData[i].region==(a[xx].value)){
	m.push(sourceData[i]);	
 }  
}
}        
 for(var ii=0;ii<=sourceData.length-1;ii++){
for(var yy=0;yy<=b.length-1;yy++){
 if(sourceData[ii].product==(b[yy].value)){
		n.push(sourceData[ii]);	
 }  
}
}   
if(m.length==0){
v=n;
}else if(n.length==0) {
	v=m;
}else if(m.length!=0&&n.length!=0){
	 for(var iii=0;iii<=m.length-1;iii++){
for(var z=0;z<=n.length-1;z++){ 	
 if(m[iii].product==(n[z].product)&&m[iii].region==(n[z].region)){
		v.push(m[iii]);	
 }  
}
} 
}   
       return v;;
  }	
CheckBox(region, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华北"
},{
    value: 3,
    text: "华南"
}]);
CheckBox(product, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
},{
    value: 3,
    text: "智能音箱"
}]);

var table=document.querySelector('#table-wrapper');



function view( ) {
	var month=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
	 	 var q=getarea();
	 	 table.innerHTML='';
	 	 if(q==null){
 q=option1[0].innerText;
	 	 }
	 	 //遍历表头 sale没有意义 
var optionlist='';
for(var i in q){
	//判断数据中产品或者产地是不是全部相同 是的话说明是单选
	if(q[0].region==q[i].region){
 optionlist='region';
	}else if(q[0].product==q[i].product){
 optionlist='product';
}else{
	 optionlist='mul';
}
}
 if( optionlist=='region'){
var tr1=document.createElement('tr');
var th1=document.createElement('th');
var tou1=document.createTextNode('地区');
th1.appendChild(tou1);
tr1.appendChild(th1);
table.appendChild(tr1);
var th2=document.createElement('th');
var tou2=document.createTextNode('商品');
th2.appendChild(tou2);
tr1.appendChild(th2);
for(var m=0;m<=month.length-1;m++){
	var th3=document.createElement('th');
var tou3=document.createTextNode(month[m]);
th3.appendChild(tou3);
tr1.appendChild(th3);
}
var tr2=document.createElement('tr');
var td1=document.createElement('td');
var node1=document.createTextNode(q[0].region);
var td2=document.createElement('td');
var node2=document.createTextNode(q[0].product);
td1.appendChild(node1);
td2.appendChild(node2);
td1.setAttribute('rowspan',"3");
tr2.appendChild(td1);
tr2.appendChild(td2);
for(var s=0;s<=q[0].sale.length-1;s++){
var nodem=document.createTextNode(q[0].sale[s]);
var tdm=document.createElement('td');
tdm.appendChild(nodem);
tr2.appendChild(tdm);
}
table.appendChild(tr2);
for(var i=1;i<=q.length-1;i++){ 
	var tr3=document.createElement('tr');
var td3=document.createElement('td');
var node3=document.createTextNode(q[i].product);
td3.appendChild(node3);
tr3.appendChild(td3);
for(var s=0;s<=q[i].sale.length-1;s++){
var node4=document.createTextNode(q[i].sale[s]);
var td4=document.createElement('td');
td4.appendChild(node4);
tr3.appendChild(td4);
}
table.appendChild(tr3);
}
 }else if(optionlist=='product'){
var tr1=document.createElement('tr');
var th1=document.createElement('th');
var tou1=document.createTextNode('商品');
th1.appendChild(tou1);
tr1.appendChild(th1);
table.appendChild(tr1);
var th2=document.createElement('th');
var tou2=document.createTextNode('地区');
th2.appendChild(tou2);
tr1.appendChild(th2);
for(var m=0;m<=month.length-1;m++){
	var th3=document.createElement('th');
var tou3=document.createTextNode(month[m]);
th3.appendChild(tou3);
tr1.appendChild(th3);
}
var tr2=document.createElement('tr');
var td1=document.createElement('td');
var node1=document.createTextNode(q[0].product);
var td2=document.createElement('td');
var node2=document.createTextNode(q[0].region);
td1.appendChild(node1);
td2.appendChild(node2);
td1.setAttribute('rowspan',"3");
tr2.appendChild(td1);
tr2.appendChild(td2);
for(var s=0;s<=q[0].sale.length-1;s++){
var nodem=document.createTextNode(q[0].sale[s]);
var tdm=document.createElement('td');
tdm.appendChild(nodem);
tr2.appendChild(tdm);
}
table.appendChild(tr2);
for(var i=1;i<=q.length-1;i++){ 
	var tr3=document.createElement('tr');
var td3=document.createElement('td');
var node3=document.createTextNode(q[i].region);
td3.appendChild(node3);
tr3.appendChild(td3);
for(var s=0;s<=q[i].sale.length-1;s++){
var node4=document.createTextNode(q[i].sale[s]);
var td4=document.createElement('td');
td4.appendChild(node4);
tr3.appendChild(td4);
}
table.appendChild(tr3);
}
 }else{if(q!=''){
var tr1=document.createElement('tr');
var th1=document.createElement('th');
var tou1=document.createTextNode('地区');
th1.appendChild(tou1);
tr1.appendChild(th1);
table.appendChild(tr1);
var th2=document.createElement('th');
var tou2=document.createTextNode('商品');
th2.appendChild(tou2);
tr1.appendChild(th2);
for(var m=0;m<=month.length-1;m++){
	var th3=document.createElement('th');
var tou3=document.createTextNode(month[m]);
th3.appendChild(tou3);
tr1.appendChild(th3);
}
for(var i=0;i<=q.length-1;i++){ 
	var tr3=document.createElement('tr');
var td3=document.createElement('td');
var node3=document.createTextNode(q[i].product);
td3.appendChild(node3);
tr3.appendChild(td3);
var td5=document.createElement('td');
var node5=document.createTextNode(q[i].region);
td5.appendChild(node5);
tr3.appendChild(td5);
for(var s=0;s<=q[i].sale.length-1;s++){
var node4=document.createTextNode(q[i].sale[s]);
var td4=document.createElement('td');
td4.appendChild(node4);
tr3.appendChild(td4);
}
table.appendChild(tr3);
}}
 }}