---
title: My First Article
abstract: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
author: Jérôme Desseaux
image: /uploads/wallhaven-eyg96o.jpg
date: 2020-01-07T17:43:37.669Z
---

This is probably the biggest fundamental difference between Node and Deno. Node created it's own module system called Common JS. The way this works is the code that is being executed and code that it depends on both live in the same physical location so the server can stop what its doing, load the dependency and pick up where it left off. This is known as synchronous module loading and because this is done from disk it is extremely efficient.

The browser works very different from this model. When we execute our code we are doing so on our user's device. Those devices are not on the same machine as it's dependencies, in fact they are far across the network. So when our code that is running and it needs to load a dependency it can't just stop what its doing because the process of fetching it across the network can be very slow.

Node and the browser are two different runtimes and Common JS could never work in the browser. So the browser needed its own module system and this is where the design specification for ES Modules came from. Deno uses the official ECMAScript module standard rather than legacy CommonJS.

When your application depends on another module you can bring it into a script using the `import` keyword. The module is referenced using a URL or file path and includes a mandatory file extension.
