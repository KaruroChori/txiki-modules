import { Type as t } from "@sinclair/typebox"

export default t.Record(
    t.String({ description: 'Unique name for the module' }),
    t.String({ description: 'Path or URI for the resource' }), { description: 'Canonical names for required modules for it to work. The runtime must provide them as peer depenencies.' }
)