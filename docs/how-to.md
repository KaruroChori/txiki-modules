## Porting suggestions

- Focus only on packages with no runtime dependencies.
- Pure JS/TS libraries are fine. If they are based on node you will have to write some code to adapt between runtimes.
- Old code based on sync calls will require some major refactoring due to async function colouring.

## Generating types

The generation of types from typescript is based on some hacky mess.  
It might not work in all cases, but it is better than using the bundled option of `tsc` which will _never_ work reasonably for projects with multiple files.  
Please, use the code in the demo module repository as reference.

## Assuming other tjs modules are available

Manually add an entry in the `tsconfig.json` file for each library. Sadly the `dts-budler` cannot detect them otherwise and this would trigger an error upon usage during the final module distribution.
