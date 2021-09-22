import { Select } from "antd";
import { Space, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;
const { Option } = Select;



const StyledList = styled.div`
    margin: 30px 0px 50px 0px;
`


//for demo

// function handleChange(value) {
//     console.log(`selected ${value}`);
//   }
const handleChange = (value)=> {
    console.log(`selected ${value}`);
  }

// const SearchPanel =({param, setParam, department}) =>{
// for demo
const SearchPanel =() =>{
    return (
        <StyledList>
        <Space align="baseline" direction="horizontal">
            <Text>
                Department:
            </Text>
            <Select 
                defaultValue="Zoetis" 
                // defaultValue={param.department_id}
                style={{ width: 120 }} 
                onChange={handleChange}
                allowClear
                // onChange={(value) =>{
                //     setParam({
                //         ...param,
                //         department_id: value
                //     })
                // }}
            >
                {/* after back-end department data finish. */}
                {/* <Option value="">Department</Option>
                {departments.map((department) => (
                    <Option value={department.id} key={department.id}>
                        {department.name}
                    </Option>
                    ))
                } */}

                {/* for demo */}
                <Option value="Zoetis">Zoetis</Option>
                <Option value="FillFinish">FillFinish</Option>
                <Option value="Bio21">Bio21</Option>
                <Option value="Seqirus">Seqirus</Option>

            </Select>
        </Space>
        </StyledList>
    )
}

export default SearchPanel;