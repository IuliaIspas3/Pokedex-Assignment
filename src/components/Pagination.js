import React from "react";

function Pagination({ currentPage, setCurrentPage }) {
    const paginationStyle = {
        display: "inline-flex",
        gap: "10px"
    };

    const buttonStyle = {
        alignItems: 'center',
        appearance: 'none',
        backgroundColor: '#fff',
        borderRadius: '24px',
        borderStyle: 'none',
        boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0',
        boxSizing: 'border-box',
        color: '#3c4043',
        cursor: 'pointer',
        display: 'inline-flex',
        fill: 'currentcolor',
        fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        height: '48px',
        justifyContent: 'center',
        letterSpacing: '.25px',
        lineHeight: 'normal',
        maxWidth: '100%',
        overflow: 'visible',
        padding: '2px 24px',
        position: 'relative',
        textAlign: 'center',
        textTransform: 'none',
        transition: 'box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        width: 'auto',
        willChange: 'transform, opacity',
        zIndex: '0',
        marginTop: "20px"
      };
      
      buttonStyle[':hover'] = {
        background: '#F6F9FE',
        color: '#174ea6',
      };
     
      buttonStyle[':active'] = {
        boxShadow: '0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%)',
        outline: 'none',
      };
      
      buttonStyle[':focus'] = {
        outline: 'none',
        border: '2px solid #4285f4',
      };
      
      buttonStyle[':disabled'] = {
        boxShadow: 'rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px',
      };      



    function next() {
        setCurrentPage(currentPage + 1);
    }

    function previous() {
        setCurrentPage(currentPage - 1);
    }

    return (
        <div style={paginationStyle}>
            <button style={buttonStyle} onClick={previous} disabled={currentPage === 0}>Previous</button>
            <button style={buttonStyle} onClick={next}>Next</button>
        </div>
    );
}

export default Pagination;
