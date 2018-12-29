import React, {Component} from 'react';
import axios from 'axios'

class Dashboard extends Component{
    state={

    }

    componentWillMount(){
        const Url = "https://test-zypher.herokuapp.com/orders/getOrderDetails"
        const req = { "orderId" : "5c1a9b66b269441f4b217d5d" }

        axios.post(Url, req).then((response)=>{
            console.log(response)
        })
    }

    render(){
        return(
            <div className="container">
                <div>
                    <h4>Order ID: <span>ZYP-1234</span></h4>
                </div>
                <ul className="process">
                    <li className="processPercent"></li>
                    <li><i className="material-icons">add_shopping_cart</i><span className="iconHead" >hello</span></li>
                    <li><i className="material-icons">local_shipping</i><span className="iconHead" >hello</span></li>
                    <li><i className="material-icons">done_all</i><span className="iconHead" >hello</span></li>
                </ul>
                <h3>DETAILS</h3>
                <div className="detBox grey lighten-4">
                    <div className="orderRec">
                        <i className="material-icons">watch_later</i>
                        <p className="title">Order Received</p>
                        <p className="subtitle">09:10 AM, 9 May 2018</p>
                        <div className="white booksImg"></div>
                    </div>
                    <div className="booksWithYou">
                        <i className="material-icons">import_contacts</i>
                        <p className="title">Books With You</p>
                        <p className="subtitle">Swap Books in good Conditions</p>
                        <div className="white booksImg"></div>
                    </div>
                </div>

                <div className="userDet">
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <div className="userAva" ></div>
                            <span className="title">Golden Facewash</span>
                            <p>+91 70222 41471 <br />
                            nandha@zypher.co
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="deliveryLoc grey lighten-4">
                    <h6>Delivery Location</h6>
                    <div className="userAddress white" >
                    <div className="userHomeIcon orange lighten-2"><i className="material-icons">home</i></div>
                        <h3>Casa</h3>
                        <p>Vimal Apartment, Nehru Road, Vile Parle East</p>
                        <p>Mumbai, Maharashtra</p>
                        <div className="action">
                            <div className="waves-effect waves-light btn-flat grey-text text-lighten-1"><i className="material-icons left">edit</i>Editor</div>
                            <div className="waves-effect waves-light btn-flat grey-text text-lighten-1"><i className="material-icons left">delete</i>Eliminar</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;