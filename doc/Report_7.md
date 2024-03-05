# UI Work

3/4/24 - Report 7

Worked 9 hours.

---

## This Week

I added MathQuill to the project, which is an open-source interactive latex
editor. I think Desmos uses this same one with some modification. I refactored
the frontend so that either MathQuill or the textbox + custom parsing stuff with
Antlr can be used for input. I spent about an hour pretending to be a lawyer,
learning MathQuill's special license.

MathQuill only goes as far as producing latex for the input. I then included the
JS library unified-latex which includes tools for parsing latex. I now have a
latex AST which I need to transform into the UI expression representation.

I also added a few integration rules. I did not solve u-substitution yet.

## Next Week

Hopefully parsing latex isn't all that difficult and I can get an MVP done in a
week. I still have 7 weeks and I'm doing pretty well on the CAS, so I think I
can spend this much time on the UI.
