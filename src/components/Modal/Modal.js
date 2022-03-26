import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '35%',
        left: '88%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'greenyellow'
    },
};
Modal.setAppElement('#root');
const Modals = ({ handleChooseBtn, isDisabled, raffleDraw }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'green';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={() => handleChooseBtn(openModal)} disabled={isDisabled} id='choose-for-me' className='choose-btn'>CHOSSE 1 FOR ME</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>You Can buy this items</h2>
                <div className='cart'>
                    <img src={raffleDraw.img} alt="product" />
                    <h4>{raffleDraw.name}</h4>
                </div>

            </Modal>

        </div>
    );
};

export default Modals;