const chapters = `
     <div class="chapters">

            <!-- Category list coding -->
            <div class="gap-3 animate__animated animate__zoomIn">
                <div class="grid">
                    <div class="p-4 shadow-sm bg-white md:col-span-2">
                        <div class="grid md:grid-cols-10 gap-4 justify-between items-center border-b py-4">
                            <h5 class="text-xl font-semibold md:col-span-2">Chapter-List</h5>
                            <select class="form-select chapter-cat-select md:col-span-2">
                                <option hidden value="choose category">Choose Category</option>
                            </select>
                            <select class="form-select chapter-course-select md:col-span-2">
                                <option hidden value="choose course">Choose Course</option>
                            </select>
                            <select class="form-select chapter-topic-select md:col-span-3">
                                <option hidden value="choose topic">Choose Topic</option>
                            </select>
                            <div class="text-right">
                                <button
                                data-bs-toggle="modal"
                                data-bs-target="#chapter-modal"
                                class="add-chapter-btn btn bg-red-500 text-white rounded-full"
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
                                <th>Topic</th>
                                <th>Ch Name</th>
                                <th>Notes Url</th>
                                <th>Video Url</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody class="text-nowrap chapter-list"></tbody>
                        </table>
                        </div>
                    </div>
                </div>
               
            </div>

         
          <!-- Topics-Modal -->
          <div
            class="animate__animated animate__zoomIn modal"
            id="chapter-modal"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="font-semibold text-xl">Create new Chapter</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form class="chapter-form">
                    <div class="row mb-3">
                        <div class="col-6">
                            <div class="form-group">
                                <select name="category" class="chapter-category form-select">
                                    <option hidden value="choose category">Chosse Category</option>
                                </select>
                        </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <select name="course" class="chapter-course form-select">
                                    <option hidden value="choose course">Choose Course</option>
                                </select>
                        </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="form-group">
                            <select name="topic" class="chapter-topic form-select">
                                <option hidden value="choose topic">Choose Topic</option>
                            </select>
                    </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <input type="text" class="form-control" placeholder="chapter Name" name="name">
                        </div>
                    </div>
                    <div class="row mb-3">
                       <div class="col-12">
                        <input type="url" class="form-control" placeholder="Notes url" name="notes">
                       </div>
                    </div>
                    <div class="row mb-3">
                       <div class="col-12">
                        <input type="url" class="form-control" placeholder="Video url" name="video">
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

export default chapters