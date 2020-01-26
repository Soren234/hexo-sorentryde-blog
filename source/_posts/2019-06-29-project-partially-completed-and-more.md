---
layout: post
title: "Project partially completed and more"
date: 2019-06-20 01:47
author: Soren Tryde
thumbnail: 
tags: 
  - csgo2play 
  - real-life
categories:
- Dev / Project
carousel:
  - image: /images/carousel/IMG_20180721_112328.jpg
    text : Test
  - image: /images/carousel/IMG_20180722_151826.jpg
    text : Test2
---

<p>Again long break from posting anything on this blog, but finally i find the time and will to do so.</p>

<hr>
<p>
<h5>Project status:</h5>
</p>

<p>The biggest "news" if you will, are that i finished my Counter-strike project to a satisfing state, atlease for me.

I will not go into details on what i have done at this point. Sadly i don't feel like living up to my initial promise on multiple posts on the project.

If you have any questions though, feel free to post a comment on this post :-)</p>

<!-- more -->

<h5>Check the project out here:</h5>
<a href="http://csgo2play.net" target="_blank" rel="external">http://csgo2play.net/</a>

<hr>
<p>
<h5>Other stuff:</h5>
</p>

{% if page.carousel %}
<div class="flexslider">
    <ul class="slides">
      {% for slides in page.carousel %}
      <li>
        <img src="{{ slides.image }}" class="article-banner"/>
        <p class="flex-caption">{{ slides.text }}</p>
      </li>
      {% endfor %}
    </ul>
</div>
{% endif %}

<p>
I have been pretty busy with life the last year, with multiple travels, job adaptations 
</p>


