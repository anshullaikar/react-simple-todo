import React, {Component} from "react"

class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({content: ""})
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" value = {this.state.content}onChange = {this.handleChange}/>
                </form>
            </div>
        )
    }
}
export default AddTodo;