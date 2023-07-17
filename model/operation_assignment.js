import { ToscaNode } from "./tosca_node.js";

export class ToscaOperationAssignment extends ToscaNode {
   constructor(input, source) {
      super(source);
      this.description = input.description;
      this.inputs = input.inputs;
      this.implementation = input.implementation;
   }

   getClassname() {
      return OperationDef._classname;
   }

   toString() {
      return super.toString();
   }

   setName(name) {
      this.name = name;
   }
   static isValid(input, source) {
      //TODO: Check if the implementation is valid
      return true;
   }
}

export function newToscaOperationAssignment(input, source) {
   let res;
   if (ToscaOperationAssignment.isValid(input, source)) {
      res = new ToscaOperationAssignment(input, source);
   } else {
      res = {};
   }
   return res;
}