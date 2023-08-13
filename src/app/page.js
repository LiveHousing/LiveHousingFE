import Header from '@/components/Header'
import React from "react";


const Home = () => {
    return (
        <>
            <Header/>
            <>
                <header>

                    {/*<img
                        src=""
                        alt="Housing analytics image"/>*/}
                    <div className='hero'/>
                    <section className="features">
                        <h1>Analyze Housing Prices Like Never Before</h1>
                        <h2>Features</h2>
                        <p>Discover trends, compare regions, and make smarter investment decisions with our advanced
                            analytics
                            tools.</p>
                        <h2>Stay Updated</h2>
                        <p>Join our waiting list.</p>
                        <form method="post">

                            <input
                                className="w-full px-4  py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                                type="email" name="email" placeholder="Enter your email" required/>

                            <div
                                className="my-4 items-center before:border-t flex before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
                            </div>
                            <button
                                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg "
                                type="submit">Subscribe
                            </button>
                        </form>
                    </section>
                </header>

                <footer>
                    <p>Contact us: contact@yourdomain.com | Follow us on <a
                        href="https://twitter.com/your_handle">Twitter</a></p>
                </footer>
            </>
        </>
    )
}

export default Home