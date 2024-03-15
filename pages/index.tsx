import Link from 'next/link';
import { Title } from '@mantine/core';
import { Container } from '@medplum/react';

export default function IndexPage(): JSX.Element {

  return (
    <Container mt="xl">
      <Title data-testid='index-page-title'>Welcome to Lotus AI</Title>
      <Link data-testid='page-link' href="/patient">Patient Summary</Link>
    </Container>
  );
};
