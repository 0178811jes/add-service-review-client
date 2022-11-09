import React from 'react';

const Blogs = () => {
    return (
        
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 pb-2 ">

            <div className="mockup-phone text-align-center">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                    <h6> Q 1. What is the difference between SQL and SQL?</h6>
                    <p> Ans: The main difference between SQL and MS SQL is that SQL is a query language that is used in relation databases whereas MS SQL Server is itself a relational database management system (RDBMS) developed by Microsoft. </p>
                    
                    </div>
                    

                </div>
            </div>
            <div className="mockup-phone text-align-center">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                    <h6>Q 2. what is jwt and how it works?</h6>
                    <h6>ANS: JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key. Wikipedia</h6>
                    <p>JSON Web Tokens are an open, standard way for you to represent your user's identity securely during a two-party interaction. First, the user or client app sends a sign-in request. In this step, essentially, a username, password, or any other type of sign-in credentials the user provides will travel to the API.</p>
                    </div>
                    
                </div>
            </div>
            <div className="mockup-phone text-align-center">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                    <h6>Q 3. defferent between javascript and nodejs?</h6>
                    <h6>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h6>
                    </div>
                </div>
            </div>
            <div className="mockup-phone text-align-center">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <h6>Q 4. how does node js handle multiple requests at same time</h6>
                        <h5>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;