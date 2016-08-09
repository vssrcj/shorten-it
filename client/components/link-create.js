import React, { Component } from "react";

class LinkCreate extends Component {
   handleSubmit(event) {
      event.preventDefault();
      Meteor.call("links.insert", this.refs.input.value);
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
            <button class="btn btn-primary" type="submit">
               Shorten!
            </button>
         </form>
      );
   }
}

export default LinkCreate;
