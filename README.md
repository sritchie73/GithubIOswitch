# GithubIOswitch
A javascript bookmarklet for switching between a Github repository and its Github Pages site

## Installation and Usage
Copy the following javascript and paste it into the URL field of a new bookmark in Chrome or Firefox:

```{javascript}
javascript:(function(){
  var path = window.location.pathname;
  var ps = path.split("/");
  var f = ps[ps.length - 1];
  var host = window.location.host;
  if (host === "github.com") {
    var repo = path.split('/')[1];
    if (ps.length === 3) {
      window.location.href = "http://" + repo + ".github.io/" + path.replace("/" + repo + "/", "")
    } else if (ps.length > 3 && f.split(".").length === 2) {
      var newpath = path.replace("/" + repo + "/", "").replace("blob/gh-pages/", "");
      window.location.href = "http://" + repo + ".github.io/" + newpath.replace(".md", ".html").replace(".Rmd", ".html")
    }
  } else if (host.split('.')[1] === "github" && host.split('.')[2] === "io") {
    var repo = host.split('.')[0];
    if (ps.length === 2) {
      window.location.href = "http://github.com" + "/" + repo + path
    } else if (ps.length > 2) {
      var newpath = path.replace(f, "") + "blob/gh-pages/" + f;
      window.location.href = "http://github.com" + "/" + repo + newpath
    }
  }
})();
```

## Details
When clicked, the javascript bookmarklet will convert a URL from `http://github.com/<username>/<repo>` to `http://<username>.github.io/<repo>` and vice versa if the current window is on either domain. The bookmarklet also works for individual files within a github repository, taking the user to the served file on the correpsonding github.io domain, and conversely will take the user to the source file from any page within a Github pages site.

