import * as React from "react";
import BaseTodoList from "./BaseTodoList.js";
import TODOS from "./data.js";
import withDataEmptyFeedback from "./withDataEmptyFeedback.js";
import withLoadingFeedback from "./withLoadingFeeback.js";
import withNoDataFeedback from "./withNoDataFeedback.js";
import compose from "./utils.js";

// test by changing data to an empty array, TODOS, or null. Test isLoading by changing it from true to false
const fetchData = () => {
  return { data: TODOS, isLoading: false };
};

const TodoList = compose(
  withLoadingFeedback("Loading ToDos."),
  withNoDataFeedback("No ToDos loaded yet."),
  withDataEmptyFeedback("Todos are empty.")
)(BaseTodoList);

const App = () => {
  const { data, isLoading } = fetchData();
  return <TodoList data={data} isLoading={isLoading} />;
};

export default App;
