function ToDoitem(){
    let todoname = '';
    let tododate = '';

    return <div class="container">
        <div class="row rows">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2"><button type="button" class="btn btn-danger buttons">Delete</button></div>
        </div>

        <div class="row rows">
          <div class="col-6">Go to College</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2"><button type="button" class="btn btn-danger buttons">Delete</button></div>
        </div>
      </div>
}

export default ToDoitem;