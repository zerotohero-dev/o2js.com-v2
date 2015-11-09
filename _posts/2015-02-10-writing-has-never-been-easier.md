---
layout: post
title: Writing Has Never Been Easier
excerpt: Until recently, I was using a custom generator for o2js.com and it was doing its job pretty well. There was a little problem, however. My workflow was complicated. — Writing should be fun. And to make it fun, I decided to reflow my writing…
updated: 2015-11-07
categories:
- productivity
tags:
- creativity
- gtd
- jekyll
- reflow
- livereload
- remote snychronization
- workflow
- writing
---

<a href="https://o2js.com/images/flowing_time.jpg"><img src="https://o2js.com/images/flowing_time_sm.jpeg"
title="Time... It's all that matters." class="centered"></a>

> After experimenting with many different approaches, I've settled with my ideal writing workflow.
>
> It took "*a lot*" of trial and error, yet it's simple enough to be a "*no brainer*".
>
> And that's what matters the simpler it is, the easier it will be to internalize.

## I Fucking Love **Writing**

I write **a lot**, and I love it: There's an inherent satisfaction in sharing what you know with an audience.

> So far...
>
> * [I've written a book about JavaScript interviews][jsiq],
> * I'm in the process of writing [yet another one about the upcoming version of the language][js-next],
> * I've [written quite a few articles][wayback] on this blog,
> * [Some of these articles are also waiting to be rewritten][rewrite],
> * I have done technical editing of several books,
> * I've written a dozen of guest blog posts, authored technical articles...

And that's just the tip of the iceberg.

There are literally **hundreds of** drafts, sitting in my cloud drive, waiting to be finalized and **published**.

If all these are not enough, [I write at least 500 words every day][500words] too.

> **Writing** frees my mind off of things, inspires me, and reveals ideas that I haven't realized that I had.

## The Problem

When you write orders of magnitude more than an average Joe, your writing and publishing **process** becomes really important.

> To be as efficient, and as effective as possible, you'll need to squeeze every bit of creative time you can.

A successful writing workflow is what makes this happen:

It makes you forget about the process and focus on what's important (*i.e., writing*).

The perfect workflow is the one that's the **easiest to habitualize**. And to easily habitualize something, you'll want **the least amount of friction** between you and the task you are going to do.

At the end of the day, [you have a limited amount of keystrokes left][keystrokes], and you should, to the best of your ability, **make them count**.

My former writing setup was far from ideal for reducing friction.

That's what I'll be discussing next.

## In a Galaxy Far Far Away...

A long time ago, I was writing my articles with the help of my *home-baked* [static blog generator][generator].

And for a while, it was good:

> I was using my own "*creation*".
>
> I knew it from inside out so that I could tweak it however I wanted.

In that regard, the generator was doing its job pretty well. There was a tiny problem, however:

My workflow was too **complicated**, to say the least:

* **(1)** I had to `ssh` and start a remote server;
* Login that server's website;
* Write my article(s);
* Stop the remote server;
* Run a *publish script* on the server;
* Check the live published page;
* If I need to update the article, fix a typo, etc., then **GOTO (1)**.

When any of my articles got closer and closer to their final state, they went through this *vicious cycle* over and over again. --- It was like a never-ending nightmare:

> There was always "one last thing" to be rewritten, "one last typo" to be fixed, and it meant to start the above sequence... as if it would never end.

I don't know you, and that feels **exhaustive**!

## Writing Should Be Fun

> [**Writing**, in and of itself, is hard enough][writers-block], there's no need to make it, kind of, like torture.

Writing should be fun. And to make it fun, I'd prefer to...

* Open my favorite editor;
* Have a **preview** of the result (*i.e., the blog*) post as I type;
* And never bother publishing because the entire publish cycle is **automated**.

> Writing has to be as **hassle-free**, as **seamless**, and as **frictionless** as possible.

## To Reinvent or Not... That's the Problem

[I'm an avid believer of "**wheel reinvention**"][chisel] because reinventing the wheel teaches you **a lot**!

> **Hacking**, **tweaking**, and **replicating** existing solutions helps you see relationships between various components: Relationships that you thought never existed. This insight helps you come up with **newer** and **better** outcomes. This is *[the very definition of creativity][creativity]*.

Since my existing setup was far from actualizing this dream, I decided to come up with a new workflow.

## Reinventing the Blogging Workflow

The question was not whether to reinvent; it was:

> "Is the **[opportunity cost of the time I spend][opportunity-cost]** reinventing a static blog engine worth it?"

Or, in other words: "*Is there a more productive way to occupy my time?*"

Answering this *fundamental* question helped me to see what I was missing:

Instead of patching my hacky static content generator, I had to **reinvent my writing workflow** from the bottom up.

And so did I.

> In my current setup, I just keep on writing. And everything is synchronized. --- It's just like **magic**.

Curious? Let's explore.

## The **Editor**

Before I move on, here is some background information:

* I take the train (*Caltrain*) to work, and I have a total of two hours commute time daily.
* I love to write during this time on my laptop (*indeed that's one of the few productive things that I can do on the train*).
* **[LTE on Caltrain sucks][lte]**.

...

Where was I? Yes, **editors**.

Your editor is an important part of the flow because... well... you spend the majority of your publishing time writing things on it.

## **[Atom][atom]** Is My Precious

> After trying a lots editors, I settled on **[atom][atom]** as my editor of choice.

Here's my current setup for **[atom][atom]**:

* I use **[Spacegray Monokai][spacegray-monokai]** as my **UI theme**.
* I use **[Base 16 Tomorrow Dark][base16-tomorrow-dark]** as my **syntax theme**.
* I use **[Essential PragmataPro][pragmata]**, **14px**, with **1.5** line spacing as my **font**. --- It's a perfect monotype font with a price tag equal to a nice dinner out in the city. And yes, it's **totally worth it**; it maintains its clarity even in smaller sizes.
* I use the **[typewriter plugin][typewriter]**, so I can write my stuff without getting distracted by the clutter.
* I use the **[zen plugin][zen]** for *focused writing* and *typewriter scrolling*.
* I use the **[minimap plugin][minimap]** to give a visual indicator of where I am in the text that I'm writing.
* I *soft wrap* the text at **80 characters** (*there's a reason those [punched cards][punched-card] had 80 holes in them --- it turns out to be [the ideal character length for a readable text][readability]*).
* I also *hide the editor tabs*, because I don't need them.

## Three Pane Layout

Additionally, I split my view in three:

* On the **left**, I have the text that I'm writing,
* On the **right**, I have a preview that automatically regenerates itself,
* And at the **bottom**, I keep a separate copy of the text that I'm editing. --- That's helpful in case I want to search for a word, or edit some other part of the article, I don't want to lose the editing point I'm at.

Here's how the overall setup looks like (*tap the image for a larger view*):

<a href="https://o2js.com/images/editor-setup-large.png"><img src="https://o2js.com/images/editor-setup-sm.png"
title="Here is how it looks like" class="centered"></a>

## Post-Processing

> No writing is complete until it's triple-reviewed.

Indeed, no writing is complete **at all** because writing is an *ongoing* **process**:

* **\[1\]** You iterate and reiterate over the text to **rephrase**, **simplify**, and **clarify** it.
* Then you review it once more for **spelling errors** and **grammatical mistakes**.
* Then you stay away from the text for a while. This helps you to **clear** your mind off of it. This step is **fundamental** for what's coming next.
* After a while, you come back to your writing to reiterate for further **simplification**, which takes us back to step **\[1\]**.

Especially when the language that you are writing is not your native language, the post-processing process can become harder.

To ease the pain of this process a bit, I use the **[Hemingway Editor][hemingway]** and the **[Grammarly][grammarly]** service --- They are excellent tools that should be in any writer's arsenal.

## Other Editors That I've Tried (*and Failed*)

With all these tweaks, **[atom][atom]** is an editor that I can type in for eternity.

Coming to this decision, however, was not easy:

I've tried a horde of editors including **[Ulysses][ulysses]**, **[IA Writer][ia]**, and many more.

Next, I'll look into a few of them, and describe why they were not a fit for me.

### Ulysses

The problem with *[Ulysses][ulysses]* was that it was not creating pure markdown, and it was messing with my formatting **a lot**.

### IA Writer

The problem with *[IA Writer][ia]* was the lack of a "*project workspace*" concept:

I don't write a single article all the time: Sometimes I jump through files, editing here and there and everywhere. That's especially true if I'm dealing with the manuscripts of a book, for instance.

I'd like to get a *file tree* handy **when** I need it. And want it to be out of my sight when I'm not interested in it. --- With atom, it's as easy as typing **CMD-K CMD-B** to toggle the file tree in an out of your way.

### First Draft

There one last editor that I'd like to mention: **[first draft][first-draft]**.

It is **conceptually** a wonderful idea, with terrible execution:

> The lack of performance renders the editor totally unusable for large articles.

Here's why:

My average typing rate is around *70 words per minute*, and when I try to write that fast in *[first draft][first-draft]*, the application lags **several words** behind before it freezes to death.

This means that if I make a typo and hit **backspace**, for instance, I'll have to wait for a few seconds until the editor catches up.

> As of November 2015, *[first draft][first-draft]* is far from being product-quality. --- If you plan to purchase it, keep that in mind.

### You Don't Cut Out Features for the Sake of **Usability**

> *Good UX* is hiding features that the user may not need; it is **not** removing critical features and calling it "*minimalism*".

All these so called "*minimalistic*" editors don't give a damn about your needs as a pro user.

If writing is part of your life, then you'll at least want your editor to give some additional options, even if they are hidden behind menus or configuration files.

Here are my top three needs in an editor:

* I cannot live without a three-way **split view**.
* I will **absolutely** want to control the **typography** and the **color scheme** of my editor.
* I will want my *file tree*, and a *tabbed interface*, when I need it and get rid of them when I don't (*with [atom][atom] you can remove the tabs entirely from your view if you want to*).

Some of these "*hassle-free writing applications*" disallow you to change almost any setting, including the type of the font, the size of the font, the color scheme.

Want a split view? Forget about it. You will have to type in a single big virtual sheet of paper.

> If you are lucky, you can get some kind of a monotype font, and a darker page.
>
> And that's all there is as configurability gets.
>
> You would not even be able to change the font face or font size.
>
> That's insane!

'nuff complaining. Let's move on, shall we? Well, before that...

## Thinking About Using a Cloud Editor?

I would love to use a cloud-based editor such as **[Cloud9 IDE][c9]** to make my workflow even more streamlined. With its **[SSH Workspaces][ssh-workspace]**, I would be working on my server, **as if** the files are on my laptop.

There's one *itsy bitsy* problem, yet:

**Mobile internet connectivity in the Silicon Valley sucks donkey's toenails**.

It sucks to such extent that even the **[Cloud9 IDE][c9]**'s offline mode can't help you:

> If you are **on the go** in the Valley, you will need an actual editor that does not require Internet connectivity to initialize itself.
>
> In the valley, **the cloud**, should be renamed as **the fog**.

I may retry cloudifying all my things three years from now maybe.

**I'm done with "*cloud editing*" for now**.

## The **Clickety Clack**

The least favor you can do to yourself as a writer is to get a **[decent mechanical keyboard][das]**.

And **[Das Keyboard][das]** is one of the best you'll find -- It's worth every dime.

<a href="https://o2js.com/images/das_keyboard.jpg"><img src="https://o2js.com/images/das_keyboard.jpg"
title="Das Keyboard: One of the best keyboards that you can get" class="centered"></a>

## **Jekyll** and Typography

Mentally stable individuals do not take notice of proper typographic punctuation. I'm not one of them. --- For example, when I encounter a street sign reading `John's Place` instead of `John’s Place`, I throw a tantrum.

Why is this such a big deal? Because **typography matters**. --- At least it matters to *me*. And I know there are **lucky** people out there who can live without caring about **typography** too much **:)**.

Luckily, **Jekyll** [supports typographic substitutions][kramdown-options] out of the box.

...

That made me decide that I'm using **[Jekyll][jekyll]** as my blogging platform of choice and using **[atom][atom]** as my editor.

## Setting Up **Jekyll**

<a href="http://jekyllrb.com/"><img src="/images/jekyll.png" title="Jekyll" class="centered"></a>

> **[Jekyll][jekyll]** is a tool that helps to generate static web content a breeze.

**[Jekyll][jekyll]** is especially a great fit for blogs: **Blogs are first class citizens** in **Jekyll**.

To use **Jekyll**, you will need to have **[Ruby][ruby]** installed. If you don't have **Ruby** on your system, [go ahead, and install the most recent one from rubylang.org][ruby].

> For the uber-nerds out there: You can install **Ruby** via **[rbenv][rbenv]** too. [And there are good reasons to do so][why-rbenv].

Once **[Jekyll][jekyll]** is properly set up, the only thing you have to do to write a blog post is to create a markdown file under **_posts** folder:

{% highlight sh %}
ls _posts/
2015-02-10-writing-has-never-been-easier.md
{% endhighlight %}

> I won't explain how to set up a **[Jekyll][jekyll]** website in detail, as it is [explained well on their website][jekyll-docs]. --- Just follow the examples there and you'll be a **[Jekyll][jekyll]** master in no time.

## The Server Setup

Currently, my new **[Jekyll][jekyll]** sites stays under **/var/www/SRC**.

I know, it's not an ideal place to put source code into, yet it does the job.

> For the security freaks out there thinking that the source folder is accessible via the Internet:
>
> Well, yes; [and the code is open source anyway][o2js-com-v2-git], so it's not a big deal.
>
> And even if it is, we can always restrict access to that folder via **nginx.conf**.

While we're at that, here's how things are currently mapped in **nginx.conf** for reference:

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

## Publishing Articles

Now let's publish stuff:

{% highlight sh %}
jekyll build --config _config.yml;
rsync -a _site/ /var/www;
{% endhighlight %}

And voila! The blog post that I've just edited is live.

## Automating the Publish Flow

To automate things further I've created a little script:

{% highlight js %}
var watch = require( 'chokidar' ).watch;
var spawn = require( 'child_process' ).spawn;
var join = require('path').join;

var GLOB = join( __dirname, '/path/to/posts/**/*.md' );
var PUBLISH_CMD = 'publish.sh' );

watch( GLOB, {} )
  .on( 'change', function( path ) {
      var child = spawn( PUBLISH_CMD );

      child.stdout.on( 'data', function( chunk ) {
        console.log( chunk.toString() );
      } );

      child.stderr.on( 'data', function( chunk ) {
        console.log( chunk.toString() );
      } );
   } );
{% endhighlight %}

Where **./publish.sh** is:

{% highlight js %}
#! /bin/bash
cd ..;
jekyll build --config _config.yml;
rsync -a _site/ /var/www
{% endhighlight %}

## Wait! My Files Are Not In The Server Yet

The publish script works properly on the server; however, I still have to move the changed files from my laptop the th server.

I'd want to do that as hassle-free as possible.

Luckily, it's just a one-liner to do so:

{% highlight sh %}
# this requires an `IdentityFile "~/path/to/your/server.pem"` line in ~/.ssh/config
rsync -a /Users/volkan/Desktop/o2js.com-v2/_posts/ \
ubuntu@volkan.io:/var/www/o2js.com/SRC/o2js.com-v2/_posts/
{% endhighlight %}

> Since the watcher script is also running, whenever I `rsync` my changes to the server, they will be immediately published, and will be live in no time.

I even use [a nice little chrome extension][crx-refresh] to auto-refresh the recent version of the article that I just published.

## Configuring LiveReload

I also configured **[LiveReload][livereload]** on my laptop to run this `rsync` command whenever I save the articles' markdown files.

<a href="https://o2js.com/images/prepublish.png"><img src="https://o2js.com/images/prepublish.png"
title="Configuring LiveReload to run a custom command" class="centered"></a>

## Everything is Streamlined Now

This way everything will be automated:

* When I save the markdown file on my laptop,
* [LiveReload][livereload] will trigger an `rsync` script that pushes the changed files to the server,
* A watcher on the server will detect this change and **republish** the blog,
* After the publish process, the article will immediately go live,
* The web browser that I'm peeking at, on my laptop, will refresh itself, and then I'll see the updated article.

And during this flow, I won't have to tap a single button. All I will be doing is writing, and saving (*by typing **CMD+S**, which is also typing **:)***)

Now writing is as easy as firing up an editor, and... well... writing.

## Bonus: Setup for the **iPad**

Writing on the tablet is not easy.

I use it as a last resort, and honestly I don't write too much on the tablet.

When I find myself have to write on iPad, I use a combination of

* **[Diet Coda][diet-coda]**,
* **[Textastic][textastic]**,
* And **[Prompt][prompt]**.

They get the job done pretty well.

## Conclusion

That was a quick overview of how I came up with a **newer** and **better** writing workflow.

This new flow made my writing life easier; hope you find it useful too.

Until next time...

**May the source be with you**!

[500words]: http://goinswriter.com/500-words/ "Write 500 words per day, every day"
[atom]: https://atom.io/ "Atom — The Editor"
[base16-tomorrow-dark]: https://github.com/chriskempson/base16
[c9-ssh]: https://docs.c9.io/v1.0/docs/running-your-own-ssh-workspace "Cloud9 SSH"
[c9]: https://c9.io/ "Cloud9 IDE"
[chisel]: http://blog.geekli.st/post/111932989787/grab-your-chisel-and-start-pounding-a-guest "Grab Your Chisel and Start Pounding"
[chokidar]: https://github.com/paulmillr/chokidar
[creativity]: http://www.wikiwand.com/en/Creativity "Creativity --- Wikipedia"
[crx-refresh]: https://chrome.google.com/webstore/detail/super-auto-refresh/kkhjakkgopekjlempoplnjclgedabddk?hl=en "crx-refresh extension"
[das]: http://www.daskeyboard.com/ "One of the best."
[diet-coda]: https://panic.com/dietcoda/ "Diet Coda"
[first-draft]: http://www.96problems.com/first-draft/
[generator]: https://github.com/v0lkan/o2js.com/tree/e91edd205580bdce95dc7e36a0adc46a06dab2ed "A custom generator that uses MongoDB, and node.js — just to create a static website."
[git-snap]: https://github.com/v0lkan/o2js.com-v2/tree/9a338741493f9188437096343fa8ba3b08a80678 "git-snap"
[gklst]: http://blog.geekli.st "Geeklist is a great community of geeks that I've been following since its early days."
[hypens-and-dashes]: http://practicaltypography.com/hyphens-and-dashes.html "hypens and dashes"
[ia]: https://ia.net/writer/mac "A quintessential writing machine for Mac"
[jekyll-docs]: http://jekyllrb.com/docs/home/ "Jekyll Documentation"
[jekyll]: http://jekyllrb.com/ "Not your daddy's static site generator."
[js-next]: https://leanpub.com/js-next
[jsiq]: https://o2js.com/interview-questions/
[keystrokes]: http://keysleft.com/ "How many keystrokes have you left?"
[kramdown-options]: http://kramdown.gettalong.org/rdoc/Kramdown/Options.html "Kramdown"
[livereload-ext]: http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions- "LiveReload extensions FTW!"
[livereload]: http://livereload.com/ "A happy land where browsers don't need a refresh button."
[lte]: http://uniquehazards.com/post/670577460/a-caltrain-showdown-verizon-vs-sprint
[md]: http://daringfireball.net/projects/markdown/syntax "Markdown ain't no WYSIWG --- It helps you focus on the content rather than formatting and design."
[o2js-com-v2-git]: https://github.com/v0lkan/o2js.com-v2 "o2js.com new version"
[o2js]: http://o2js.com/ "o2.js --- A coherent solution to your JavaScript dilemma."
[opportunity-cost]: http://www.wikiwand.com/en/Opportunity_cost "Opportunity Cost --- Wikipedia"
[pragmata]: http://www.fsd.it/fonts/pragmatapro.htm "Pragmata Font Family"
[prompt]: https://panic.com/prompt/ "Prompt"
[punched-card]: https://www.wikiwand.com/en/Punched_card
[rbenv]: https://github.com/sstephenson/rbenv "A better way to install ruby."
[readability]: http://baymard.com/blog/line-length-readability
[responsive-typography]: https://ia.net/know-how/responsive-typography-the-basics "responsive typography"
[rewrite]: https://o2js.com/v1 "o2js.com — Articles Waiting to Be Converted"
[ruby]: https://www.ruby-lang.org/en/downloads/ "Download Ruby"
[scale-and-rhytm]: http://lamb.cc/typograph/ "scale and rhytm"
[smart-quote]: http://www.fastcodesign.com/3018353/be-smart-dont-use-dumb-quote-marks "smart quotes"
[spacegray-monokai]: https://github.com/jenssegers/spacegray-monokai
[ssh-workspace]: https://docs.c9.io/docs/running-your-own-ssh-workspace
[sublime]: http://www.sublimetext.com/3 "A sophisticated text editor with amazing performance. --- I try many editors and bounce back to using Sublime all the time."
[tactile]: http://www.keyboardco.com/blog/index.php/2012/12/an-introduction-to-cherry-mx-mechanical-switches/ "An introduction to Cherry MX mechanical switches."
[textastic]: http://www.textasticapp.com/ "Textastic"
[transmit]: https://panic.com/transmit/ "Transmit"
[typewriter]: https://atom.io/packages/typewriter "Atom typewriter plugin"
[ulysses]: http://www.ulyssesapp.com/ "Ulysses makes writing fun and productive."
[wayback]: https://web.archive.org/web/20130624151559/http://o2js.com/ "o2js.com on the Wayback Machine"
[why-rbenv]: https://github.com/sstephenson/rbenv/wiki/Why-rbenv%3F "Why rbenv?"
[writers-block]: http://www.wikiwand.com/en/Writer%27s_block "Writer's block" is just one of the many problems a writer has to deal with."
[zen]: https://atom.io/packages/zen "Zen: Distraction-Free Writing"
[minimap]: https://atom.io/packages/minimap "Minimap: A preview of the full source code."
[hemingway]: http://www.hemingwayapp.com/ "Hemingway: Makes your writing bold and clean."
[grammarly]: https://app.grammarly.com/ "Grammarly: Mistake-free writing."
