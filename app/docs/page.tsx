const page = () => {
    return(
        <>
          <div className="my-8">
                  <nav className="bg-blue-500 p-4">
                    <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
                      <a
                        href="#"
                        className="mb-4 text-2xl font-bold text-[white] sm:mb-0"
                      >
                        Your Logo
                      </a>
                      <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <li>
                          <a href="#" className="text-white">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-white">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
        </>
    )
}

export default page;