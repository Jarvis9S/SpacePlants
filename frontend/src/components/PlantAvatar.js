import React, {Component} from "react";

class PlantAvatar extends Component {
    render(){

        const { travelId, plantId, traits } = this.props.plant;
        return (
            <div>
                <span>T{travelId}.</span>
                <span>I{plantId}. </span>
    
                { traits.map(trait => trait.traitValue).join(", ") } 
             </div>
            )
    }
}

export default PlantAvatar;