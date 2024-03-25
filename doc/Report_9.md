## Clean up Little Bits

3/25/24 - Report 9.

Worked 8 hours.

---

## This Week

I bought the domain ihateintegrals.com and published a version of my site 
there. I created a routine involving a second repository to push changes to
Hostinger. I created a wrapper crate around the CAS crate so that the 
WASM types weren't touching the core logic at all and the crate could be
used in pure-rust projects and tested more easily. I read about generating
Rust crate documentation and realized that it's just generated from code
comments automatically.

I drafted a LinkedIn side-panel thing. Unfortunately, linkedin doesn't provide
any kind of embedable profile bit so I have to create something myself.

As for the electron app, I looked at it closer and got half way though
configuring it, but then I realized it would make the builds more complicated
and that I should wait until the product is done before adapting it.

I deleted some code, got rid of some unnecessary types in the backend,
deleted some test pages for the frontend TS CAS, fixed some bugs.

## Next Week

After doing some research on integration, I realized that u-substitution
won't require a large refactor and that it can just be another rule. I want
to complete u-sub and integration by parts this week. If there's more time,
I'll keep working through the test problems I found online for Calc 1.
