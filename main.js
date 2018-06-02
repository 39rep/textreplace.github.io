function replaceButton(){
    var beforeText = document.getElementById('before').value;

    var beforeResult = beforeText.replace(/\n/g,"<br>")
                                 .replace(/<br>small/g,"\n[small")
                                 .replace(/<br>medium/g,"\n[medium")
                                 .replace(/<br>big/g,"\n[big")
                                 .replace(/\t/g,"[TAB]");
    var colorcode = beforeResult.match(/#....../g);
    for (var i = 0;i < colorcode.length;i++){
      var l = i-1;
      if (colorcode[i] == colorcode[l]){
        continue;
      }
      var pattern = new RegExp(colorcode[i],'g');
      beforeResult = beforeResult.replace(pattern,colorcode[i] + "]");
      console.log();
    }
    beforeResult = beforeResult.replace(/]<br>/g,"]")
                               .replace(/^small/,"[small")
                               .replace(/^medium/,"[medium")
                               .replace(/^big/,"[big");

    document.getElementById('after').value = beforeResult;
}
