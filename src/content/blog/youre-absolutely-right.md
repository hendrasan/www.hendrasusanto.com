---
title: You're Absolutely Right - Or How AI Can Be Confidently Wrong
excerpt: A rant about how AI can confidently give wrong answers, and the phrase "You're absolutely right" can be quite annoying.
publishDate: 'Sept 06 2025'
isFeatured: true
tags:
  - AI
  - Rant
  - English
---

So I'm learning Go, and the book I am following is using httprouter for the routes. But when I look at the current version of httprouter, the codes are a bit different.

It seems like the codes in the book are a bit outdated perhaps (though it still works), so I asked GPT-4.1 with Github Copilot in VS Code.

```
> is it more common to use router.HandlerFunc like in this file vs router.GET("/v1/healthcheck", app.healthcheckHandler)
```

The file I refer to has these codes

```
router.HandlerFunc(http.MethodGet, "/v1/healthcheck", app.healthcheckHandler)
router.HandlerFunc(http.MethodPost, "/v1/movies", app.createMovieHandler)
router.HandlerFunc(http.MethodGet, "/v1/movies/:id", app.showMovieHandler)
```

And GPT-4.1 answered

```
Both styles are common, but their usage depends on the router package:

- router.HandlerFunc is specific to httprouter, which does not provide convenience methods like GET, POST, etc. Instead, you use HandlerFunc and specify the HTTP method explicitly.
- router.GET (e.g., router.GET("/v1/healthcheck", app.healthcheckHandler)) is common in routers like Gin or Chi, which provide method-specific helpers.

So, with httprouter, using HandlerFunc is the standard approach. With other routers, method-specific helpers are more idiomatic.
```

Which is wrong, because the current version of httprouter does have router.GET, router.POST, etc.

So I said

```
> httprouter does provide GET POST etc methods
```

Then GPT-4.1 answered

```
You're correct—httprouter does provide convenience methods like GET, POST, etc.
For example, you can use:

router.GET("/v1/healthcheck", app.healthcheckHandler)
router.POST("/v1/movies", app.createMovieHandler)
router.GET("/v1/movies/:id", app.showMovieHandler)

Both HandlerFunc and the method-specific helpers (GET, POST, etc.) are valid.
Using GET, POST, etc. is more concise and idiomatic with httprouter.
```

Note that GPT-4.1 used the phrase **"You're correct"**.

I then asked the same thing to Claude Sonnet 4, which you can read [here](https://claude.ai/share/8d9d9bc5-b906-4745-964c-1ffba93d258d).

It did better, because I provided the context in the question (to be fair, I asked GPT-4.1 with the same prompt as Claude, and it gave a correct answer).

But then I asked Claude more questions about httprouter.

```
in httprouter, what if i want to have these routes

router.GET("/v1/movies/:id/actors", app.showMovieActorHandler)
router.GET("/v1/movies/:id", app.showMovieHandler)

it won't work right because of conflicting routes
```

Which it did point out that it would work fine.

Then I said

```
router.GET("/v1/movies/new", app.showMovieWontWorkHandler)
router.GET("/v1/movies/:id", app.showMovieHandler)

i see so these won't work
```

Which it incorrectly also said that it would work fine. But I tried it myself, and it didn't work since httprouter doesn't allow conflicting routes.

So I corrected it, and then the magic phrase _You're absolutely right_ came out.

```
You're absolutely right! I apologize for the confusion. httprouter does not allow static routes and wildcard routes at the same level of the same path.
```

Then it gave a couple of suggestions, but the last one:

```
Use a different base path:

router.GET("/v1/movies/create", app.showMovieNewHandler)
router.GET("/v1/movies/:id", app.showMovieHandler)
```

Which even on a glance, you'll see that it is the same as the previous one, so it won't work. So I pointed it out again, and of course:

```
You're absolutely right! I made an error - that solution won't work either because /v1/movies/create and /v1/movies/:id still have the same conflict: a static segment "create" and a wildcard ":id" at the same path level.
```

The frustrating part is, this is just a simple case. I am just in the beginning of learning Go, and it already gave me wrong answers. And it is for a tool/package that is quite popular and has been around for a while. And I did provide context to the file in my prompt.

Even Claude, which is regarded to be the best at coding, also gave me wrong answers after some prompts, and I wasn't intentionally trying to trick it or anything. Just a simple and straightforward question.

I do think AI is helping a lot in learning, since we can basically ask anything, even stupid questions that we might be too embarrassed to ask a human, and sort of get an answer.

But we do have to be critical of the answers as AI (well technically LLMs) are basically next word predictors, and they can be confidently wrong.

And the phrase **"You're absolutely right"** or the variations, which at first might sound like the AI is humble and admitting its mistake, now it feels more like a sarcastic remark, and frankly, a bit annoying.
