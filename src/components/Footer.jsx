import { React, Fragment } from 'react'
import { BsFacebook, BsInstagram,BsGoogle,BsTwitter,BsLinkedin } from 'react-icons/bs';

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

    return <Fragment>
        <footer className="page-footer font-small blue pt-4 text-dark border-top bg-primary">
            <div className="container-fluid text-center text-md-left">
                <section class="mb-4">

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><BsFacebook /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><BsInstagram /></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><BsGoogle /></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><BsTwitter /></a>


                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><BsLinkedin /></a>

            </section>
            
        </div>

        <div className="footer-copyright text-center py-3 text-light">© 2020 Copyright:
            <a href="https://mdbootstrap.com/" className='text-light' style={{textDecoration:"none"}}> La Bicharraka</a>
        </div>

    </footer></Fragment >

}




export default Footer;

