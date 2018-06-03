function replaceButton () {
  //改行コードを統一,改行で分割
  var beforeText = document.getElementById('before').value.replace(/\r\n|\r/g,"\n").replace(/\n/g,"\n<br>");
  beforeText = beforeText.split('\n');

  //カラーコードがなければスキップ、含まれてたら置換→[#......]というふうに
  var beforeResult = beforeText.map(function(value){
    var str = value.search(/#....../);
    var str2 = value.search("]");
    console.log(str2);
    if (str == -1 && str2 != -1){
      return value.replace(/]$/,"]<br>");
    }else if(str == -1){
      return value;
    }else{
      return value.replace(value,"["+value+"]").replace(/\[/g,"\n[").replace("<br>","");
    }
  });
  //もろもろ置換
  beforeResult = beforeResult.join('').replace(/\]<br>/g,"]").replace(/\t/g,"[TAB]").slice(1);
  //表示
  document.getElementById('after').value = beforeResult;
}
