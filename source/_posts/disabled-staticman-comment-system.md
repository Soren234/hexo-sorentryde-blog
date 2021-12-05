---
title: Disabled Staticman comment system
date: 2021-12-05T17:46:09.146Z
tags:
  - Comments
  - Staticman
  - Hexo.io
  - Sorentryde.dk
categories:
  - Dev / Staticman
---
After a few year using Staticman I decided to disable it. It was pretty clear that Staticman is not secure enough. The Staticman sends http post message via my Heroku app that runs the Staticman backend. This backend pushes pull requests via a bot to my git repository. 

This post message is protected by Google recaptcha v2. I had this setup for a year without any issues. Until, out of the blue, i received a big amount of pull requests. It was pretty clear that a Russian spam bot was plaguing the whole setup. The pull requests was in russian that is. I was pretty surprised that the Google recaptcha v2 wasn't enough to keep spam out.

<!-- more -->

I could also see that [Staticman is looking for a new maintainer](https://github.com/eduardoboucas/staticman/issues/428). So i disabled the system based on the spam issue and that Staticman is not being maintained.

The question is if there is a alternative to Staticman. I might find something that works the same way and implement that. But time will tell.

On another note, i have been dealing with personal stuff doing the last years through this pandemic, so working on side projects has been a really low priority.