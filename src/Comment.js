import React, { Component } from "react";    

export default class Comment extends Component {
    render(){
        return (  
            <div className="comment">
                {this.props.commentText}   
            </div>
        )
    }
}


//Same thing as above with the only difference being: 
//No render() method, we just return JSX, and the props rather than being accessed via this.props come in as an argument 

// function Comment({commentText}){  //With destructuring, similar to having a white list 
//     return (
//         <div className="comment">
//             {commentText}
//         </div>
//     )
// }

// function Comment(props){  //Without destructuring  
//     return (
//         <div className="comment">
//             {props.commentText}
//         </div>
//     )
// }



// export default Comment;  //Exporting as a default export 

