import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './TicInstructions.css';
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TicInstructions() {

    const navigate = useNavigate();

    const navigateHome = async () => {
        navigate("/home")
    }

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        navigateHome()
    }
    return (
        <>
        <body className='modal-body'>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal-box' sx={style}>
                    <Typography className='modal-title' id="modal-modal-title" variant="h4" component="h2">
                        How to Play
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Two players take turns marking spaces on a 3x3 grid.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        First player to get three in a row wins.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                         Game is tied if all spaces are filled and no player has three in a row.
                    </Typography>
                </Box>
            </Modal>
        </body>
        </>
    );
}