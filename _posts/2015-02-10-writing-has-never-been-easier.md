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

Let’s start with the keyboard first because if you write “a lot”, then you should also invest in a decent keyboard.

## **Keyboard** Matters

> If writing has become a part of your life, then typing on a **great keyboard** and using a **decent distraction-free editor** is the least favor you can do to yourself.

<a href="http://www.daskeyboard.com/"><img src="/images/das_keyboard.jpg" title="Das Keyboard" class="centered"></a>

I know, I know… **[Das Keyboard][das]** is not the prettiest-looking keyboard in the world; yet its **[tactile feedback][tactile]** is one of a kind. — Writing on it is a joy… So much that I constantly find myself making up excuses to write more **;)**.

## **Editor** Matters Too

As per the **editor** part, I have tried many of them; and I finally settled with **[IA Writer][ia]**.

The main reason I use **IA Writer** is because of thier approach to **typography**. And when I say **typograpy** I don’t mean their support for [smart quotes][smart-quote] or [proper typographic dashes][hypens-and-dashes].

They, of course, support those things; and that’s just the tip of the iceberg.

### **IA Writer** and Typography

**[IA Writer][ia]**’s attention to proper typography, [scale and rhytm][scale-and-rhytm] shows that [the IA writer team embrace **all aspects** of **responsive** *typography* in every possible detail of their product][responsive-typography].

Why is this such a big deal? Because **typography matters**. — At least it matters to me. And I know there are **lucky** people out there who can live without caring about **typography** too much **:)**.

> Mentally stable individuals do not take notice of proper typographic punctuation. I’m not one of them. — For example, when I encounter a street sign reading `John's Place` instead of `John’s Place`, I throw a tantrum.

### **IA Writer** and Focus

**IA Writer** enables me to focus while I am writing. Moreover, it does not alter the markdown I write. Hadn’t messed with my markdown, [Ulysses][ulysses] would have been another alternative.

> Although [Ulysses][ulysses] provides a bunch of utilities that makes **markdown** editing faster, the amount of control you lose is **not worth it**.

Most of the time, I write my articles in **[IA Writer][ia]**, and when they are close to their final state, I paste them to my **[Cloud9 IDE][c9]** (*more on that later*).

Here’s a sneak peek of how **[IA Writer][ia]** looks like:

<a href="/images/ia-writer-lg.png"><img src="/images/ia-writer-sm.png" title="It is *delightful* to write with IA Writer." class="centered"></a>

Writing in **IA Writer** is a delightful experience. And when you augment that experience with the *smoothness* of a quality mechanical keyboard, you’ll never want to stop writing.

> **Aside**
>
> For the interested, **Jekyll** [also supports typographic substitutions][kramdown-options]. Yet I prefer to see “proper” typography in my **markdown** instead.

…

In addition to the keyboard and the editor, I will use **[Jekyll][jekyll]** and  **[Cloud9 IDE][c9]** to automate things, as we’ll soon see.

Let’s start with **Cloud9**:

## Creating an **SSH Workspace**

One nice feature of **[Cloud9][c9]** is **SSH Workspaces**. **SSL Workspaces** let you edit the files on your server using a browser-based integrated development environment.

Here’s how it looks like:

<a href="/images/c9-large.png"><img src="/images/c9-sm.png" title="Cloud9 IDE is hands down the BEST online IDE around." class="centered"></a>

Setting your own SSH workspace in **Cloud9** is pretty straightforward. [**Cloud9** documentation has a step-by-step instruction on how to do it][c9-ssh].

After setting up my **SSH workspace**, the next thing I did was to create a sample **[Jekyll][jekyll]** website. [You can view the source code at **GitHub**][o2js-com-v2-git].

## Setting Up **Jekyll**

<a href="http://jekyllrb.com/"><img src="/images/jekyll.png" title="Jekyll" class="centered"></a>

> **[Jekyll][jekyll]** is a tool that helps generating static web content a breeze.

**[Jekyll][jekyll]** is especially a great fit for blogs: **Blogs are first class citizens** in **Jekyll**.

To use **Jekyll**, you will need to have **[Ruby][ruby]** installed. If you don’t have **Ruby** on your system, [go ahead, and install the most recent one from rubylang.org][ruby].

> For the uber-nerds out there: You can install **Ruby** via **[rbenv][rbenv]** too. [And there are good reasons to do so][why-rbenv].

Once **[Jekyll][jekyll]** is properly set up, the only thing you have to do to write a blog post is to create a markdown file under **_posts** folder:

{% highlight sh %}
ls _posts/
2015-02-10-writing-has-never-been-easier.md
{% endhighlight %}

Since this is a new blog installation, and I’m writing a singl blog post here, we have only one file in the directory. Here’s the cotent of the file:

{% highlight yaml %}
---
layout: post
title: Writing Has Never Been Easier
excerpt: Until recently, I was using a custom generator for o2js.com…
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

… Body of the article goes here …
{% endhighlight %}

> I won’t explain how to set up a **Jekyll** website in detail, as it is [explained really well on their website][jekyll-docs]. — Just follow the examples there and you’ll be a **Jekyll** master in no time.

Currently my new **Jekyll** sites stays under **/var/www/SRC**.

I know, it’s not the most ideal place to put source code into, yet it does the job **;)**.

> For the security freak out there thinking that the source folder is accessible via internet: Well, yes; [and the code is open source anyway][o2js-com-v2-git], so it’s not a big deal. — And even if it is, we can always restrict access to that folder via **nginx.conf**.

While we’re at that, here’s how things are currently mapped in **nginx.conf** for reference:

{% highlight nginx %}
server {
    access_log off;
    error_log off;
    listen 80;
    listen [::]:80;
    server_name *.o2js.com;
    rewrite ^ $scheme://o2js.com permanent;
}
server {
    access_log off;
    error_log off;

    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www;

    index index.html;

    server_name localhost;

    expires 3m;
    error_page 404 = @errorpage;

    location / {
        try_files $uri $uri/ = 404;
    }
    location @errorpage {
        # "permanent" is an HTTP 301 Redirect
        rewrite .* /kaboom permanent;
    }

    rewrite ^/kaboom$ /404.html break;

    # DO NOT ignore this; otherwise the default webroot will kaboom!
    rewrite ^/$ /index.html break;
    rewrite ^/index$ / permanent;

    rewrite ^([^.]+)/$ $1 permanent;
    rewrite ^([^.]+)$ $1.html;
}
{% endhighlight %}

## Installing **Jekyll**

Installing **[Jekyll][jekyll]** on Debian-based systems is really easy:

{% highlight sh %}
sudo gem install jekyll;
{% endhighlight %}

That’s it.

## Publishing Articles

Now let’s publish stuff:

{% highlight sh %}
jekyll build --config _config.yml;
rsync -a _site/ /var/www;
{% endhighlight %}

And voila! The blog post that I’ve just edited is live.

## Automating the Publish Flow

To automate things further I’ve created a little script:

{% highlight js %}
// /var/www/SRC/o2js.com-v2/bin/index.js

'use strict';

var chokidar = require('chokidar'),
    spawn = require('child_process').spawn,
    lock = false;

chokidar.watch('/var/www/SRC/', {ignored: /[\/\\]\.|node_modules/})
    // on('all')
    .on('change', function(event, path) {
        var process;

        if (!lock) {
            console.log('acquiring lock');

            lock = true;

            process = spawn('sh', ['./publish.sh']);

            process.on('close', function (code) {
                console.log('child process exited with code ' + code);
                console.log('releasing lock');

                lock = false;
            });
        }
    });
{% endhighlight %}

Where **./publish.sh** is:

{% highlight js %}
#! /bin/bash
cd ..;
jekyll build --config _config.yml;
rsync -a _site/ /var/www
{% endhighlight %}

So when I run…

{% highlight sh %}
cd /var/www/SRC/o2js.com-v2/bin/;
node index.js;
{% endhighlight %}

… any change that I make under the **SRC** folder will publish and sync the documents with the live website.

I even use [a nice little chrome extension][crx-refresh] to auto refresh the web page.

Here’s my current blogging environment:

<a href="/images/inception-lg.png"><img src="/images/inception-sm.png" title="A screenshot of this blog, inside itself ;)" class="centered"></a>

* That’s a [web-based IDE][c9];
* And a browser side-by-side.

I am testing this new approach as I am writing this blog post, and it works really well!

* The page is refreshing as I continue writing and saving;
* And I don’t have to worry about publishing my blog, because it’s being auto-published at every single change I make to it.

## Everything is Streamlined!

Now I don’t have an excuse not to write:

> Writing is as easy as firing up an editor, and… well… actually writing **:)**.

## Next Up

I will gradually move the entire **[o2js.com][o2js]** over here, and I’ll also improve this current theme, while keeping a focus on **simplicity** and **clarity**.

## Read the Source, Luke

You can see the source code of this blog, as the time of this writing, [at this **GitHub** history snapshopt][git-snap].

## Conclusion

That was a quick overview of my **newer** and **better** blog publishing workflow.

I really made my life easier.

Hope you find that useful too.

> Oh, btw, I started using **flexbox** too.<br>
> Since all major browsers support it, I have no excuse not to use it.

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
[o2js-com-v2-git]: https://github.com/v0lkan/o2js.com-v2
[crx-refresh]: https://chrome.google.com/webstore/detail/super-auto-refresh/kkhjakkgopekjlempoplnjclgedabddk?hl=en
[git-snap]: https://github.com/v0lkan/o2js.com-v2/tree/9a338741493f9188437096343fa8ba3b08a80678
[smart-quote]: http://www.fastcodesign.com/3018353/be-smart-dont-use-dumb-quote-marks
[hypens-and-dashes]: http://practicaltypography.com/hyphens-and-dashes.html
[responsive-typography]: https://ia.net/know-how/responsive-typography-the-basics
[scale-and-rhytm]: http://lamb.cc/typograph/
[kramdown-options]: http://kramdown.gettalong.org/rdoc/Kramdown/Options.html