import React, {Component} from "react";
import {
    frame,
    city,desert,sea, forest,
    rose, lilac, daisy, blackhole,
    gold, crystal, stick, green,
    spikes, thorns, leaves, tentacles
} from "../assets";

const propertyMap = {
    backgroundType: {
        city, 
        desert, 
        sea, 
        forest
    },
    flower: {
        rose,
        lilac,
        daisy,
        blackhole
    },
    stem: {
        gold,
        crystal,
        stick,
        green
    },
    addons: {
        spikes,
        thorns,
        leaves,
        tentacles
    }
};

class PlantAvatar extends Component {
    get PlantImage() {
        const plantPropertyMap = {}; 

        this.props.plant.traits.forEach(trait => {
            const { traitType, traitValue } = trait;
            plantPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        const { backgroundType, flower, stem, addons } = plantPropertyMap;       
                 
        return(
            <div className="plant-avatar-image-wrapper">       
                <img src={backgroundType} className="plant-avatar-image-background"/>
                <img src={frame} className="plant-avatar-image-frame"/>
                <img src={addons} className="plant-avatar-image-addons"/>
                <img src={stem} className="plant-avatar-image-stem"/>
                <img src={flower} className="plant-avatar-image-flower"/>       
            </div>
        );
    }

    render(){

        const { travelId, plantId, traits } = this.props.plant;
    
//        if (!plantId) return <div></div>;
        return (
            <div>
                <span>T{travelId}.</span>
                <span>I{plantId}. </span>
    
                { traits.map(trait => trait.traitValue).join(", ") } 
                { this.PlantImage }
             </div>
            )
    }
}

export default PlantAvatar;