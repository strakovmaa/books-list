"use client";

import { FormProvider, useForm } from "react-hook-form";
import BookList from "../components/BookList";
import Filters from "../components/Filters";
import Layout from "../components/Layout";
import { BookProvider } from "../context/BookContext";

export default function Home() {
  const methods = useForm();

  return (
    <Layout>
      <FormProvider {...methods}>
        <BookProvider>
          <Filters />
          <BookList />
        </BookProvider>
      </FormProvider>
    </Layout>
  );
}
