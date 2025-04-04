import React from "react";

const Footer = () =>{

    return(
        <footer style={{
            background: '#111',
            color : '#fff',
            textAlign: 'center',
            padding: '20px',
            marginTop: '50px'
        }} >
            <p>&copy; {new Date().getFullYear()} RepairMaster. Усі права захищені</p>
        </footer>
    )

}

export default Footer;