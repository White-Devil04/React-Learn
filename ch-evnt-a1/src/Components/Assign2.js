function Assign2() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('You have submitted the form.');
  }
  return (
    <div>
      <h2>Assignment 2</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Assign2;