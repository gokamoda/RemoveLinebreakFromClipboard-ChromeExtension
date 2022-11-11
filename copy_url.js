var url = location.href;
console.log(decodeURI(url));
copyToClipboard(decodeURI(url));

function copyToClipboard(value) {
  if(navigator.clipboard) {
    var copyText = value;
    navigator.clipboard.writeText(copyText).then(function() {
      console.log("copied")
    });
} else {
    alert('対応していません。');
}
}
