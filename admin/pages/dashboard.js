const dashboard = `
     <div class="animate__animated animate__zoomIn grid gap-3 md:grid-cols-4">
     
                <div class="p-4 bg-white shadow-sm grid grid-cols-2 gap-2">
                    <div class="flex flex-column  items-center border-r gap-3">
                        <button class="btn bg-red-600 text-white rounded-full w-11 h-11">
                            <i class="fa-regular fa-user"></i>
                        </button>
                        <h5 class="text-xl font-semibold text-red-500">Students</h5>
                    </div>
                    <div class="flex flex-column items-center gap-3">
                        <h5 class="text-5xl font-semibold text-red-400">36k</h5>
                        <p class="text-lg text-gray-500">35,565</p>
                    </div>
                </div>
                <div class="p-4 bg-white shadow-sm grid grid-cols-2 gap-2">
                    <div class="flex flex-column  items-center border-r gap-3">
                        <button class="btn bg-green-600 text-white rounded-full w-11 h-11">
                            <i class="fa-regular fa-user"></i>
                        </button>
                        <h5 class="text-xl font-semibold text-green-500">Courses</h5>
                    </div>
                    <div class="flex flex-column items-center gap-3">
                        <h5 class="text-5xl font-semibold text-green-400">13k</h5>
                        <p class="text-lg text-gray-500">12.565</p>
                    </div>
                </div>
                
                <div class="p-4 bg-white shadow-sm grid grid-cols-2 gap-2">
                    <div class="flex flex-column  items-center border-r gap-3">
                        <button class="btn bg-yellow-600 text-white rounded-full w-11 h-11">
                            <i class="fa-regular fa-user"></i>
                        </button>
                        <h5 class="text-xl font-semibold text-yellow-500">Students</h5>
                    </div>
                    <div class="flex flex-column items-center gap-3">
                        <h5 class="text-5xl font-semibold text-yellow-400">36k</h5>
                        <p class="text-lg text-gray-500">35,565</p>
                    </div>
                </div>
                <div class="p-4 bg-white shadow-sm grid grid-cols-2 gap-2">
                    <div class="flex flex-column  items-center border-r gap-3">
                        <button class="btn bg-blue-600 text-white rounded-full w-11 h-11">
                            <i class="fa-regular fa-user"></i>
                        </button>
                        <h5 class="text-xl font-semibold text-blue-500">Students</h5>
                    </div>
                    <div class="flex flex-column items-center gap-3">
                        <h5 class="text-5xl font-semibold text-blue-400">36k</h5>
                        <p class="text-lg text-gray-500">35,565</p>
                    </div>
                </div>
                <div class="p-4 bg-white md:col-span-4 area-column-chart"></div>
                <!-- 1st column -->
                <div class="p-4 md:col-span-2 bg-white area-chart"></div>

                <!-- 2nd column -->
                <div class="p-4 bg-white shadow-sm">
                    <div class="border-b my-3">
                        <h5 class="mb-3 font-semibold ">Recent Students</h5>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                </div>

                <!-- 3rd column -->
                <div class="p-4 bg-white shadow-sm">
                    <div class="border-b my-3">
                        <h5 class="mb-3 font-semibold ">Recent Courses</h5>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 border-b p-2">
                        <img src="../assets/images/hotelLogo.jpg" class="w-8 h-8 rounded-full " alt="">
                        <div class="col-span-2">
                            <h5 class="mb-1">Alok kumar</h5>
                            <p class="text-sm text-gray-400">24-0901993</p>
                        </div>
                        <div>
                            <button class="btn bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-content-center"><i class="fa-regular fa-circle-xmark"></i></button>
                        </div>
                    </div>
                    </div>
                    
                    </div>
`;
export default dashboard;