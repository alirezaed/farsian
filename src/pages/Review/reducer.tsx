export interface ReviewState {
  onlyStocked: boolean;
  keyword: string;
}

export interface Action {
  type: "KEYWORD" | "ONLY_STOCKED";
  payload: any;
}

export default function reducer(currentState: ReviewState, action: Action) {
  if (action.type === "KEYWORD") {
    return {
      ...currentState,
      keyword: action.payload,
    };
  }
  if (action.type === "ONLY_STOCKED") {
    return {
      ...currentState,
      onlyStocked: action.payload,
    };
  }
  return currentState;
}
