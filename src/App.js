import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about-us';
import AppServices from './components/services';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppFooter from './components/footer';
function App() {
  return (
    <div className="App">
    <header>
    <AppHeader/>
    </header>
    <main>
    <AppHero/>
    <AppAbout/>
    <AppServices/>
    <AppTestimonials/>
    <AppBlog/>
    </main>
    <footer>
      <AppFooter/>
    </footer>
    </div>
  );
}

export default App;
