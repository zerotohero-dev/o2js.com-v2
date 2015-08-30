---
layout: post
title: I Confess, I'm a Lousy Side Projector
excerpt: My friends consider me a hacker and a side projector. And I create projects of various sizes publicly sharing most of them on GitHub. I recently realized that I was losing track of those projects and most of them are half complete, to say the least. --- So not to lose track of things, I decided to write them down.
updated: 2015-08-23
categories:
- reference
- personal
tags:
- side projects
- hacking
- productivity
---

<a href="/images/side-projects.png"><img src="/images/side-projects.png"
title="Well… This pretty much describes me." class="centered"></a>

> My friends consider me a **hacker** and a **side projector**. And I create
> **side projects** of various sizes.
>
> I share most of these projects publicly on [GitHub][github].
>
> Most of these projects are **half complete**, to say the least.
>
> I recently realized that I was losing track of them. So, to no to lose
> track of things, I decided to write them down.
>
> I will regularly be updating this page so that I can keep an eye on things.
> I also set up a monthly calendar reminder for that so that I won't forget it.

## Introduction

When you have limited time, you can only put so much on your plate; this creates
an instant anxiety and a feeling of guilt. You feel like you are not being
committed to what you have promised to yourself.

To overcome this anxiety or this **paralysis by analysis** state of mind, you'll
have to **sort out your priorities**. And in order to sort them out, you should know
what is occupying your time in the first place ---
You cannot optimize without measuring.

## The Methodology

To solve my "*Oh God, what should I be doing next to make the best use of my time?!*"
problem, I grouped my projects into different buckets, and sorted them.

> To clarify terminology, when I say "project", I look at it from a **[GTD][gtd]**
> perspective:
>
> Anything that takes more than one step to accomplish is a **project** for me.

I sorted all my projects in **four buckets**:

* **In Progress**:
    * These are the thing that I'm exerting a great deal of efforts.
* **Almost Done**:
    * These require little effort to maintain, I just want to
keep an eye on them.
* **Backlog**:
    * These are the **candidates** to be done **next** when I can
take more **in progress** items.
* **Ice Box**:
    * These are the things that I probably won't be touching for
a long time. --- They either provide little value, or there are wiser ways to
allocate my time to more productive things.

Any item in the bucket can jump into any other bucket at any time depending on
my current goals, plans, and interests.

So, without further ado, here's some of the side projects that I'm working on
and their current states right now:

> Note that most of these are **open source**, if you feel like you can add
> value to any of them.
>
> Feel free to fork them and [feel free to send me an email][me] for
> your comments and suggestions.

## In Progres

> These are actively being developed; adding new features, fixing bugs, etc.

### Board

**[Board][board]** is a minimalistic and highly-scalable dashboard and
monitoring app.

Also, [here's a demo board][board-demo].

There are a lot of features to add; it's currently ready as a minimally viable
solution. --- Feel free to [fork it][board].

I'm preparing a list of what cool features to implement next.

I'm also drafting a blog post about **[board]**'s implementation details, which
I will be sharing soon, hopefully.

[board]: https://github.com/v0lkan/board
[board-demo]: http://volkan.io:4244/shuttle
[gtd]: https://www.wikiwand.com/en/Getting_Things_Done
[me]: mailto:me@volkan.io

### **o2js.com** Version 2

It's this very website that you are reading right now.

I'm **converting** posts from the older site to here and **rewriting** older
articles that I have removed from the site in the light of the current changes
in the technological ecosystem.

The tranformation of **o2js.com v2** is an **ongoing process**. And to
complete it fast, obviously I should be adding more content to this blog faster.

The thing is, writing a good article is an excruciatingly slow process.

It is not an easy task: It requires at least a couple of hours'
**undivided attention**, and a couple of additional **days** to refine it.

So, for me at least, writing more than one technical article per week would not be
possible without compromising quality.

I am targeting **one new article per month**, which realistically means that
it will take  **forever** to finish this project **:)**.

If I can make more time, I will be focusing on this blog more.

> **Aside**
>
> There are tools and processes that I find helpful in managing my time
> to get things done fast. This is the topic of another article, I think **;)**.

### Learning Stuff

As an engineer, you have to learn new things to expand your horizon; and I **love**
learning new things. I don't know you, and learning something or figuring out how
different pieces come together to form a solution is euphoric for me.

> **Learning** is a **lifestyle** --- **Learning** is **happiness**.

Actually if **learning** is not your **lifestyle**, and you are  **IT**, then
maybe it's then maybe you should have been working in another sector **;)**.

Here is the things in my current queue that I study the most:

* [Elastic Search][elk]
* [OpenStack][openstack]
* [Swift][swift]

[elk]: https://www.elastic.co/
[elastic]: https://www.elastic.co/
[openstack]: http://www.openstack.org/
[swift]: https://developer.apple.com/swift/

## Almost Done

> These are the **completed** projects that are "mature enough".
>
> I do retouches and minor fixes to them every once in a while.

### JavaScript Interview Questions

**[JavaScript Interview Questions][jsiq]** is a book about
**JavaScript Engineering** interviews and tips and tricks on how to prepare
for them. Readers say that “JavaScript Interview Questions” really
helped them ace their interviews.

**Version one** of the book is complete. I am thinking about writing a second
extended version for a while. In addition to that I'm also considering writing
another --- a more technical --- ebook on **Modern JavaScript Best Practices**.

With two **demanding** little monsters (*i.e., kids :)*), however, I doubt it
will be happening anytime soon **:)**.

[jsiq]: http://o2js.com/interview-questions

### volkan.io

[volkan.io][volkan] is a website that I put my bio, and a summary of what
I did so far, what I'm interested in, etc.

Maybe I'll convert it to something more dynamic and shiny in the long run;
the site as it's current state is "good enough".

[volkan]: http://volkan.io

### Sensei

**[Sensei][sensei]** is a minimal [Node.js][node] wrapper around the
[sensu api][sensu].

It works as its current state; however, there's still a lot of room for
improvement.

[sensei]: https://github.com/v0lkan/sensei
[sensu]: https://sensuapp.org/docs/latest/api-overview
[node]: https://nodejs.org/

### Revolve

**[Revolve][revolve]** is a multi-process image rotator.

I doubt it has any practical value but who knows **:)**

I use it to change the background images of [volkan.io][volkan].

[revolve]: https://github.com/v0lkan/revolve

### Eagle Eye

**[Eagle Eye][eagle-eye]** analyzes your **npm** and **bower** dependencies
creates a report of which of them are out of date.

[eagle-eye]: https://github.com/v0lkan/eagle-eye

### Steward

Have a sneaky cousin that uses your computer without permission?

Then **[steward][steward]** may be a solution for that **;)**.

Steward continuously watches your desktop and emails you if anything changes
on the screen.

> **[steward][steward]** Currently works on Mac computers only.

[steward]: https://github.com/v0lkan/steward

## Backlog

> The **backlog** contains candidates for the "next thing" to work on.
>
> Once I'm done with some of the things that I'm working on, I take items
> from here into my **in progress** bucket.
>
> The reverse is also true: If I feel like I have too much load in my
> **in progress** bucket, I put some of those items into the **backlog**.

### **EcmaScript2015**...ifying All The Things!

This includes all the projects that I've been working on, and
also all the articles that I've written so far.

I already use **[EcmaScript 2015][es6]** in my new articles and projects;
however, the older ones still need to be converted.

This is a **big** transformation that I have to do it gradually because if you're
not using **[es2015][es6]** right now, then you are already lagging behind.

[es6]: http://es6-features.org/

### Tosspick

A fun mobile game that I'm actively working on. --- It's a new adventure
for me since I have not done game programming before.

There's nothing to show yet. And the project is **not** open source.

Nonetheless, I'm learning **a lot** in the meantime; and I hope to share
them in further articles here.

### Pringles

**[Pringles][pringles]** generates static cached copies of dynamic
**AJAX**-enable web pages. It does this by running the page in a
**headless browser** and executing all the **JavaScript** to produce the final
result. So the result will be **much more** than what a typical search engine
would crawl.

The project is ready as a proof-of-concept. I've tested it on
[wikiwand][wikiwand], which is a dynamic website that does not display too
much content when you crawl without executing the **JavaScript** on it.

[Pringles][pringles] will be a part of [linkibol][linkibol]'s (*see below*) indexer.

[pringles]: https://github.com/v0lkan/pringles
[linkibol]: http://linkibol.com
[wikiwand]: http://www.wikiwand.com/

### Linkibol

**[Linkibol][linkibol]** is an attempt to create a **niche** and **focused** search
engine to crawl and index technical articles, tips, and resources.

The project is **not** open source (*right now*).

One improvement to that would be using **[pringles][pringles]** to generate better
internal cached documents.

I will also use **[elastic search][elastic]** (*[see the learning
section](#learning-stuff)*) to create more relevant search results. ---
Currently **[linkibol][linkibol]** has a home-baked full text search engine.
It works fine; however, [elastic search][elastic] will provide much better results.

## Ice Box

> The following are the projects that are in the **ice box**.
>
> That is to say, they **won't** be active for a **long** time.

### Writing a Technical Book on Modern JavaScript

I have quite a few book ideas in my mind:

* JavaScript Interview Questions Deluxe Edition that dives deeper into technical
details, and has additional interview question and answer examples.
* A book about modern **JavaScript** essentials, which is *kind of* a moving
target **;)**.
* A book about practical uses of **JavaScript** **patterns**.

Writing a book, however, requires a huge block of time and Jedi concentration.
Unfortunately, I'm limited in those resources **:)**.

So, instead of writing a new book, I’ll focus on writing more articles here:

I'll continue making this blog better.

### Snippets

**[Snippets][snippets]** is a project about gathering code snippets, and
distributing them in shareable formats; at least it **will be** when it gets
completed.

Currently it only has a few code snippets in it grouped into folders.

Since there are alternative tools like [snipplr][sniplr], [github gists][gists],
[bl.ocks.org][blocks], [codepen][codepen], [runnable][runnable],
[tributary][tributary], [smipple][smipple], [devsnippets][devsnippets],
and many more, it will not provide much value to reinvent the wheel unless it
makes something different or bettter.

[devsnippets]: http://devsnippets.com/
[blocks]: http://bl.ocks.org/
[runnable]: http://code.runnable.com/
[tributary]: http://tributary.io/
[codepen]: http://codepen.io/
[gists]: https://gist.github.com/
[sniplr]: http://snipplr.com/
[smipple]: http://www.smipple.net/
[snippets]: http://github.com/v0lkan/snippets

### Themes

**[Themes][themes]** was a repository that I was going to gather customized IDE
themes and color schemes for my own taste.

I realized, however, that the more I change development environments and
operating  systems (*and I do that **a lot***) the more it was becoming harder
to keep  things in sync.

Moreover, sometimes I had to write a colo rscheme from scratch just because I
was not able to find a similar one that was supported in the IDE by default.

So I decided to **let it go** too.

It's better to use a well-supported color scheme, and typeface that's available
everywhere, instead of trying to re-adjust your setting every time you change
your development environment.

> For the interested I am currently using [Tomorrow Night][tomorrow] theme,
> with [Fira Mono][fira] as my typeface.
>
> 1.1em is my line spacing, and 14px is the font size, on a 27-inch display
> with 2560&times;1440 resolution.
>
> I prefer 10-12px for smaller laptop displays. And those numbers seem to be
> increasing as years pass by **;)**

[themes]: https://github.com/v0lkan/themes
[tomorrow]: https://github.com/chriskempson/tomorrow-theme
[fira]: https://mozilla.github.io/Fira/

### **o2.js** JavaScript Framework

The astute reader might have realized that there is a theme in here:

> In order to get more stuff done; I had to let more stuff go.

Letting go of **o2.js**, however, was one of the hardest of such decisions.
Nevertheless it had to be done; and it was the correct decision.

To explain why it's hard, [let me take you back to 2006][flashback]:

> Let us set the stage a bit:
>
> Back then, **jQuery** was not in the arena.
>
> **Table-based layouts** were the **recommended** way of building a web page;
>
> **Google** was **not** a dominant search engine yet; and **Netscape Navigator
> 4** was still a browser that you had to support along with **Internet
> Explorer 5** because they were owning the majority of the market.
>
> And **Opera** was just about to make biggest worst business blunder by
> demanding its users to **pay money** to remove ads from the browser.

It all started with (*now obsolete*) JavaScript framework **sardalya** that
I'd created back then.

In one of those lovely days of 2006 [**sardalya** got listed as one of the best
frameworks around][flashback].

I was not aware that **sardalya** was in such a good shape: I was using it for
my day-to-day duties, and it was really improving my productivity however
I was not aware that it was making others' lifes better too. -- Nope, there
was no **GitHub** back then either **;)**.

It was the first time I felt I was having an impact that was bigger than myself.
<br>
(*the second time I has such a feeling was [when I wrote a book](interview-questions).*)

Having seen what **sardalya** can turn out to be, and how everybody can benefit
from it too, I decided to work further on it and make it **even better**.

...

For a couple of years, things went well.

On the long run, however, technology evolved and I had to phase
out **sardalya**. I decided to copy relevant and useful parts of it to create
a brand new framework: **[o2.js][o2js]** --- a framework that was created from
the ashes of **sardalya**.

> **Aside**
>
> I'm a startup guy:
>
> I think fast, act fast, and never hesitate to break things.
>
> Tearing things down entirely, burning bridges, and having a fresh and better
> start has been the general theme of my life so far.
>
> Those transitions have often been painful, and have teached me **a lot** that
> I could not have gained by attending to some biz school or reading a book.

That was the beginning of an endless series of rewrites of the same framework
(*o2.js*).

At each rewrite things were **seemingly** getting better:

* Code was becoming more stable.
* New ideas were emerging.
* And I was happily integrating those ideas, adding bits
and pieces to the framework...

Then I suddenly came to a realization:

> Everything around me was evolving faster and faster.
>
> **JavaScript**, too, was **not** an exception to that.
>
> Cycles, and breakthroughs in the industry were getting more frequent.
>
> Ten years ago, there was something groundbreaking **every one or two years**.
>
> Now there was something new and groundbreaking **every couple of months**.

If you are one of the lucky (*unlucky?*) people to have lived through the
**JavaScript** revolotion, and the **browser wars**; if there was no **Google**
when you started hacking for the web, then you probably see the
**geometric accelleration** of the evolution of technology just like I do.

...

Even if we skipped the rapid evolution of languages, frameworks, and technologies
aside, **[o2.js][o2js]** in an of itself was growing out of control:

It was turning into a **monolith** that was trying to solve many things at once.

And the bigger the framework got, the harder it had become to **document**,
**test**, and **maintain** it.

And when something new (*you name it: web components, HTML5 local storage,
ServiceWorker, Node.JS, EcmaScript 2015...*) emerged, I had to readjust the
entire monolithical codebase to take the emergent technology into account.

> Soon I found myself in the world of generators, transpilers, workers,
> linters, parsers just to be able to support the framework's day-to-day
> development.

If **[o2.js][o2js]** was a single module with a well defined purpose ---
such as a local storage helper, or an **AMD** variant, or a **Promise**
implementation, or an animation library, etc. --- things could have been easier.

> One thing that hit me like a full speed freight train was the fact that
> trying to solve many things at once was not the way to go.
>
> **[Unix philosophy][unix-philosophy]** was time-tested and proven for a reason:
>
> I should be doing one thing at a time; and doing that thing **well**.

Trying to manage a monolith that does all the things, in this rapid
(r)evolution was exhausting, time-consuming, counter-productive
and **unsustainable**.

Long story short, effective today, I'm ceasing any active development on
**[o2.js][o2js]**.

I will still be using parts of its codebase to solve problems.

Those solutions, however, will be much more **focused**:

They will have single, focused, and unique purposes; and they will be
serving that purpose **well**.

[flashback]: http://www.musingsfrommars.org/2006/03/ajax-dhtml-library-scorecard.html
[o2js]: https://github.com/o2js
[unix-philosophy]: http://www.wikiwand.com/en/Unix_philosophy
[interview-questions]: http://o2js.com/interview-questions

### Writing "Writing Style Guide"s

> This topic deserves a separate article on its own;
> I'll start drafting it out here anyway **:)**:

I had started creating a few style guides for both writing code, and also for
technical writing. I was using them as a reference for coding conventions in
my side projects, as well as a reference for stylistic conventions in my articles.

At this point, an obvious question you might ask is:

> Why write your own style guides instead of using some of the already
> established ones?

Obviously people have been pondering on these issues a lot, so why not follow
their piece of mind, instead of reinventing the wheel?

And when I asked this to myself, I realized that the answer is really complicated
and lies deep within: It's because of my  obsession to control, categorize,
organize everything.

> So even if my way of doing things is slightly different than the community
> guidelines, they were supposed to be signed in triplicate, sent in, sent back,
> queried, lost, found, subjected to public inquiry, lost again, and finally
> buried in soft peat for three months and recycled as firelighters.

Ir's the same obsession with "the ideal programming font family" and "the
ideal color scheme". It is useful to a certain extent; yet it becomes detrimental
when you start caring about those kinds of things too much. --- So the resolution
is again to **let it go**.

Keeping an eye on everything requires a great deal of **attention**,
**concentration**, and **bookkeeping**. You give permission to yourself to
let go of things so that you could focus on more important stuff.

> [Resistance was futile][vogon]. I **had to** learn to let things go.
>
> To clarify further:
>
> Spending time on anything just for the sake of self-satisfaction
> while that thing does not provide any real value "at all"
> is a time lost that could have been utilized in better ways.

Keeping everything "organized" was also my obsession (*as well as many geeks,
with similar mindsets, I believe :)*).

> I've realized that the more you learn to **let things go**, the more
> **productive** you become.

It's true not only for style guides but also for any kind of strict rule that
you impose upon the way you do things.

I have realized (**ahem**... *after ten or so years*) that it all boils down
to **consistency**.

...

Documenting every miniscule detail about how to write an
article, or how to author a piece of code is a **futile effort**.

And the more excruciatingly-detailed that guide becomes, the slower your writing
will be because you will be trying harder and harder to conform every single
bit and piece of rule written in the guideline.

> Being **consistent** is better than being **conformant**.
>
> **Perfection is boring**:
>
> It consumes your time, and your mental resources
> without giving enough value in return.

Besides, there are already very good style guides out there; it'd be wiser to
stick with them. And about punctuation and grammar, there are resources
like&hellip;

* [The punctuation guide][punc]
* [Grammarly Handbook][grammarly]
* [Grammar Girl][grammar-girl]
* [This little guide to grammar and writing][ccc]
* [This little OWL][owl]
* [Daily writing tips][tips]
* And, the last but not the least, [this grammar monster][monster]

For writing, I follow the above links (<em>in priority order</em>) and do it
my own way, if I disagree with them.

For code style [idiomatic JS][idiomatic], and I do it my own way if I
am not aligned with anything in there.

...

In the end of the day, **your writing is your style**; it is — kind of —
your "signature":

The more you write, the more **consistent** it will get.

And most of the guides listed above, are just "guidelines" as their name imply;
they are recommendations because there cannot be one true way of writing.

As your personality changes, so does your signature.

This is true for your writing style too.

Trying to document something that constantly changes, ironically, will
prevent it from changing.

> Standardizing things limits the way you explore your environment.
>
> It *can* even be detrimental to your improvement, growth, and development.
>
> Don't be a rock that is conformant and restrictive.
>
> Always have a *mind like water*: **Be consistent, and adaptive**.

[vogon]: https://www.wikiwand.com/en/Vogon
[github]: https://github.com/v0lkan/
[idiomatic]: https://github.com/rwaldron/idiomatic.js/
[punc]: http://www.thepunctuationguide.com/index.html
[grammarly]: http://www.grammarly.com/handbook/
[grammar-girl]: http://www.quickanddirtytips.com/grammar-girl
[ccc]: http://grammar.ccc.commnet.edu/grammar/
[owl]: https://owl.english.purdue.edu/owl/section/1/
[tips]: http://www.dailywritingtips.com/
[monster]: http://www.grammar-monster.com/
