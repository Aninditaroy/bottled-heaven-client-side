import React from 'react';

const Blog = () => {
    return (
        <div className='my-16 flex justify-center'>
            <ol className="relative border-l border-gray-200 dark:border-gray-700" style={{width:'750px'}}>
                <li className="mb-10 ml-8">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-pink-100  rounded-full ring-8 ring-white ml-3">
                        <svg className="w-3 h-3 text-pink-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">Difference between javascript and nodejs? <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">Question-1</span></h3>
                    <p className="text-base font-normal whitespace-wrap  text-gray-500 mt-3">Javascript is a programming language and NodeJS is a javascript runtime environment.Javascript only run in browser,but with the help of NodeJS we can run JS outside the browser.Javascript is for front-end development whereas NodeJS is a server-side development.Javascript can add HTML and play with DOM but NodeJS does not have the capacit to add HTML tags.Javascript can run in any browser engine on the other hand V8 is the JS machine inside of NodeJS that parses and runs javascript.</p>
                </li>
                <li className="mb-10 ml-8">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-pink-100  rounded-full ring-8 ring-white ml-3">
                        <svg className="w-3 h-3 text-pink-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">When should you use nodejs and when should you use mongodb?<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">Question-2</span></h3>
                    <p className="text-base font-normal text-gray-500 mt-3">Node.js is fast, lightweight and efficient. It uses the asynchronous mode of operation, event-driven Input/Output rather than using the traditional threads or separate threads for each process.Node.js is the greatest tool for building real-time web applications. It provides cross-platform applications which run easily on any web.We used MongoDB for open-source data to use like flexible schema.MongoDB makes it easy for developers to store structured or unstructured data.It uses a JSON-like format to store documents.MongoDB is good for E-Commerce type of product-based applications,blog and management,CRUD operations.</p>
                </li>
                <li className="mb-10 ml-8">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-pink-100  rounded-full ring-8 ring-white ml-3">
                        <svg className="w-3 h-3 text-pink-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 ">Differences between sql and nosql databases?<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">Question-3</span></h3>
                    <p className="text-base font-normal  text-gray-500 mt-3">SQL is RDBMS(Realtional database management system) and NoSQL is non-relational database system.SQL databases have fixed or static or predefined schema and NoSQL have dynamic schema.SQL are vertically scable and viceversa.SQL databases are not good for hierarchical data storage and on the other hand NoSQL are suited for hierarchical data storage.</p>
                </li>
                <li className="mb-10 ml-8">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-pink-100  rounded-full ring-8 ring-white ml-3">
                        <svg className="w-3 h-3 text-pink-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">What is the purpose of jwt and how does it work?<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">Question-4</span></h3>
                    <p className="text-base font-normal text-gray-500 mt-3">JWt stands for json web token.It is an open standard used to share sequrity information betwwen 2 parties --- a client and a server.Each JWT contains encoded JSOn objects.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWT has two strings like: the header and the payload,the signature.The payload contains the claims.The signature ensures that the token hasn't been altered</p>
                </li>
            </ol>

        </div>
    );
};

export default Blog;