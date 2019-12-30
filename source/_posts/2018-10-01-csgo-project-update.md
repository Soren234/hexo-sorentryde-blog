---
layout: post
title: "An update to the Counter-strike project"
date: 2018-10-01 21:24
author: Soren Tryde
tags: 
    - csgo2play 
    - new_changes 
    - Counter-strike
---

![Csgo2play.net updated.](/images/csgo_update.png)

<p>After a long pause of posting on my blog, 
i decided to make a post about the changes
i made to my Counter-Strike Global Offensive server list application.</p>

<p>The biggest changes i have made, has been updating Angular from AngularJs to Angular6. 
I have changed the layout, and made everything responsive. The backend is still the same but with a bunch of tweaks and fixes.
I have also added the possibility to login with Steam. I decided to not keep login information and put the responsiblity on Steam.
I this that make sense as this is a server list of a Steam game.</p>

<!-- more -->

<hr>
<h5>Changes:</h5>

<p>These are the changes made over the past months:</p>
<ol>
<li>1. Updated to Angular6.</li>
<li>
  2. Added Bootstrap 4 with a complete responsive redesign.</li>
<li>
  3. Added Jenkins to the build process.</li>
<li>
  4. Made the build process more streamlined with deployment etc.</li>
<li>
  5. Added csgo2play.net domain.</li>                    
<li>
  6. Added a reverse proxy to the production server on AWS.</li>
<li>
  7. Added a Websocket for posting servers after the update job completes.</li>  
<li>
  8. Added Steam as the main login process.</li>
<li>
  9. Fixed a bunch of bugs on the backend.</li>
</ol>

<p>These are the todos i have:</p>
<ol>
<li>Use HTTPS as the standard protocol.</li>
<li>
  Add more statetics on the servers.</li>
</ol>

<p>I will go into details on some of the changes made the next few months</p>

<p>If you have a subjection please don't hesitate to leave a comment on this post. I would love some feedback.</p>

<hr>

<h5>Visit:</h5>
<a href="http://csgo2play.net" target="_blank" rel="external">http://csgo2play.net/</a>