const users = `
          <div class="users">
                <!-- Page content -->
                <div class="animate__animated animate__zoomIn user-list grid md:grid-cols-3 gap-4">
                    <!-- 1st div -->
                   
                    <!-- End of first div -->
                </div>


                <!-- Modal Toggle button -->
                <button data-bs-toggle="modal" data-bs-target="#user-modal" class="position-fixed bottom-0 right-0 m-16 btn bg-red-500 text-white w-11 h-11 rounded-full shadow-sm">
                    <i class="fa fa-add"></i>
                </button>

                <!-- User Modal -->

                <div class="animate__animated animate__zoomIn modal" id="user-modal">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="font-semibold text-xl">Create new Users</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>


                            <div class="modal-body">

                                <!-- Form Coding -->

                                <form class="users-form">
                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="name">Profile<sup class="text-red-500">*</sup></label>
                                                <input type="file" name="profile" class="form-control">
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="name">Category Name <sup class="text-red-500">*</sup></label>
                                                <input type="text" name="category-name" required class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="mobile">Mobile <sup class="text-red-500">*</sup></label>
                                                <input type="number" name="mobile" required id="mobile" placeholder="Mobile Number" class="form-control">
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="email">Email<sup class="text-red-500">*</sup></label>
                                                <input type="email" name="email" id="email" required class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="password">Password <sup class="text-red-500">*</sup></label>
                                                <input type="password" name="password" id="password" required  placeholder="Password" class="form-control">
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="father">Fathers Name<sup class="text-red-500">*</sup></label>
                                                <input type="text" name="fathers-name" id="father" required class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="qualification">Qualification <sup class="text-red-500">*</sup></label>
                                                <select class="form-select" name="qualification" id="qualification">
                                                    <option value="select-qualification">Select-Qualification</option>
                                                    <option value="highSchool">highSchool</option>
                                                    <option value="inter">inter</option>
                                                    <option value="ug">UG</option>
                                                    <option value="pg">PG</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="checkbox" name="status">
                                                <label for="father">Is Active</label>
                                            </div>
                                        </div>
                                        <div class="col-6 flex gap-3">
                                            <div class="form-group">
                                                <input type="radio" name="type" value="admin">
                                                <label>Admin</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="radio" name="type" value="teacher">
                                                <label>Tecaher</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="radio" name="type" value="user">
                                                <label>User</label>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="course">Select Course <sup class="text-red-500">*</sup></label>
                                                <select class="form-select" required name="course" id="course" multiple>
                                                    <option value="selectcourses">Select Courses</option>
                                                    <option value="Nodjs">Nodejs</option>
                                                    <option value="Reactjs">Reactjs</option>
                                                    <option value="js">js</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="courses">Address<sup class="text-red-500">*</sup></label>
                                                <textarea name="address" id="" class="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group mb-3">
                                        <button class="w-full btn bg-blue-600 text-white font-semibold">
                                            Submit
                                        </button>
                                        <button class="w-full btn bg-red-400 text-white font-semibold d-none">
                                            Update
                                        </button>
                                    </div>
                                
                                </form>
                            </div>
                        </div>
                </div>

                </div>
            <!-- End of user Modal -->

            </div>

`;
export default users;