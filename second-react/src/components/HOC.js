import React from "react"

//High Order Component
const HOC  = ComposedComponent => class extends React.Component {

    onclick(){
        console.log('Hello World')
    }

    superFetch(url){
        fetch(url)
    }

    render() {
        return (
            <ComposedComponent {...this.props}  onclick = {this.onclick} fetch = {this.superFetch}/>
        )
    }

}

const FirstComponent = (props) =>{(
    <div onClick={props.onClick}>
        Hello, {props.name} I am firstComponent
    </div>
)
}

export const SharedComponent = HOC(FirstComponent)