import PageWrapper from '../components/page-wrapper/page-wrapper.comp';
import PhaseHeader from '../components/phase-header/phase-header.comp';
import { StyledHomePage } from '../styles/pages/home.styled';

export default function Home() {
  return (
    <PageWrapper title='My startup progress'>
      <StyledHomePage>
        <h1>My startup progress</h1>

        <PhaseHeader title='Foundation' progressNumber={1} isCompleted={true} />
      </StyledHomePage>
    </PageWrapper>
  );
}
