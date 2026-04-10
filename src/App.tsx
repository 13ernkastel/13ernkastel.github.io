import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Research,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

type Page = "home" | "cve";

function getPageFromHash(): Page {
    return window.location.hash === "#/cve" ? "cve" : "home";
}

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [page, setPage] = useState<Page>(() => getPageFromHash());

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        const handleHashChange = () => {
            setPage(getPageFromHash());
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        };

        window.addEventListener('hashchange', handleHashChange);

        if (!window.location.hash) {
            window.location.hash = '#/';
        } else {
            handleHashChange();
        }

        return () => window.removeEventListener('hashchange', handleHashChange);
      }, []);

    const navigateToPage = (nextPage: Page) => {
        const nextHash = nextPage === 'cve' ? '#/cve' : '#/';

        if (window.location.hash !== nextHash) {
            window.location.hash = nextHash;
            return;
        }

        setPage(nextPage);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange} page={page} navigateToPage={navigateToPage}/>
        {page === 'home' ? (
            <FadeIn key="home" transitionDuration={700}>
                <Main onNavigateToCve={() => navigateToPage('cve')}/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
            </FadeIn>
        ) : (
            <FadeIn key="cve" transitionDuration={700}>
                <Research onNavigateHome={() => navigateToPage('home')}/>
            </FadeIn>
        )}
        <Footer />
    </div>
    );
}

export default App;
