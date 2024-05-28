## Production ready

In your dreams.

## Somewhat stable

Code works, and it has been minimally tested by using it.  
However, there is no proper test-suite integration nor automated pipeline running.

- [typebox](https://github.com/KaruroChori/typebox-txiki-module): based on [typebox](https://github.com/sinclairzx81/typebox), just a thin wrapper and some magic to make types work.
- [commander](https://github.com/KaruroChori/commander-txiki-module): based on [commander.js](https://github.com/tj/commander.js); a major refactoring to move the codebase from sync to async & to remove the dependencies from node native modules.
- [demo](https://github.com/KaruroChori/demo-txiki-module): it is just a basic skeleton repository for reference; an example on how to structure your own project.

## Ongoing

Development started, not usable yet.

- [serial](https://github.com/KaruroChori/serial-txiki-module): custom native module to configure serial devices (likely unix only).
- [lvgl](https://github.com/KaruroChori/lvgl-txiki-module): native module to use lvgl via react bindings.

## Planned

- A porting of [zx](https://github.com/google/zx) or a custom implementation based on a similar principle like bun did.
- A porting of [drizzle](https://orm.drizzle.team/) to pair it up with the embedded sqlite driver.
