import logo from './logo.svg';
import './App.css';
import {Button} from "@chakra-ui/react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,

} from '@chakra-ui/react'

let breadcrums=["Home","India","maharashtra","pune..."]

function App() {
  return (
    <div className="App">
      <Button colorScheme='teal' size='xs'>
        Button
      </Button>

      <Breadcrumb>
      {breadcrums.map((bedcrum)=>{
        return<BreadcrumbItem>
    <BreadcrumbLink href='#' _hover={{color:"red"}}>
   { bedcrum}
    </BreadcrumbLink>
  </BreadcrumbItem>

      })}
      </Breadcrumb>







      <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  backgroundColor={"tomato"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  );
}

export default App;
