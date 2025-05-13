import React from 'react'
import closeIcon from '../../assets/image/cross.svg'
const PdfModal = ({ pdfUrl, onClose }) => {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button onClick={onClose} style={styles.closeBtn}>
                    <img src={closeIcon} alt="" style={styles.closeicon} />
                </button>
                <iframe
                    src={pdfUrl}
                    style={styles.iframe}
                    title="PDF Viewer"
                ></iframe>
            </div>
        </div>)
}



const styles = {
    overlay: {
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.37)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
    },
    modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        width: "80%",
        height: "80%",
        position: "relative"
    },
    closeBtn: {
        position: "absolute",
        top: 20,
        right: 20,
        fontSize: "10px",
        width: "80px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "red",
    },
    closeicon: {
        width: "40px",
    },
    iframe: {
        width: "100%",
        height: "100%",
        border: "none"
    }
};


export default PdfModal