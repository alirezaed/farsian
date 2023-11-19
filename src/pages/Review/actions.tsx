import { Action } from "./reducer";

export function changeKeywordAction(keyword: string): Action {
  return {
    type: "KEYWORD",
    payload: keyword,
  };
}

export function changeOnlyStockedAction(onlyStocked: boolean): Action {
  return {
    type: "ONLY_STOCKED",
    payload: onlyStocked,
  };
}
