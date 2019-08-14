import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.scss';
import SidePanel from "../../components/SidePanel/SidePanel";

class LandingPage extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            isFormPageOneActive: true,
            formData: {
                role: "",
                noOfEmp: 0,
                noOfChkAcc: 0,
                totalBal: "",
                monthlyexp: "",
                checksWritten: 0,
                billPaidOnline: 0,
                ePayments: 0,
                wireTransfers: 0
            }
        }

    }

    componentDidMount() {
        this._isMounted = true;
        let script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/4e3a2b024e.js";
        script.async = true;
        document.body.appendChild(script);
/*
        let link = document.createElement("link");
        link.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        link.rel="stylesheet";
        document.head.appendChild(link);
*/
        
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    pageChange = (e, page) => {
        if (page) {
            let { isFormPageOneActive } = this.state;
            if (page === "page1") {
                isFormPageOneActive = false;
            } else if (page === "page2") {
                isFormPageOneActive = true;
            }
            this.setState({ isFormPageOneActive: isFormPageOneActive });
        }
    }
    handleChange = (e, type, currency) => {
        if (type) {
            let { formData } = this.state;
            formData[type] = e.target.value;
            this.setState({ formData: formData });
        }
    }
    handleBlur = (e, type) => {
        if (type) {
            let { formData } = this.state;
            let formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            formData[type] = formatter.format(formData[type]);
            this.setState({ formData: formData });
        }
    }

    render() {
        console.log("From landing Page State ===> ", this.state);
        const { isFormPageOneActive, formData } = this.state;
        return (

            <div className="maindiv">
                <div className="maininndiv">
                    <div className="logo" />



                    {isFormPageOneActive && (
                        <div className="formWrapper">
                            <div className="formTitle">Business Information</div>
                            <form className="formContent">
                                <div className="questionWrapper">
                                    <div className="question">What is your role in the business?</div>
                                    <select className="answer dropdown">
                                        <option>Owner</option>
                                        <option>Manager</option>
                                    </select>
                                </div>
                                <div className="questionWrapper">
                                    <div className="question">Number of employees (including you)</div>
                                    <input
                                        value={formData && formData.noOfEmp}
                                        type="number"
                                        min="0"
                                        className="answer"
                                        onChange={e => this.handleChange(e, "noOfEmp")}
                                    />
                                </div>
                                <div className="questionWrapper">
                                    <div className="question">Number of business checking accounts?</div>
                                    <input
                                        value={formData && formData.noOfChkAcc}
                                        type="number"
                                        min="0"
                                        className="answer"
                                        onChange={e => this.handleChange(e, "noOfChkAcc")}
                                    />
                                </div>
                                <div className="questionWrapper">
                                    <div className="question">Estimated total balance of all your business deposit accounts ($)?  <span className="glyphicon glyphicon-info-sign"></span></div>
                                    <input
                                        value={formData && formData.totalBal}
                                        type="text"
                                        className="answer"
                                        onChange={e => this.handleChange(e, "totalBal", "currency")}
                                        onBlur={e => this.handleBlur(e, "totalBal")}
                                    />
                                </div>
                            </form>
                        </div>
                    )}

                    {!isFormPageOneActive && (
                        <div className="formWrapper big">
                            <div className="formTitle">Understanding How Your Business Pays Vendors and Suppliers</div>
                            <form className="formContent">

                                <div className="questionWrapper">
                                    <div className="question">What are the monthly expenses for your business?</div>
                                    <input
                                        value={formData && formData.monthlyexp}
                                        className="answer"
                                        onChange={e => this.handleChange(e, "monthlyexp", "currency")}
                                        onBlur={e => this.handleBlur(e, "monthlyexp")}
                                    />
                                </div>
                                <div className="questionWrapper">
                                    <div className="question singleline">How many of the following do you have each month?</div>

                                </div>
                                <div className="questionWrapper">
                                    <div className="question subQue">Checks Written</div>
                                    <input
                                        value={formData && formData.checksWritten}
                                        type="number"
                                        min="0"
                                        className="answer orange"
                                        onChange={e => this.handleChange(e, "checksWritten")}
                                    />
                                </div>

                                <div className="questionWrapper">
                                    <div className="question subQue">Bills Paid Online</div>
                                    <input
                                        type="number"
                                        min="0"
                                        className="answer blue"
                                        value={formData && formData.billPaidOnline}
                                        onChange={e => this.handleChange(e, "billPaidOnline")}
                                    />
                                </div>

                                <div className="questionWrapper">
                                    <div className="question subQue">ePayments (ACH)</div>
                                    <input
                                        type="number"
                                        min="0"
                                        className="answer orange"
                                        value={formData && formData.ePayments}
                                        onChange={e => this.handleChange(e, "ePayments")}
                                    />
                                </div>

                                <div className="questionWrapper">
                                    <div className="question subQue">Wire Transfers</div>
                                    <input
                                        type="number"
                                        min="0"
                                        className="answer green"
                                        value={formData && formData.wireTransfers}
                                        onChange={e => this.handleChange(e, "wireTransfers")}
                                    />
                                </div>
                            </form>
                        </div>
                    )}

                    <div
                        className="navigationText backBtn"
                        onClick={e => this.pageChange(e, "page2")}
                    ><i className="fas fa-reply"></i> back</div>
                    <div
                        className="navigationText nextbtn"
                        onClick={e => this.pageChange(e, "page1")}
                    >next <i className="fas fa-chevron-circle-right"></i></div>


                </div>


                <div className="footer">
                    <div className="footerText">Getting to know your business</div>
                </div>

                <SidePanel />

            {/*
                <div className="topNavigation">
                    <span className="glyphicon glyphicon-menu-down"></span>
                </div>

            */}
            </div>



        );
    }
}

LandingPage.propTypes = {

};

export default LandingPage;