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
} from '@chakra-ui/react'
import './isOpen.css'
import Img from "../../assets/test.jpg"



export default function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    
    return (
        <>
            <button onClick={onOpen} mw="100%"><i class="fa-regular fa-eye"></i></button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxWidth={2000} height={1000}>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h2>Amirbek</h2>
                        <div className='center'>
                            <img src={Img} className="chakra-img" />
                        </div>
                    </ModalBody>

                    {/* <ModalFooter>
              <Button  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}