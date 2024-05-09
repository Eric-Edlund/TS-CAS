# U Substitution

4/29/24

Worked 13 hours.

## This Week

I encountered my first deadlock. It took a day to find it because webassebly
doesn't block, it crashes.

I built a Rust CLI tool for testing the CAS. It gives a lot of useful debug info
and accepts json expressions from stdin. This involved adding logic to track
statistics about derviations.

I implemented u-substitution. There is still some work to do on this, most
notably handling substitutions with constant factor differences.

Added some more integration rules.

## Next Week

More work on u-substitutions. This week is going to be rapid fire, high value
tasks because I'm out of time. I want the CAS to stop blocking the ui thread.
The logic to identify the simplest equivalent expression needs to work better.
Ideally I should find a way to display partial derivation results if no
simplification is found.

