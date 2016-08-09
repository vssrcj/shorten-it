import React, { Component } from "react";

class LinkCreate extends Component {

   constructor(props) {
      super(props);
      this.state = { error: "" };
   }

   handleSubmit(event) {
      event.preventDefault();
      Meteor.call("links.insert", this.refs.input.value, err => {
         if(err) {
            this.setState({ error: "Enter a valid url" });
         }
         else {
            this.setState({ error: "" });
            this.refs.input.value = "";
         }
      });
   }
   render() {
      return (
         <form onSubmit={this.handleSubmit.bind(this)}>
            <div class="form-group">
               <label>
                  Link to shorten
               </label>
               <input ref="input" class="form-control" />
            </div>
            <div class="text-danger">
               {this.state.error}
            </div>
            <button class="btn btn-primary" type="submit">
               Shorten!
            </button>
         </form>
      );
   }
}

export default LinkCreate;
