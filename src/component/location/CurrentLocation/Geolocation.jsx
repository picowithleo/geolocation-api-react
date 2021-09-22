import React, { useState, useEffect, } from "react";
import { Button, Space, Typography } from "antd";
import { CompassTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const { Text } = Typography;

const StyledCurrentLocationBtn = styled.div`
    margin: 50px 0px 30px 0px;
`



const Geolocation = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [status, setStatus] = useState('');
  

    //Button loading state
    // const simulateNetworkRequest= () => {
    //     return new Promise((resolve) => setTimeout(resolve, 2000));
    //   }
    
    
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    // if (isLoading) {
    //     simulateNetworkRequest().then(() => {
    //     setLoading(false);
    //     });
    // }
    // }, [isLoading]);

    // const handleClick = () => getCurrentLocation;


    //ant design 
    // const [ loadings ] = useState('');
    
    // const enterLoading = (index) => {
    //     this.setState(({ loadings }) => {
    //       const newLoadings = [...loadings];
    //       newLoadings[index] = true;
    
    //       return {
    //         loadings: newLoadings
    //       };
    //     });
    //     setTimeout(() => {
    //       this.setState(({ loadings }) => {
    //         const newLoadings = [...loadings];
    //         newLoadings[index] = false;
    
    //         return {
    //           loadings: newLoadings
    //         };
    //       });
    //     }, 6000);
    //   };
    
      
      
    
    const getCurrentLocation = () => {
        if(!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {

            // simulateNetworkRequest().then(() => {
                setStatus("Locating...");
                navigator.geolocation.getCurrentPosition((position) => {
                    setStatus('');
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    console.log(position);
                }, ()=> {
                    setStatus('Unable to retrieve your location');
            },
                { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
            )
            // }
            // );
        };
    };

    return (
        //bootstrap
        // <Container className="Geolocation">
        //     <Row>
        //         <Col>
        //             <Button 
        //                 variant="primary"
        //                 size="lg"
        //                 disable={status}
        //                 onClick={getCurrentLocation}>  
        //                 Use Current Location                  
        //             </Button>
                    
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Button
        //             variant="primary"
        //             size="lg"
        //             disabled={isLoading}
        //             onClick={!isLoading ? handleClick  : null}
        //         >
        //             {isLoading ? status : 'Use Current Location'}
        //         </Button>
        //     </Row>
        //     <Row>
        //         <Col><h1>Coordinates</h1></Col>
        //         <Col> <p>{status}</p></Col>
        //         <Col> {latitude && <p>Latitude: {latitude}</p>}</Col>
        //         <Col>{longitude && <p>Latitude: {longitude}</p>}</Col>
        //     </Row>
        // </Container>

        //ant design
        <StyledCurrentLocationBtn>
         <Space direction="vertical">
            <Button 
                type="primary"
                value="large"
                icon={<CompassTwoTone />}
                // loading={loadings[0]}
                // onClick={() => this.enterLoading(0)}
                onClick={getCurrentLocation}
                >
                    Use Current Location
            </Button>
            {/* <h1>Coordinates</h1> */}
            <Text type="success">
                <p>{status}</p>
                {latitude && <p>Latitude: {latitude}</p>}
                {longitude && <p>Longitude: {longitude}</p>}
            </Text>
         </Space>
        </StyledCurrentLocationBtn>



        // <div className="Geolocation">
        //     <button onClick={getCurrentLocation}>Use Current Location</button>
        //     <h1>Coordinates</h1>
        //     <p>{status}</p>
        //     {latitude && <p>Latitude: {latitude}</p>}
        //     {longitude && <p>Latitude: {longitude}</p>}
        // </div>
    );

};


export default Geolocation;
