import React, {Component} from 'react';

class Dashboard extends Component{

    render(){
        return(
            <div className="container">
                <div>
                    <h4>Order ID: <span>ZYP-1234</span></h4>
                </div>
                <ul className="process">
                    <li className="processPercent"></li>
                    <li><i class="material-icons">add_shopping_cart</i><span className="iconHead" >hello</span></li>
                    <li><i class="material-icons">local_shipping</i><span className="iconHead" >hello</span></li>
                    <li><i class="material-icons">done_all</i><span className="iconHead" >hello</span></li>
                </ul>
                <h3>DETAILS</h3>
                <div className="detBox grey">
                </div>

                <div className="userDet">
                    <ul class="collection">
                        <li class="collection-item avatar">
                            <div className="userAva" ></div>
                            <span class="title">Golden Facewash</span>
                            <p>+91 70222 41471 <br />
                            nandha@zypher.co
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="deliveryLoc grey lighten-4">
                    <h6>Delivery Location</h6>
                    <div className="userAddress white" >
                    <div className="userHomeIcon orange lighten-2"><i class="material-icons">home</i></div>
                        <h3>Casa</h3>
                        <p>Vimal Apartment, Nehru Road, Vile Parle East</p>
                        <p>Mumbai, Maharashtra</p>
                        <div className="action">
                            <div class="waves-effect waves-light btn-flat grey-text text-lighten-1"><i class="material-icons left">edit</i>Editor</div>
                            <div class="waves-effect waves-light btn-flat grey-text text-lighten-1"><i class="material-icons left">delete</i>Eliminar</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;