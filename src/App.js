import './App.less';
import LocationPage from './component/LocationPage';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Content>  
          <LocationPage />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
