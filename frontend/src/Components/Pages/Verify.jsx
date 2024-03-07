import React from 'react'

const Verify = () => {
    return (
        <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-teal-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Recharge your way to convenience
                        

                        <span className="sm:block">  </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Ready to recharge? Who's the lucky recipient?
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium  hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                            href="#"
                        >
                            Myself
                        </a>

                        <a
                            className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium  hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                            href="#"
                        >
                            Friends
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Verify