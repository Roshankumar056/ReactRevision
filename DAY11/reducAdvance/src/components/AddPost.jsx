import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddPost } from '../store/actions/postActions'


function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setData]=useState({title:"",body:""})

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
    const dispatch=useDispatch()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='First name'
              onChange={(e)=>setData({...data,title:e.target.value})} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              <Input placeholder='Last name'
              onChange={(e)=>setData({...data,body:e.target.value})} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>dispatch(AddPost(data))
            }>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default InitialFocus