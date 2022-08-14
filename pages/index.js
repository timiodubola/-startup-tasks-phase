import Checkbox from '../components/checkbox/checkbox.comp';
import PageWrapper from '../components/page-wrapper/page-wrapper.comp';
import PhaseHeader from '../components/phase-header/phase-header.comp';
import { StyledHomePage } from '../styles/pages/home.styled';

export default function Home() {
  const handleChange = (e) => {
    console.log(e.target.checked);
  };
  return (
    <PageWrapper title='My startup progress'>
      <StyledHomePage>
        <h1>My startup progress</h1>

        <PhaseHeader title='Foundation' progressNumber={1} isCompleted={true} />
        <Checkbox
          label='Setup virtual office'
          isChecked={true}
          name='name'
          value='value'
          onChange={handleChange}
        />
      </StyledHomePage>
    </PageWrapper>
  );
}
