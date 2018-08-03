var region=document.querySelector('#region-radio-wrapper');
	var product=document.querySelector('#product-radio-wrapper');	
function CheckBox(check,option) {
 //生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
var checkAll=document.createElement('input');
checkAll.setAttribute("type",'checkbox');
var checkText=document.createTextNode('全选');
 check.appendChild(checkText);
checkAll.setAttribute("checkboxtype",'all');
check.appendChild(checkAll);
  //遍历参数对象 {
     //   生成各个子选项checkbox的html，给一个自定义属性表示为子选项
   // }
    //容器innerHTML = 生成好的html集合
  for (var i = 0; i<=option.length-1; i++) {
var checkOption=document.createElement('input');
checkOption.setAttribute("type",'checkbox');
var checkOptionText=document.createTextNode(option[i].text);
checkOption.setAttribute("value",option[i].text);
check.appendChild(checkOption);
check.appendChild(checkOptionText)
  }
   // 给容器做一个事件委托 = function() {
   //      if 是checkbox
   //          读取自定义属性
   //          if 全选
   //              做全选对应的逻辑
   //          else
   //              做子选项对应的逻辑
   //  }

 var co=check.querySelectorAll('input');
 function setFalse(){
 	var tt=0;
   	for(var ii=1;ii<=co.length-1;ii++){
if(co[ii].checked){
tt++;
if(tt==1){
var a=co[ii];
}
}
if(tt==1){
a.checked=true;
}
}
        }

check.onchange=function(e){
	  
	if(e.target==checkAll && e.target.checked==true){
for(var i=1;i<=co.length-1;i++){
co[i].checked=true;
}
   } 
   else{ 
   	if(e.target.checked=='true'){
   		co[0].checked=false; 
e.target.checked=false;

 }else if(e.target.checked=='false'){
co[0].checked=false;  
e.target.checked=true;
 }else{
   	var t=0;
   	for(var i=1;i<=co.length-1;i++){
if(co[i].checked){
t++;
}if(t==0){setFalse();}
 if(t==3){
co[0].checked=true;
}else{co[0].checked=false;
}
}
}
   	
   }
 
view(); 
}

}
