import React, { Component } from 'react';

class Counter extends Component{

    state = {
      count: this.props.value,
      tags: []
      //imageUrl: 'https://picsum.photos/200'
     };

     styles = {
       fontSize: '30px',
       fontWeight: 'bold'
     };

     // constructor(){
     //   super();
     //   this.handleIncrement = this.handleIncrement.bind(this);
     // }

     renderTags(){
       if(this.state.tags.length === 0) return <p>There are no tags!</p>

       return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>

     }

     handleIncrement = product => {
       console.log('Increment Clicked');
       console.log(product)
       this.setState({ count: this.state.count + 1 })

     };

     product = {
       id: 1
     }

    render() {


      return (

        <div>
        { this.state.tags.length === 0 && <h1>Please enter the tags!</h1> }

          {this.renderTags()}

           <span style={this.styles} className={this.badgeCalc()}>{this.state.count + formatCount()}</span>

           <button  onClick={ () => this.handleIncrement(this.product.id) }
                    style ={ {fontSize: 20} }
                    className = "btn btn-info btn-sm">Increment

           </button>
          <input id = "text1" placeholder = "enter"></input>
        </div>

      );
    }

    badgeCalc(){
      let classes = "badge m-2 badge-";
      return classes += this.state.count === 0 ? "warning" : "primary";
    }

}



function formatCount() {

  return 0;

}

export default Counter;
