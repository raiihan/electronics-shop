import React from 'react';

const Fqa = () => {
    return (
        <div>
            <div className="accordion accordion-flush container my-5 w-50" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How does React work?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Basically React maintains a tree. This tree able to do diff algorithm computation on the nodes.<br />
                            <code>JSX</code><br />
                            JSX means Javascript XML. It is the syntactic sugar of HTML . JSX is used for creating javascript objects like createElement.
                            <br />
                            <code>Virtual DOM</code><br />
                            React implements a virtual DOM that is basically a DOM tree representation in JavaScript. It is a soft copy of browser DOM. When you change props or state that time react create a DOM and Compared with own virtual DOM for check where happened the change and update browser DOM that particular part.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is the difference between props vs useState?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <code>Props:-</code> React Props are like function arguments in JavaScript and attributes in HTML. <br />
                            <code>useState:-</code> React useState return a state full value and a function to update it.
                            <table className="table table-success table-striped table-bordered border-dark my-5">
                                <thead>
                                    <tr>

                                        <th scope="col">Props</th>
                                        <th scope="col" >State</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Props are immutable</td>
                                        <td>State is mutable</td>

                                    </tr>
                                    <tr>


                                        <td>Props are read-only</td>
                                        <td>State changes can be asynchronous</td>
                                    </tr>
                                    <tr>

                                        <td>Stateless components can have Props</td>
                                        <td>Stateless components can not have State</td>
                                    </tr>
                                    <tr>

                                        <td>Props allow to pass data from one components to other components as an arguments</td>
                                        <td>State holds information about the components</td>
                                    </tr>
                                    <tr>
                                        <td>Props can be accessd by the child components</td>
                                        <td>State can not be accessd by child component</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How does useState work?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <code>useState:-</code> returns a state full value and a function to update it. <br />
                            useState এর array এর Second Element হিসাবে যে function (setState) পাওয়া যায় সেটা মূলত setState এর Action কে dispatch করে।<br />
                            setState যদি কোনো Action যায় এবং সেটা  নতুন value কিনা চেক করে useState এর variable এর মান কে change করে নতুন মান বসিয়ে দেয়।<br />
                            এবং setState function Asynchronous  way তে কাজ করে.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fqa;