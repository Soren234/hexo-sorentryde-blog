---
title: Implemented Staticman with Hexo
date: 2020-01-13 22:53:02
tags: 
    - Staticman
    - Sorentryde.dk
    - Comments
categories:
- Dev / Project
---
<p>After finishing the overall conversion from Jekyll to Hexo, i decided to use <a href="http://staticman.net">Staticman.net</a> as my commenting system.</p>

<p>Staticman is based around creating Git commits, when a user post a comment. Via a webhook, a bot with access to my Git repository will commit/push the comment and Netlify will start a blog generation/deployment.</p>

<!-- more -->

<p>The hardest part of this process, is to build and deploy Staticman to Heroku and give it access to the repository. This took me a while to get working, but with help from <a href="https://www.gabescode.com/staticman/2019/01/03/create-staticman-instance.html">this guide</a>, it went fairly easy.</p>

<p>The next step is to create nested comments, with email notifications for users. I will release this as a plugin for Hexo when i feel it's ready.</p>