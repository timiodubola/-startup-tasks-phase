import Checkbox from '../components/checkbox/checkbox.comp';
import PageWrapper from '../components/page-wrapper/page-wrapper.comp';
import PhaseHeader from '../components/phase-header/phase-header.comp';
import { useHome } from '../hooks/useHome';
import { StyledHomePage } from '../styles/pages/home.styled';

export default function Home() {
  const { data, handleChange, randomFact, loading } = useHome();

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <PageWrapper title='My startup progress'>
      <StyledHomePage>
        <h1>My startup progress</h1>

        <ul className='phases'>
          {data.startUpPhases.map((phase, index) => {
            const taskDisable =
              index === 0 ? false : !data.startUpPhases[index - 1].isCompleted;

            return (
              <li key={phase.id}>
                <PhaseHeader
                  title={phase.title}
                  phaseNumber={index + 1}
                  isCompleted={phase.isCompleted}
                />

                {phase.tasks.map((task) => {
                  return (
                    <Checkbox
                      key={task.id}
                      label={task.label}
                      isChecked={task.isChecked}
                      disabled={taskDisable}
                      name='name'
                      value='value'
                      onChange={(e) => {
                        handleChange(e.target.checked, phase.id, task.id);
                      }}
                    />
                  );
                })}
              </li>
            );
          })}
        </ul>
      </StyledHomePage>
    </PageWrapper>
  );
}
