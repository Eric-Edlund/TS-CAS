# Week One Notes

### Codebase Maintenence

The CAS system and the frontend for it should arguably be in separate repos. I'm
the only one working on this project, so I'm going to stick to one repo and try to keep the
frontend part minimal.

I've added config files for Prettier.

I've had a brief discussion with ChatGPT about project structure and it sounds
like I should keep the TS front end stuff in a separate folder from the Rust CAS
stuff. I've replaced the `src` folder with `ui` and `cas`.

The frontend will depend on the Rust part, but not the other way around. To be
accessed from JS, there will be some intermediate generated interface stuff from
Rust which will go in a third top level directory.

The top level `public` folder is in the right place. I need a temporary `dist`
which stores compiled code, then in a separate step I copy the needed bundles
into public. The bundles are in gitignore. This means I have to download and
build the repo to deploy the website, but it avoids having extra artifacts in
git history.

I currently have 7 webpack configuration files. Clearly I just copy pasted
things until the electron app built. I've removed the electron app from the
project for now which got rid of most of them. 

### Design Changes

Rewriting the CAS logic in Rust is an opprotunity for revision. The exact
strategies I used in TypeScript also aren't allowed in Rust, which doesn't 
allow inheritance among other things.

[CAS Design Requirements](CAS_Design_Requirements.md)

In the current implementation, operations are classes which compose in a 
tree.

The JS implementation of the CAS relied on garbage collection but in Rust I need
to have an explicit memory solution. Rust offers many facilities on this.

I watched [this](https://www.youtube.com/watch?v=IPmRDS0OSxM) video on Rust and have been reading the [Rust Book](https://doc.rust-lang.org/book/).

