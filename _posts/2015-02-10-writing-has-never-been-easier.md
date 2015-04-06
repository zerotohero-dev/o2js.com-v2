---
layout: post
title: Writing Has Never Been Easier
excerpt: Until recently, I was using a custom generator for o2js.com and it was doing its job pretty well. There was a little problem, however. My workflow was complicated. — Writing should be fun. And to make it fun, I decided to reflow my writing…
categories:
- productivity
tags:
- writing
- blogging
- jekyll
- workflow
- writing
- creativity
- reinvention
- reflow
- gtd
---

<a href="/images/flowing_time.jpg"><img src="/images/flowing_time_sm.jpeg" title="Time… It’s all that matters." class="centered"></a>

> Until recently, I was using [a custom generator][generator] for **[o2js.com](http://o2js.com/)**, and it was doing its job pretty well.
>
> There was a tiny problem, however:
>
> My workflow was too **complicated**, to say the least:
>
> * **(1)** I had to `ssh` and start a remote server;
> * Login that server’s website;
> * Write my article(s);
> * Stop the remote server;
> * Run a *publish script* on the server;
> * Check the live published page;
> * If I need to update the article, fix a typo etc., then **GOTO (1)**.

When any of my articles got closer and closer to their final state, they went through this *vicious cycle* over and over again. — It was like a never-ending nightmare:

> There was always “one last thing” to be rewritten, “one last typo” to be fixed; and it meant to start the above sequence… as if it would never end.

I don’t know you, and I feel like the above flow is **exhaustive**!

…

[**Writing**, in and of itself, is hard enough][writers-block], there’s no need to make it kind of like a torture.

**Writing should be fun**. And to make it fun, I’d prefer to…

* Open my favorite **[markdown][md]** editor;
* Have a **preview** of the end result (*i.e., the blog*) post as I type;
* And never bother publishing because the entire publish cycle is **automated**.

> Writing has to be as **hassle-free**, as **seamless**, and as **frictionless** as possible.

## To Reinvent or Not… That’s the Problem

Since my existing setup was far from actualizing this dream, I decided to come up with a new workflow.

[I’m an avid believer of “**wheel reinvention**”][chisel].

Reinventing the wheel teaches you **a lot**!

**Hacking**, **tweaking**, and **replicating** existing solutions helps you see relationships between various components that you thought never existed. This insight helps you come up with **newer** and **better** outcomes. This, actually, is *[the very definition of creativity][creativity]*.

## Reinventing the Blogging Workflow

So the question is not whether to reinvent.

The question is:

“Is the **[opportunity cost of the time I spend][opportunity-cost]** reinventing a static blog engine worth it?”

Or, in other words: “Is there a more **productive** way to occupy my time?”

Answering this question — and other similar questions — helped me to see what I was missing:

Instead of patching my hacky static content generator, I had to **reinvent my workflow** from the bottom up.

> In my current setup, I just keep on writing. And everything is synchronized. — It’s **magical**.

Curious?

## Before We Begin…

In this article, I’ll be describing a **Mac-specific** setup because it’s the environment that I’m currently working on.

There *might* be Windows and Linux equivalents of the tools that I’ll mention below, and I have not used any of them. — I’m sure you can use a similar workflow to automate your writing process in any of those environments, too.

Also, please note that **some** of the applications that I will share here are **not** free. I don’t have any affiliation with the links I provide here. It’s just that I regularly use them and I believe they are totally worth their price tags. — *YMMV*, of course.

## **Keyboard** Matters

> If writing has become a part of your life, then typing on a **great keyboard** and using a **decent text editor** is the least favor you can do to yourself.

<a href="http://www.daskeyboard.com/"><img src="/images/das_keyboard.jpg" title="Das Keyboard" class="centered"></a>

I know, I know… **[Das Keyboard][das]** is not the prettiest-looking keyboard in the world; yet its **[tactile feedback][tactile]** is one of a kind. — Writing on it is a joy… So much that I constantly find myself making up excuses to write more **;)**.

## **Editor** Matters Too

As per the **editor** part, I have tried many of them; and I finally settled with **[IA Writer][ia]**.

**IA Writer** enables me to focus while I am writing. Moreover, it does not alter the markdown I write. Hadn’t messed with my markdown, [Ulysses][ulysses] would have been another alternative.

> Although [Ulysses][ulysses] provides a bunch of utilities that makes **markdown** editing faster, the amount of control you lose is **not worth it**.

Most of the time, I write my articles in **[IA Writer][ia]**, and when they are close to their final state, I paste them to my **[Cloud9 IDE][c9]** (*more on that later*).

Here’s a sneak peek of how **[IA Writer][ia]** looks like:

<a href="/images/ulyssess.png"><img src="/images/ulyssess_sm.png" title="It is *delightful* to write with Ulysses." class="centered"></a>

Aside from the keyboard and the editor I will use **[Jekyll][jekyll]** and  **[Cloud9 IDE][c9]** to automate things.

Let’s start with **Cloud9**:

## Creating an SSH Workspace

One nice feature of **[Cloud9][c9]** is **SSL Workspaces**. **SSL Workspaces** let you edit the files on your server using a browser-based integrated development environment. Here’s how it looks like:

<a href="/images/c9-large.png"><img src="/images/c9-sm.png" title="Cloud9 IDE is hands down the BEST online IDE around." class="centered"></a>

Setting your own SSH workspace in **Cloud9** is pretty straighforward. [**Cloud9** documentation has a step-by-step instruction on how to do it][c9-ssh].

After setting up my **SSH workspace**, the next thing I did was to create a sample **[Jekyll][jekyll]** website.

## Setting Up Jekyll

<a href="http://jekyllrb.com/"><img src="/images/jekyll.png" title="Jekyll" class="centered"></a>

> **[Jekyll][jekyll]** is a tool that helps generating static web content a breeze.

**[Jekyll][jekyll]** is especially a great fit for blogs: **Blogs are first class citizens** in **Jekyll**.

To use **Jekyll**, you will need to have **[Ruby][ruby]** installed. If you don’t have **Ruby** on your system, [go ahead, and install the most recent one from rubylang.org][ruby].

> For the uber-nerds out there: You can install **Ruby** via **[rbenv][rbenv]** too. [And there are good reasons to do so][why-rbenv].

Then getting up and running with **Jekyll** takes mere seconds:

{% highlight sh %}
gem install jekyll;
cd ~/PROJECTS;
mkdir PROJECTS/blog;
cd ~/PROJECTS/blog;
jekyll init my-blog;
{% endhighlight %}

And voila! You have a static website running.

If you haven’t changed any default settings, you can visit it by navigating to *http://localhost:4000*.

> I won’t explain how to set up **Jekyll** as it is [explained really well on their website][jekyll-docs]. — Just follow the examples there and you’ll be a **Jekyll** master in no time.

After setting up **Jekyll**, running the following helped me preview my blog locally:

{% highlight sh %}
# you need root access for port 80.
sudo jekyll serve --port 80;
{% endhighlight %}

I also defined a staging URL on my **/etc/hosts** file for convenience:

{% highlight text %}
# /etc/hosts
127.0.0.1       staging.o2js.com
{% endhighlight %}

And here’s how **staging.o2js.com** looks like:

<img src="/img/inception.png" title="A screenshot of this blog, inside itself ;)" style="margin:0 auto;display:block;">

As you see, I am testing this new approach as I am writing this blog post.

A nice recursion **:)**.

Another thing is, whenever I save an article and refresh the browser, the web page gets **automagically** updated too.

The question is: “can we make it better?” As it turns out that: “we sure can.”.

## Automating the Blog Publishing Workflow

// TODO: write here.

We will use **[LiveReload][livereload]** to further automate this workflow:

## Configuring LiveReload

<a href="http://livereload.com/"><img src="/img/livereload.png" title="Live Reload" style="margin:0 auto;display:block;"></a>

Configuring **[LiveReload][livereload]** is easy:

* You just drop the folder that you want to watch into the **LiveReload** window.
* And also [install a browser extension][livereload-ext] to let your browser communicate with the **LiveReload** process.

After following these steps, as soon as you update and save your markdown, the browser page will refresh to reload the most recent content, which is a great time saver.

<a href="/img/side_by_side.png"><img src="/img/side_by_side_sm.png" title="Writing and previewing the content in real time, side by side" style="margin:0 auto;display:block;"></a>

> Here you see a *side-by-side* layout of the markdown editor and the rendered end result. — Whenever I save the file, the browser refreshes to show me the latest preview.

And we can make it **even better** by adding some **automation**:

## Automating the “Publish” Flow

One useful feature of **[LiveReload][livereload]** is that you can also run scripts whenever **LiveReload** detects a change in your assets.

So I put the following script to the blog’s **bin** folder:

{% highlight sh %}
# sync.sh
rsync -av ./\_site/2015 root@o2js.com:/root/PROJECTS/o2js.com;
rsync -av ./\_site/img root@o2js.com:/root/PROJECTS/o2js.com;
{% endhighlight %}

> That’s good enough for this migration period. — I will add more to this script later on.

The next step is registering the above script to **LiveReload**:

<img src="/img/register_livereload.png" title="Live Reload" style="margin:0 auto;display:block;">

So whenever I save my local blog **markdown**, I also publish it to the Internet immediately.

## Everything is Streamlined!

Now I don’t have an excuse not to write:

> Writing is as easy as firing up an editor, and… well… actually writing **:)**.

## Next Up

I will gradually move the entire **[o2js.com][o2js]** over here, and I’ll also improve this current theme.

As the time of this writing, this page blog does not have an **rss feed**, or an **archive section**, or **categories**, or **tags**. — Heck, it does not even have a **header**, a **footer**, or a **side navigation**.

And it is easy to integrate them, as **[Jekyll][jekyll]** supports all these (*and more*). — I will be *gradually* implementing those features in the future.

## Conclusion

That was a quick overview of my *newer* and *better* blog publishing workflow.

I really made my life easier.

Hope you find that useful too.

Until next time…

**May the source be with you**!

[generator]: https://github.com/v0lkan/o2js.com/tree/e91edd205580bdce95dc7e36a0adc46a06dab2ed "A custom generator that uses MongoDB, and node.js — just to create a static website."
[writers-block]: http://www.wikiwand.com/en/Writer%27s_block "“Writer’s block” is just one of the many problems a writer has to deal with."
[md]: http://daringfireball.net/projects/markdown/syntax "Markdown ain’t no WYSIWG — It helps you focus on the content rather than formatting and design."
[creativity]: http://www.wikiwand.com/en/Creativity "Creativity — Wikipedia"
[gklst]: http://blog.geekli.st "Geeklist is a great community of geeks that I’ve been following since its early days."
[opportunity-cost]: http://www.wikiwand.com/en/Opportunity_cost "Opportunity Cost — Wikipedia"
[das]: http://www.daskeyboard.com/ "One of the best."
[tactile]: http://www.keyboardco.com/blog/index.php/2012/12/an-introduction-to-cherry-mx-mechanical-switches/ "An introduction to Cherry MX mechanical switches."
[ia]: https://ia.net/writer/mac "A quintessential writing machine for Mac"
[ulysses]: http://www.ulyssesapp.com/ "Ulysses makes writing fun and productive."
[sublime]: http://www.sublimetext.com/3 "A sophisticated text editor with amazing performance. — I try many editors and bounce back to using Sublime all the time."
[rbenv]: https://github.com/sstephenson/rbenv "A better way to install ruby."
[why-rbenv]: https://github.com/sstephenson/rbenv/wiki/Why-rbenv%3F "Why rbenv?"
[jekyll]: http://jekyllrb.com/ "Not your daddy’s static site generator."
[ruby]: https://www.ruby-lang.org/en/downloads/ "Download Ruby"
[livereload]: http://livereload.com/ "A happy land where browsers don’t need a refresh button."
[jekyll-docs]: http://jekyllrb.com/docs/home/ "Jekyll Documentation"
[livereload-ext]: http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions- "LiveReload extensions FTW!"
[o2js]: http://o2js.com/ "o2.js — A coherent solution to your JavaScript dilemma."
[chisel]: http://blog.geekli.st/post/111932989787/grab-your-chisel-and-start-pounding-a-guest
[c9]: https://c9.io/
[c9-ssh]: https://docs.c9.io/v1.0/docs/running-your-own-ssh-workspace