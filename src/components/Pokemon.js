import React from 'react';

function Pokemon({ pokemon }) {
    const { id, name, sprites } = pokemon;

    const cardStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFF3CF",
        width: "330px",
        height: "auto",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        borderRadius: "10px",
      };

    const textContainerStyle = {
        flex: "1",
        padding: "10px",
        paddingLeft: "20px"
    };

    const imgStyle = {
        width: "100px",
        height: "100px",
        marginLeft: "auto",
        marginRight: "10px",
    };

    return (
        <div style={cardStyle}> 
            <div style={textContainerStyle}>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
            </div>
            {sprites && sprites.front_default && ( 
                <img src={sprites.front_default} alt={name} style={imgStyle} /> 
            )}
        </div>
    );
}

export default Pokemon;
