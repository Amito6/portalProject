const courses = `
    /*  <div class="grid md:grid-cols-5 gap-3">
                <div class="p-4 shadow-sm bg-white md:col-span-3">
                    <div class="flex justify-between items-center border-b py-2">
                        <h5 class="text-xl font-semibold">Courses-list</h5>
                    <button class="btn bg-red-500 text-white rounded-full" data-bs-toggle="modal" data-bs-target="#course-modal">
                        <i class="fa fa-plus"></i>
                    </button>
                    </div>
                    <div class="table-responsive mt-3">
                        <table class="table table-striped table-bordered text-center table-hover">
                            <thead class="text-nowrap text-centered">
                                <tr>
                                    <th>Sr.</th>
                                    <th>Thumbnail</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Course-Name</th>
                                    <th>Course-Link</th>
                                    <th>Duration</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="../assets/images/hotelLogo.jpg" width="40px" alt="Thumbnail">
                                    </td>
                                    <td>Fron-End</td>
                                    <td>Nodejs</td>
                                    <td><a href="#">Link</a></td>
                                    <td>$2500</td>
                                    <td>4 months</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="../assets/images/hotelLogo.jpg" width="40px" alt="Thumbnail">
                                    </td>
                                    <td>Fron-End</td>
                                    <td>Nodejs</td>
                                    <td><a href="#">Link</a></td>
                                    <td>$2500</td>
                                    <td>4 months</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="../assets/images/hotelLogo.jpg" width="40px" alt="Thumbnail">
                                    </td>
                                    <td>Fron-End</td>
                                    <td>Nodejs</td>
                                    <td><a href="#">Link</a></td>
                                    <td>$2500</td>
                                    <td>4 months</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="../assets/images/hotelLogo.jpg" width="40px" alt="Thumbnail">
                                    </td>
                                    <td>Fron-End</td>
                                    <td>Nodejs</td>
                                    <td><a href="#">Link</a></td>
                                    <td>$2500</td>
                                    <td>4 months</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="p-4 shadow-sm bg-white md:col-span-2">
                    <div class="flex justify-between items-center border-b py-2">
                        <h5 class="text-xl font-semibold">Category-list</h5>
                    <button data-bs-toggle="modal" data-bs-target="#category-modal" class="btn bg-red-500 text-white rounded-full">
                        <i class="fa fa-plus"></i>
                    </button>
                    </div>
                    <div class="table-responsive mt-3">
                        <table class="table table-striped table-bordered text-center table-hover">
                            <thead class="text-nowrap text-centered">
                                <tr>
                                    <th>Sr.</th>
                                    <th>Category</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Fron-End</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Fron-End</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Fron-End</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Fron-End</td>
                                    <td>23-March-2024</td>
                                    <td>
                                        <button class="btn text-blue-500"><i class="fa fa-edit"></i></button>
                                        <button class="btn text-red-500"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
            <div class=" animate__animated animate__zoomIn modal" id="course-modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="font-semibold text-xl">Create new Course</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="course-form">
                                <div class="form-group mb-3">
                                    <label for="thumb">Thumbnail</label>
                                    <input class="form-control" id="thumb" type="file">
                                </div>
                                <div class="form-group mb-3">
                                    <select class="form-select mb-3">
                                        <option     value="choose-category">Choose Category</option>
                                        <option value="front-end">Front-End</option>
                                        <option value="chosse category">Choose Category</option>
                                    </select>
                                    <div class="form-group mb-3">
                                        <label for="courseName">Course Name</label>
                                        <input class="form-control" id="courseName" type="text">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="courseLink">Course Link</label>
                                        <input class="form-control" id="courseLink" type="url">
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="coursePrice">Course Price</label>
                                        <input class="form-control" id="coursePrice" type="number">
                                    </div>
                                    <div class="form-group mb-3">
                                        <select class="form-select mb-3">
                                            <option     value="choose-duration">Choose Duration</option>
                                            <option value="4-month">4-Month</option>
                                            <option value="2-month">2-month</option>
                                            <option value="6-month">6-month</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="desc">Course Price</label>
                                        <textarea name="" id="desc" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group mb-3">
                                        <button class="w-full btn bg-blue-600 text-white font-semibold">
                                            Submit
                                        </button>
                                        <button class="w-full btn bg-red-400 text-white font-semibold d-none">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" animate__animated animate__zoomIn modal" id="category-modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="font-semibold text-xl">Create new Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="course-form">
                                <div class="form-group mb-3">
                                    <select class="form-select mb-3">
                                        <option     value="choose-category">Choose Category</option>
                                        <option value="front-end">Front-End</option>
                                        <option value="chosse category">Choose Category</option>
                                    </select>
                                    <div class="form-group mb-3">
                                        <button class="w-full btn bg-blue-600 text-white font-semibold">
                                            Submit
                                        </button>
                                        <button class="w-full btn bg-red-400 text-white font-semibold d-none">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */
`;

export default courses;