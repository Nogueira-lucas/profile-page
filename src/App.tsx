import './App.css';
import { MainContentComponent } from './components/main-content/MainContent';
import { HeaderComponent } from './components/header/Header';
import { AboutMeComponent } from './components/about/AboutMe';
import { SkillsComponent } from './components/skills/Skills'
import { WorthComponent } from './components/worth/worth';
import { ContactComponent } from './components/contact/Contact';
import { HireMeComponent } from './components/hireme/HireMe';
import { RootContainer } from './root-style';
import { FooterComponent } from './components/footer/Footer';

import 'animate.css';

function App() {
  return (
   <RootContainer>
     <div>
      <HeaderComponent></HeaderComponent>
      <MainContentComponent></MainContentComponent>
     </div>
     <AboutMeComponent></AboutMeComponent>
     <SkillsComponent></SkillsComponent>
     <WorthComponent></WorthComponent>
     <ContactComponent></ContactComponent>
     <HireMeComponent></HireMeComponent>
     <FooterComponent></FooterComponent>
   </RootContainer>
  );
}

export default App;
