import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneClassExpression(node: TS.ClassExpression, options: CloneNodeInternalOptions<TS.ClassExpression>): TS.ClassExpression {
	return options.typescript.createClassExpression(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(options)), payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), payload(options)),
		options.hook("heritageClauses", cloneNodes(node.heritageClauses, nextOptions(options)), payload(options)),
		options.hook("members", cloneNodes(node.members, nextOptions(options)), payload(options))
	);
}
