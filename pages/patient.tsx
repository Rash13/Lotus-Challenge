import Link from 'next/link';
import { Title } from '@mantine/core';
import { Container, MedplumProvider, PatientSummary} from '@medplum/react';
import { MockClient, HomerSimpson } from "@medplum/mock";
// import { Container, PatientSummary } from '@medplum/react';

export default function IndexPage(): JSX.Element {
  const medplum = new MockClient();

  return (
    <MedplumProvider medplum={medplum}>
    <Container mt="xl">
      <Title data-testid="page-title">Patient Screen</Title>
      <Link data-testid="page-link" href="/">Home Page</Link>
       {/*  patient summary screen */}
      <PatientSummary data-testid="patient-summary" patient={HomerSimpson} w={350} withBorder padding="lg" radius="md" mx="md" my="xl" shadow="xs" background="url(https://images.unsplash.com/photo-1535961652354-923cb08225a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwc21hbGx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60)"/>
    </Container>
    </MedplumProvider>
  );
};
