import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useList } from '../../hooks/ListContext';
import { RxPencil1 } from 'react-icons/rx';
import { ContainerForm } from './styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: '90%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  padding: '20px'
};

const BasicModal = ({item}) => {
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState(item.task);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {list , setList, updateLocalStorage } = useList()

  function handleSubmit(e){
    e.preventDefault()
    changeTask(item.id)
  }

  async function changeTask (id) {
    if(newTask) {
      const newList = list.map(item => (
        id === item.id ? {...item, task: newTask} : item
      ))
      setList(newList)
      await updateLocalStorage(newList)
      handleClose()
    } else {
      alert("add task is required")
    }
  }
  
  return (
    <div>
      <Button onClick={handleOpen} className="change"><RxPencil1 /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change Task
          </Typography>
          <ContainerForm onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button type='submit'>change</button>
          </ContainerForm>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal