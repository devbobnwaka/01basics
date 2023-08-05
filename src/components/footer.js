import React from "react";

class Footer extends React.Component{

    render(){
        return(
            <footer>
                {this.props.footerText}
            </footer>
        )
    }
}

export default Footer