#### What is this?

A simple Chrome extension that attempts to improve the Facebook user experience by deleting... most of it. I'll be honest, I haven't spent a lot of time thinking about how to do this well. It works in my browser though and that's enough to get me to keep running it. Since it relies on constantly querying the DOM, it will probably break when and if Facebook restructures their page in any significant way.

#### How does it work?

This script runs in the background when Facebook is loaded in the browser. Once a second it will scan the page for data feed elements with the word "Sponsored" in them and remove them from the page.

#### How do I install it?

Download this repo, and then [follow these instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) from the Chrome Developer documentation to load an "unpacked extension". 

#### OK and now...

I really just shared this to get some feedback on how else this experience could be improved. There are probably a lot of other things that would be better off hidden (how many memories do you want to see?) and a keyword filter probably wouldn't be tough to pull off, I guess? Kind of just need time and motivation for this one.
