---
layout: post
title: "CSGO server list project"
date: 2012-12-23 02:28
author: Soren Tryde
tags: csgo2play
categories:
- Dev / Project
---

![Csgo2play header](/images/csgo.png)

<p>I had some fun with a website project of mine, which in it’s core,
is a server-list with it’s own voting system. The website is build
on these technologies:</p>
<ol>
<li>1. Java - at it’s core.</li>
<li>
  2. <a href="http://sparkjava.com/" target="_blank" rel="external">JavaSpark</a> - http request/response framework.</li>
<li>
  3. <a href="http://www.eclipse.org/jetty/" target="_blank" rel="external">Jetty</a> - Java http server.</li>
<li>
  4. <a href="https://angularjs.org/" target="_blank" rel="external">Angularjs</a> - The front is build in Angularjs framework.</li>
<li>
  5. <a href="https://www.mongodb.com" target="_blank" rel="external">Mongodb</a> - Database.</li>
</ol>
<p>The whole thing is compiled in
<a href="https://maven.apache.org/" target="_blank" rel="external">Maven</a> which produce a Jar file. The jar file is executed on a
EC2 instance at
<a href="https://www.aws.amazon.com" target="_blank" rel="external">Amazon AWS</a>
</p>
<!-- more -->
<hr>
<p>
<h5>Quest:</h5>
</p>
<p>The main goal is to list of servers that everyone can add to, and then
vote on individual servers. The highest voted server is the top server.
Every server is updated and checked ever 10 minutes, with information
like players, location and so on.</p>
<p>I wanted to make all the information collected free and available to
everyone, in the front-end displayed, and in JSON format.</p>
<p>This project was for me to play with new technologies i haven’t used
before. It was really fun to play with tho. </p>
<p>I used about 100+ hours playing around on this project.</p>
<hr>
<h5>Visit:</h5>
<a href="http://csgo2play.net" target="_blank" rel="external">http://csgo2play.net/</a>
