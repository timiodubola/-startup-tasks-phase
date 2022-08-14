import Head from 'next/head';
import { StyledPageWrapper } from './page-wrapper.styled';

const PageWrapper = ({ children, title, description, className }) => (
  <StyledPageWrapper className={className}>
    <Head>
      <title>{title ? title : 'Create next app'}</title>
      <meta
        name='description'
        content={`${description ? description : 'Create next app'}`}
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>{children}</main>
  </StyledPageWrapper>
);

export default PageWrapper;
