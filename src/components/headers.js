import React from "react";

class Header extends React.Component {

    state = {
        keywords : "",
        title : "The keywords are: ",
        name : 'Bob',
        count : 0,
        active:false
    }

    handleClick(e, name=7000){
        console.log('why you type')
        console.log(name);
    }

    inputChangeHandler = (e) => {
        const active = e.target.value === '' ? false:true;
        this.setState({
            keywords: e.target.value,
            active:active
        })
    }

    addCount = () => {
        this.setState((state, props) => {
            console.log(props);
            return {
                count: state.count + 1
            }
        })
        // this.setState({
        //     count: this.state.count + 1,
        // })
    }

    render(){
        console.log(this.state.active);
        return(
            <header>
                <div className="logo">Logo</div>
                <div style={{color: `${this.state.active === true ? 'yellow' : 'red'}`}}>
                    {`${this.state.active ? 'yellow' : 'red'}`}
                </div>
                <input 
                    onChange={this.inputChangeHandler}
                    // onChange={(e) => this.handleClick(e, 'Chibueze')}
                />
                <div>{this.state.keywords}</div>
                <button onClick={this.addCount}>{this.state.count}</button>
            </header>
        )
    }
}

export default Header;