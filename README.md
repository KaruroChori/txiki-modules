> [!WARNING]  
> This documentation has not been fully written yet.

> [!IMPORTANT]  
> If you want to test txiki modules you will have to use a separate branch since it has not been merged yet.
> [this](https://github.com/KaruroChori/txiki.js/tree/stable-gluegunfw) contains the module feature alongide few more patches.

## What are txiki modules?

External modules are a mechanism to define & build custom runtimes based on Txiki.  
Any external module will be integrated within the native build process of Txiki, so that any bundle, artefact and documentation can be generated & tested alongside.  
Txiki modules are module and separate from the main basecode; as such there is no need to maintain a divergent branch of txiki if we want to add custom functionalities to its core.  
External modules do not interfere with the original repo content, as any file generated is not being tracked.

WIP, consider https://github.com/saghul/txiki.js/discussions/514 for now.

## Getting started

To start using txiki modules you will need to create a json file **outside** the txiki repository. For example `modules.json` in its parent folder.  
You can have a file `modules.json` inside the repo, and that is the default location most of the cli commands will use, but it is meant to be placed by a wrapper script since it cannot be tracked.

The modules file should follow the schema described in `/schemas/src/modules.schema.ts`. For example:

```json
{
  "demo": "https://github.com/KaruroChori/demo-txiki-module/releases/download/v2.1.0/module.tar.gz"
}
```

Entries can either point to a filesystem location, or to `tar.gz` file online. There are precise specifications on how any folder or archive should be organized.

At this point, you can run `bun run extra-modules-clone ../modules.json` or any of its alternatives to automatically retrieve and apply the modules to the main repo.  
The `./extra-helper.mjs` script offers few more commands and options documented via `--help`.

If you now build the runtime as usual, you will end up with a custom version exposing the interface and functionality of the module `demo` as part of its core.

## Features

## Resources

List of available modules is [here](./docs/modules.md).

JSON schemas for the `module.json` and `modules.json` files in [here](./schemas/out/).  
If your application allows that, you can directly use the typebox-based schemas.

Reference repository for a [demo module](https://github.com/KaruroChori/demo-txiki-module) to get started.

Some pointers on how to port existing JS libraries as modules can be found [here](./docs/how-to-port.md).
