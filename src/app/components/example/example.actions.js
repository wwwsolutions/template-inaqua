import MSGS from '../../messages';

export const exampleNoParamMsg = { type: MSGS.EXAMPLE_NOPARAM_MSG };
 
export function exampleParamMsg(param) {
  return {
    type: MSGS.EXAMPLE_PARAM_MSG,
    param
  }
} 

