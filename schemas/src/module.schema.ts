import { Type as t } from "@sinclair/typebox"

export default t.Object({
    "$schema": t.Optional(t.String({ format: 'uri' })),
    "suggested-name": t.Optional(t.String({ description: 'The canonical name for the module when integrated in your distribution. It should be used to ensure maximal compatibility.' })),
    "module-version": t.Optional(t.Array(t.Integer(), { minItems: 3, maxItems: 3, description: 'The revision of the module specifications in use.' })),
    "runtime-version": t.Optional(t.Array(t.Integer(), { minItems: 3, maxItems: 3, description: 'The version of runtime this module was designed for.' })),
    "module-deps": t.Optional(t.Record(
        t.String({ description: 'Unique name for the module' }),
        t.String({ description: 'Path or URI for the resource' }), { description: 'Canonical names for required modules for it to work. The runtime must provide them as peer depenencies.' })),
    "native-deps": t.Optional(t.Record(
        t.String({ description: 'Native module unique name. If no `symbols` sub-field is provided, this name must be the same of the only exported lib.' }),
        t.Object({
            repo: t.Optional(t.String({ format: 'uri', description: 'git module uri' })),
            branch: t.Optional(t.String({ description: 'Branch or tag to select', default: 'master' })),
            env: t.Optional(t.Record(t.String(), t.Object({}), { description: 'Set of options to set for the specific module' })),
            "raw-cmake": t.Optional(t.String({ description: 'Additional cmake directives to add which cannot be easily represented elsehow' })),
            url: t.Optional(t.String({ description: "Alternative to repo/branch", format: 'uri' })),
            symbols: t.Optional(t.Array(t.String(), { description: 'Explicit list of names for libs to be later linked to tjs' }))
        }, { additionalProperties: false })))
}, { additionalProperties: false })
