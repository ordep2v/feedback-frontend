import Home from './modules/home';
import Container from './shared-components/ui/container';
import Footer from './shared-components/ui/footer';
import Header from './shared-components/ui/header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
};

export default App;
