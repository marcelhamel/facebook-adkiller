##### What is this?

A simple Chrome extension that attempts to improve the Facebook user experience by deleting... most of it. I'll be honest, I haven't spent a lot of time thinking about how to do this well. It works in my browser though and that's enough to get me to keep running it.

##### How does it work?

This script runs in the background when Facebook is loaded in the browser. Once a second it will scan the page for data feed elements with the word "Sponsored" in them and remove them from the page.

##### How do I install it?

Download this repo, and then [follow these instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) from the Chrome Developer documentation to load an "unpacked extension". 
