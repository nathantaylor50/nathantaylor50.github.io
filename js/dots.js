(function(){
  var h = '';
  for(var i=0;i<600;i++) {
    var y = Math.floor(Math.random()*100),
        x = Math.floor(Math.random()*100),
        s = Math.floor(Math.random()*10) + 0.5;
    h += '<div class="d" style="top:'+y+'%;left:'+x+'%;-webkit-animation-duration:' + s + 's;"></div>';
  }
  $('#dots').html(h);
})();

if(location.href.length != 100){
setTimeout(function(){
   window.location.reload(1);
}, 50000);
}
