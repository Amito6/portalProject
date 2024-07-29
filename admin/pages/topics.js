const topics = `
 <div class="topics">

            <!-- Category list coding -->
            <div class="gap-3 animate__animated animate__zoomIn">
                <div class="grid">
                    <div class="p-4 shadow-sm bg-white md:col-span-2">
                        <div class="grid md:grid-cols-4 gap-4 justify-between items-center border-b py-4">
                            <h5 class="text-xl font-semibold">Topics-list</h5>
                            <select class="form-select topics-cat-select">
                                <option hidden value="choose category">Choose Category</option>
                            </select>
                            <select class="form-select topics-course-select">
                                <option hidden value="choose course">Choose Course</option>
                            </select>
                            <div class="text-right">
                                <button
                                data-bs-toggle="modal"
                                data-bs-target="#topic-modal"
                                class="add-topic-btn btn bg-red-500 text-white rounded-full"
                            >
                                <i class="fa fa-plus"></i>
                            </button>
                            </div>
                        </div>
                        <div class="mt-3 table-responsive">
                        <table
                            class="table table-striped table-bordered text-center table-hover"
                        >
                            <thead class="text-nowrap text-centered">
                            <tr>
                                <th>Sr.</th>
                                <th>Category</th>
                                <th>Course</th>
                                <th>Topic Name</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody class="text-nowrap topic-list"></tbody>
                        </table>
                        </div>
                    </div>
                </div>
               
            </div>

         
          <!-- Topics-Modal -->
          <div
            class="animate__animated animate__zoomIn modal"
            id="topic-modal"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="font-semibold text-xl">Create new Topic</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form class="topic-form">
                    <div class="row mb-3">
                        <div class="col-6">
                            <div class="form-group">
                                <select name="category" class="topic-category form-select">
                                    <option hidden value="choose category">Chosse Category</option>
                                </select>
                        </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <select name="course" class="topic-course form-select">
                                    <option hidden value="choose course">Choose Course</option>
                                </select>
                        </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <input type="text" class="form-control" placeholder="Topic Name" name="name">
                        </div>
                    </div>
                    <div class="form-group mb-3">
                      <button type="submit"
                        class="w-full btn bg-blue-600 text-white font-semibold"
                      >
                        Submit
                      </button>
                      <button type="button"
                        class="w-full btn bg-red-400 text-white font-semibold d-none"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
`;

export default topics;