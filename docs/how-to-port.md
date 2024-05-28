## Porting suggestions

- Focus only on packages with no runtime dependencies.
- Pure JS/TS libraries are fine. If they are based on node you will have to write some code to adapt between runtimes.
- Old code based on sync calls will require some major refactoring due to async function colouring.
