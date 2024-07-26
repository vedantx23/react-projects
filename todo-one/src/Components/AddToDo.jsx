function AddToDo() {
  return (
    <div class="container text-center">
      <div class="row rows">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo text" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success buttons">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
