enum ActionType {
  first = "string",
  two = "two",
  three = "three",
}

type Action<T = ActionType.first> = T extends ActionType.two
  ? "222"
  : T extends ActionType.three
  ? "333"
  : "111";
