"use client";

import BookList from "@/components/BookList";
import Filters from "@/components/Filters";
import Layout from "@/components/Layout";
import { BookProvider } from "@/context/BookContext";
import { FormProvider, useForm } from "react-hook-form";

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
