// import { createMocks, RequestMethod } from 'node-mocks-http';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import page from '../pages/index';

import IndexPage from "../pages";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";


describe('/pages/', () => {
  // test.todo('Page renders');
  // test.todo('Link to patient present');

  test('Page renders', async()=>{
    render(<IndexPage/>);
    await waitFor(()=>{
      screen.getByTestId("index-page-title")
    })
  })

  test("Link to patient present", async () => {
    render(<IndexPage />);

    fireEvent.click(screen.getByTestId("page-link"));
  });

  

});
