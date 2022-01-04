import { React, Fragment } from 'react'
import { AiFillFacebook,AiFillInstagram } from 'react-icons/ai';

/*class Footer extends React.Component{
    render(){
        const customStyle={
            backgroundColor:"red",
            padding:10,
            fontFamily:"Arial",
            color:"white",
            textSize:2
        }
        return(
            <div style={customStyle}>
                hola Soy el footer
            </div>
        )
    }
}
*/

const Footer = (props) => {
    const customStyle = {
        backgroundColor: "red",
        padding: 10,
        fontFamily: "Arial",
        color: "white",
        textSize: 2
    }

    return <Fragment><footer className="page-footer font-small blue pt-4 text-dark form2">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Contactos</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!"> <AiFillFacebook />Facebook</a></li>
                        <li><a href="#!"> <AiFillInstagram />Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> La Bicharraka</a>
        </div>

    </footer></Fragment>

}




export default Footer;

