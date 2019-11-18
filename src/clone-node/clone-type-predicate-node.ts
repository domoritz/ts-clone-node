import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTypePredicateNode(node: TS.TypePredicateNode, options: CloneNodeInternalOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	return options.typescript.createTypePredicateNode(
		options.hook("parameterName", cloneNode(node.parameterName, nextOptions(options)), payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), payload(options))!
	);
}
