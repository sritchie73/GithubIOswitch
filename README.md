# GithubIOswitch
A javascript bookmarklet for switching between a Github repository and its Github Pages site

## Installation and Usage
Copy the javascript from bookmarklet.js and paste it into the URL field of a new bookmark in Chrome or Firefox.

## Details
When clicked, the javascript bookmarklet will convert a URL from `http://github.com/<username>/<repo>` to `http://<username>.github.io/<repo>` and vice versa if the current window is on either domain. The bookmarklet also works for individual files within a github repository, taking the user to the served file on the correpsonding github.io domain, and conversely will take the user to the source file from any page within a Github pages site.

