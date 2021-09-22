import { CurrentLocation, ManualLocation } from "./location";
import { DepartmentList } from "./department-list";
import { Row, Col, Divider, Typography } from 'antd';
const { Text } = Typography;



const LocationPage = ()=> {

    return (
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                    <Text>
                        Where did this happen <Text type="danger">*</Text>
                    </Text>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                    <DepartmentList />
                </Col>
            </Row>
            {/* <Divider orientation="left"></Divider> */}
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                    <CurrentLocation />
                </Col>
            </Row>
    
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                    <ManualLocation />  
                </Col>
            </Row>
        </>
    )
    




}

export default LocationPage;