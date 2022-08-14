import CheckIcon from '../check-icon/check-icon.comp';
import { StyledPhaseHeader } from './phase-header.styled';

const PhaseHeader = ({ title, className, phaseNumber, isCompleted }) => (
  <StyledPhaseHeader className={className}>
    <div className='number-title'>
      <span className='phase-number'>{phaseNumber}</span>
      <h2>{title}</h2>
    </div>

    {isCompleted && <CheckIcon />}
  </StyledPhaseHeader>
);

export default PhaseHeader;
