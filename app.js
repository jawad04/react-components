

// var Cake = () => {
// 	return (
// 		<div>
// 		  <p>
// 		    My Cake
// 		  </p>
// 		</div>
// 	)
// }
// var Fish = () => {
// 	return (
// 		  <div>
// 		    <p> My fish </p>
// 		  </div>
// 	)
// }
// var GroceryList = () => {
// 	return (
// 		<div>
// 		<h1> My Grocery List </h1>
// 		  <Cake />
// 		  <Fish />
// 		</div>
// 	)
// }

// var GroceryItemList = (props) => (
//   <ul>
//     <li> {props.todos[0]} </li>
//     <li> {props.todos[1]} </li>
//     <li> {props.todos[2]} </li>
//   </ul>
// )
// var GroceryList = () => (
//   <div> 
//     <h2> My Grocery List </h2>
//     <GroceryItemList todos = {['fish', 'cake', 'cheese']} />
//   </div>
// )

// class GroceryListItem extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render () {
//         return (
//             <li>{this.props.todos}</li>
//         )
//     }
// } 

// const GroceryList = () => {
//     const todos = ['Fish', 'Cake']
//     return (
//         <div>
//             <h1>My Grocery List</h1>
//             <ul>
//             {todos.map(item => {
//                 return <GroceryListItem todos={item}/>
//             })}
//             </ul>
//         </div>
//     )
// }

// class GroceryItemList extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			done: false;
// 		}
// 	}
// 	onListItemClick() {
// 		this.setState({
// 			done: !this.state.done
// 		});
// 	}
// 	render() {
// 		var style = {
// 			textDecoration: this.state.done ? 'line-through' : 'none'
// 		}
// 		return <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
// 		);
// 	}
// }
//  const GroceryList = () => {
//     const todos = ['Fish', 'Cake']
//     return (
//         <div>
//             <h1>My Grocery List</h1>
//             <ul>
//             {todos.map(item => {
//                 return <GroceryListItem todos={item}/>
//             })}
//             </ul>
//         </div>
//     )
// }


// ReactDOM.render(<GroceryList />, document.getElementById('app'));
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            'hover': false
        }
    }

    onListItemHover() {
        this.setState({
            'hover': !this.state.hover
        })
    }

    
    render () {
        var style = {
            fontWeight: this.state.hover ? 'bold' : 'normal'
        }
        return (
            <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.todos}</li>
        )
    }
} 

const GroceryList = () => {
    const todos = ['Fish', 'Cake']
    return (
        <div>
            <h1>My Grocery List</h1>
            <ul>
            {todos.map(item => {
                return <GroceryListItem todos={item}/>
            })}
            </ul>
        </div>
    )
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
