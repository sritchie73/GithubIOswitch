javascript:(function(){
  var path = window.location.pathname;
  var ps = path.split("/");
  var f = ps[ps.length - 1];
  var host = window.location.host;
  if (host === "github.com") {
    var repo = path.split('/')[1];
    if ((ps.length === 4 && f === "") || (ps.length ===3)) {
      window.location.href = "http://" + repo + ".github.io/" + path.replace("/" + repo + "/", "")
    } else if (ps.length > 3 && f.split(".").length === 2) {
      var newpath = path.replace("/" + repo + "/", "").replace("blob/gh-pages/", "");
      window.location.href = "http://" + repo + ".github.io/" + newpath.replace(".md", ".html").replace(".Rmd", ".html")
    }
  } else if (host.split('.')[1] === "github" && host.split('.')[2] === "io") {
    var repo = host.split('.')[0];
    if ((ps.length === 3 && f === "") || (ps.length === 2)) {
      window.location.href = "https://github.com" + "/" + repo + path
    } else if (ps.length > 2) {
      console.log(path);
      var uri = "https://github.com" + "/" + repo + path.replace(f, "") + "blob/gh-pages/";
      window.location.href = uri + f;
      var test = $.ajax({url: uri + f.replace(".html", ".Rmd")});
      if (test["status"] === 200) {
        window.location.href = uri + f.replace(".html", ".Rmd")
      } else {
        var test = $.ajax({url: uri + f.replace(".html", ".md")});
        if (test["status"] === 200) {
          window.location.href = uri + f.replace(".html", ".md")
        } else {
          window.location.href = uri + f
        }
      }
    }
  }
})();
