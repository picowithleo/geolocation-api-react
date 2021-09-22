import React from "react";
import { Input, Space } from 'antd';
import styled from "styled-components";

const StyledMaunalInput = styled.div`
    margin: 0px 0px 30px 0px;
`

const ManualInput = () => {
 
  const Props = {
    style: {
      width: '100%',
    },
    placeholder: 'Detailed Location Manual Input',
  };
  return (
    <StyledMaunalInput>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        {<Input.TextArea {...Props} />}
      </Space>
    </StyledMaunalInput>
  );
};

export default ManualInput;