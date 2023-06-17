const withNoDataFeedback = (feedback) => (Component) => (props) => {
  if (!props.data.length) return <div>No data loaded yet.</div>;
  return <Component {...props} />;
};
export default withNoDataFeedback;
