# Supabase documentation style guide

The decisions Supabase has made about docs writing. Work the steps below in order.
When nothing here covers your case, follow the precedence at the end.

No tool enforces any of this. The `/write-the-docs` and `/edit-the-docs` agent skills
apply the guide as you draft, so you don't have to hold it in your head.

The guide is one of three related pieces. The
[Write the docs](https://linear.app/supabase/document/write-the-docs-a793a9f91be2)
checklist is the process, `/write-the-docs` is the skill that runs it, and this guide
is the bar they're measured against.

## Navigation

| File                                             | Covers                                             | Read it when                                      |
| ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------- |
| [`WORD_LIST.md`](./WORD_LIST.md)                 | Terminology, spelling, capitalization              | At both ends of every piece                       |
| [`01-voice-and-tone.md`](./01-voice-and-tone.md) | Person, tense, sentence length, brevity            | Every sentence, always                            |
| [`02-page-structure.md`](./02-page-structure.md) | Document type, section grouping, chunking          | When you shape or reshape a page                  |
| [`03-elements.md`](./03-elements.md)             | Admonitions, code blocks, procedures, tabs, images | When you choose a form for a piece of information |

The numbered files run from fine grain to coarse: get the sentences right, decide the
shape, then pick what renders each piece. `WORD_LIST.md` has no number because it
isn't a step. It's the bookend you consult before and after everything else, and its
uppercase name marks it as the list rather than a peer of the numbered files.

## Before you start

Know what you're writing and who for. `/pm-the-docs` settles audience, product stage,
and content type. `/ask-the-docs` settles where the page belongs in the information
architecture.

Then check [`WORD_LIST.md`](./WORD_LIST.md) for the terms you plan to introduce. Terms
are cheaper to get right before you've built paragraphs around them.

## 1. Voice and tone

Decide how each sentence reads: who the actor is, what tense it takes, and how much of
it you can cut. See [`01-voice-and-tone.md`](./01-voice-and-tone.md).

This level applies to everything you write, whether you're drafting a new page or
changing one line on an old one.

## 2. Page structure

Decide what kind of page this is, how it divides into sections, and what order those
sections go in. See [`02-page-structure.md`](./02-page-structure.md).

This level applies when you add a page or move content around on one. A page that
blends kinds of information slows down a reader scanning for a command and an agent
answering a question from the page.

## 3. Elements

Decide what renders each piece: an admonition, a procedure, a table, a diagram, a tab
set. See [`03-elements.md`](./03-elements.md).

This level follows from step 2. Page structure tells you what kind of information you
have, and the `Present with` column of its information-type table points at the
element that suits it.

## Before you open a pull request

Read [`WORD_LIST.md`](./WORD_LIST.md) against the finished page, including terms you
didn't write. An existing page is where nonconforming terminology accumulates.

Then run `/review-the-docs` for a local self-review, and `/test-the-docs` if the page
contains runnable snippets.

**Critic pass, if you drafted with an agent.** A model is a poor judge of a page it
has only now written, because its own draft sits in context and reads as correct. Open a
subagent with a clean context, holding only the relevant guide files and the draft
text, and give it this instruction:

> List every rule violation in the draft. Quote the offending phrase and name the
> rule it breaks. Don't rewrite anything.

Revise from that list before you hand the draft over.

## If a rule isn't here

Follow the [Google developer documentation style guide](https://developers.google.com/style),
then the [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html) for
general English.

Don't invent a rule, and don't copy whatever the nearest page happens to do. If none
of the three covers your case, say so in your pull request description so the gap gets
recorded rather than settled by accident.
