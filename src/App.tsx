import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Preloader } from '@/components/Preloader';
import { usePageLoad } from '@/hooks/usePageLoad';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { EpisodesPage } from '@/pages/EpisodesPage';
import { ContentPage } from '@/pages/ContentPage';
import { CommunityPage } from '@/pages/CommunityPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const { showOverlay, setShowOverlay } = usePageLoad();

  return (
    <BrowserRouter>
      {showOverlay && <Preloader onComplete={() => setShowOverlay(false)} />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
