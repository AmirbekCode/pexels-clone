import { useState, useEffect} from 'react';
import Categories from '../../components/Categories/Categories'
import HomeLayout from '../../Layout/HomeLayout'
import { Select } from '@chakra-ui/react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios, { Axios } from 'axios';
import Img from '../../assets/test.jpg'
import './home.css'
import { Button } from '@chakra-ui/react';
import BasicUsage from '../ImgOpen/IsOpen';
export default function Home({onOpen}) {

    const [data , setData ] = useState([])
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => setData(response.data))
    console.log(data);
    },[])

    return (






        <Container fluid="md" >
            <Row>
                <Col>
                    <div className='Home'>
                        <HomeLayout />
                        <div className="ImgContent">
                            <div className="titile-section">
                                <h4>Free Stock Photos</h4>
                                <Select placeholder='Trending' maxW="200px">
                                    <option value='option1'>New</option>
                                    <option value='option2'>Follow</option>
                                </Select>
                            </div>
                            <div className='grid'>
                                <div className="Img-Box">
                                    <img src={Img} className="grid_img"/>
                                        <div className="save-icons">
                                            <i class="fa-regular fa-bookmark"></i>
                                            <i class="fa-regular fa-heart"></i>                                           
                                        </div>
                                        <div className="info-down">
                                            <p className="author">Selene Gomez</p>
                                        <i class="fa-solid fa-download"></i>
                                        <div className='zindex'></div>
                                        <BasicUsage/>
                                        </div> 
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                                <div>
                                <img src={Img} className="grid_img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}