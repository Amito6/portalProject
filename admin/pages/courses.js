const courses = `
        <div class="courses">

            <!-- Category list coding -->
            <div class="grid gap-3 animate__animated animate__zoomIn">
                <div class="grid">
                    <div class="p-4 shadow-sm bg-white md:col-span-2">
                        <div class="flex justify-between items-center border-b py-2">
                        <h5 class="text-xl font-semibold">Category-list</h5>
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#category-modal"
                            class="add-category-btn btn bg-red-500 text-white rounded-full"
                        >
                            <i class="fa fa-plus"></i>
                        </button>
                        </div>
                        <div class="mt-3 table-responsive">
                        <table
                            class="table table-striped table-bordered text-center table-hover"
                        >
                            <thead class="text-nowrap text-centered">
                            <tr>
                                <th>Sr.</th>
                                <th>Category</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody class="text-nowrap category-list"></tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <!-- Courses list block coding -->
                <div class="grid">
                    <div class="p-4 shadow-sm bg-white md:col-span-3">
                    <div class="grid md:grid-cols-3 justify-between items-center border-b py-4">
                        <h5 class="text-xl font-semibold">Courses-list</h5>
                        <select class="form-select course-cat-select">
                            <option value="choose category">Choose Category</option>
                        </select>
                        <div class="grid">
                            <div class="text-right">
                                <button
                                    class="add-course-btn btn bg-red-500 text-white rounded-full"
                                    data-bs-toggle="modal"
                                    data-bs-target="#course-modal"
                                    >
                        <i class="fa fa-plus"></i>
                        </button>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive mt-3">
                        <table
                        class="table table-striped table-bordered text-center table-hover"
                        >
                        <thead class="text-nowrap text-centered">
                            <tr>
                            <th>Sr.</th>
                            <th>Thumbnail</th>
                            <th>Category</th>
                            <th>Course-Name</th>
                            <th>Course-Link</th>
                            <th>Price</th>
                            <th>Duration</th>
                            <th>Created At</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="text-nowrap course-list"></tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>

          <!-- Course-Modal -->
          <div
            class="animate__animated animate__zoomIn modal"
            id="course-modal"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="font-semibold text-xl">Create new Course</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form class="course-form">
                    <!-- Course modal form -->
                    <div class="row mb-3">
                      <div class="col-6">
                        <div class="form-group">
                          <label for="thumb">Thumbnail</label>
                          <input
                            class="form-control"
                            id="thumb"
                            name="profile"
                            type="file"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group mb-3">
                          <label for="courseName">Course Name</label>
                          <input
                            name="courseName"
                            class="form-control"
                            id="courseName"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-6">
                        <div class="form-group">
                          <select
                            class="form-select course-category"
                            name="categoryName"
                          ></select>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="duration"
                            placeholder="Choose-Duration"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-6">
                        <div class="form-group">
                          <label for="courseLink">Course Link</label>
                          <input
                            class="form-control"
                            id="courseLink"
                            type="url"
                            name="courseLink"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <label for="coursePrice">Course Price</label>
                          <input
                            class="form-control"
                            id="coursePrice"
                            type="number"
                            name="coursePrice"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mb-3 form-group">
                      <label for="desc">Course Description</label>
                      <textarea
                        name="courseDesc"
                        id="desc"
                        class="form-control"
                      ></textarea>
                    </div>

                    <div class="row mb-3">
                      <div class="col-12 flex gap-3">
                        <div class="form-group">
                          <input type="checkbox" name="live" id="live" />
                          <label for="live">is Live </label>
                        </div>
                        <div class="form-group">
                          <input type="checkbox" name="free" id="free" />
                          <label for="free">is Free</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <button
                        class="w-full btn bg-blue-600 text-white font-semibold"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
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

          <!-- Category-Modal -->
          <div
            class="animate__animated animate__zoomIn modal"
            id="category-modal"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="font-semibold text-xl">Create new Category</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form class="category-form">
                    <div class="form-group mb-3">
                      <label for="courseName">Category</label>
                      <input
                        name="categoryField"
                        class="form-control"
                        id="category"
                        type="text"
                      />
                    </div>
                    <div class="form-group mb-3">
                      <button type="submit"
                        class="w-full btn bg-blue-600 text-white font-semibold "
                      >
                        Submit
                      </button>
                      <button type = "button"
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

export default courses;