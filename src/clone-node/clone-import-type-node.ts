import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneImportTypeNode(node: TS.ImportTypeNode, options: CloneNodeInternalOptions<TS.ImportTypeNode>): TS.ImportTypeNode {
	return options.typescript.createImportTypeNode(
		options.hook("argument", cloneNode(node.argument, nextOptions(options)), payload(options)),
		options.hook("qualifier", cloneNode(node.qualifier, nextOptions(options)), payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(options)), payload(options)),
		options.hook("isTypeOf", node.isTypeOf, payload(options))
	);
}
