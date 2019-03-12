module.exports=evalString=function(str){
    str=str.replace(/,/g,'')
    let strSplit=str.split('');
    if(strSplit.indexOf('k')!==-1){
        str=Number(strSplit.splice(0,strSplit.length-1).join(''))*1000
        
    }
    else if (strSplit.indexOf('m') !== -1){
        str = Number(strSplit.splice(0, strSplit.length - 1).join(''))*1000000
    }
    return Number(str)
} 