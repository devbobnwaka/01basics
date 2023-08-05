import React, {Component} from "react";


class Life extends Component {

    // First React component that kicks in
    constructor(props){
        super(props);
        this.state = {name:'Francis'}
        console.log('1-Constructor');
    }

    // Second React component that kicks in after the constructor()
    static getDerivedStateFromProps(props, state){
        console.log('2-getDerivedStateFromProps');
        if(state.name === 'Bob'){
            return{
                name:'Mango'
            }
        }
        return null;
    }

    // Fourth React component that kicks in after the render()
    componentDidMount(){
        console.log('4-componentDidMount');

    }


    // Fifth React component that kicks in after the componentDidMount()
    componentWillUnmount(){
        console.log('5-componentWillUnmount');

    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('x-shouldComponentUpdate');
        // console.log(this.state);
        // console.log(nextState);
        if(nextState.name === 'Steve'){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('x-getSnapshotBeforeUpdate');
        // console.log(this.state);
        // console.log(prevState);
        // console.log(prevProps);
        const age = 20;
        return age
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('x-componentDidUpdate');
        // console.log(this.state);
        // console.log(prevState);
        console.log(snapShot);
    }

    // Third React component that kicks in after the getDerivedStateFromProps()
    render(){
        console.log('3-Render');
        return(
            <div onClick={()=>(this.setState({name:"Bob"}))}>
                <div>{this.state.name}</div>
                <div>Change name</div>
            </div>
        )
    }
}

export default Life