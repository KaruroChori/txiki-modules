#!/bin/env bun

import { $ } from 'bun'
import module from '../schemas/src/module.schema'
import modules from '../schemas/src/modules.schema'

await $`mkdir -p ./schemas/out`

await Bun.write("./schemas/out/module.schema.json", JSON.stringify(module, null, 2))
await Bun.write("./schemas/out/modules.schema.json", JSON.stringify(modules, null, 2))